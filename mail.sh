#!/bin/sh
# How an organisation's mail travels between servers, from public DNS and its
# MTA-STS policy. One host -> one line.
#
#   mx        the lowest-preference exchangers, and who runs them (from their names)
#   mtasts    the policy mode served at https://mta-sts.<domain>/: enforce makes
#             TLS mandatory for senders that honour it; testing or none does not
#   dane      TLSA records for the first MX (TLS pinned through DNSSEC)
#   dnssec    a DS record at the parent: the zone is signed
#   dmarc     the published policy (none, quarantine, reject)
#   spf       the final qualifier (-all, ~all, ?all)
#   starttls  the first MX over SMTP, offered X25519MLKEM768 alone: null when
#             port 25 cannot be reached from where the probe runs
set -u
host="$1"
apex=$(printf '%s' "$host" | awk -F. '{n=NF; d=$(n-1)"."$n; if ($(n-1) ~ /^(gouv|co|com)$/ && n>2) d=$(n-2)"."d; print d}')
# Every query goes to a validating public resolver (Quad9, then Cloudflare),
# over TCP: it follows delegations (mail.protection.outlook.com is a zone of
# its own), does not drop big answers as the probe VM's resolver did, and its
# "ad" flag says the answer was validated through DNSSEC.
reg() { printf '%s' "$1" | awk -F. '{n=NF; d=$(n-1)"."$n; if ($(n-1) ~ /^(gouv|co|com)$/ && n>2) d=$(n-2)"."d; print d}'; }
raw() {
    for r in 9.9.9.9 1.1.1.1; do
        out=$(dig +tcp +dnssec +time=5 +tries=3 @"$r" "$@" 2>/dev/null)
        printf '%s' "$out" | grep -q 'status: \(NOERROR\|NXDOMAIN\)' && { printf '%s' "$out"; return; }
    done
}
# The records of the answer, data only.
q() { raw "$@" | awk -v t="$1" '/^;; ANSWER SECTION:/{a=1; next} /^;;/{a=0} a && $4 == t {$1=$2=$3=$4=""; sub(/^ +/, ""); print}'; }
# Validated: the resolver set "ad" on an answer that has records of that type.
validated() { o=$(raw "$@"); printf '%s' "$o" | grep -q 'flags:[^;]* ad[ ;]' && printf '%s' "$o" | awk -v t="$1" '/^;; ANSWER SECTION:/{a=1; next} /^;;/{a=0} a && $4 == t {f=1} END {exit !f}'; }

mx_all=$(q MX "$apex" | sort -n)
best=$(printf '%s\n' "$mx_all" | awk 'NF==2 {print $1}' | head -1)
mx=$(printf '%s\n' "$mx_all" | awk -v b="$best" 'NF==2 && $1==b {sub(/\.$/, "", $2); print tolower($2)}' | sort -u)
first=$(printf '%s\n' "$mx" | head -1)
provider=other
case "$mx" in
    *mail.protection.outlook.com*) provider=microsoft ;;
    *google.com*|*googlemail.com*) provider=google ;;
    *pphosted.com*) provider=proofpoint ;;
    *mimecast.com*) provider=mimecast ;;
    *iphmx.com*) provider=cisco ;;
    *messagelabs.com*) provider=broadcom ;;
    *mail.ovh.net*|*ovh.net*) provider=ovhcloud ;;
    *gandi.net*) provider=gandi ;;
    *protonmail.ch*) provider=proton ;;
    *trendmicro*|*tmes.*) provider=trendmicro ;;
    *barracudanetworks.com*) provider=barracuda ;;
    *vadesecure.com*|*vade*) provider=vade ;;
    *orange-business*|*orange.com*|*orange.fr*) provider=orange ;;
    "") provider=none ;;
esac

sts_txt=$(q TXT "_mta-sts.$apex" | tr -d '"' | grep -i 'v=STSv1' | head -1)
mode=''
if [ -n "$sts_txt" ]; then
    mode=$(curl -s --max-time 10 "https://mta-sts.$apex/.well-known/mta-sts.txt" | tr -d '\r' | sed -n 's/^mode: *//p' | head -1)
    mode=${mode:-unreachable}
fi
tlsrpt=$(q TXT "_smtp._tls.$apex" | tr -d '"' | grep -ci 'v=TLSRPTv1')
# TLSA records only count when validated through DNSSEC: without it, no
# sender trusts them (diplomatie.gouv.fr publishes TLSA in an unsigned zone).
tlsa=0; dane=0
if [ -n "$first" ]; then
    tlsa=$(q TLSA "_25._tcp.$first" | grep -c .)
    [ "$tlsa" -gt 0 ] && validated TLSA "_25._tcp.$first" && dane=1
fi
ds=0; validated SOA "$apex" && ds=1
dmarc=$(q TXT "_dmarc.$apex" | tr -d '"' | tr 'A-Z' 'a-z' | sed -n 's/.*p=\([a-z]*\).*/\1/p' | head -1)
spf=$(q TXT "$apex" | tr -d '"' | tr 'A-Z' 'a-z' | grep '^v=spf1' | grep -oE '[-~?+]all' | head -1)

# Who announces the first exchanger's address (Team Cymru, as probe.sh does):
# what the name does not tell, the network does (own servers, a French host…).
net='{}'
mxip=$( [ -n "$first" ] && getent ahostsv4 "$first" | head -1 | cut -d' ' -f1 )
if [ -n "$mxip" ]; then
    rev=$(printf '%s' "$mxip" | awk -F. '{print $4"."$3"."$2"."$1}')
    asn=$(dig +short +time=3 TXT "$rev.origin.asn.cymru.com" | head -1 | tr -d '"' | cut -d'|' -f1 | tr -d ' ' | cut -d' ' -f1)
    asname=''
    [ -n "$asn" ] && asname=$(dig +short +time=3 TXT "AS$asn.asn.cymru.com" | head -1 | tr -d '"' | cut -d'|' -f5 | sed 's/^ *//')
    net=$(jq -cn --arg ip "$mxip" --arg asn "$asn" --arg as "$asname" '{ip:$ip, asn:$asn, as:$as}')
fi

starttls=null
if [ -n "$first" ]; then
    out=$(echo QUIT | timeout 12 openssl s_client -starttls smtp -connect "$first:25" -servername "$first" -groups X25519MLKEM768 2>&1)
    if printf '%s' "$out" | grep -q 'CONNECTED'; then
        if printf '%s' "$out" | grep -q 'Negotiated TLS1.3 group: X25519MLKEM768'; then starttls='"hybrid"'; else starttls='"classical"'; fi
    fi
fi

jq -cn --arg host "$host" --arg apex "$apex" --arg provider "$provider" --arg mode "$mode" --arg dmarc "$dmarc" --arg spf "$spf" \
    --argjson mx "$(printf '%s\n' "$mx" | jq -Rsc 'split("\n") | map(select(length > 0))')" \
    --argjson tlsrpt "${tlsrpt:-0}" --argjson dane "${dane:-0}" --argjson tlsa "${tlsa:-0}" --argjson ds "${ds:-0}" --argjson starttls "$starttls" --argjson net "$net" \
    '{host:$host, apex:$apex, mail:{mx:$mx, provider:$provider, mtasts:(if $mode == "" then null else $mode end), tlsrpt:($tlsrpt > 0),
      dane:($dane > 0), tlsa:($tlsa > 0), dnssec:($ds > 0), dmarc:(if $dmarc == "" then null else $dmarc end), spf:(if $spf == "" then null else $spf end), starttls:$starttls, net:$net}}'
