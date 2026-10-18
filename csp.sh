#!/bin/sh
# What the home page lets run, and what it actually loads. One host -> one line.
#
#   csp / csp_ro  Content-Security-Policy, enforced and report-only, from the
#                 final response after redirects; meta_csp if the page declares
#                 one in its HTML instead
#   scripts       hosts of the <script src> and <iframe src> found in the HTML
#                 as served (scripts added later by other scripts are not seen)
#   headers       the other security headers that frame the page
set -u
host="$1"
t=20
dir=$(mktemp -d)
: > "$dir/h"; : > "$dir/b"
# Dressed as a browser: anti-bot walls answer a bare client with their own
# page and its own CSP, which would be measured in place of the site's. A wall
# that still says no is recorded as such (code 403), not read.
url=$(curl -sL --max-time $t --compressed \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' \
    -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: fr-FR,fr;q=0.9' \
    -H 'Sec-Fetch-Mode: navigate' -H 'Sec-Fetch-Dest: document' -H 'Sec-Fetch-Site: none' -H 'Upgrade-Insecure-Requests: 1' \
    -D "$dir/h" -o "$dir/b" -w '%{url_effective} %{http_code}' "https://$host/" 2>/dev/null)
final=${url% *}; code=${url##* }
# Only the last response's headers: curl -L writes every hop.
awk 'BEGIN{RS="\r\n\r\n|\n\n"} NF{last=$0} END{print last}' "$dir/h" | tr -d '\r' > "$dir/last"
hdr() { grep -i "^$1:" "$dir/last" | sed 's/^[^:]*: *//' | paste -sd ',' -; }
meta=$(tr '\n' ' ' < "$dir/b" | grep -oiE '<meta[^>]+http-equiv=["'"'"']?content-security-policy[^>]*>' | head -1 \
    | grep -oiE 'content=("[^"]*"|'"'"'[^'"'"']*'"'"')' | sed -E 's/^content=.//; s/.$//')
scripts=$(tr '\n' ' ' < "$dir/b" | grep -oiE '<(script|iframe)[^>]+src=["'"'"']?(https?:)?//[^"'"'"' >]+' \
    | sed -E 's#.*src=["'"'"']?(https?:)?//##; s#[/:?].*##' | tr 'A-Z' 'a-z' | sort -u | jq -Rsc 'split("\n") | map(select(length > 0))')
jq -cn --arg host "$host" --arg final "$final" --arg code "$code" \
    --arg csp "$(hdr content-security-policy)" --arg csp_ro "$(hdr content-security-policy-report-only)" --arg meta "$meta" \
    --argjson scripts "${scripts:-[]}" \
    --arg xfo "$(hdr x-frame-options)" --arg xcto "$(hdr x-content-type-options)" \
    --arg referrer "$(hdr referrer-policy)" --arg permissions "$(hdr permissions-policy)" \
    --arg coop "$(hdr cross-origin-opener-policy)" --argjson bytes "$(wc -c < "$dir/b")" \
    '{host:$host, final:$final, code:($code|tonumber? // 0), csp:$csp, csp_ro:$csp_ro, meta_csp:$meta, scripts:$scripts,
      xfo:$xfo, xcto:$xcto, referrer:$referrer, permissions:$permissions, coop:$coop, bytes:$bytes}'
rm -rf "$dir"
