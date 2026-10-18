# Observatoire post-quantique

Measures whether the public front door of French organisations (CAC 40, French
Tech unicorns, State, banks, health) accepts the hybrid post-quantum key
exchange `X25519MLKEM768`, and what else that door says about itself: TLS
versions, key exchanges, certificate, network, HSTS, and the measured price of
the hybrid.

It measures façades: one public HTTPS host per organisation. Nothing behind it.

    podman build -t localhost/observatoire-pq .
    d=$(date +%F)
    hosts() { jq -r '.groups[].entries[].host' domains.json | sort -u; }
    hosts | podman run --rm -i --entrypoint sh localhost/observatoire-pq -c 'xargs -P 12 -n 1 sh /probe.sh' > results/$d.jsonl
    # timings alone on the line, one host at a time (~20 min)
    hosts | podman run --rm -i --entrypoint sh localhost/observatoire-pq -c 'xargs -P 1 -n 1 sh /cost.sh' > results/$d.cost.jsonl
    hosts | podman run --rm -i --entrypoint sh localhost/observatoire-pq -c 'xargs -P 12 -n 1 sh /csp.sh' > results/$d.csp.jsonl
    podman run --rm localhost/observatoire-pq mesa.black > results/$d.self.jsonl
    podman run --rm --entrypoint sh localhost/observatoire-pq /csp.sh mesa.black > results/$d.self.csp.jsonl
    podman run --rm --entrypoint sh localhost/observatoire-pq /cost.sh mesa.black > results/$d.self.cost.jsonl
    ./build.sh            # -> site/data.js
    open site/index.html

- `domains.json`: the list, one host per organisation, and why that host. An
  entry may carry its own data lifetime (`life`) and a sourced line of context (`fact`).
- `probe.sh`: one host -> one JSON line.
- `cost.sh`: one host -> the handshake time, hybrid against X25519, best of ten each.
- `csp.sh`: one host -> the home page's Content-Security-Policy, security headers and third-party scripts.
- `results/`: one file per measurement day, never rewritten.
