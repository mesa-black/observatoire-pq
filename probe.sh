#!/bin/sh
# Measures one host, prints one JSON line. Runs inside the probe image
# (OpenSSL >= 3.5: LibreSSL and older OpenSSL do not know ML-KEM, and would
# report every server as classical — the probe would then measure the client).
#
#   pq        the server accepts X25519MLKEM768 when it is the only group offered:
#             full, partial (some of five connections) or none
#   group     what a current client (OpenSSL 3.5 defaults) ends up negotiating
#   front     who answers the TLS: a CDN's edge is not the organisation's own
#             server, and says nothing about what happens behind it
#   protocols which TLS versions the door still opens with
#   groups    every key exchange it accepts when offered alone, hybrid and classical
#   cert      what authenticates the door: key, signature, issuer, lifetime
#   net       who announces the address (AS, country), from Team Cymru's DNS
#   (the price of the hybrid is measured apart, by cost.sh: timings taken while
#   twelve probes share the line are worth nothing)
set -u
host="$1"
t=8

# Resolved once, by the system resolver: OpenSSL's own lookup fails on some
# names inside the image (www.fortuneo.fr) that curl and getent resolve fine.
ip=$(getent ahostsv4 "$host" | head -1 | cut -d' ' -f1)
target=${ip:-$host}

# A fleet behind one name is not always migrated in one go (www.lcl.fr answered
# hybrid on one connection and classical on the next): five tries, and the
# count is the measure.
tries=5
hits=0
i=0
while [ $i -lt $tries ]; do
    echo | timeout $t openssl s_client -connect "$target:443" -servername "$host" \
        -tls1_3 -groups X25519MLKEM768 2>&1 | grep -q 'Negotiated TLS1.3 group: X25519MLKEM768' \
        && hits=$((hits + 1))
    i=$((i + 1))
done
default_out=$(echo | timeout $t openssl s_client -connect "$target:443" -servername "$host" 2>&1)

group=$(printf '%s' "$default_out" | sed -n 's/.*Negotiated TLS1\.3 group: *\([^ ]*\).*/\1/p' | head -1)
# "ECDH, prime256v1, 256 bits" names a family first; "X25519, 253 bits" names the
# group first. The group is what matters, never the size.
if [ -z "$group" ]; then
    temp=$(printf '%s' "$default_out" | sed -n 's/.*Temp Key: *//p' | head -1)
    first=$(printf '%s' "$temp" | cut -d, -f1 | tr -d ' ')
    case "$first" in
        ECDH|ECDHE) group=$(printf '%s' "$temp" | cut -d, -f2 | tr -d ' ') ;;
        # Finite-field DH only gives a size: name the RFC 7919 group it implies.
        DH) group=ffdhe$(printf '%s' "$temp" | cut -d, -f2 | tr -dc '0-9') ;;
        *) group=$first ;;
    esac
fi
protocol=$(printf '%s' "$default_out" | sed -n 's/.*Protocol *: *\([^ ]*\).*/\1/p; s/^New, \(TLSv[0-9.]*\),.*/\1/p' | head -1)

if [ $hits -eq $tries ]; then pq=full
elif [ $hits -gt 0 ]; then pq=partial
else pq=none
fi

reachable=true
printf '%s' "$default_out" | grep -q 'CONNECTED' || reachable=false
cipher=$(printf '%s' "$default_out" | sed -n 's/^New, [^,]*, Cipher is //p' | head -1)

# One connection per version; 1.0 and 1.1 need the client's floor lowered to be
# offered at all.
protocols='[]'
for v in tls1 tls1_1 tls1_2 tls1_3; do
    echo | timeout $t openssl s_client -connect "$target:443" -servername "$host" -$v \
        -cipher 'DEFAULT:@SECLEVEL=0' 2>&1 | grep -q '^New, TLS' \
        && protocols=$(printf '%s' "$protocols" | jq -c --arg v "$v" '. + [$v]')
done

# Only one group offered: a completed handshake can only have used it (OpenSSL
# names classical groups differently, prime256v1 for secp256r1, so no grep on it).
groups='[]'
for g in X25519MLKEM768 SecP256r1MLKEM768 SecP384r1MLKEM1024 MLKEM768 MLKEM1024 X25519 secp256r1 secp384r1; do
    echo | timeout $t openssl s_client -connect "$target:443" -servername "$host" \
        -tls1_3 -groups "$g" 2>&1 | grep -q '^New, TLSv1.3' \
        && groups=$(printf '%s' "$groups" | jq -c --arg g "$g" '. + [$g]')
done

cert='{}'
pem=$(echo | timeout $t openssl s_client -connect "$target:443" -servername "$host" 2>/dev/null | openssl x509 2>/dev/null)
if [ -n "$pem" ]; then
    text=$(printf '%s\n' "$pem" | openssl x509 -noout -text)
    key=$(printf '%s' "$text" | sed -n 's/^ *Public Key Algorithm: *//p' | head -1)
    bits=$(printf '%s' "$text" | sed -n 's/^ *Public-Key: *(\([0-9]*\) bit)/\1/p' | head -1)
    curve=$(printf '%s' "$text" | sed -n 's/^ *NIST CURVE: *//p' | head -1)
    sig=$(printf '%s' "$text" | sed -n 's/^ *Signature Algorithm: *//p' | head -1)
    issuer=$(printf '%s\n' "$pem" | openssl x509 -noout -issuer -nameopt multiline | sed -n 's/^ *organizationName *= *//p' | head -1)
    from=$(date -u -d "$(printf '%s\n' "$pem" | openssl x509 -noout -startdate | cut -d= -f2)" +%Y-%m-%d)
    until=$(date -u -d "$(printf '%s\n' "$pem" | openssl x509 -noout -enddate | cut -d= -f2)" +%Y-%m-%d)
    names=$(printf '%s' "$text" | grep -o 'DNS:' | wc -l)
    cert=$(jq -cn --arg key "$key" --arg bits "$bits" --arg curve "$curve" --arg sig "$sig" --arg issuer "$issuer" \
        --arg from "$from" --arg until "$until" --argjson names "$names" \
        '{key:$key, bits:($bits|tonumber? // null), curve:$curve, sig:$sig, issuer:$issuer, from:$from, until:$until, names:$names}')
fi

# "13335 | 1.1.1.0/24 | AU | apnic | 2011-08-11", then the AS's own name.
net='{}'
if [ -n "$ip" ]; then
    rev=$(printf '%s' "$ip" | awk -F. '{print $4"."$3"."$2"."$1}')
    origin=$(dig +short +time=3 TXT "$rev.origin.asn.cymru.com" | head -1 | tr -d '"')
    asn=$(printf '%s' "$origin" | cut -d'|' -f1 | tr -d ' ' | cut -d' ' -f1)
    cc=$(printf '%s' "$origin" | cut -d'|' -f3 | tr -d ' ')
    asname=''
    [ -n "$asn" ] && asname=$(dig +short +time=3 TXT "AS$asn.asn.cymru.com" | head -1 | tr -d '"' | cut -d'|' -f5 | sed 's/^ *//')
    net=$(jq -cn --arg ip "$ip" --arg asn "$asn" --arg cc "$cc" --arg asname "$asname" '{ip:$ip, asn:$asn, cc:$cc, as:$asname}')
fi

headers=$(curl -sI --max-time $t "https://$host/" 2>/dev/null | tr -d '\r' | tr 'A-Z' 'a-z')
front=other
case "$headers" in
    *cf-ray:*|*"server: cloudflare"*) front=cloudflare ;;
    *x-amz-cf-id:*|*"via:"*cloudfront*) front=cloudfront ;;
    *akamai*|*x-akamai*) front=akamai ;;
    *x-azure-ref:*) front=azure ;;
    *"x-served-by: cache-"*|*fastly*) front=fastly ;;
    *"server: gws"*|*"via: 1.1 google"*) front=google ;;
    *x-iinfo:*|*incap_ses*|*x-cdn:\ imperva*) front=imperva ;;
esac
server=$(printf '%s\n' "$headers" | sed -n 's/^server: *//p' | head -1)
hsts=$(printf '%s\n' "$headers" | sed -n 's/^strict-transport-security: *//p' | head -1)

jq -cn --arg host "$host" --arg pq "$pq" --argjson hits $hits --argjson tries $tries --arg group "$group" --arg protocol "$protocol" \
    --arg front "$front" --arg server "$server" --argjson reachable "$reachable" \
    --arg cipher "$cipher" --argjson protocols "$protocols" --argjson groups "$groups" \
    --argjson cert "$cert" --argjson net "$net" --arg hsts "$hsts" \
    --arg at "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
    '{host:$host, reachable:$reachable, pq:$pq, hits:$hits, tries:$tries, group:$group, protocol:$protocol, cipher:$cipher,
      protocols:$protocols, groups:$groups, cert:$cert, net:$net, hsts:$hsts, front:$front, server:$server, at:$at}'
