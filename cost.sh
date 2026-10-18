#!/bin/sh
# The price of the hybrid on one server, alone on the line: run it one host at a
# time (xargs -P 1), never next to the probes.
#
#   handshake = time_appconnect - time_connect, so the network round trip is
#   reported apart (rtt). Ten of each, interleaved, so a slow second weighs on
#   both alike. The minimum is the figure: queues and retransmissions only ever
#   add time, so the fastest try is the closest to what the handshake costs.
set -u
host="$1"
ip=$(getent ahostsv4 "$host" | head -1 | cut -d' ' -f1)
[ -n "$ip" ] || { jq -cn --arg host "$host" '{host:$host, cost:null}'; exit 0; }
out=$(i=0; while [ $i -lt 10 ]; do
    for c in X25519MLKEM768 X25519; do
        curl -so /dev/null --max-time 8 --resolve "$host:443:$ip" --curves $c \
            -w "$c %{time_connect} %{time_appconnect}\n" "https://$host/" 2>/dev/null
    done
    i=$((i + 1))
done)
printf '%s\n' "$out" | awk '$3 > 0 { print $1, ($3 - $2) * 1000, $2 * 1000 }' | jq -Rsc --arg host "$host" '
    def r: . * 10 | round / 10;
    def median: sort | .[(length / 2 | floor)];
    split("\n") | map(select(length > 0) | split(" ") | [.[0], (.[1] | tonumber), (.[2] | tonumber)]) as $t
    | [$t[] | select(.[0] == "X25519MLKEM768") | .[1]] as $h
    | [$t[] | select(.[0] == "X25519") | .[1]] as $c
    | {host: $host,
       cost: (if ($h | length) < 5 or ($c | length) < 5 then null else
           {hybrid: ($h | min | r), classical: ($c | min | r),
            hybrid_median: ($h | median | r), classical_median: ($c | median | r),
            rtt: ([$t[] | .[2]] | min | r), n: [($h | length), ($c | length)]} end)}'
