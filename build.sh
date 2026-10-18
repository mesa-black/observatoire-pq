#!/bin/sh
# Joins the list and one measurement into the page's data. No server, no
# fetch: the page opens from disk and every figure in it comes from here.
set -eu
cd "$(dirname "$0")"
date=${1:-$(ls results/*.jsonl | grep -v 'self\|cost\|csp\|\.ai\.\|\.hf\.\|\.mail\.' | sort | tail -1 | xargs basename | cut -d. -f1)}
mkdir -p site
# A relevé keeps the list it was measured against: the list moves on (relevé 2
# added the AI group), an old relevé must not grow plaques it never measured.
domains=results/$date.domains.json; [ -f "$domains" ] || domains=domains.json
# What the relevé is about (number, title): optional, one file per relevé.
# A variant (./build.sh DATE r3) is another relevé drafted on the same day's
# measurements: its own meta, its own output, never the page's data.js.
variant=${2:-}
meta=results/$date${variant:+.$variant}.meta.json; [ -f "$meta" ] || meta=/dev/null
out=site/data-$date${variant:+-$variant}.js
# cost.sh takes ~20 min, one host at a time: a page can be previewed before it
# is done. Only complete lines are taken, and missing figures stay missing.
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT
# ai.sh (relevé 2 on): which AI providers each organisation opened a door to.
# mail.sh (relevé 3 on): how the organisation's mail travels.
[ -f "results/$date.mail.jsonl" ] && grep '}$' "results/$date.mail.jsonl" > "$tmp/mail" || : > "$tmp/mail"
# mail-starttls.sh, run from the server (port 25): the exchangers' TLS, by name.
[ -f "results/$date.mailtls.jsonl" ] && grep '}$' "results/$date.mailtls.jsonl" > "$tmp/mailtls" || : > "$tmp/mailtls"
[ -f "results/$date.ai.jsonl" ] && cp "results/$date.ai.jsonl" "$tmp/ai" || : > "$tmp/ai"
# hf.sh: what each one publishes on Hugging Face (verified accounts only).
[ -f "results/$date.hf.jsonl" ] && grep '}$' "results/$date.hf.jsonl" > "$tmp/hf" || : > "$tmp/hf"
for f in cost self.cost; do
    if [ -f "results/$date.$f.jsonl" ]; then grep '}$' "results/$date.$f.jsonl" > "$tmp/$f" || true; else : > "$tmp/$f"; fi
done
{
    printf 'window.OBSERVATOIRE = '
    jq -n --slurpfile d "$domains" \
          --slurpfile m "$meta" \
          --slurpfile r "results/$date.jsonl" \
          --slurpfile self "results/$date.self.jsonl" \
          --slurpfile c "$tmp/cost" \
          --slurpfile sc "$tmp/self.cost" \
          --slurpfile p "results/$date.csp.jsonl" \
          --slurpfile ai "$tmp/ai" \
          --slurpfile hf "$tmp/hf" \
          --slurpfile mail "$tmp/mail" \
          --slurpfile mailtls "$tmp/mailtls" \
          --slurpfile sp "results/$date.self.csp.jsonl" \
          --arg date "$date" '
        # cost.sh runs apart, one host at a time: its figures join here.
        ($c | map({(.host): {cost}}) | add // {}) as $cost
        # csp.sh too: what the home page lets run, kept under its own key.
        | ($p | map({(.host): {page: (. | del(.host))}}) | add) as $page
        | ($ai | map({(.host): {ai}}) | add // {}) as $aiBy
        | ($hf | map({(.host): {hf}}) | add // {}) as $hfBy
        | ($mail | map({(.host): {mail}}) | add // {}) as $mailBy
        | ($mailtls | map({(.mx): (. | del(.mx))}) | add // {}) as $tlsBy
        | ($r | map({(.host): (. + ($cost[.host] // {cost: null}) + ($page[.host] // {page: null}) + ($aiBy[.host] // {}) + ($hfBy[.host] // {}) + ($mailBy[.host] // {}))}) | add) as $by
        | {date: $date,
           meta: ($m[0] // {}),
           self: ($self[0] + {cost: ($sc[0].cost // null), page: ($sp[0] | del(.host))}),
           groups: [$d[0].groups[] | {key, label, entries: [.entries[] | . + ($by[.host] // {reachable:false})
               | if (.mail? and ((.mail.mx // []) | length) > 0 and ($tlsBy | length) > 0) then .mail.tls = ($tlsBy[.mail.mx[0]] // null) else . end]}]}'
    printf ';\n'
} > "$out"
# The latest relevé is the page's; the others stay at hand under their date.
latest=$(ls results/*.jsonl | grep -v 'self\|cost\|csp\|\.ai\.\|\.hf\.\|\.mail\.' | sort | tail -1 | xargs basename | cut -d. -f1)
[ -z "$variant" ] && [ "$date" = "$latest" ] && cp "$out" site/data.js
echo "$out <- results/$date.jsonl ($domains${variant:+, $meta})"
