#!/bin/sh
# The hybrid test of mail.sh, alone, for where port 25 is open: one exchanger
# per line on stdin, one JSON line out. Needs OpenSSL 3.5 or later (ML-KEM).
#
#   hybrid     the exchanger accepts X25519MLKEM768 offered alone (STARTTLS)
#   default    the group negotiated when the client offers its defaults
#   protocol   the TLS version of that default handshake
#   reachable  false when port 25 did not answer within 12 s
while read -r mx; do
    [ -n "$mx" ] || continue
    pq=$(echo QUIT | timeout 12 openssl s_client -starttls smtp -connect "$mx:25" -servername "$mx" -groups X25519MLKEM768 2>&1)
    def=$(echo QUIT | timeout 12 openssl s_client -starttls smtp -connect "$mx:25" -servername "$mx" 2>&1)
    reach=false; printf '%s' "$def" | grep -q CONNECTED && reach=true
    hybrid=false; printf '%s' "$pq" | grep -q 'Negotiated TLS1.3 group: X25519MLKEM768' && hybrid=true
    group=$(printf '%s' "$def" | sed -n 's/.*Negotiated TLS1\.3 group: *\([^ ]*\).*/\1/p' | head -1)
    [ -n "$group" ] || group=$(printf '%s' "$def" | sed -n 's/.*Temp Key: *\([^,]*\), *\([^,]*\).*/\1 \2/p' | head -1)
    proto=$(printf '%s' "$def" | sed -n 's/^New, \(TLSv[0-9.]*\),.*/\1/p' | head -1)
    printf '{"mx":"%s","reachable":%s,"hybrid":%s,"default":"%s","protocol":"%s","at":"%s"}\n' "$mx" "$reach" "$hybrid" "$group" "$proto" "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
done
