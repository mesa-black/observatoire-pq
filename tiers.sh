#!/bin/sh
# The third parties each home page loads, and whether their own connection is
# sealed. Relevé 6 on (Easter, « la chasse aux œufs »): one line per page that
# loads any, joined by build.sh under the key `tiers`.
#
#   jq -r '.scripts[]?' results/DATE.csp.jsonl | sort -u > results/DATE.tiers-hosts.txt
#   (probe them as the doors: probe.sh, one line each) > results/DATE.tiers-probe.jsonl
#   ./tiers.sh DATE > results/DATE.tiers.jsonl
#
# A third-party script is another TLS connection the reader's browser opens,
# to someone else's server, under someone else's key: the front door can be
# sealed and the page still load its tag manager in the classical exchange.
# Only what the served HTML names is seen (csp.sh): what a tag manager adds
# later is not, so every count here is a floor.
#
# A host listed by a page but missing from the probe stops the script: probe
# it, never count it as absent.
set -eu
cd "$(dirname "$0")"
date=${1:?usage: ./tiers.sh DATE}
# Domains of the same group under another name, checked by hand (tiers-maison.json).
out=$(jq -c -n --slurpfile p "results/$date.csp.jsonl" --slurpfile t "results/$date.tiers-probe.jsonl" --slurpfile m tiers-maison.json '
    # The registrable domain: two labels, three under suffixes like gouv.fr or
    # co.uk. A script from the domain of the page itself (its CDN subdomain, its
    # static host) is the site, not a third party.
    def apex: split(".") | if (.[-2:] | join(".")) as $s | ["gouv.fr", "co.uk", "com.au", "asso.fr"] | index($s) then .[-3:] else .[-2:] end | join(".");
    ($t | map({(.host): {pq: (if .reachable then .pq else null end), group: (.group // null), reachable}}) | add // {}) as $probe
    | $p[]
    | .host as $page
    | ([.host, ((.final // "") | sub("^https?://"; "") | split("/")[0])] | map(select(. != "") | apex)
        + ($m[0].pages[$page] // {} | keys)) as $own
    | {host, tiers: [(.scripts // [])[] | select(apex as $a | $own | index($a) | not) | . as $h | {host: $h} + ($probe[$h] // {missing: true})]}
    | select(.tiers | length > 0)')
missing=$(printf '%s\n' "$out" | jq -r '.tiers[] | select(.missing) | .host' | sort -u)
if [ -n "$missing" ]; then
    printf 'tiers.sh: third parties not probed, probe them first:\n%s\n' "$missing" >&2
    exit 1
fi
printf '%s\n' "$out"
