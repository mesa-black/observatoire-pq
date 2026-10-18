#!/bin/sh
# What an organisation publishes in open AI, from Hugging Face's public API.
# Only accounts Hugging Face marks as verified (tied to the company's email
# domain) and whose name starts like the organisation's: a namesake, or a fan
# account, is not the company.
#
#   one line {"host","name"} on stdin -> {host, hf: [{name, fullname, models, datasets, spaces, followers}]}
set -u
read -r line
host=$(printf '%s' "$line" | jq -r .host)
name=$(printf '%s' "$line" | jq -r .name)
q=$(printf '%s' "$name" | jq -sRr @uri)
# Hugging Face rate-limits by address (429): wait as asked, a few times, and
# if it still says no, report the organisation as unread, never as empty.
get() {
    n=0
    while :; do
        body=$(curl -s --max-time 15 -D /tmp/h.$$ "$1"); code=$(sed -n '1s/^HTTP[^ ]* \([0-9]*\).*/\1/p' /tmp/h.$$)
        [ "$code" = 429 ] || { rm -f /tmp/h.$$; printf '%s' "$body"; return 0; }
        n=$((n + 1)); [ $n -ge 5 ] && { rm -f /tmp/h.$$; return 1; }
        wait_s=$(sed -n 's/^[Rr]etry-[Aa]fter: *\([0-9]*\).*/\1/p' /tmp/h.$$); sleep "${wait_s:-$((n * 20))}"
    done
}
unread() { jq -cn --arg host "$host" '{host:$host, hf:null, error:"rate-limited"}'; exit 0; }
# Search results do not say who is verified: the candidates whose name begins
# like the organisation's (accents and punctuation aside) are each looked up.
search=$(get "https://huggingface.co/api/quicksearch?q=$q&type=org&limit=20") || unread
cands=$(printf '%s' "$search" | jq -r --arg want "$name" '
    def norm: ascii_downcase | gsub("[éèêë]"; "e") | gsub("[àâä]"; "a") | gsub("[îï]"; "i") | gsub("[ôö]"; "o") | gsub("[ùûü]"; "u") | gsub("ç"; "c")
        | gsub("[^a-z0-9]+"; " ") | ltrimstr(" ") | rtrimstr(" ");
    ($want | norm) as $w
    # Word for word: "AXA France" is AXA, "Amelia" is not Ameli.
    | [.orgs[]? | select(((.fullname // "") | norm) as $f | $f == $w or ($f | startswith($w + " ")))] | .[:5][] | .name')
# Verified, matching, and still not the company: kept out by hand, with the reason.
#   ledger  "Ledger Investing", an insurer, not Ledger the wallet maker
skip=' ledger '
out='[]'
for org in $cands; do
    case "$skip" in *" $org "*) continue ;; esac
    ov=$(get "https://huggingface.co/api/organizations/$org/overview") || unread
    printf '%s' "$ov" | jq -e '.isVerified == true' >/dev/null 2>&1 || continue
    out=$(printf '%s' "$out" | jq -c --arg org "$org" --argjson ov "$ov" \
        '. + [{name: $org, fullname: $ov.fullname, models: $ov.numModels, datasets: $ov.numDatasets, spaces: $ov.numSpaces, followers: $ov.numFollowers}]')
done
jq -cn --arg host "$host" --argjson hf "$out" '{host:$host, hf:$hf}'
