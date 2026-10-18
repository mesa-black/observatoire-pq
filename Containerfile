FROM docker.io/library/alpine:3.22
RUN apk add --no-cache openssl curl jq coreutils bind-tools
COPY probe.sh cost.sh csp.sh ai.sh hf.sh mail.sh /
ENTRYPOINT ["/bin/sh", "/probe.sh"]
