#!/bin/sh
# Who holds the key of each front door, and what that door did at the previous
# measurement. Relevé 4 on: one line per reachable host, joined by build.sh
# under the key `cle`.
#
#   ./cle.sh DATE PREVIOUS > results/DATE.cle.jsonl
#
# The holder is the network that answers the TLS connection — its AS, read by
# probe.sh — classified by holders.json. Not the headers: they pass through
# intermediaries and can name a CDN further back. Amazon is the one AS where
# the header decides, CloudFront (a CDN) against a plain AWS load balancer.
#
# An AS missing from holders.json stops the script with the list: classify it
# by hand, never guess — a wrong « réseau propre » is a claim about somebody.
set -eu
cd "$(dirname "$0")"
date=${1:?usage: ./cle.sh DATE PREVIOUS}
prev=${2:?usage: ./cle.sh DATE PREVIOUS}
# The previous state keeps what can be compared door by door: the verdict, the
# holder, the TLS versions, the certificate, HSTS, and the home page's policy
# (csp.sh, when that day has one, with the HTTP status it got). Not the
# handshake's cost: milliseconds that move between two runs would read as
# changes everywhere.
oldcsp=results/$prev.csp.jsonl; [ -f "$oldcsp" ] || oldcsp=/dev/null
out=$(jq -c -n --slurpfile h holders.json \
          --slurpfile cur "results/$date.jsonl" \
          --slurpfile old "results/$prev.jsonl" \
          --slurpfile oldp "$oldcsp" \
          --arg prev "$prev" '
    def holder($r): ($r.net.asn // "") as $a
        | ($h[0].by_header[$a][$r.front // ""] // $h[0].asn[$a] // null);
    ($old | map({(.host): .}) | add // {}) as $before
    | ($oldp | map({(.host): {code, csp: ((.csp // "") != "" or (.meta_csp // "") != ""), scripts: ((.scripts // []) | length)}}) | add // {}) as $page
    | $cur[] | select(.reachable) | . as $r | holder($r) as $x
    | {host,
       cle: ((if $x then ($x | {kind, name, country}) else {kind: null, as: $r.net.as} end)
          + {asn: $r.net.asn,
             prev: ($before[$r.host] // null
                 | if . == null then null
                   elif .reachable | not then {date: $prev, reachable: false}
                   else holder(.) as $y | {date: $prev, pq, name: ($y.name // null), kind: ($y.kind // null),
                        protocols, hsts, cert: (.cert // null | if . then {key, bits, curve, sig, issuer} else null end),
                        page: ($page[.host] // null)} end)})}')
unknown=$(printf '%s\n' "$out" | jq -r 'select(.cle.kind == null) | "  AS\(.cle.asn) \(.cle.as // "?") — \(.host)"')
if [ -n "$unknown" ]; then
    printf 'cle.sh: networks missing from holders.json, classify them by hand:\n%s\n' "$unknown" >&2
    exit 1
fi
printf '%s\n' "$out"
