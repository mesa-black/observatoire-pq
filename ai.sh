#!/bin/sh
# Which AI providers an organisation has opened a door to, from public DNS.
# An enterprise workspace (ChatGPT Enterprise, Claude for Work, Cursor
# Business…) asks the organisation to prove it owns its domain with a TXT
# record: the record stays public, and says "this organisation set up an
# account here". It says nothing of what is sent through it, nor how much.
#
#   one host -> {host, apex, ai: ["openai", "anthropic", …]}
set -u
host="$1"
# The registrable domain: two labels, three under gouv.fr / co.uk-like suffixes.
apex=$(printf '%s' "$host" | awk -F. '{n=NF; d=$(n-1)"."$n; if ($(n-1) ~ /^(gouv|co|com)$/ && n>2) d=$(n-2)"."d; print d}')
# Asked of each authoritative server, over TCP, and their answers joined. A
# recursive resolver is not to be trusted with big TXT sets: the one in the
# probe's VM returned 0, 1 or 5 of 3ds.com's AI records from one query to the
# next on 2026-10-16, while its four authoritative servers gave 5 every time.
ns=$(dig +short +time=5 NS "$apex")
txt=$( { for n in $ns; do dig +short +tcp +time=5 +tries=2 @"$n" TXT "$apex"; done
         [ -n "$ns" ] || dig +short +tcp +time=5 TXT "$apex"; } | tr -d '"' | tr 'A-Z' 'a-z' | sort -u)
found='[]'
add() { found=$(printf '%s' "$found" | jq -c --arg p "$1" 'if index($p) then . else . + [$p] end'); }
case "$txt" in *openai-domain-verification*) add openai ;; esac
case "$txt" in *anthropic-domain-verification*) add anthropic ;; esac
case "$txt" in *mistral-domain-verification*) add mistral ;; esac
case "$txt" in *cursor-domain-verification*) add cursor ;; esac
case "$txt" in *perplexity*verification*) add perplexity ;; esac
jq -cn --arg host "$host" --arg apex "$apex" --argjson ai "$found" '{host:$host, apex:$apex, ai:$ai}'
