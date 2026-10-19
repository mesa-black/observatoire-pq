window.OBSERVATOIRE = {
  "date": "2026-10-19",
  "meta": {
    "number": 5,
    "focus": "rencontres",
    "draft": true,
    "depuis": 1,
    "kicker": "Relevé n° 5 · spécial Saint-Valentin · maquette sur les mesures d'octobre",
    "title": [
      "Vos secrets d'amour",
      "sont-ils post-quantiques ?"
    ],
    "published": "2027-02-16"
  },
  "self": {
    "host": "mesa.black",
    "reachable": true,
    "pq": "full",
    "hits": 5,
    "tries": 5,
    "group": "X25519MLKEM768",
    "protocol": "TLSv1.3",
    "cipher": "TLS_AES_128_GCM_SHA256",
    "protocols": [
      "tls1_3"
    ],
    "groups": [
      "X25519MLKEM768",
      "SecP256r1MLKEM768",
      "SecP384r1MLKEM1024",
      "X25519",
      "secp256r1",
      "secp384r1"
    ],
    "cert": {
      "key": "id-ecPublicKey",
      "bits": 256,
      "curve": "P-256",
      "sig": "ecdsa-with-SHA384",
      "issuer": "Let's Encrypt",
      "from": "2026-10-14",
      "until": "2027-01-12",
      "names": 2
    },
    "net": {
      "ip": "164.132.255.21",
      "asn": "16276",
      "cc": "FR",
      "as": "OVH - OVH SAS, FR"
    },
    "hsts": "max-age=31536000; includesubdomains; preload",
    "front": "other",
    "server": "",
    "at": "2026-10-19T06:15:05Z",
    "cost": null,
    "page": {
      "final": "https://mesa.black/",
      "code": 200,
      "csp": "default-src 'none'; style-src 'self'; font-src 'self'; img-src 'self' data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
      "csp_ro": "",
      "meta_csp": "",
      "scripts": [],
      "xfo": "",
      "xcto": "nosniff",
      "referrer": "strict-origin-when-cross-origin",
      "permissions": "accelerometer=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=(), browsing-topics=()",
      "coop": "",
      "bytes": 13539
    }
  },
  "groups": [
    {
      "key": "ia",
      "label": {
        "fr": "Intelligence artificielle",
        "en": "Artificial intelligence",
        "es": "Inteligencia artificial"
      },
      "entries": [
        {
          "name": "ChatGPT",
          "host": "chatgpt.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-20",
            "until": "2026-12-19",
            "names": 3
          },
          "net": {
            "ip": "104.18.32.47",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:42Z",
          "cost": null,
          "page": {
            "final": "https://chatgpt.com/",
            "code": 200,
            "csp": "base-uri 'none'; object-src 'none'; frame-ancestors 'self' chrome-extension://lfkehkpjohcoelkpembgemeipeppanef chrome-extension://hehggadaopoacecdllhhajmbjkdcmajg chrome-extension://odlomjlbamekndcpllcnffbgeohgkmjh",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "same-origin-allow-popups",
            "bytes": 365742
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "API OpenAI",
          "host": "api.openai.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-05",
            "until": "2026-12-04",
            "names": 2
          },
          "net": {
            "ip": "172.66.0.243",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:35Z",
          "cost": null,
          "page": {
            "final": "https://api.openai.com/",
            "code": 421,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "same-origin",
            "permissions": "",
            "coop": "",
            "bytes": 124
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Claude",
          "host": "claude.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-10",
            "until": "2026-12-09",
            "names": 3
          },
          "net": {
            "ip": "160.79.104.10",
            "asn": "399358",
            "cc": "US",
            "as": "ANTHROPIC - Anthropic, PBC, US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:42Z",
          "cost": null,
          "page": {
            "final": "https://claude.ai/login",
            "code": 200,
            "csp": "script-src 'nonce-baSoIcNykFNX2arR5w7z/w==' 'strict-dynamic' 'sha256-JtzRGrPebZ8u8elKGI44AVwtuFdqcHUrCrog8sYu/14=' 'sha256-4aQureSMVDuR1KGymSIGLF6TW5zcgbHi9yYUOCD1ngY=' 'sha256-D81Kh4KclKqDki95OAdMuuSllue8wW9vbei3fuDxKfU=' 'sha256-96xKJR+kh8rZ+j0Q0OrN6K0Po2N0VrrWm3SMRcxboM4=' 'sha256-rmdvJEye8/04YNQCmhoWKJZERSstfDuLoK3z1VqC+uo=' 'sha256-K3AaGwEd2z1ihno4j82DK0eK3rHggo8JIOooe12Sd/c=' 'sha256-dyJpvR0Dyd8jXR2Q818hWbtuqAsNQCPaNMq1KR8+/Ws=' 'sha256-8dZmowwnYr9C3cOUfps+pDtRarSncFD7H36T7s50/Es=' 'sha256-j5lD8bkJRdHJPmRAgT5QY6RJvB38KV5HjDZUHi2YqY8=' 'sha256-dn2EVpW0XDrl97SnqQ8cFp0ifukqbLDj4AgT3JBnJa0=' 'sha256-pvUt+K8Ww/eSfSCiD4NBtvxke+RWuQAlLOJV26XAcWU=' 'sha256-kH2WpnWeIsTR0/njMJtvjhTKRH9NTR/VS7XymQA0sWw=' 'sha256-Z8a6TogIieNJAREGk13SwyaS0v7XVkNiRhZ1AP7ashU=' 'sha256-Kze/J3Nae6BhXN1nwXZv6rLOblqIcsJ0OUgpVfnt8dk=' 'sha256-XB2JCsivqro4vpq9z4+8kOEDSqpTWYIy/45TavVnIO0=' 'sha256-ZD7Yut/KN00kDIaFJnXJzrPupP5BbHE8Lib47sovJqE=' 'sha256-VpEcbwZVjESDF6AgDzvRmYdU7ro7OAHf+sJHay2Scac=' 'sha256-+PnvgfwDMRhY7tuKbbZBBtq3XIKQN4Vfvg1kfKGqfm0=' 'sha256-wvguZzglNvNKim5c9A/mfVVvND3q440Bqer+8xsupXg=' 'sha256-LC7wl8/C7SSP8zB9a9LD838prfzCgJtbjIA2Bqwo4kI=' 'sha256-vYi1Tag/gm0xfBf5FKhGuJBMsK14OdDqTq42bYEIrI4=' 'wasm-unsafe-eval'; object-src 'none'; base-uri 'none'; block-all-mixed-content; img-src 'self' data: blob: *.anthropic.com *.claude.ai *.claude.com *.gstatic.com * https://js.intercomcdn.com https://static.intercomassets.com https://downloads.intercomcdn.com https://downloads.intercomcdn.eu https://downloads.au.intercomcdn.com https://uploads.intercomusercontent.com https://gifs.intercomcdn.com https://video-messages.intercomcdn.com https://messenger-apps.intercom.io https://messenger-apps.eu.intercom.io https://messenger-apps.au.intercom.io https://*.intercom-attachments-1.com https://*.intercom-attachments.eu https://*.au.intercom-attachments.com https://*.intercom-attachments-2.com https://*.intercom-attachments-3.com https://*.intercom-attachments-4.com https://*.intercom-attachments-5.com https://*.intercom-attachments-6.com https://*.intercom-attachments-7.com https://*.intercom-attachments-8.com https://*.intercom-attachments-9.com https://static.intercomassets.eu https://static.au.intercomassets.com; frame-src 'self' a-cdn.claude.ai a.claude.ai sealed-entry.claude.ai b.stripecdn.com challenges.cloudflare.com embedded-dashboards.metronome.com form.typeform.com forms.hsforms.com js.stripe.com m.stripe.network hcaptcha.com *.hcaptcha.com pay.google.com r.stripe.com www.google.com accounts.google.com www.youtube-nocookie.com https://intercom-sheets.com https://www.intercom-reporting.com https://www.youtube.com https://player.vimeo.com https://fast.wistia.net https://www.claudeusercontent.com https://gdrive.claudeusercontent.com https://www.claudemcpclient.com *.claudemcpcontent.com https://sandbox.claudemcpcontent.com https://claude.ai *.livepreview.claude.ai *.livepreview.claude.app; font-src 'self' assets.claude.ai assets-proxy.anthropic.com https://fonts.gstatic.com https://js.intercomcdn.com https://fonts.intercomcdn.com; form-action 'self' https://forms.hsforms.com https://intercom.help https://api-iam.intercom.io https://api-iam.eu.intercom.io https://api-iam.au.intercom.io https://messenger-apps.intercom.io https://messenger-apps.eu.intercom.io https://messenger-apps.au.intercom.io https://support.claude.com; media-src 'self' blob: cdn.sanity.io https://assets.claude.ai https://assets-proxy.anthropic.com https://js.intercomcdn.com https://downloads.intercomcdn.com https://downloads.intercomcdn.eu https://downloads.au.intercomcdn.com; upgrade-insecure-requests; worker-src 'self' blob: a-cdn.claude.ai assets.claude.ai assets-proxy.anthropic.com a-cdn.anthropic.com s-cdn.anthropic.com; frame-ancestors 'self'; report-uri /edge-api/csp-reports",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "assets-proxy.anthropic.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=self, attribution-reporting=*, autoplay=(self \"https://www.youtube-nocookie.com\"), bluetooth=self, browsing-topics=*, camera=(self \"https://*.claudemcpcontent.com\"), clipboard-read=self, clipboard-write=(self \"https://*.claudemcpcontent.com\"), compute-pressure=self, display-capture=self, encrypted-media=self, fullscreen=(self \"https://www.youtube-nocookie.com\"), gamepad=self, geolocation=(self \"https://*.claudemcpcontent.com\"), gyroscope=self, hid=self, identity-credentials-get=self, idle-detection=self, local-fonts=self, magnetometer=self, microphone=(self \"https://*.claudemcpcontent.com\"), midi=self, otp-credentials=self, picture-in-picture=*, publickey-credentials-create=self, publickey-credentials-get=self, screen-wake-lock=self, serial=self, storage-access=*, unload=(), usb=self, web-share=self, window-management=self, xr-spatial-tracking=self",
            "coop": "same-origin-allow-popups",
            "bytes": 145440
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "399358",
            "prev": null
          }
        },
        {
          "name": "API Anthropic",
          "host": "api.anthropic.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-21",
            "until": "2026-12-20",
            "names": 1
          },
          "net": {
            "ip": "160.79.104.10",
            "asn": "399358",
            "cc": "US",
            "as": "ANTHROPIC - Anthropic, PBC, US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://api.anthropic.com/",
            "code": 404,
            "csp": "default-src 'none'; frame-ancestors 'none'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 0
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "399358",
            "prev": null
          }
        },
        {
          "name": "Gemini",
          "host": "gemini.google.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "MLKEM1024",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-28",
            "until": "2026-12-21",
            "names": 65
          },
          "net": {
            "ip": "142.251.154.2",
            "asn": "15169",
            "cc": "US",
            "as": "GOOGLE - Google LLC, US"
          },
          "hsts": "",
          "front": "other",
          "server": "esf",
          "at": "2026-10-19T06:13:48Z",
          "cost": null,
          "page": {
            "final": "https://gemini.google.com/",
            "code": 200,
            "csp": "report-uri /_/BardChatUi/cspreport;default-src 'none';script-src * 'unsafe-inline' 'unsafe-eval' blob: data: https://www.gstatic.com/bg3/boq-bard-web/;object-src * 'unsafe-inline' 'unsafe-eval';worker-src * 'unsafe-inline' 'unsafe-eval';style-src 'report-sample' 'unsafe-inline' https://www.gstatic.com https://gemini.gstatic.com https://fonts.googleapis.com https://gstatic.com/uservoice/surveys/resources/ https://www.gstatic.com/bg3/boq-bard-web/;font-src data: https://fonts.gstatic.com https://www.gstatic.com https://www.gstatic.com/bg3/boq-bard-web/;child-src 'self' https://*.google.com https://*.scf.usercontent.goog https://www.youtube.com https://www.youtube-nocookie.com https://docs.google.com/picker/v2/home blob:;frame-src 'self' https://*.google.com https://*.scf.usercontent.goog https://www.youtube.com https://www.youtube-nocookie.com https://docs.google.com/picker/v2/home blob: https://www.googletagmanager.com https://bid.g.doubleclick.net https://td.doubleclick.net https://*.fls.doubleclick.net;media-src https://*.google.com https://*.googleusercontent.com https://*.gstatic.com https://*.youtube.com https://*.youtube-nocookie.com https://*.ytimg.com https://*.ggpht.com https://bard.datacommons.org blob: https://*.googlevideo.com https://labs.google https://storage.googleapis.com https://*.googleapis.com;form-action https://ogs.google.com https://onegoogle-autopush.sandbox.google.com https://onegoogle-staging.sandbox.google.com https://onegoogle-dev.corp.google.com https://studio.firebase.google.com/run.api;manifest-src 'none';img-src https://*.google.com https://*.googleusercontent.com https://*.gstatic.com https://*.youtube.com https://*.youtube-nocookie.com https://*.ytimg.com https://*.ggpht.com https://bard.datacommons.org blob: data: https://labs.google https://*.googleapis.com https://www.gstatic.com/bg3/boq-bard-web/ https://*.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://ad.doubleclick.net https://adservice.google.com https://ade.googlesyndication.com https://google.ad https://www.google.ad https://google.ae https://www.google.ae https://google.com.af https://www.google.com.af https://google.com.ag https://www.google.com.ag https://google.com.ai https://www.google.com.ai https://google.al https://www.google.al https://google.am https://www.google.am https://google.co.ao https://www.google.co.ao https://google.com.ar https://www.google.com.ar https://google.as https://www.google.as https://google.at https://www.google.at https://google.com.au https://www.google.com.au https://google.az https://www.google.az https://google.ba https://www.google.ba https://google.com.bd https://www.google.com.bd https://google.be https://www.google.be https://google.bf https://www.google.bf https://google.bg https://www.google.bg https://google.com.bh https://www.google.com.bh https://google.bi https://www.google.bi https://google.bj https://www.google.bj https://google.com.bn https://www.google.com.bn https://google.com.bo https://www.google.com.bo https://google.com.br https://www.google.com.br https://google.bs https://www.google.bs https://google.bt https://www.google.bt https://google.co.bw https://www.google.co.bw https://google.by https://www.google.by https://google.com.bz https://www.google.com.bz https://google.ca https://www.google.ca https://google.cd https://www.google.cd https://google.cf https://www.google.cf https://google.cg https://www.google.cg https://google.ch https://www.google.ch https://google.ci https://www.google.ci https://google.co.ck https://www.google.co.ck https://google.cl https://www.google.cl https://google.cm https://www.google.cm https://google.cn https://www.google.cn https://google.com.cn https://www.google.com.cn https://google.com.co https://www.google.com.co https://google.co.cr https://www.google.co.cr https://google.com.cu https://www.google.com.cu https://google.cv https://www.google.cv https://google.com.cy https://www.google.com.cy https://google.cz https://www.google.cz https://google.de https://www.google.de https://google.dj https://www.google.dj https://google.dk https://www.google.dk https://google.dm https://www.google.dm https://google.com.do https://www.google.com.do https://google.dz https://www.google.dz https://google.com.ec https://www.google.com.ec https://google.ee https://www.google.ee https://google.com.eg https://www.google.com.eg https://google.es https://www.google.es https://google.com.et https://www.google.com.et https://google.fi https://www.google.fi https://google.com.fj https://www.google.com.fj https://google.fm https://www.google.fm https://google.fr https://www.google.fr https://google.ga https://www.google.ga https://google.co.uk https://www.google.co.uk https://google.ge https://www.google.ge https://google.gg https://www.google.gg https://google.com.gh https://www.google.com.gh https://google.com.gi https://www.google.com.gi https://google.gl https://www.google.gl https://google.gm https://www.google.gm https://google.gp https://www.google.gp https://google.gr https://www.google.gr https://google.com.gt https://www.google.com.gt https://google.gy https://www.google.gy https://google.com.hk https://www.google.com.hk https://google.hk https://www.google.hk https://google.hn https://www.google.hn https://google.hr https://www.google.hr https://google.ht https://www.google.ht https://google.hu https://www.google.hu https://google.co.id https://www.google.co.id https://google.ie https://www.google.ie https://google.co.il https://www.google.co.il https://google.im https://www.google.im https://google.co.im https://www.google.co.im https://google.co.in https://www.google.co.in https://google.iq https://www.google.iq https://google.is https://www.google.is https://google.it https://www.google.it https://google.co.je https://www.google.co.je https://google.je https://www.google.je https://google.com.jm https://www.google.com.jm https://google.jo https://www.google.jo https://google.co.jp https://www.google.co.jp https://google.co.ke https://www.google.co.ke https://google.kg https://www.google.kg https://google.com.kh https://www.google.com.kh https://google.ki https://www.google.ki https://google.co.kr https://www.google.co.kr https://google.com.kw https://www.google.com.kw https://google.kz https://www.google.kz https://google.la https://www.google.la https://google.com.lb https://www.google.com.lb https://google.li https://www.google.li https://google.lk https://www.google.lk https://google.co.ls https://www.google.co.ls https://google.lt https://www.google.lt https://google.lu https://www.google.lu https://google.lv https://www.google.lv https://google.com.ly https://www.google.com.ly https://google.co.ma https://www.google.co.ma https://google.md https://www.google.md https://google.me https://www.google.me https://google.mg https://www.google.mg https://google.mk https://www.google.mk https://google.ml https://www.google.ml https://google.com.mm https://www.google.com.mm https://google.mn https://www.google.mn https://google.ms https://www.google.ms https://google.com.mt https://www.google.com.mt https://google.mu https://www.google.mu https://google.mv https://www.google.mv https://google.mw https://www.google.mw https://google.com.mx https://www.google.com.mx https://google.com.my https://www.google.com.my https://google.co.mz https://www.google.co.mz https://google.com.na https://www.google.com.na https://google.ne https://www.google.ne https://google.com.ng https://www.google.com.ng https://google.ng https://www.google.ng https://google.com.ni https://www.google.com.ni https://google.nl https://www.google.nl https://google.no https://www.google.no https://google.com.np https://www.google.com.np https://google.nr https://www.google.nr https://google.nu https://www.google.nu https://google.co.nz https://www.google.co.nz https://google.com.om https://www.google.com.om https://google.com.pa https://www.google.com.pa https://google.com.pe https://www.google.com.pe https://google.com.pg https://www.google.com.pg https://google.com.ph https://www.google.com.ph https://google.com.pk https://www.google.com.pk https://google.pl https://www.google.pl https://google.pn https://www.google.pn https://google.com.pr https://www.google.com.pr https://google.ps https://www.google.ps https://google.pt https://www.google.pt https://google.com.py https://www.google.com.py https://google.com.qa https://www.google.com.qa https://google.ro https://www.google.ro https://google.rs https://www.google.rs https://google.ru https://www.google.ru https://google.rw https://www.google.rw https://google.com.sa https://www.google.com.sa https://google.com.sb https://www.google.com.sb https://google.sc https://www.google.sc https://google.se https://www.google.se https://google.com.sg https://www.google.com.sg https://google.sh https://www.google.sh https://google.si https://www.google.si https://google.sk https://www.google.sk https://google.com.sl https://www.google.com.sl https://google.sm https://www.google.sm https://google.sn https://www.google.sn https://google.so https://www.google.so https://google.sr https://www.google.sr https://google.st https://www.google.st https://google.com.sv https://www.google.com.sv https://google.td https://www.google.td https://google.tg https://www.google.tg https://google.co.th https://www.google.co.th https://google.com.tj https://www.google.com.tj https://google.tk https://www.google.tk https://google.tl https://www.google.tl https://google.tm https://www.google.tm https://google.tn https://www.google.tn https://google.com.tn https://www.google.com.tn https://google.to https://www.google.to https://google.com.tr https://www.google.com.tr https://google.tt https://www.google.tt https://google.com.tw https://www.google.com.tw https://google.co.tz https://www.google.co.tz https://google.com.ua https://www.google.com.ua https://google.co.ug https://www.google.co.ug https://google.com https://www.google.com https://google.com.uy https://www.google.com.uy https://google.co.uz https://www.google.co.uz https://google.com.vc https://www.google.com.vc https://google.co.ve https://www.google.co.ve https://google.vg https://www.google.vg https://google.co.vi https://www.google.co.vi https://google.com.vn https://www.google.com.vn https://google.vu https://www.google.vu https://google.ws https://www.google.ws https://google.co.za https://www.google.co.za https://google.co.zm https://www.google.co.zm https://google.co.zw https://www.google.co.zw;connect-src 'self' https://*.google.com https://*.gstatic.com https://*.google-analytics.com https://csp.withgoogle.com/csp/proto/BardChatUi https://content-push.googleapis.com/upload/ https://*.googleusercontent.com https://ogads-pa.googleapis.com/ https://*.youtube.com https://*.youtube-nocookie.com https://*.googlevideo.com data: https://static.corp.google.com/external_content/scs_corp/bard/artifacts https://*.googleapis.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://ad.doubleclick.net https://adservice.google.com https://ade.googlesyndication.com https://google.ad https://www.google.ad https://google.ae https://www.google.ae https://google.com.af https://www.google.com.af https://google.com.ag https://www.google.com.ag https://google.com.ai https://www.google.com.ai https://google.al https://www.google.al https://google.am https://www.google.am https://google.co.ao https://www.google.co.ao https://google.com.ar https://www.google.com.ar https://google.as https://www.google.as https://google.at https://www.google.at https://google.com.au https://www.google.com.au https://google.az https://www.google.az https://google.ba https://www.google.ba https://google.com.bd https://www.google.com.bd https://google.be https://www.google.be https://google.bf https://www.google.bf https://google.bg https://www.google.bg https://google.com.bh https://www.google.com.bh https://google.bi https://www.google.bi https://google.bj https://www.google.bj https://google.com.bn https://www.google.com.bn https://google.com.bo https://www.google.com.bo https://google.com.br https://www.google.com.br https://google.bs https://www.google.bs https://google.bt https://www.google.bt https://google.co.bw https://www.google.co.bw https://google.by https://www.google.by https://google.com.bz https://www.google.com.bz https://google.ca https://www.google.ca https://google.cd https://www.google.cd https://google.cf https://www.google.cf https://google.cg https://www.google.cg https://google.ch https://www.google.ch https://google.ci https://www.google.ci https://google.co.ck https://www.google.co.ck https://google.cl https://www.google.cl https://google.cm https://www.google.cm https://google.cn https://www.google.cn https://google.com.cn https://www.google.com.cn https://google.com.co https://www.google.com.co https://google.co.cr https://www.google.co.cr https://google.com.cu https://www.google.com.cu https://google.cv https://www.google.cv https://google.com.cy https://www.google.com.cy https://google.cz https://www.google.cz https://google.de https://www.google.de https://google.dj https://www.google.dj https://google.dk https://www.google.dk https://google.dm https://www.google.dm https://google.com.do https://www.google.com.do https://google.dz https://www.google.dz https://google.com.ec https://www.google.com.ec https://google.ee https://www.google.ee https://google.com.eg https://www.google.com.eg https://google.es https://www.google.es https://google.com.et https://www.google.com.et https://google.fi https://www.google.fi https://google.com.fj https://www.google.com.fj https://google.fm https://www.google.fm https://google.fr https://www.google.fr https://google.ga https://www.google.ga https://google.co.uk https://www.google.co.uk https://google.ge https://www.google.ge https://google.gg https://www.google.gg https://google.com.gh https://www.google.com.gh https://google.com.gi https://www.google.com.gi https://google.gl https://www.google.gl https://google.gm https://www.google.gm https://google.gp https://www.google.gp https://google.gr https://www.google.gr https://google.com.gt https://www.google.com.gt https://google.gy https://www.google.gy https://google.com.hk https://www.google.com.hk https://google.hk https://www.google.hk https://google.hn https://www.google.hn https://google.hr https://www.google.hr https://google.ht https://www.google.ht https://google.hu https://www.google.hu https://google.co.id https://www.google.co.id https://google.ie https://www.google.ie https://google.co.il https://www.google.co.il https://google.im https://www.google.im https://google.co.im https://www.google.co.im https://google.co.in https://www.google.co.in https://google.iq https://www.google.iq https://google.is https://www.google.is https://google.it https://www.google.it https://google.co.je https://www.google.co.je https://google.je https://www.google.je https://google.com.jm https://www.google.com.jm https://google.jo https://www.google.jo https://google.co.jp https://www.google.co.jp https://google.co.ke https://www.google.co.ke https://google.kg https://www.google.kg https://google.com.kh https://www.google.com.kh https://google.ki https://www.google.ki https://google.co.kr https://www.google.co.kr https://google.com.kw https://www.google.com.kw https://google.kz https://www.google.kz https://google.la https://www.google.la https://google.com.lb https://www.google.com.lb https://google.li https://www.google.li https://google.lk https://www.google.lk https://google.co.ls https://www.google.co.ls https://google.lt https://www.google.lt https://google.lu https://www.google.lu https://google.lv https://www.google.lv https://google.com.ly https://www.google.com.ly https://google.co.ma https://www.google.co.ma https://google.md https://www.google.md https://google.me https://www.google.me https://google.mg https://www.google.mg https://google.mk https://www.google.mk https://google.ml https://www.google.ml https://google.com.mm https://www.google.com.mm https://google.mn https://www.google.mn https://google.ms https://www.google.ms https://google.com.mt https://www.google.com.mt https://google.mu https://www.google.mu https://google.mv https://www.google.mv https://google.mw https://www.google.mw https://google.com.mx https://www.google.com.mx https://google.com.my https://www.google.com.my https://google.co.mz https://www.google.co.mz https://google.com.na https://www.google.com.na https://google.ne https://www.google.ne https://google.com.ng https://www.google.com.ng https://google.ng https://www.google.ng https://google.com.ni https://www.google.com.ni https://google.nl https://www.google.nl https://google.no https://www.google.no https://google.com.np https://www.google.com.np https://google.nr https://www.google.nr https://google.nu https://www.google.nu https://google.co.nz https://www.google.co.nz https://google.com.om https://www.google.com.om https://google.com.pa https://www.google.com.pa https://google.com.pe https://www.google.com.pe https://google.com.pg https://www.google.com.pg https://google.com.ph https://www.google.com.ph https://google.com.pk https://www.google.com.pk https://google.pl https://www.google.pl https://google.pn https://www.google.pn https://google.com.pr https://www.google.com.pr https://google.ps https://www.google.ps https://google.pt https://www.google.pt https://google.com.py https://www.google.com.py https://google.com.qa https://www.google.com.qa https://google.ro https://www.google.ro https://google.rs https://www.google.rs https://google.ru https://www.google.ru https://google.rw https://www.google.rw https://google.com.sa https://www.google.com.sa https://google.com.sb https://www.google.com.sb https://google.sc https://www.google.sc https://google.se https://www.google.se https://google.com.sg https://www.google.com.sg https://google.sh https://www.google.sh https://google.si https://www.google.si https://google.sk https://www.google.sk https://google.com.sl https://www.google.com.sl https://google.sm https://www.google.sm https://google.sn https://www.google.sn https://google.so https://www.google.so https://google.sr https://www.google.sr https://google.st https://www.google.st https://google.com.sv https://www.google.com.sv https://google.td https://www.google.td https://google.tg https://www.google.tg https://google.co.th https://www.google.co.th https://google.com.tj https://www.google.com.tj https://google.tk https://www.google.tk https://google.tl https://www.google.tl https://google.tm https://www.google.tm https://google.tn https://www.google.tn https://google.com.tn https://www.google.com.tn https://google.to https://www.google.to https://google.com.tr https://www.google.com.tr https://google.tt https://www.google.tt https://google.com.tw https://www.google.com.tw https://google.co.tz https://www.google.co.tz https://google.com.ua https://www.google.com.ua https://google.co.ug https://www.google.co.ug https://google.com https://www.google.com https://google.com.uy https://www.google.com.uy https://google.co.uz https://www.google.co.uz https://google.com.vc https://www.google.com.vc https://google.co.ve https://www.google.co.ve https://google.vg https://www.google.vg https://google.co.vi https://www.google.co.vi https://google.com.vn https://www.google.com.vn https://google.vu https://www.google.vu https://google.ws https://www.google.ws https://google.co.za https://www.google.co.za https://google.co.zm https://www.google.co.zm https://google.co.zw https://www.google.co.zw,require-trusted-types-for 'script';report-uri /_/BardChatUi/cspreport,script-src 'report-sample' 'nonce-YmL0wDvLXZiOT3txHslhVQ' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;object-src 'none';base-uri 'self';report-uri /_/BardChatUi/cspreport,script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://www.gstatic.com/bg3/boq-bard-web/ https://www.google.com/tools/feedback/ https://www.gstatic.com/feedback/js/ https://www.gstatic.com/inproduct_help/ https://www.gstatic.com/support/content/ https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://support.google.com/inapp/ https://maps.googleapis.com https://fonts.gstatic.com https://gemini.gstatic.com https://www.youtube.com/iframe_api https://www.youtube.com/s/player/ https://www.googleadservices.com https://googleads.g.doubleclick.net https://ads.google.com;report-uri /_/BardChatUi/cspreport/allowlist",
            "csp_ro": "script-src 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googleadservices.com/pagead/conversion/ https://www.googletagmanager.com/gtag/js https://www.googletagmanager.com/gtag/destination https://www.googletagmanager.com/gtm.js https://www.google.com/js/bg/ https://www.gstatic.com/external_hosted/highlightjs/highlight.pack.js https://www.gstatic.com/monaco_editor/ https://fonts.gstatic.com/s/e/notoemoji/search/wrapper.js https://www.youtube.com/iframe_api https://translate.google.com/translate_a/element.js https://www-onepick-opensocial.googleusercontent.com/gadgets/js/rpc.js https://www.google.com/tools/feedback/chat_load.js https://www.google.com/tools/feedback/help_api.js https://www.google.com/tools/feedback/load.js https://www.google.com/tools/feedback/open.js https://www.google.com/tools/feedback/open_to_help_guide_lazy.js https://www.gstatic.com/feedback/js/ https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js https://www.gstatic.com/inproduct_help/api/main.min.js https://www.gstatic.com/inproduct_help/chatsupport/chatsupport_button_v2.js https://www.gstatic.com/inproduct_help/service/lazy.min.js https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://www.gstatic.com/_/mss/boq-one-google/_/ https://www.gstatic.com/og/_/js/ https://apis.google.com/js/api.js https://apis.google.com/js/client.js https://maps.googleapis.com/maps/api/js https://gemini.gstatic.com/_/mss/boq-gemini-web-uiserver/_/js/k=boq-gemini-web-uiserver.BardChatUi.fr.y0a9PiyPrGU.2018.O/ https://apis.google.com/_/scs/abc-static/_/js/ https://maps.googleapis.com/maps-api-v3/api/js/ https://maps.googleapis.com/maps/vt https://maps.googleapis.com/maps/api/js/ https://maps.googleapis.com/maps/api/place/js/ https://www.youtube.com/s/player/ https://translate.googleapis.com/_/translate_http/_/js/;report-uri /_/BardChatUi/cspreport/fine-allowlist",
            "meta_csp": "",
            "scripts": [
              "gemini.gstatic.com",
              "www.gstatic.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*",
            "coop": "same-origin-allow-popups",
            "bytes": 805098
          },
          "cle": {
            "kind": "propre",
            "name": "Google",
            "country": "US",
            "asn": "15169",
            "prev": null
          }
        },
        {
          "name": "API Gemini",
          "host": "generativelanguage.googleapis.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "MLKEM1024",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-28",
            "until": "2026-12-21",
            "names": 17
          },
          "net": {
            "ip": "172.217.117.4",
            "asn": "15169",
            "cc": "US",
            "as": "GOOGLE - Google LLC, US"
          },
          "hsts": "",
          "front": "other",
          "server": "scaffolding on httpserver2",
          "at": "2026-10-19T06:13:48Z",
          "cost": null,
          "page": {
            "final": "https://generativelanguage.googleapis.com/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 0
          },
          "cle": {
            "kind": "propre",
            "name": "Google",
            "country": "US",
            "asn": "15169",
            "prev": null
          }
        },
        {
          "name": "Vertex AI, Paris",
          "host": "europe-west9-aiplatform.googleapis.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "MLKEM1024",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-28",
            "until": "2026-12-21",
            "names": 17
          },
          "net": {
            "ip": "172.217.115.4",
            "asn": "15169",
            "cc": "US",
            "as": "GOOGLE - Google LLC, US"
          },
          "hsts": "",
          "front": "other",
          "server": "esf",
          "at": "2026-10-19T06:13:45Z",
          "cost": null,
          "page": {
            "final": "https://europe-west9-aiplatform.googleapis.com/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 1561
          },
          "cle": {
            "kind": "propre",
            "name": "Google",
            "country": "US",
            "asn": "15169",
            "prev": null
          }
        },
        {
          "name": "Copilot",
          "host": "copilot.microsoft.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha384WithRSAEncryption",
            "issuer": "Microsoft Corporation",
            "from": "2026-01-29",
            "until": "2027-01-24",
            "names": 1
          },
          "net": {
            "ip": "104.18.23.222",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:42Z",
          "cost": null,
          "page": {
            "final": "https://copilot.com/?fromcode=cmmlf487uwy&sessionId=ec94c380-c34c-4086-92a7-f0e4879b817c&",
            "code": 200,
            "csp": "default-src 'self';base-uri 'self';script-src 'nonce-smxehhnVoVQVQ1Lg7XyTfQ==' 'strict-dynamic' 'report-sample' https:;report-to csp-endpoint;upgrade-insecure-requests;style-src 'self' 'report-sample' *.cdn.office.net *.microsoft.com res-dev.cdn.officeppe.net 'unsafe-inline' https://www.microsoft.com/;font-src 'self' data: *.cdn.office.net res-dev.cdn.officeppe.net data c.s-microsoft.com *.microsoft.com;connect-src 'self' https://browser.pipe.aria.microsoft.com https://browser.events.data.microsoft.com *.office.com *.office.microsoft.com *.cdn.office.net res-dev.cdn.officeppe.net https://consentreceiverfd-prod.azurefd.net https://*.clarity.ms/collect https://turbo.microsoft.com https://deeplinkservice.svc.cloud.microsoft https://sdf.deferreddeeplinkservice.microsoft.com https://config.edge.skype.com https://admin.microsoft.com https://config.centro.core.microsoft https://mem.gfx.ms https://js.monitor.azure.com data:;frame-src https://login.microsoftonline.com https://login.live.com mem.gfx.ms amcdn.msftauth.net amcdn.msauth.net;img-src * data: blob:;media-src 'self' *.cdn.office.net res-dev.cdn.officeppe.net;worker-src 'self' blob:;child-src 'self' blob:;report-uri https://csp.microsoft.com/report/Harmony-App-PROD;form-action https://login.microsoftonline.com;frame-ancestors 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "mem.gfx.ms",
              "res.cdn.office.net",
              "wcpstatic.microsoft.com",
              "www.microsoft.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 311817
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "GitHub Copilot",
          "host": "api.githubcopilot.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-09-28",
            "until": "2026-12-26",
            "names": 2
          },
          "net": {
            "ip": "140.82.112.21",
            "asn": "36459",
            "cc": "US",
            "as": "GITHUB - GitHub, Inc., US"
          },
          "hsts": "",
          "front": "other",
          "server": "github.com",
          "at": "2026-10-19T06:13:36Z",
          "cost": null,
          "page": {
            "final": "https://api.githubcopilot.com/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 19
          },
          "cle": {
            "kind": "propre",
            "name": "GitHub (Microsoft)",
            "country": "US",
            "asn": "36459",
            "prev": null
          }
        },
        {
          "name": "Meta AI",
          "host": "www.meta.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_CHACHA20_POLY1305_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-07-28",
            "until": "2026-10-26",
            "names": 2
          },
          "net": {
            "ip": "57.144.254.141",
            "asn": "32934",
            "cc": "IE",
            "as": "FACEBOOK - Facebook, Inc., US"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:33Z",
          "cost": null,
          "page": {
            "final": "https://www.meta.ai/",
            "code": 403,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 478
          },
          "cle": {
            "kind": "propre",
            "name": "Meta",
            "country": "US",
            "asn": "32934",
            "prev": null
          }
        },
        {
          "name": "Le Chat (Mistral)",
          "host": "chat.mistral.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-08-22",
            "until": "2026-11-20",
            "names": 1
          },
          "net": {
            "ip": "141.101.90.105",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:39Z",
          "cost": null,
          "page": {
            "final": "https://chat.mistral.ai/chat",
            "code": 200,
            "csp": "default-src 'self'; script-src 'report-sample' 'self' 'nonce-ZiuBZ3qoSd2XotufqiJ9Vg==' 'strict-dynamic' 'unsafe-eval' blob: https://cdn.jsdelivr.net https://js.intercomcdn.com https://js.stripe.com https://static.cloudflareinsights.com https://widget.intercom.io https://*.mistral.ai; style-src 'report-sample' 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://*.mistral.ai https://fonts.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; connect-src 'self' https://o4507101628137472.ingest.de.sentry.io https://o4507101628137472.ingest.de.sentry.io https://www.google.com https://*.gstatic.com https://api-iam.eu.intercom.io https://nexus-europe-websocket.intercom.io https://widget.intercom.io https://js.intercomcdn.com wss://nexus-europe-websocket.intercom.io wss://primary-realtime-eu.intercom-messenger.com https://internet-up-realtime.intercom-messenger.com https://api.stripe.com https://js.stripe.com https://static.cloudflareinsights.com https://cdn.jsdelivr.net https://maiextintegrationsprod.blob.core.windows.net https://mistralaiblackforestprod.blob.core.windows.net https://mistralaichatupprodswe.blob.core.windows.net https://mistralaifilesapiprodswe.blob.core.windows.net https://static-assets.mistral.ai https://static-assets.mistralai.com https://*.mistral.ai wss://*.mistral.ai https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.intercomcdn.com https://fonts.gstatic.com data:; frame-ancestors 'none'; frame-src 'self' https://js.stripe.com https://canvas.mistralusercontent.com https://*.web-sandbox.mistralusercontent.com https://trytako.com; img-src 'self' blob: data: https://www.google.com https://*.gstatic.com https://maiextintegrationsprod.blob.core.windows.net https://mistralaiblackforestprod.blob.core.windows.net https://mistralaichatupprodswe.blob.core.windows.net https://mistralaifilesapiprodswe.blob.core.windows.net https://static-assets.mistral.ai https://static-assets.mistralai.com https://*.mistral.ai https://mistral.ai https://static.intercomassets.eu https://js.intercomcdn.com https://downloads.intercomcdn.eu https://avatars.githubusercontent.com; manifest-src 'self'; media-src 'self' data:; worker-src 'self' blob:; report-uri /api/csp-report?build=2026.10.17-main-46738-509c660&document=a7b740d0-248f-4c0c-94da-99b8e1c7f497; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 578614
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15552000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "API Mistral",
          "host": "api.mistral.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-08-23",
            "until": "2026-11-21",
            "names": 1
          },
          "net": {
            "ip": "162.159.142.207",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://api.mistral.ai/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 41490
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "DeepSeek",
          "host": "chat.deepseek.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-06-11",
            "until": "2026-12-25",
            "names": 1
          },
          "net": {
            "ip": "3.173.21.63",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "cloudfront",
          "server": "cloudfront",
          "at": "2026-10-19T06:14:02Z",
          "cost": null,
          "page": {
            "final": "https://chat.deepseek.com/",
            "code": 202,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "a0fea896111e.58271916.eu-west-3.token.awswaf.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 2519
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "API DeepSeek",
          "host": "api.deepseek.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-06-11",
            "until": "2026-12-25",
            "names": 1
          },
          "net": {
            "ip": "3.173.21.63",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudfront",
          "server": "elb",
          "at": "2026-10-19T06:13:55Z",
          "cost": null,
          "page": {
            "final": "https://api.deepseek.com/",
            "code": 401,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 31
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Grok",
          "host": "grok.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-14",
            "until": "2026-12-14",
            "names": 2
          },
          "net": {
            "ip": "104.18.29.234",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:49Z",
          "cost": null,
          "page": {
            "final": "https://grok.com/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'self' 'nonce-ZjMyZTIyMzQtYWE4Yi00ODhjLWEyMGItYzg0ZWEwNmMzNDg4' 'strict-dynamic' 'wasm-unsafe-eval' https://cdn.grok.com https://*.googleapis.com https://*.google.com https://*.withgoogle.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.googlesyndication.com https://*.doubleclick.net https://*.cloudflareinsights.com https://unpkg.com/@googleworkspace/drive-picker-element@0/dist/index.iife.min.js https://*.reddit.com https://embed.reddit.com/widgets.js https://*.twitter.com https://*.x.com https://analytics.tiktok.com https://sgtm-prod-985009374134.us-central1.run.app https://cdn01.boxcdn.net https://*.boxcdn.net https://*.box.com https://*.boxcloud.com https://cdn.plaid.com https://cdn.cookielaw.org https://cookie-cdn.cookiepro.com https://geolocation.onetrust.com https://privacyportal.onetrust.com https://hcaptcha.com https://*.hcaptcha.com https://*.paypal.com https://*.paypalobjects.com https://*.braintreegateway.com; worker-src 'self' blob: https://cdn.grok.com; style-src 'self' 'unsafe-inline' https://*.googleapis.com https://accounts.google.com/gsi/style https://cdn.grok.com https://cdn01.boxcdn.net https://*.boxcdn.net https://*.box.com https://*.boxcloud.com https://hcaptcha.com https://*.hcaptcha.com; img-src 'self' blob: data: https: https://assets.grok.com https://assets.grokusercontent.com https://cdn01.boxcdn.net https://*.boxcdn.net https://*.box.com https://*.boxcloud.com https://github.com https://avatars.githubusercontent.com https://media.x.ai; media-src 'self' blob: https://assets.grok.com https://assets.grokusercontent.com https://*.googleapis.com https://*.x.ai wss://*.x.ai https://*.twimg.com https://cdn.grok.com; font-src 'self' https://use.typekit.net https://fonts.gstatic.com https://cdn.grok.com https://cdn01.boxcdn.net https://*.boxcdn.net https://*.box.com https://*.boxcloud.com; frame-src 'self' blob: data: com.grokapp: intent: https://assets.grok.com https://assets.grokusercontent.com https://www.archives.gov https://arxiv.org https://*.js.stripe.com https://*.stripe.com https://hcaptcha.com https://*.hcaptcha.com https://artifacts.grokusercontent.com https://*.googleapis.com https://*.google.com https://*.withgoogle.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.googlesyndication.com https://*.doubleclick.net https://*.youtube.com https://*.microsoftonline.com https://*.live.com https://*.microsoft.com https://*.onedrive.com https://*.sharepoint.com https://challenges.cloudflare.com https://cdn01.boxcdn.net https://*.boxcdn.net https://*.box.com https://*.boxcloud.com https://cdn.plaid.com https://*.reddit.com https://groktpcontent.com https://data.x.ai https://*.twitter.com https://*.x.com https://*.grok-sandbox.com https://mcp-sandbox.grokusercontent.com https://*.paypal.com https://*.paypalobjects.com https://*.braintreegateway.com https://cdn.cookielaw.org https://cookie-cdn.cookiepro.com https://geolocation.onetrust.com https://privacyportal.onetrust.com; object-src 'none'; base-uri 'none'; form-action 'self' https://*.microsoftonline.com https://*.live.com https://*.microsoft.com https://*.onedrive.com https://*.sharepoint.com https://*.paypal.com; frame-ancestors https://x.com https://starfleet.teachx.ai; block-all-mixed-content; connect-src 'self' data: https://cdn.grok.com https://*.x.ai wss://*.x.ai https://*.twimg.com https://*.grok.com wss://*.grok.com https://*.grok-sandbox.com wss://*.grok-sandbox.com wss://*.cursorvm.com ws://localhost:* ws://127.0.0.1:* https://assets.grok.com https://assets.grokusercontent.com https://*.js.stripe.com https://*.stripe.com https://hcaptcha.com https://*.hcaptcha.com https://featureassets.org https://*.googleapis.com https://*.google.com https://*.withgoogle.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.googlesyndication.com https://*.doubleclick.net https://*.microsoftonline.com https://*.live.com https://*.microsoft.com https://*.onedrive.com https://*.sharepoint.com https://cdn01.boxcdn.net https://*.boxcdn.net https://*.box.com https://*.boxcloud.com https://sandbox.plaid.com https://production.plaid.com https://*.mixpanel.com https://us-east-1.hightouch-events.com https://*.twitter.com https://*.x.com https://analytics.tiktok.com https://sgtm-prod-985009374134.us-central1.run.app https://cdn.cookielaw.org https://cookie-cdn.cookiepro.com https://geolocation.onetrust.com https://privacyportal.onetrust.com https://*.paypal.com https://*.paypalobjects.com https://*.braintreegateway.com https://*.braintree-api.com; upgrade-insecure-requests;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.grok.com",
              "static.cloudflareinsights.com",
              "www.googletagmanager.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "camera=(self), microphone=(self), pointer-lock=(self)",
            "coop": "",
            "bytes": 395027
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "API xAI",
          "host": "api.x.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-14",
            "until": "2027-01-12",
            "names": 3
          },
          "net": {
            "ip": "104.18.18.80",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:35Z",
          "cost": null,
          "page": {
            "final": "https://api.x.ai/",
            "code": 421,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 72
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Perplexity",
          "host": "www.perplexity.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-10-13",
            "until": "2027-01-11",
            "names": 3
          },
          "net": {
            "ip": "104.18.27.48",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:37Z",
          "cost": null,
          "page": {
            "final": "https://www.perplexity.ai/",
            "code": 200,
            "csp": "object-src 'none'; base-uri 'self'; form-action 'self' https://onedrive.live.com https://*.sharepoint.com https://*.paypal.com https://*.venmo.com; frame-ancestors 'self' https://onedrive.live.com https://*.sharepoint.com https://app.athina.ai; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "pplx-next-static-public.perplexity.ai",
              "r2cdn.perplexity.ai",
              "static.cloudflareinsights.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "strict-origin",
            "permissions": "accelerometer=(), ambient-light-sensor=(), autoplay=(self \"https://www.youtube.com\"), battery=(), bluetooth=(), camera=(self), clipboard-read=(self), clipboard-write=(self \"https://js.stripe.com\"), compute-pressure=(), display-capture=(self), encrypted-media=(self \"https://www.youtube.com\"), fullscreen=(self \"https://www.youtube.com\"), geolocation=(self), gyroscope=(), hid=(), identity-credentials-get=(self \"https://accounts.google.com\"), idle-detection=(), magnetometer=(), microphone=(self), midi=(), payment=(self \"https://js.stripe.com\" \"https://checkout.link.com\" \"https://www.paypal.com\" \"https://www.sandbox.paypal.com\" \"https://www.test28.stage.paypal.com\"), picture-in-picture=(self \"https://www.youtube.com\"), publickey-credentials-get=(self \"https://js.stripe.com\" \"https://checkout.link.com\" \"https://www.paypal.com\" \"https://www.sandbox.paypal.com\" \"https://www.test28.stage.paypal.com\" \"https://acs.capitalone.com\" \"https://capitalone.com\"), publickey-credentials-create=(self \"https://js.stripe.com\" \"https://checkout.link.com\" \"https://www.paypal.com\" \"https://www.sandbox.paypal.com\" \"https://www.test28.stage.paypal.com\"), screen-wake-lock=(), serial=(), speaker-selection=(), usb=(), web-share=(), window-management=(), xr-spatial-tracking=()",
            "coop": "unsafe-none",
            "bytes": 17707
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "API Perplexity",
          "host": "api.perplexity.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-10-13",
            "until": "2027-01-11",
            "names": 3
          },
          "net": {
            "ip": "104.18.26.48",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:35Z",
          "cost": null,
          "page": {
            "final": "https://api.perplexity.ai/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 0
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Qwen",
          "host": "chat.qwen.ai",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-02-27",
            "until": "2027-03-31",
            "names": 2
          },
          "net": {
            "ip": "170.33.12.244",
            "asn": "134963",
            "cc": "SG",
            "as": "ASEPL-AS-AP - Alibaba Cloud (Singapore) Private Limited, SG"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:13:39Z",
          "cost": null,
          "page": {
            "final": "https://chat.qwen.ai/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 8234
          },
          "cle": {
            "kind": "cloud",
            "name": "Alibaba Cloud",
            "country": "CN",
            "asn": "134963",
            "prev": null
          }
        },
        {
          "name": "API Cohere",
          "host": "api.cohere.com",
          "reachable": true,
          "pq": "partial",
          "hits": 1,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-19",
            "until": "2026-12-18",
            "names": 9
          },
          "net": {
            "ip": "34.96.76.122",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "",
          "front": "google",
          "server": "envoy",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://api.cohere.com/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 74
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": null
          }
        },
        {
          "name": "API Groq",
          "host": "api.groq.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-06",
            "until": "2026-12-05",
            "names": 1
          },
          "net": {
            "ip": "104.18.38.236",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://api.groq.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 100
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "OpenRouter",
          "host": "openrouter.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-17",
            "until": "2027-01-15",
            "names": 3
          },
          "net": {
            "ip": "104.18.2.115",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=63072000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:55Z",
          "cost": null,
          "page": {
            "final": "https://openrouter.ai/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://clerk.openrouter.ai https://*.protect.clerk.com https://*.client.protect.clerk.com https://challenges.cloudflare.com https://checkout.stripe.com https://connect-js.stripe.com https://js.stripe.com https://maps.googleapis.com https://www.googletagmanager.com https://*.googletagmanager.com 'wasm-unsafe-eval' https://unpkg.com https://esm.sh https://static.cloudflareinsights.com https://cdn.jsdelivr.net https://*.algolia.net https://*.algolianet.com https://app.buildwithfern.com https://prod.ferndocs.com https://cdn.segment.com https://jobs.ashbyhq.com https://*.posthog.com https://cdn.tldraw.com; connect-src 'self' blob: https://model-assets.openrouter.ai https://clerk.openrouter.ai https://*.protect.clerk.com https://*.client.protect.clerk.com https://*.protect.clerk.com:* https://clerk-telemetry.com https://checkout.stripe.com https://api.stripe.com https://m.stripe.com https://maps.googleapis.com *.google-analytics.com https://www.googletagmanager.com https://www.google.com https://*.analytics.google.com https://analytics.google.com https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net https://fonts.googleapis.com https://raw.githubusercontent.com wss://www.walletlink.org/rpc https://static.cloudflareinsights.com https://esm.sh https://*.browser-intake-datadoghq.com https://browser-intake-us5-datadoghq.com https://rum.browser-intake-us5-datadoghq.com https://api-na2.hsforms.com https://*.algolia.net https://*.algolianet.com https://app.buildwithfern.com https://prod.ferndocs.com https://api.segment.io https://cdn.segment.com https://www.openrouter.ai https://openrouter.ai https://jobs.ashbyhq.com https://api.ashbyhq.com/ https://*.posthog.com https://cdn.tldraw.com https://wrapped.openrouter.ai https://storage.googleapis.com; frame-src 'self' https://model-assets.openrouter.ai https://*.protect.clerk.com https://*.client.protect.clerk.com https://challenges.cloudflare.com https://checkout.stripe.com https://connect-js.stripe.com https://js.stripe.com https://hooks.stripe.com https://m.stripe.network https://us5.datadoghq.com https://share-na2.hsforms.com https://www.youtube.com https://app.buildwithfern.com https://prod.ferndocs.com https://jobs.ashbyhq.com; img-src 'self' data: blob: https://*.github.io https://model-assets.openrouter.ai https://img.clerk.com https://*.stripe.com https://www.googletagmanager.com www.google.com https://*.google-analytics.com https://*.googletagmanager.com https://analytics.google.com https://*.analytics.google.com https://*.g.doubleclick.net https://source.unsplash.com https://t0.gstatic.com https://imagedelivery.net https://raw.githubusercontent.com https://*.algolia.io https://files.buildwithfern.com https://icons.ferndocs.com https://cdn.tldraw.com https://wrapped.openrouter.ai; media-src 'self' data: blob: https://model-assets.openrouter.ai https://vgi-bench-mirror.openrouter.ai; worker-src 'self' blob: data:; style-src 'self' 'unsafe-inline' sha256-0hAheEzaMe6uXIKV4EehS9pu1am1lj/KnnzrOYqckXk= https://fonts.googleapis.com https://unpkg.com https://cdn.jsdelivr.net https://app.buildwithfern.com https://prod.ferndocs.com https://jobs.ashbyhq.com https://*.posthog.com https://cdn.tldraw.com; frame-ancestors 'self'; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdn.tldraw.com; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "clerk.openrouter.ai",
              "static.cloudflareinsights.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff,nosniff",
            "referrer": "no-referrer, strict-origin-when-cross-origin,no-referrer, strict-origin-when-cross-origin",
            "permissions": "payment=(self \"https://checkout.stripe.com\" \"https://connect-js.stripe.com\" \"https://js.stripe.com\" \"https://*.js.stripe.com\" \"https://hooks.stripe.com\"),payment=(self \"https://checkout.stripe.com\" \"https://connect-js.stripe.com\" \"https://js.stripe.com\" \"https://*.js.stripe.com\" \"https://hooks.stripe.com\")",
            "coop": "",
            "bytes": 181418
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Hugging Face",
          "host": "huggingface.co",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-08-14",
            "until": "2027-02-27",
            "names": 2
          },
          "net": {
            "ip": "18.155.129.60",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudfront",
          "server": "",
          "at": "2026-10-19T06:14:16Z",
          "cost": null,
          "page": {
            "final": "https://huggingface.co/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "de5282c3ca0c.edge.sdk.awswaf.com"
            ],
            "xfo": "DENY",
            "xcto": "",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "same-origin",
            "bytes": 177668
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Inférence Hugging Face",
          "host": "router.huggingface.co",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-08-14",
            "until": "2027-02-27",
            "names": 2
          },
          "net": {
            "ip": "13.249.228.123",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudfront",
          "server": "",
          "at": "2026-10-19T06:14:21Z",
          "cost": null,
          "page": {
            "final": "https://router.huggingface.co/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "same-origin",
            "bytes": 9
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Amazon Bedrock, Paris",
          "host": "bedrock-runtime.eu-west-3.amazonaws.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-01-25",
            "until": "2027-02-23",
            "names": 1
          },
          "net": {
            "ip": "13.37.39.106",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:13:38Z",
          "cost": null,
          "page": {
            "final": "https://bedrock-runtime.eu-west-3.amazonaws.com/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 29
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Cursor",
          "host": "api2.cursor.sh",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-10-13",
            "until": "2027-04-28",
            "names": 3
          },
          "net": {
            "ip": "52.21.130.202",
            "asn": "14618",
            "cc": "US",
            "as": "AMAZON-AES - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "other",
          "server": "envoy",
          "at": "2026-10-19T06:13:39Z",
          "cost": null,
          "page": {
            "final": "https://api2.cursor.sh/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 131
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "14618",
            "prev": null
          }
        },
        {
          "name": "Scaleway Generative APIs",
          "host": "api.scaleway.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-21",
            "until": "2026-12-20",
            "names": 2
          },
          "net": {
            "ip": "51.159.86.116",
            "asn": "12876",
            "cc": "FR",
            "as": "AS12876 - Scaleway SAS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "envoy",
          "at": "2026-10-19T06:13:35Z",
          "cost": null,
          "page": {
            "final": "https://api.scaleway.ai/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 72
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Scaleway",
            "country": "FR",
            "asn": "12876",
            "prev": null
          }
        },
        {
          "name": "OVHcloud AI Endpoints",
          "host": "oai.endpoints.kepler.ai.cloud.ovh.net",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-08-22",
            "until": "2026-11-20",
            "names": 4
          },
          "net": {
            "ip": "51.68.117.147",
            "asn": "16276",
            "cc": "FR",
            "as": "OVH - OVH SAS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "kong/3.9.4",
          "at": "2026-10-19T06:13:55Z",
          "cost": null,
          "page": {
            "final": "https://oai.endpoints.kepler.ai.cloud.ovh.net/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 148
          },
          "cle": {
            "kind": "hebergeur",
            "name": "OVHcloud",
            "country": "FR",
            "asn": "16276",
            "prev": null
          }
        },
        {
          "name": "Albert (État)",
          "host": "albert.api.etalab.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-08-28",
            "until": "2026-11-26",
            "names": 4
          },
          "net": {
            "ip": "142.44.61.228",
            "asn": "50624",
            "cc": "FR",
            "as": "OUTSCALE - Outscale SASU, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://albert.api.etalab.gouv.fr/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 22
          },
          "cle": {
            "kind": "hebergeur",
            "name": "3DS Outscale",
            "country": "FR",
            "asn": "50624",
            "prev": null
          }
        },
        {
          "name": "LightOn",
          "host": "lighton.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-10-02",
            "until": "2026-12-31",
            "names": 1
          },
          "net": {
            "ip": "216.150.16.65",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000",
          "front": "other",
          "server": "vercel",
          "at": "2026-10-19T06:13:52Z",
          "cost": null,
          "page": {
            "final": "https://www.lighton.ai/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "consent.cookiebot.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 135671
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        }
      ]
    },
    {
      "key": "cac40",
      "label": {
        "fr": "CAC 40",
        "en": "CAC 40",
        "es": "CAC 40"
      },
      "entries": [
        {
          "name": "Accor",
          "host": "group.accor.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-08-27",
            "until": "2026-11-25",
            "names": 20
          },
          "net": {
            "ip": "45.60.155.180",
            "asn": "19551",
            "cc": "US",
            "as": "INCAPSULA - Incapsula Inc, US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudfront",
          "server": "",
          "at": "2026-10-19T06:13:49Z",
          "cost": null,
          "page": {
            "final": "https://group.accor.com/fr",
            "code": 200,
            "csp": "default-src 'self' 'unsafe-inline' data:;;script-src 'self' 'unsafe-eval' 'unsafe-inline' players.brightcove.net vjs.zencdn.net *.contentsquare.net app.contentsquare.com;;script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' cdn.jsdelivr.net www.youtube.com snap.licdn.com siteintercept.qualtrics.com zn1ozcgbmcuc4phgv-allaccor.siteintercept.qualtrics.com cdn.cookielaw.org www.googletagmanager.com players.brightcove.net *.contentsquare.net;;style-src 'self' 'unsafe-inline' players.brightcove.net;;style-src-elem 'self' 'unsafe-inline' cdn.jsdelivr.net;;img-src https: data: 'self' 'unsafe-inline' players.brightcove.net *.boltdns.net *.akamaihd.net *.contentsquare.net;;frame-src https://www.youtube-nocookie.com https://www.youtube.com https://global.frcapi.com https://www.google.com https://charts.symex.be https://players.brightcove.net https://allaccor.qualtrics.com;;connect-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.youtube.com https://px.ads.linkedin.com https://privacyportal-de.onetrust.com/ https://*.google-analytics.com https://cdn.cookielaw.org https://siteintercept.qualtrics.com https://rum-ingest.eu0.signalfx.com https://*.brightcovecdn.com https://manifest.prod.boltdns.net https://accor.symex.be https://*.algolia.net https://players.brightcove.net https://edge.api.brightcove.com *.contentsquare.net *.contentsquare.com;;media-src 'self' blob: *.brightcovecdn.com *.boltdns.net;;worker-src 'self' blob:;;child-src blob:;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), fullscreen=(self \"https://players.brightcove.net\"), camera=(), display-capture=()",
            "coop": "",
            "bytes": 807184
          },
          "cle": {
            "kind": "cdn",
            "name": "Imperva",
            "country": "US",
            "asn": "19551",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Imperva",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Air Liquide",
          "host": "www.airliquide.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Sectigo Limited",
            "from": "2026-01-22",
            "until": "2027-02-15",
            "names": 2
          },
          "net": {
            "ip": "23.40.3.181",
            "asn": "16625",
            "cc": "US",
            "as": "AKAMAI-AS - Akamai Technologies, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:03Z",
          "cost": null,
          "page": {
            "final": "https://www.airliquide.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 166439
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "16625",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Airbus",
          "host": "www.airbus.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-09-10",
            "until": "2026-12-09",
            "names": 149
          },
          "net": {
            "ip": "107.154.76.155",
            "asn": "19551",
            "cc": "US",
            "as": "INCAPSULA - Incapsula Inc, US"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:02Z",
          "cost": null,
          "page": {
            "final": "https://www.airbus.com/en",
            "code": 200,
            "csp": "default-src 'self' https: 'unsafe-inline' 'unsafe-eval' chrome-extension: data: *.googleapis.com *.gstatic.com *.googleusercontent.com; script-src 'self' https: 'unsafe-inline' 'unsafe-eval' https://recaptcha.net https://cdn.cookielaw.org  blob:; object-src https:; style-src 'unsafe-inline' https:; img-src 'self' https: *.keepeek-dev.com *.keepeek.com https://cdn.cookielaw.org mediaassets.airbus.com data:; media-src 'self' https: *.keepeek-dev.com *.keepeek.com blob:; frame-src 'self' https: https://www.youtube.com/embed/ https://youtu.be https://www.google.com/maps/ *.keepeek-dev.com *.keepeek.com https://airbus2024eutfm.q4web.com; child-src blob: https://airbus2024eutfm.q4web.com; font-src https: data:; connect-src https: wss://ws.hotjar.com; report-uri /report-csp-violation; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 248367
          },
          "cle": {
            "kind": "cdn",
            "name": "Imperva",
            "country": "US",
            "asn": "19551",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Imperva",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "ArcelorMittal",
          "host": "corporate.arcelormittal.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-24",
            "until": "2026-12-23",
            "names": 1
          },
          "net": {
            "ip": "104.18.15.247",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:43Z",
          "cost": null,
          "page": {
            "final": "https://corporate.arcelormittal.com/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'nonce-MjU5ZTY3OWYtYmZjNS00OTFjLWJlYmYtNzI2OTg1ZmNjZjAy' 'strict-dynamic' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://*.userway.org; img-src 'self' https://cdn.arcelormittal.com blob: data: https://www.googletagmanager.com https://imgsct.cookiebot.com https://*.clarity.ms https://*.userway.org https://i.vimeocdn.com; font-src 'self'; object-src 'none'; connect-src 'self' https://cdn.arcelormittal.com https://*.userway.org https://api.mapbox.com https://consentcdn.cookiebot.com https://events.mapbox.com https://player.vimeo.com https://www.youtube.com https://vod-adaptive-ak.vimeocdn.com https://*.clarity.ms https://*.google-analytics.com; base-uri 'self'; frame-src https://gateway.zscalertwo.net https://*.userway.org https://*.euroland.com https://open.spotify.com https://www.google.com https://player.vimeo.com https://vod-adaptive-ak.vimeocdn.com https://www.youtube.com https://consentcdn.cookiebot.com https://w.soundcloud.com; form-action 'self'; media-src 'self' blob: data: https://player.vimeo.com https://vod-adaptive-ak.vimeocdn.com; frame-ancestors 'none'; manifest-src 'self'; upgrade-insecure-requests;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "interest-cohort=()",
            "coop": "",
            "bytes": 1759641
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "AXA",
          "host": "www.axa.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_CHACHA20_POLY1305_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2025-10-03",
            "until": "2026-11-03",
            "names": 1
          },
          "net": {
            "ip": "171.18.96.175",
            "asn": "12696",
            "cc": "FR",
            "as": "AXA-TECH - AXA Technology Services France GIE, FR"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "other",
          "server": "aws",
          "at": "2026-10-19T06:14:05Z",
          "cost": null,
          "page": {
            "final": "https://www.axa.com/fr",
            "code": 200,
            "csp": "default-src 'self' * data: 'unsafe-inline' 'unsafe-eval';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 909036
          },
          "cle": {
            "kind": "propre",
            "name": "AXA Technology Services",
            "country": "FR",
            "asn": "12696",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "AXA Technology Services",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "BNP Paribas",
          "host": "group.bnpparibas",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Inc",
            "from": "2026-09-10",
            "until": "2027-03-27",
            "names": 17
          },
          "net": {
            "ip": "2.21.211.140",
            "asn": "16625",
            "cc": "NL",
            "as": "AKAMAI-AS - Akamai Technologies, Inc., US"
          },
          "hsts": "max-age=15768000",
          "front": "akamai",
          "server": "akamaighost",
          "at": "2026-10-19T06:13:50Z",
          "cost": null,
          "page": {
            "final": "https://group.bnpparibas/",
            "code": 200,
            "csp": "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn-group.bnpparibas.com",
              "group.bnpparibas",
              "www.googletagmanager.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), ambient-light-sensor=(), battery=(), camera=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), screen-wake-lock=(), usb=(), xr-spatial-tracking=()",
            "coop": "same-origin-allow-popups",
            "bytes": 134198
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "16625",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15768000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Bouygues",
          "host": "www.bouygues.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-10-16",
            "until": "2027-01-14",
            "names": 12
          },
          "net": {
            "ip": "23.192.237.136",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "",
          "front": "akamai",
          "server": "",
          "at": "2026-10-19T06:14:07Z",
          "cost": null,
          "page": {
            "final": "https://www.bouygues.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "consent.cookiebot.com",
              "www.bouygues.com",
              "www.youtube.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 323650
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Bureau Veritas",
          "host": "group.bureauveritas.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-06-06",
            "until": "2026-12-20",
            "names": 1
          },
          "net": {
            "ip": "52.222.201.39",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudfront",
          "server": "nginx",
          "at": "2026-10-19T06:14:15Z",
          "cost": null,
          "page": {
            "final": "https://group.bureauveritas.com/",
            "code": 200,
            "csp": "default-src 'self' https://*.bureauveritas.com; script-src 'self' blob: *.googletagmanager.com tagmanager.google.com https://www.google.com/recaptcha/api.js https://www.recaptcha.net/recaptcha/api.js https://www.gstatic.com/recaptcha/ https://*.amcharts.com https://player.ausha.co https://*.matomo.cloud https://tools.euroland.com/ https://*.privacy-center.org/ https://*.bureauveritas.com www.youtube.com; object-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com https://cdnjs.cloudflare.com/ajax/libs/codemirror/ https://cdnjs.cloudflare.com/ajax/libs/select2/ *.twitter.com tagmanager.google.com https://cdn.jsdelivr.net/gh/cferdinandi/tabby@12.0.3/dist/css/tabby-ui.min.css https://cdn.jsdelivr.net/gh/jackocnr/ https://*.bureauveritas.com; img-src 'self' data: *.google-analytics.com https://cdn.rawgit.com/ckeditor/ckeditor-dev/ https://raw.githubusercontent.com/ckeditor/ckeditor-dev/ www.googletagmanager.com *.twitter.com *.twimg.com *.gstatic.com https://stats.g.doubleclick.net https://www.wysistat.com/images/groupbureauveritas/ www.etracker.de https://*.analytics.google.com https://i.ytimg.com/ https://*.privacy-center.org/ https://*.bureauveritas.com; media-src 'self' https://*.bureauveritas.com; frame-src 'self' www.youtube.com/ tools.eurolandir.com cws.huginonline.com www.googletagmanager.com *.twitter.com inpublic.globenewswire.com https://sdk.companywebcast.com/sdk/player/ player.youku.com cache.bureauveritas.com pr.globenewswire.com www.globenewswire.com https://www.google.com/ https://player.ausha.co https://www.recaptcha.net https://youtu.be/ https://secure.webpublication.fr/ https://channel.royalcast.com/ https://bureauveritas.engagestream.euronext.com/; frame-ancestors 'self'; child-src 'self' blob:; font-src 'self' data: fonts.googleapis.com fonts.gstatic.com https://*.bureauveritas.com; connect-src 'self' https://tools.eurolandir.com/tools/pricefeed/RequestStockDataBundleXML.aspx https://bam.nr-data.net/ https://stats.g.doubleclick.net https://bam-cell.nr-data.net/ https://*.google-analytics.com  https://*.analytics.google.com https://groupbureauveritas.matomo.cloud/ https://*.privacy-center.org/ https://*.bureauveritas.com https://*.amcharts.com; report-uri https://csp-report-uri.bureauveritas.com",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn1-group.bureauveritas.com",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 119257
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Capgemini",
          "host": "www.capgemini.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-18",
            "until": "2026-12-17",
            "names": 2
          },
          "net": {
            "ip": "192.0.66.187",
            "asn": "2635",
            "cc": "US",
            "as": "AUTOMATTIC - Automattic, Inc, US"
          },
          "hsts": "max-age=31536000;includesubdomains",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:14:09Z",
          "cost": null,
          "page": {
            "final": "https://www.capgemini.com/",
            "code": 200,
            "csp": "default-src 'unsafe-eval' 'unsafe-inline' * blob:; script-src 'unsafe-inline' 'unsafe-eval' * blob:; img-src * data:; connect-src *; font-src * data:; upgrade-insecure-requests; block-all-mixed-content",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.parsely.com",
              "consent.trustarc.com",
              "static.elfsight.com",
              "stats.wp.com",
              "www.capgemini.com",
              "www.youtube.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer",
            "permissions": "geolocation=(self), microphone=()",
            "coop": "",
            "bytes": 269513
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Automattic (WordPress VIP)",
            "country": "US",
            "asn": "2635",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Automattic (WordPress VIP)",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000;includesubdomains",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 6
              }
            }
          }
        },
        {
          "name": "Carrefour",
          "host": "www.carrefour.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-13",
            "until": "2027-01-11",
            "names": 1
          },
          "net": {
            "ip": "104.18.35.216",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=2592000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:09Z",
          "cost": null,
          "page": {
            "final": "https://www.carrefour.com/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "geolocation=(),midi=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()",
            "coop": "",
            "bytes": 36618
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=2592000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Crédit Agricole",
          "host": "www.credit-agricole.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_CHACHA20_POLY1305_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-02-23",
            "until": "2027-02-23",
            "names": 7
          },
          "net": {
            "ip": "158.191.171.18",
            "asn": "9159",
            "cc": "FR",
            "as": "UNSPECIFIED - Credit Agricole SA, FR"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:14Z",
          "cost": null,
          "page": {
            "final": "https://www.credit-agricole.com/",
            "code": 200,
            "csp": "frame-ancestors 'self' *.credit-agricole.com",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "maps.googleapis.com",
              "tag.aticdn.net"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 202758
          },
          "cle": {
            "kind": "propre",
            "name": "Crédit Agricole",
            "country": "FR",
            "asn": "9159",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Crédit Agricole",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Danone",
          "host": "www.danone.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-10-09",
            "until": "2026-12-20",
            "names": 79
          },
          "net": {
            "ip": "151.101.123.10",
            "asn": "54113",
            "cc": "US",
            "as": "FASTLY - Fastly, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "fastly",
          "server": "",
          "at": "2026-10-19T06:14:15Z",
          "cost": null,
          "page": {
            "final": "https://www.danone.com/",
            "code": 200,
            "csp": "default-src 'self'; \tstyle-src 'self' *.clarity.ms/ *.algolia.io/ https://forms.office.com/ *.adobe.io/ *.mikmak.ai/ *.swaven.com/ *.aptaclub.com/ https://sibforms.com/ *.q4web.com/ *.adobe.com/ *.unpkg.com/ https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js https://s.pinimg.com/ct/core.js/ *.jsdelivr.net/ *.algolia.net/ *.algolianet.com/ *.audioeye.com/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.ylt.nl/ *.danone.id/ https://yourdriversfordanonebenelux.com/  *.weezevent.com/ *.snapchat.com/ *.mathtag.com/ *.clevy.io/ *.commandersact.com/ *.twimg.com/ *.twitter.com/ *.live2support.com/ *.lpsnmedia.net/ *.googletagmanager.com/ *.gstatic.com/ *.commander1.com/ *.bootstrapcdn.com/ *.tagcommander.com/ *.zencdn.net/ *.sharethis.com/ *.googleapis.com/ *.google.com/ 'unsafe-inline';     script-src 'self' *.clarity.ms/ *.algolia.io/ https://forms.office.com/ *.adobe.io/ *.aptaclub.com/ *.q4web.com/ *.unpkg.com/ *.adobe.com/ https://sibforms.com/forms/end-form/build/main.js https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js  https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js https://s.pinimg.com/ct/core.js/  https://js-agent.newrelic.com/ *.jsdelivr.net/ *.algolia.net/ *.algolianet.com/ *.audioeye.com/ *.github.io/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.seg.js/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.ylt.nl/ *.danone.id/ https://yourdriversfordanonebenelux.com/ *.weezevent.com/ *.snapchat.com/ *.mikmak.ai/ *.mathtag.com/ *.ads-twitter.com/ *.clevy.io/ *.tiktok.com/ https://sc-static.net/ *.hypemarks.com/ *.licdn.com/ *.commandersact.com/ *.twimg.com/ *.trustcommander.net/ *.cdn.syndication.twimg.com/ *.zencdn.net/ https://telegram.org/ https://youtube.com/iframe_api *.youtube.com/ *.youtube-nocookie.com/ *.twitter.com/ *.pinterest.com/ *.ytimg.com/ *.secutix.com/ *.swaven.com/ *.live2support.com/ *.googletagmanager.com/ *.tagcommander.com/ *.facebook.net/ *.google.ie/ *.google.de/ *.lpsnmedia.net/ *.hotjar.com/ *.outbrain.com/ *.google.com/ *.googleadservices.com/ *.google-analytics.com/ *.sharethis.com *.addthis.com/ *.live2support.com/ *.doubleclick.net/ *.googleapis.com/ *.google.com/ *.theadex.com *.commander1.com/ *.liveperson.net/ *.doubleclick.net/ *.gstatic.com/ *.digital4danone.com/ *.addthisedge.com/ 'unsafe-inline' 'unsafe-eval' blob:;     img-src 'self' *.clarity.ms/ *.algolia.io/ *.adobe.io/ https://forms.office.com/ *.aptaclub.com/ *.q4web.com/ *.unpkg.com/ *.adobe.com/ https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js  https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js  https://s.pinimg.com/ct/core.js/ *.google.com.mx/ *.jsdelivr.net/ *.algolia.net/ *.algolianet.com/ *.audioeye.com/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.ytimg.com/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.google-analytics.com/ *.analytics.google.com/ *.ylt.nl/ *.danone.id/ https://yourdriversfordanonebenelux.com/  *.weezevent.com/ *.snapchat.com/ *.mathtag.com/ data: *.digital4danone.com/ *.clevy.io/ *.digital4danone.com.cn/ https://t.co/ *.hypemarks.com/ *.linkedin.com/ *.assetsadobe.com/ *.live2support.com/ *.twimg.com/ *.mikmak.ai/ *.swaven.com/ *.twitter.com/ *.trustcommander.net/ *.cdninstagram.com/ *.outbrain.com/ *.danone.com/ *.commander1.com/ *.tagcommander.com/ *.lpsnmedia.net/ *.adnxs.com/ *.adition.com/ *.doubleclick.net/ *.instagram.com/ *.soundcloud.com/ *.pinterest.com/ *.google.ie/ *.google.co.in/ *.theadex.com/ *.google-analytics.com/ *.google.com.ph/ *.google.com/ *.sharethis.com/ *.gstatic.com/ *.googleapis.com/ *.w3.org/ *.mookie1.com/ *.facebook.com/ *.googletagmanager.com/ *.youtube-nocookie.com/ *.youtube.com/;     frame-src 'self' *.algolia.io/ https://forms.office.com/ https://forms.cloud.microsoft/ *.aptaclub.com/ *.googletagmanager.com/ *.adobe.io/ *.q4web.com/ *.unpkg.com/ *.adobe.com/ https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js  https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js https://s.pinimg.com/ct/core.js/ *.jsdelivr.net/ *.algolia.net/ *.algolianet.com/ *.audioeye.com/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.ylt.nl/ *.danone.id/ https://yourdriversfordanonebenelux.com/  *.weezevent.com/ *.snapchat.com/ *.mathtag.com/ *.clevy.io/ *.tintup.com/ *.commandersact.com/ *.vimeo.com/ *.linkedin.com/ *.instagram.com/ *.soundcloud.com/ *.pinterest.com/ *.twitter.com/ https://cdn.trustcommander.net/ https://t.me/ https://static.rolex.com/ *.mikmak.ai/ *.swaven.com/ *.ausha.co/ *.q4europe.com/ *.tohklom.com/  *.tagcommander.com/ *.liveperson.net/ *.live2support.com/ *.google.com/ *.lpsnmedia.net/ *.hotjar.com/ *.commander1.com/ *.proprofs.com/ *.facebook.com/ *.doubleclick.net/ *.theadex.com/ *.sharethis.com/ *.addthis.com/ *.youtube.com/ *.youtube-nocookie.com/ *.adsrvr.org/ *.cloudfront.net/ *.spotify.com/ *.hypemarks.com/ *.mangue.tech/;     connect-src 'self' *.clarity.ms/ *.algolia.io/ https://forms.office.com/ *.sibforms.com/ *.adobe.io/ *.aptaclub.com/ *.q4web.com/ *.unpkg.com/ *.adobe.com/ https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js  https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js https://s.pinimg.com/ct/core.js/ https://bam.eu01.nr-data.net/ *.google.com/ *.jsdelivr.net/ *.algolia.net/ *.googletagmanager.com/ *.algolianet.com/ *.audioeye.com/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.scene7.com/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.google-analytics.com/ *.analytics.google.com/ *.ylt.nl/ *.danone.id/ *.weezevent.com/ https://yourdriversfordanonebenelux.com/  *.snapchat.com/ *.mathtag.com/ *.tiktok.com/ *.clevy.io/ *.commandersact.com/ *.googleapis.com/ *.privacy.commander1.com/ *.privacy.trustcommander.net/ https://privacy.trustcommander.net/ https://privacy.commander1.com/ *.q4europe.com/ *.mikmak.ai/ *.swaven.com/ *.youtube.com/ *.youtube-nocookie.com/ *.live2support.com/ *.addthis.com/ *.google-analytics.com *.facebook.com/ *.instagram.com/ *.secutix.com/ *.omtrdc.net/ *.sharethis.com/ *.doubleclick.net/;     font-src 'self' *.algolia.io/ *.adobe.io/ https://forms.office.com/ *.aptaclub.com/ *.q4web.com/ *.unpkg.com/ *.googletagmanager.com/ *.adobe.com/ https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js  https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js https://s.pinimg.com/ct/core.js/ https://assets.brevo.com/ *.jsdelivr.net/ *.algolia.net/ *.algolianet.com/ *.audioeye.com/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.mikmak.ai/ *.swaven.com/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.ylt.nl/ *.danone.id/ https://yourdriversfordanonebenelux.com/ *.weezevent.com/ *.snapchat.com/ *.mathtag.com/ *.commandersact.com/ *.live2support.com/ data: *.amazonaws.com/ *.gstatic.com/ *.zencdn.net/;     media-src 'self' *.algolia.io/ *.adobe.io/ https://forms.office.com/ *.aptaclub.com/ *.q4web.com/ *.unpkg.com/ *.adobe.com/ https://widgets.q4app.com/widgets/requireslib/pym.v1.min.js  https://unpkg.com/aos@next/dist/aos.css https://unpkg.com/aos@next/dist/aos.js https://s.pinimg.com/ct/core.js/ *.jsdelivr.net/ *.algolia.net/ *.mikmak.ai/ *.swaven.com/ *.algolianet.com/ *.audioeye.com/ *.danonenorthamerica.com/ *.scene7.com/ *.adobeaemcloud.com/ *.digital4danone.com/ *.aemcs.digital4danone.com/ *.danone.com/ *.ylt.nl/ *.danone.id/ https://yourdriversfordanonebenelux.com/ *.weezevent.com/ *.googletagmanager.com/ *.snapchat.com/ *.mathtag.com/ *.lpsnmedia.net/ *.digital4danone.com/ blob:",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.tagcommander.com",
              "static.aemcs.digital4danone.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin",
            "permissions": "geolocation=*",
            "coop": "",
            "bytes": 242013
          },
          "cle": {
            "kind": "cdn",
            "name": "Fastly",
            "country": "US",
            "asn": "54113",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Fastly",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Dassault Systèmes",
          "host": "www.3ds.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-10-17",
            "until": "2027-01-15",
            "names": 1
          },
          "net": {
            "ip": "23.33.90.158",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=86400",
          "front": "akamai",
          "server": "",
          "at": "2026-10-19T06:14:01Z",
          "cost": null,
          "page": {
            "final": "https://www.3ds.com/",
            "code": 200,
            "csp": "frame-ancestors *.3ds.com *.solidworks.com; base-uri 'self'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "analytics.ahrefs.com",
              "tracking.3ds.com",
              "www.3ds.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), geolocation=(self), fullscreen=(self \"https://www.youtube.com\" \"https://player.youku.com\" \"https://*.3ds.com\" \"https://*.solidworks.com\" \"https://*.draftsight.com\" \"https://delmiaworks.com\" \"https://blog.3dexperienceworks.com\" \"https://edrawingsviewer.com\" \"https://3dexperienceworld.com\" \"https://3dexperienceworks.com\"), autoplay=(self), camera=(self), display-capture=(), encrypted-media=(), gyroscope=(), magnetometer=(), microphone=(self), midi=(), payment=(self), picture-in-picture=(self), publickey-credentials-get=(), sync-xhr=(), usb=(), wake-lock=(), xr-spatial-tracking=(), notifications=(self), push=(self)",
            "coop": "",
            "bytes": 599117
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=86400",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Eiffage",
          "host": "www.eiffage.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-08-29",
            "until": "2026-11-27",
            "names": 1
          },
          "net": {
            "ip": "104.18.17.127",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:19Z",
          "cost": null,
          "page": {
            "final": "https://www.eiffage.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "cdn.tagcommander.com",
              "www.google.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 154543
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Engie",
          "host": "www.engie.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-05-26",
            "until": "2026-12-10",
            "names": 3
          },
          "net": {
            "ip": "143.204.194.83",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudfront",
          "server": "engie",
          "at": "2026-10-19T06:14:44Z",
          "cost": null,
          "page": {
            "final": "https://www.engie.com/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.google.com/recaptcha https://maps.googleapis.com https://maps.google.com https://fonts.googleapis.com https://fonts.gstatic.com https://cdn.cookielaw.org https://geolocation.onetrust.com https://privacyportal.onetrust.com https://cdn.addevent.com https://www.addevent.com https://ams.wpml.org https://cdn.siteimprove.net *.engie.com *.myengie.com *.myoddcloud.com https://charts.symex.be https://matomo.tooling.myoddcloud.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://cdn.cookielaw.org https://geolocation.onetrust.com https://privacyportal.onetrust.com https://ams.wpml.org *.engie.com *.myengie.com *.myoddcloud.com https://design.engie.com https://assets.design.digital.engie.com; img-src 'self' *.engie.com *.myengie.com *.myoddcloud.com https://cdn.cookielaw.org https://www.youtube.com https://www.youtube-nocookie.com https://i.ytimg.com https://design.engie.com https://assets.design.digital.engie.com https://upload.wikimedia.org https://secure.gravatar.com data: blob: https://matomo.tooling.myoddcloud.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com *.engie.com *.myengie.com *.myoddcloud.com https://design.engie.com https://assets.design.digital.engie.com data:; connect-src 'self' https://engie.symex.be *.engie.com *.myengie.com *.myoddcloud.com https://www.google-analytics.com https://cdn.cookielaw.org https://geolocation.onetrust.com https://privacyportal.onetrust.com https://charts.symex.be https://matomo.tooling.myoddcloud.com wss:; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://i.ytimg.com https://www.google.com https://cdn.cookielaw.org *.engie.com *.myengie.com *.myoddcloud.com https://charts.symex.be; media-src 'self' *.engie.com *.myengie.com *.myoddcloud.com blob: data:; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; form-action 'self' *.engie.com *.myengie.com *.myoddcloud.com;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "www.engie.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), autoplay=(self), camera=(), display-capture=(), encrypted-media=*, fullscreen=*, geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=*, publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(self), usb=(), web-share=(self), xr-spatial-tracking=()",
            "coop": "",
            "bytes": 291094
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "EssilorLuxottica",
          "host": "www.essilorluxottica.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Inc",
            "from": "2026-08-25",
            "until": "2027-03-11",
            "names": 100
          },
          "net": {
            "ip": "23.33.90.146",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:20Z",
          "cost": null,
          "page": {
            "final": "https://www.essilorluxottica.com/fr/",
            "code": 200,
            "csp": "frame-ancestors 'self' http://*.essilorluxottica.com https://*.essilorluxottica.com;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "Deny",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 65421
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Eurofins Scientific",
          "host": "www.eurofins.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "SecP384r1MLKEM1024",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-06-15",
            "until": "2026-12-30",
            "names": 3
          },
          "net": {
            "ip": "166.117.56.106",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:21Z",
          "cost": null,
          "page": {
            "final": "https://www.eurofins.com:443/en/",
            "code": 200,
            "csp": "",
            "csp_ro": "connect-src 'self' https://*.eurofins.com https://*.amazonaws.com https://*.googleapis.com https://*.gstatic.com https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; default-src 'self'; font-src 'self' data: https://*.eurofins.com https://*.googleapis.com https://*.gstatic.com; frame-src 'self' https://*.eurofins.com https://*.youtube.com https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; img-src 'self' data: https://*.eurofins.com https://*.amazonaws.com https://*.googleapis.com https://*.gstatic.com https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; object-src 'none'; script-src 'self' https://*.eurofins.com https://*.googleapis.com https://*.gstatic.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ 'strict-dynamic' 'nonce-AqBmNlbfEn/nwfwK7IIDWQ=='; style-src-elem 'self' https://*.eurofins.com https://*.googleapis.com 'unsafe-inline'; style-src 'self' https://*.eurofins.com https://*.googleapis.com 'unsafe-inline'",
            "meta_csp": "",
            "scripts": [
              "cdn-ukwest.onetrust.com",
              "cdnmediaassets.eurofins.com",
              "maps.googleapis.com",
              "unpkg.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "camera=(), microphone=(), geolocation=()",
            "coop": "",
            "bytes": 254406
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 5
              }
            }
          }
        },
        {
          "name": "Euronext",
          "host": "www.euronext.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-02-09",
            "until": "2027-03-10",
            "names": 2
          },
          "net": {
            "ip": "13.227.173.128",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=16070400; includesubdomains",
          "front": "cloudfront",
          "server": "cloudfront",
          "at": "2026-10-19T06:14:45Z",
          "cost": null,
          "page": {
            "final": "https://www.euronext.com/en",
            "code": 200,
            "csp": "default-src 'self' *.icons8.com *.hotjar.com data: *.doubleclick.net *.wistia.net *.euronext.com *.youtube.com *.google.com *.onetrust.com *.cookielaw.org *.google.fr; child-src 'self' *.youtube.com *.youtu.be *.hotjar.com *.twitter.com *.piktochart.com *.euronext.com *.docs.google.com *.googletagmanager.com *.wistia.com *.wistia.net blob:; connect-src 'self' *.cookielaw.org *.google-analytics.com *.freshworks.com *.mapbox.com *.euronext.com *.hotjar.com *.hotjar.io ws.hotjar.com ws: *.onetrust.com *.wistia.net *.wistia.com *.doubleclick.net www.googleadservices.com *.googleapis.com *.g.doubleclick.net *.google.com *.google.fr *.freshdesk.com *.linkedin.com *.companywebcast.com https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' *.euronext.com maxcdn.icons8.com *.doubleclick.net *.google.com fonts.gstatic.com embed.tawk.to data: *.hotjar.com *.wistia.net; frame-src 'self' *.youtube.com *.youtu.be *.hotjar.com *.twitter.com *.piktochart.com *.euronext.com *.google.com *.wistia.com *.wistia.net *.companywebcast.com *.googletagmanager.com; img-src 'self' *.cookielaw.org *.ytimg.com *.w3.org data: *.euronext.com *.googletagmanager.com blob: *.globenewswire.com *.wistia.net *.wistia.com *.google-analytics.com www.googleadservices.com *.google.com *.google.fr *.linkedin.com *.gstatic.com https://www.google-analytics.com https://www.googletagmanager.com; media-src 'self' blob: *.wistia.com; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googleapis.com *.googletagmanager.com *.cookielaw.org *.google-analytics.com *.euronext.com *.mapbox.com *.datatables.net *.jsdelivr.net *.cloudflare.com *.jquery.com *.knightlab.com *.twitter.com *.polyfill.io *.unpkg.com *.mdbootstrap.com *.rawgit.com *.bootstrapcdn.com *.google.com *.freshworks.com *.youtu.be *.doubleclick.net *.gstatic.com *.schema.org *.hotjar.com *.drupal.org *.wistia.com *.youtube.com *.wistia.net *.licdn.com *.companywebcast.com api.mapbox.com cdn.datatables.net cdn.jsdelivr.net cdnjs.cloudflare.com code.jquery.com https://cdn.jsdelivr.net https://cdn.knightlab.com https://cdnjs.cloudflare.com https://platform.twitter.com https://polyfill-fastly.io mdbootstrap.com platform.twitter.com stackpath.bootstrapcdn.com; style-src 'self' 'unsafe-inline' *.icons8.com *.freshworks.com *.gstatic.com *.ytimg.com *.ggpht.com *.wistia.com *.euronext.com *.cookielaw.org *.googletagmanager.com cdn.jsdelivr.net cdnjs.cloudflare.com fonts.googleapis.com https://cdn.knightlab.com https://cdnjs.cloudflare.com maxcdn.icons8.com mdbootstrap.com stackpath.bootstrapcdn.com use.fontawesome.com; style-src-attr 'self' 'unsafe-inline' 'unsafe-hashes'; frame-ancestors 'self' *.euronext.com",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "api.mapbox.com",
              "cdn.datatables.net",
              "cdnjs.cloudflare.com",
              "code.jquery.com",
              "stackpath.bootstrapcdn.com",
              "www.euronext.com",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "nosniff,nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 457112
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=16070400; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 7
              }
            }
          }
        },
        {
          "name": "Hermès",
          "host": "www.hermes.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-08-22",
            "until": "2026-11-20",
            "names": 1
          },
          "net": {
            "ip": "104.18.23.243",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:23Z",
          "cost": null,
          "page": {
            "final": "https://www.hermes.com/",
            "code": 403,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "ct.captcha-delivery.com",
              "static.cloudflareinsights.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 1131
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 403,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Kering",
          "host": "www.kering.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-01",
            "until": "2026-11-30",
            "names": 20
          },
          "net": {
            "ip": "96.16.248.160",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=15768000",
          "front": "akamai",
          "server": "",
          "at": "2026-10-19T06:14:26Z",
          "cost": null,
          "page": {
            "final": "https://www.kering.com/fr/",
            "code": 200,
            "csp": "frame-ancestors 'none'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 209671
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15768000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "L'Oréal",
          "host": "www.loreal.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-11",
            "until": "2026-12-10",
            "names": 2
          },
          "net": {
            "ip": "104.19.175.222",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains;preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:29Z",
          "cost": null,
          "page": {
            "final": "https://www.loreal.com/en/",
            "code": 200,
            "csp": "frame-ancestors 'self'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "ecb.qualquantsignals.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 207548
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains;preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Legrand",
          "host": "www.legrandgroup.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-10-05",
            "until": "2027-04-21",
            "names": 4
          },
          "net": {
            "ip": "143.204.194.93",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudfront",
          "server": "",
          "at": "2026-10-19T06:14:52Z",
          "cost": null,
          "page": {
            "final": "https://www.legrand.com/fr",
            "code": 200,
            "csp": "default-src 'self'; script-src  'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net  https://*.qualtrics.com https://*.piwik.pro https://www.youtube.com/ https://*.googleapis.com https://secure.leadforensics.com/ https://*.hotjar.com ; style-src 'self' 'unsafe-inline' https://*.googleapis.com  https://*.hotjar.com; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://*.gstatic.com https://*.googleapis.com  https://*.qualtrics.com https://*.legrand.com https://*.legrandgroup.com;; frame-src https://www.youtube.com/ https://www.youtube-nocookie.com https://*.qualtrics.com https://legrand.symex.be;; frame-ancestors https://*.legrand.com https://*.legrandgroup.com https://www.googletagmanager.com https://legrand.symex.be; font-src  https://*.googleapis.com https://*.legrand.com https://*.gstatic.com https://*.hotjar.com; connect-src 'self' https://legrand.symex.be https://www.google-analytics.com https://legrand-plateforme.containers.piwik.pro https://cdn.jsdelivr.net  https://*.qualtrics.com https://*.piwik.pro https://www.youtube.com/ https://*.googleapis.com https://www.youtube-nocookie.com https://*.google-analytics.com https://www.googletagmanager.com www.google.com https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com; report-uri /report-csp-violation; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com",
              "www.youtube.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 299448
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "LVMH",
          "host": "www.lvmh.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Inc",
            "from": "2026-06-05",
            "until": "2026-12-20",
            "names": 6
          },
          "net": {
            "ip": "96.16.248.161",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=15768000 ; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:29Z",
          "cost": null,
          "page": {
            "final": "https://www.lvmh.com/en",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.lvmh.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 2047439
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15768000 ; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Michelin",
          "host": "www.michelin.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-09-08",
            "until": "2027-01-17",
            "names": 2
          },
          "net": {
            "ip": "150.171.110.121",
            "asn": "8075",
            "cc": "US",
            "as": "MICROSOFT-CORP-MSN-AS-BLOCK - Microsoft Corporation, US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "azure",
          "server": "",
          "at": "2026-10-19T06:14:34Z",
          "cost": null,
          "page": {
            "final": "https://www.michelin.com/",
            "code": 200,
            "csp": "default-src 'self' *.google-analytics.com *.doubleclick.net https://api.privacy-center.org https://dgaddcosdev.blob.core.windows.net https://agngnconpm.cloudimg.io *.googleapis.com https://phmgxnk.pa-cd.com *.mouseflow.com https://siteintercept.qualtrics.com *.kameleoon.eu *.kameleoon.com *.hcaptcha.com; style-src 'self' 'unsafe-inline' https://dgaddcosdev.blob.core.windows.net agngnconpm.cloudimg.io *.kameleoon.eu *.kameleoon.com https://fonts.googleapis.com; script-src 'self' *.google-analytics.com *.doubleclick.net *.googletagmanager.com *.google.com https://sdk.privacy-center.org https://dgaddcosdev.blob.core.windows.net agngnconpm.cloudimg.io 'unsafe-eval' 'unsafe-inline' *.youtube.com *.hcaptcha.com https://tag.aticdn.net *.mouseflow.com *.siteintercept.qualtrics.com https://siteintercept.qualtrics.com *.kameleoon.eu *.kameleoon.com www.google.com www.gstatic.com; font-src 'self' https://dgaddcosdev.blob.core.windows.net agngnconpm.cloudimg.io *.kameleoon.eu *.kameleoon.com https://fonts.gstatic.com; img-src 'self' blob: data: *.ytimg.com https://sdk.privacy-center.org https://dgaddcosdev.blob.core.windows.net agngnconpm.cloudimg.io dxm.pre-prod.contentcenter.michelin.com https://agngnconpm.cloudimg.io *.qualtrics.com *.kameleoon.eu *.kameleoon.com; frame-src 'self' *.youtube.com *.vimeo.com https://edge.media-server.com https://dgaddcosprod.blob.core.windows.net https://charts.symex.be https://youtu.be *.hcaptcha.com *.sibforms.com https://vimeo.com *.qualtrics.com www.google.com; base-uri 'self'; object-src 'self' data: https://dgaddcosdev.blob.core.windows.net; connect-src 'self' www.google.com www.gstatic.com *.google-analytics.com *.doubleclick.net *.mouseflow.com *.qualtrics.com *.kameleoon.eu *.kameleoon.com https://api.privacy-center.org https://dgaddcosdev.blob.core.windows.net https://agngnconpm.cloudimg.io https://phmgxnk.pa-cd.com https://siteintercept.qualtrics.com *.googleapis.com",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "6sdq1nkxog.kameleoon.eu",
              "agngnconpm.cloudimg.io"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "fullscreen=(self \"https://www.youtube.com\")",
            "coop": "",
            "bytes": 947896
          },
          "cle": {
            "kind": "cloud",
            "name": "Microsoft Azure",
            "country": "US",
            "asn": "8075",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Microsoft Azure",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Orange",
          "host": "www.orange.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2025-12-18",
            "until": "2026-12-17",
            "names": 15
          },
          "net": {
            "ip": "80.15.253.0",
            "asn": "328126",
            "cc": "FR",
            "as": "Orange Tunisie - Orange Tunisie, TN"
          },
          "hsts": "",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:14:35Z",
          "cost": null,
          "page": {
            "final": "https://www.orange.com/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn-eu.readspeaker.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 166772
          },
          "cle": {
            "kind": "propre",
            "name": "Orange",
            "country": "FR",
            "asn": "328126",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Orange",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Pernod Ricard",
          "host": "www.pernod-ricard.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-06-15",
            "until": "2026-12-29",
            "names": 2
          },
          "net": {
            "ip": "52.222.201.12",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=1000; preload",
          "front": "cloudfront",
          "server": "nginx",
          "at": "2026-10-19T06:15:01Z",
          "cost": null,
          "page": {
            "final": "https://www.pernod-ricard.com/en",
            "code": 200,
            "csp": "default-src 'none'; connect-src 'self' https://www.google-analytics.com https://sdk.privacy-center.org https://analytics.google.com https://pagead2.googlesyndication.com https://stats.g.doubleclick.net https://assets-ctb.pernod-ricard.io https://api.pernod-ricard.io https://cdn.jsdelivr.net/npm/algoliasearch https://zfm2j5365u-3.algolianet.com https://zfm2j5365u-dsn.algolia.net https://d8ejoa1fys2rk.cloudfront.net https://brandcloud.pernod-ricard.com https://optoutapi.evidon.com *.evidon.com *.betrad.com https://us-central1-pantheon-psapps.cloudfunctions.net https://insight.pravp.com/analytics *.pernod-ricard.io https://live-pernod-ricard-global-cms.pantheonsite.io https://cdn.linkedin.oribi.io https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css agegate.pr-globalcms.com 4q87csmwes-dsn.algolia.net *.didomi.io pernod-ricard-deutschland.mynewsdesk.com px.ads.linkedin.com https://loop.pr-globalcms.com https://cdn.blueconic.net https://pernodricardusa.blueconic.net https://www.facebook.com cdn.jsdelivr.net api.privacy-center.org https://secure.office-insightdetails.com/ https://www.googletagmanager.com; font-src 'self' https://maxcdn.bootstrapcdn.com https://app-avp.pravp.com https://assets-ctb.pernod-ricard.io https://cdnjs.cloudflare.com; frame-src 'self' https://www.youtube.com https://player.vimeo.com https://static.addtoany.com https://emperia.gallery https://my.matterport.com https://www.google.com pernod-ricard-deutschland.mynewsdesk.com https://www.mynewsdesk.com https://live.eventtia.com; img-src 'self' https: data:; media-src 'self'; object-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://sdk.privacy-center.org https://avp.pravp.com https://www.google-analytics.com https://c.evidon.com https://assets-ctb.pernod-ricard.io https://cdn.jsdelivr.net/npm/algoliasearch https://zfm2j5365u-3.algolianet.com https://www.youtube.com https://player.vimeo.com *.facebook.net https://js-agent.newrelic.com https://bam.nr-data.net *.pernod-ricard.io https://live-pernod-ricard-global-cms.pantheonsite.io https://snap.licdn.com https://www.google.com https://www.gstatic.com https://static.cloudflareinsights.com agegate.pr-globalcms.com pernod-ricard-deutschland.mynewsdesk.com https://loop.pr-globalcms.com https://cdn.blueconic.net https://pernodricardusa.blueconic.net https://plugins.blueconic.net https://secure.office-insightdetails.com/ https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://unpkg.com https://vuejs.org; style-src 'self' 'unsafe-inline' https://assets-ctb.pernod-ricard.io data: https://live-pernod-ricard-global-cms.pantheonsite.io https://loop.pr-globalcms.com https://plugins.blueconic.net cdnjs.cloudflare.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://unpkg.com; style-src-attr 'self' 'unsafe-hashes' 'unsafe-inline'; base-uri 'self'; form-action 'self' https://login.microsoftonline.com https://device.login.microsoftonline.com; frame-ancestors 'self'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "agegate.pr-globalcms.com",
              "cdn.jsdelivr.net",
              "secure.office-insightdetails.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 164534
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=1000; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 4
              }
            }
          }
        },
        {
          "name": "Publicis Groupe",
          "host": "www.publicisgroupe.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-08-21",
            "until": "2027-03-07",
            "names": 2
          },
          "net": {
            "ip": "103.41.68.142",
            "asn": "213120",
            "cc": "SG",
            "as": "PROLEXIC-IP-PROTECT - Akamai International B.V., NL"
          },
          "hsts": "max-age=16070400; includesubdomains",
          "front": "fastly",
          "server": "apache",
          "at": "2026-10-19T06:14:37Z",
          "cost": null,
          "page": {
            "final": "https://www.publicisgroupe.com/fr/splash",
            "code": 200,
            "csp": "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com/gtm.js https://www.youtube.com/iframe_api https://cdn.cookielaw.org/ https://privacyportal-cdn.onetrust.com https://www.youtube.com cdn.jsdelivr.net https://polyfill-fastly.io https://rebilly.github.io https://unpkg.com platform.instagram.com platform.twitter.com; frame-ancestors 'self'; report-uri https://www.publicisgroupe.com/fr/report-uri/enforce",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "polyfill-fastly.io",
              "unpkg.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 20807
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "213120",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "max-age=16070400; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Renault",
          "host": "www.renaultgroup.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-08-10",
            "until": "2027-02-24",
            "names": 30
          },
          "net": {
            "ip": "108.133.22.78",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:14:39Z",
          "cost": null,
          "page": {
            "final": "https://www.renaultgroup.com/",
            "code": 200,
            "csp": "frame-ancestors https://www.renault-group.com.cn",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org"
            ],
            "xfo": "deny",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "autoplay=(self \"https://assets.renaultgroup.com\" \"https://staging-assets.renaultgroup.com\"), fullscreen=(self), geolocation=(self)",
            "coop": "",
            "bytes": 349663
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "max-age=63072000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Safran",
          "host": "www.safran-group.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2025-11-19",
            "until": "2026-11-19",
            "names": 2
          },
          "net": {
            "ip": "172.64.151.66",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:39Z",
          "cost": null,
          "page": {
            "final": "https://www.safran-group.com/",
            "code": 200,
            "csp": "object-src 'none';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn-cookieyes.com",
              "cdnjs.cloudflare.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "display-capture=(self), microphone=(), camera=(), fullscreen=(self \"https://safran.webtv-solution.video\" \"https://mediacloud.media.safran-group.com\"), picture-in-picture=(self \"https://safran.webtv-solution.video\" \"https://mediacloud.media.safran-group.com\"), geolocation=(self), web-share=*",
            "coop": "",
            "bytes": 214862
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Saint-Gobain",
          "host": "www.saint-gobain.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-21",
            "until": "2026-12-20",
            "names": 1
          },
          "net": {
            "ip": "72.11.158.68",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:40Z",
          "cost": null,
          "page": {
            "final": "https://www.saint-gobain.com/",
            "code": 403,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "same-origin",
            "permissions": "accelerometer=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=(),xr-spatial-tracking=*",
            "coop": "same-origin",
            "bytes": 127510
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 403,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Sanofi",
          "host": "www.sanofi.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-02-14",
            "until": "2027-03-15",
            "names": 2
          },
          "net": {
            "ip": "18.244.28.85",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudfront",
          "server": "cloudfront",
          "at": "2026-10-19T06:15:03Z",
          "cost": null,
          "page": {
            "final": "https://www.sanofi.com/en",
            "code": 200,
            "csp": "default-src https: 'unsafe-eval' 'unsafe-inline' 'self' ws: data:; worker-src blob:; object-src 'none'; frame-ancestors 'none'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "maps.googleapis.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 271134
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Schneider Electric",
          "host": "www.se.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Inc",
            "from": "2026-08-08",
            "until": "2027-02-22",
            "names": 3
          },
          "net": {
            "ip": "173.223.129.236",
            "asn": "16625",
            "cc": "US",
            "as": "AKAMAI-AS - Akamai Technologies, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:40Z",
          "cost": null,
          "page": {
            "final": "https://www.se.com/ww/en/",
            "code": 200,
            "csp": "upgrade-insecure-requests",
            "csp_ro": "default-src 'self' blob: https: data: mediastream: 'unsafe-eval' 'unsafe-inline'; connect-src cdn.builder.codes *.builder.io *.schneider-electric.com *.se.com glue.pes-stg.cloud.spryker.toys service.force.com *.apc.com nebula-cdn.kampyle.com ubt-eu.kampyle.com sbt-prod.kampyle.com udc-neb.kampyle.com *.ariba.com *.amazonaws.com twitter.com zinfi.net firebaselogging-pa.googleapis.com firebaseremoteconfig.googleapis.com firebaseinstallations.googleapis.com resources.digital-cloud.medallia.eu/ partnerassessment.secure.force.com se.my.salesforce.com se.my.salesforce-sites.com *.salesforceliveagent.com *.squared.com/* *.onetrust.com seadvantage.force.com:443/ seadvantage.my.site.com:443/ seadvantage.my.site.com/* *.pendo.io tag.commander1.com www.google-analytics.com *.google.com salesforce.com salesforceliveagent.com documentforce.com kampyle.com force.com cookielaw.org unpkg.com cdn.jsdelivr.net *.demandbase.com twimg.com *.twimg.com *.youtube.com *.zinfi.net *.google.ru akstat.io *.go-mpulse.net/* microsoft.com *.clipsal.com/* cdn.cookielaw.org maxcdn.bootstrapcdn.com *.dynatrace.com *.kampyle.com *.google-analytics.com *.amazoncognito.com *.doubleclick.net googlemaps.github.io *.googlemaps.github.io/* maps.googleapis.com *.googleapis.com *.zscaler.net static.lightning.force.com www.apc.com api.company-target.com js-cdn.dynatrace.com c.go-mpulse.net *.akstat.io *.applanga.com 'self' *.akstat.io/ *.d2osz8slymlqdp.cloudfront.net *.google.com.sa *.google.by su.symexbelgium.com d2osz8slymlqdp.cloudfront.net d2cbq57joo8non.cloudfront.net use.typekit.net wss://*.execute-api.us-east-1.amazonaws.com wss://*.iot.us-east-1.amazonaws.com wss://4g5de7bcl4.execute-api.us-east-1.amazonaws.com wss://545sekhka2.execute-api.us-east-1.amazonaws.com wss://a307bjgfbycsj5-ats.iot.us-east-1.amazonaws.com wss://fjwji5pjgbbzzp2xmyispmyo6u.appsync-realtime-api.us-east-1.amazonaws.com wss://ixbskdr5a5bnbhl3qtwi5nhslu.appsync-realtime-api.us-east-1.amazonaws.com wss://qjye63smz5ggbb33xs4rn6hoiq.appsync-realtime-api.us-east-1.amazonaws.com wss://tu43ymv7pc.execute-api.us-east-1.amazonaws.com wss://0jyqaecg5j.execute-api.us-east-1.amazonaws.com wss://a307bjgfbycsj5-ats.iot.us-east-1.amazonaws.com wss://xbezullc75gyffaqf3npo2pavi.appsync-realtime-api.us-east-1.amazonaws.com *.visualwebsiteoptimizer.com app.vwo.com useruploads.vwo.io uiaas.myschneider.se.com; img-src *.visualwebsiteoptimizer.com app.vwo.com useruploads.vwo.io; report-uri https://semyschneiderweb.report-uri.com/r/t/csp/reportOnly; script-src 'self' blob: https: data: mediastream: 'unsafe-eval' 'unsafe-inline' 'nonce-yoTtE7gxMO+O+CuC9nUyZg=='",
            "meta_csp": "",
            "scripts": [
              "js-cdn.dynatrace.com",
              "sdk.trackingplan.com",
              "selectandconfig-widget.schneider-electric.com",
              "selectandconfig-widget.se.com",
              "uiaas.myschneider.se.com",
              "www.googletagmanager.com",
              "www.se.com"
            ],
            "xfo": "ALLOW-FROM https://builder.io",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 1983670
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "16625",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 7
              }
            }
          }
        },
        {
          "name": "Société Générale",
          "host": "www.societegenerale.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2025-11-28",
            "until": "2026-12-01",
            "names": 13
          },
          "net": {
            "ip": "185.11.125.215",
            "asn": "19551",
            "cc": "US",
            "as": "INCAPSULA - Incapsula Inc, US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "fastly",
          "server": "apache",
          "at": "2026-10-19T06:14:42Z",
          "cost": null,
          "page": {
            "final": "https://www.societegenerale.com/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'unsafe-eval' www.googletagmanager.com tag.aticdn.net cdn.krxd.net polyfill.io polyfill-fastly.io unpkg.com sdk.privacy-center.org *.hotjar.com *.siteimprove.net *.siteimprove.com *.youtube.com tools.euroland.com trinitymedia.ai *.trinitymedia.ai api.privacy-center.org www.googleadservices.com *.google.com pagead2.googlesyndication.com googleads.g.doubleclick.net cdn.polyfill.io *.clarity.ms c.bing.com cdn.jsdelivr.net cdn.jsdelivr.net cdn.id5-sync.com; object-src 'none'; style-src 'self' *.hotjar.com 'unsafe-inline'; img-src 'self' data: www.googletagmanager.com *.google.com googleads.g.doubleclick.net pagead2.googlesyndication.com www.googleadservices.com *.hotjar.com *.clarity.ms c.bing.com sdk.privacy-center.org logs1409.xiti.com *.societegenerale.com; media-src 'self'; frame-src 'self' www.googletagmanager.com *.youtube.com trinitymedia.ai tools.eurolandir.com; frame-ancestors 'self'; child-src 'self'; font-src 'self' *.hotjar.com data:; connect-src 'self' www.googletagmanager.com *.google.com pagead2.googlesyndication.com www.googleadservices.com googleads.g.doubleclick.net *.hotjar.com *.hotjar.io wss://*.hotjar.com *.clarity.ms c.bing.com *.pa-cd.com *.siteimprove.net *.siteimprove.com api.privacy-center.org *.trinitymedia.ai; report-uri /csp-report",
            "meta_csp": "",
            "scripts": [
              "polyfill-fastly.io",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 201319
          },
          "cle": {
            "kind": "cdn",
            "name": "Imperva",
            "country": "US",
            "asn": "19551",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Imperva",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Stellantis",
          "host": "www.stellantis.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-03",
            "until": "2026-12-02",
            "names": 99
          },
          "net": {
            "ip": "96.16.248.134",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=31536000 ; includesubdomains ; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:43Z",
          "cost": null,
          "page": {
            "final": "https://www.stellantis.com/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cookielaw.emea.fcagroup.com",
              "kit.fontawesome.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 98259
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000 ; includesubdomains ; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "STMicroelectronics",
          "host": "www.st.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-10-01",
            "until": "2026-12-30",
            "names": 10
          },
          "net": {
            "ip": "96.16.248.183",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=86400",
          "front": "akamai",
          "server": "",
          "at": "2026-10-19T06:14:42Z",
          "cost": null,
          "page": {
            "final": "https://www.st.com/content/st_com/en.html",
            "code": 200,
            "csp": "upgrade-insecure-requests; default-src 'nonce-7cfd37f77ab138e0189f59a5742c6464' data: blob: scripts.demandbase.com *.st.com *.st.com.cn *.zscaler.net www.googletagmanager.com widget.decibelinsight.net http://st-videos.s3.amazonaws.com feedback.digital-cloud.medallia.eu www.google.fr www.linkedin.com swa.sc.adobedc.cn www.youtube.com cdn.cookielaw.org dpm.demdex.net stmicroelectronics.demdex.net cm.everesttech.net st.componentsearchengine.com api.demandbase.com s.company-target.com vendor.ultralibrarian.com st-videos.s3.amazonaws.com st-cn-videos.s3.amazonaws.com st-epres.s3.amazonaws.com st-onlinetraining.s3.amazonaws.com st-pictures.s3-eu-west-1.amazonaws.com st-trainings.s3.amazonaws.com s7mbrstream-g1.scene7.com d1yo2adjencc3o.cloudfront.net screencapture.kampyle.com td.doubleclick.net www.facebook.com s7g10.scene7.com px.ads.linkedin.com www.google.it www.google.com screencapture-cdn.kampyle.com resources.digital-cloud.medallia.eu sbt-prod.kampyle.com udc-neb.kampyle.com md-scp.kampyle.com nebula-cdn.kampyle.com www.google-analytics.com hello.myfonts.net/count/39cfed monitor.clickcease.com www.clickcease.com/monitor/stat.js; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: screencapture.kampyle.com d3js.org api.demandbase.com md-scp.kampyle.com screencapture-cdn.kampyle.com resources.digital-cloud.medallia.eu sbt-prod.kampyle.com nebula-cdn.kampyle.com udc-neb.kampyle.com www.googletagmanager.com analytics.google.com www.analytics.google.com region1.google-analytics.com region1.analytics.google.com googleads.g.doubleclick.net www.google.com stats.g.doubleclick.net s7g10.scene7.com stcareers.talent-soft.com d2r1yp2w7bby2u.cloudfront.net static.clevertap.com us1.wzrkt.com swa.sc.adobedc.cn 856-pvp-715.mktoresp.com munchkin.marketo.net content.st.com *.go-mpulse.net www.facebook.com/tr/ monitor.clickcease.com www.clickcease.com/monitor/stat.js cdn.tt.omtrdc.net stmicroelectronics.tt.omtrdc.net serve.nrich.ai g.3gl.net r.3gl.net rjs.3gl.net maps.googleapis.com fonts.googleapis.com/css maps.google.com hello.myfonts.net/count/39cfed *.zscaler.net *.st.com *.st.com.cn *.stmicroelectronics.com.cn browser-update.org assets.adobedtm.com st-cn-videos.s3.amazonaws.com st-epres.s3.amazonaws.com st-onlinetraining.s3.amazonaws.com st-pictures.s3-eu-west-1.amazonaws.com st-trainings.s3.amazonaws.com st-videos.s3.amazonaws.com px.ads.linkedin.com cdn.cookielaw.org snap.licdn.com www.google-analytics.com connect.facebook.net cdn.id5-sync.com tags.crwdcntrl.net scripts.demandbase.com autocomplete.demandbase.com tag.demandbase.com cdn.decibelinsight.net collection.decibelinsight.net; style-src 'unsafe-inline' data: blob: *.st.com *.st.com.cn screencapture.kampyle.com s7g10.scene7.com screencapture-cdn.kampyle.com resources.digital-cloud.medallia.eu sbt-prod.kampyle.com nebula-cdn.kampyle.com udc-neb.kampyle.com md-scp.kampyle.com stcareers.talent-soft.com monitor.clickcease.com www.clickcease.com/monitor/stat.js hello.myfonts.net/count/39cfed; object-src 'none'; connect-src 'self' analytics-fe.digital-cloud.medallia.eu analytics.google.com www.google.com feedback.digital-cloud.medallia.eu px.ads.linkedin.com segments.company-target.com geolocation.onetrust.com www.google.it google.com swa.sc.adobedc.cn pagead2.googlesyndication.com cdn.linkedin.oribi.io screencapture.kampyle.com screencapture-cdn.kampyle.com md-scp.kampyle.com tag-logger.demandbase.com region1.google-analytics.com region1.analytics.google.com us1.wzrkt.com resources.digital-cloud.medallia.eu ubt-lb.digital-cloud.medallia.eu sbt-prod.kampyle.com nebula-cdn.kampyle.com udc-neb.kampyle.com 554-cze-897.mktoutil.com 856-pvp-715.mktoutil.com stcareers.talent-soft.com s7g10.scene7.com s7mbrstream-g1.scene7.com www.google-analytics.com serve.nrich.ai *.go-mpulse.net *.akamaihd.net *.akstat.io https://cdn.cookielaw.org/ stats.g.doubleclick.net 856-pvp-715.mktoresp.com munchkin.marketo.net content.st.com www.facebook.com/tr/ monitor.clickcease.com www.clickcease.com hello.myfonts.net privacyportal-de.onetrust.com r.3gl.net rjs.3gl.net g.3gl.net maps.googleapis.com fonts.googleapis.com/css maps.google.com *.zscaler.net *.st.com *.st.com.cn *.stmicroelectronics.com.cn scripts.demandbase.com autocomplete.demandbase.com tag.demandbase.com bcp.crwdcntrl.net id5-sync.com api.company-target.com st-cn-videos.s3.amazonaws.com st-epres.s3.amazonaws.com st-onlinetraining.s3.amazonaws.com st-pictures.s3-eu-west-1.amazonaws.com st-trainings.s3.amazonaws.com st-videos.s3.amazonaws.com api.ipify.org *.tt.omtrdc.net dpm.demdex.net cdn.decibelinsight.net collection.decibelinsight.net https://collection.decibelinsight.net wss://collection.decibelinsight.net; frame-ancestors www.googletagmanager.com eds.st.com 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "assets.st.com",
              "cdn.decibelinsight.net",
              "search.st.com",
              "www.st.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 245460
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=86400",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 4
              }
            }
          }
        },
        {
          "name": "Thales",
          "host": "www.thalesgroup.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-08-26",
            "until": "2026-11-24",
            "names": 7
          },
          "net": {
            "ip": "107.154.76.60",
            "asn": "19551",
            "cc": "US",
            "as": "INCAPSULA - Incapsula Inc, US"
          },
          "hsts": "",
          "front": "imperva",
          "server": "",
          "at": "2026-10-19T06:14:44Z",
          "cost": null,
          "page": {
            "final": "https://www.thalesgroup.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 1048
          },
          "cle": {
            "kind": "cdn",
            "name": "Imperva",
            "country": "US",
            "asn": "19551",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Imperva",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "TotalEnergies",
          "host": "totalenergies.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-10-08",
            "until": "2027-01-06",
            "names": 1
          },
          "net": {
            "ip": "72.11.158.97",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:58Z",
          "cost": null,
          "page": {
            "final": "https://totalenergies.com/",
            "code": 200,
            "csp": "report-uri /report-csp-violation",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 113985
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Unibail-Rodamco-Westfield",
          "host": "www.urw.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Google Trust Services",
            "from": "2026-09-01",
            "until": "2026-11-30",
            "names": 1
          },
          "net": {
            "ip": "34.149.136.35",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "google",
          "server": "google frontend",
          "at": "2026-10-19T06:14:45Z",
          "cost": null,
          "page": {
            "final": "https://www.urw.com/",
            "code": 200,
            "csp": "frame-ancestors 'self' https://app.contentful.com https://app.eu.contentful.com https://turan.urw.com/ https://turan-v2.urw.com/ https://turan-web.preprod.cloud.coreoz.com/",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer",
            "permissions": "",
            "coop": "",
            "bytes": 322989
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": {
              "date": "2026-10-15",
              "pq": "partial",
              "name": "Google Cloud",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Veolia",
          "host": "www.veolia.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-18",
            "until": "2027-01-16",
            "names": 1
          },
          "net": {
            "ip": "72.11.158.106",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:46Z",
          "cost": null,
          "page": {
            "final": "https://www.veolia.com/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.jsdelivr.net",
              "static.cloudflareinsights.com",
              "www.googletagmanager.com",
              "www.youtube-nocookie.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 122892
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 403,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Vinci",
          "host": "www.vinci.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Gandi",
            "from": "2026-05-04",
            "until": "2026-11-18",
            "names": 2
          },
          "net": {
            "ip": "194.156.202.140",
            "asn": "47314",
            "cc": "FR",
            "as": "VINCI - VINCI SA, FR"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:46Z",
          "cost": null,
          "page": {
            "final": "https://www.vinci.com/",
            "code": 200,
            "csp": "default-src 'self' vinci-stocksheet.webfg.net player.vimeo.com www.youtube-nocookie.com platform.twitter.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' stats.vinci.com www.vinci.com maps.googleapis.com platform.twitter.com cdn.jsdelivr.net cdnjs.cloudflare.com secure.insightful-cloud-7.com; connect-src 'self' www.vinci.com maps.googleapis.com stats.vinci.com; img-src 'self' data: www.vinci.com maps.gstatic.com maps.googleapis.com secure.insightful-cloud-7.com; style-src 'self' 'unsafe-inline' unpkg.com cdnjs.cloudflare.com fonts.googleapis.com; font-src 'self' data: www.vinci.com fonts.gstatic.com; frame-ancestors 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=()",
            "coop": "",
            "bytes": 125204
          },
          "cle": {
            "kind": "propre",
            "name": "Vinci",
            "country": "FR",
            "asn": "47314",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Vinci",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Gandi"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        }
      ]
    },
    {
      "key": "licornes",
      "label": {
        "fr": "Licornes de la French Tech",
        "en": "French Tech unicorns",
        "es": "Unicornios de la French Tech"
      },
      "entries": [
        {
          "name": "Alan",
          "host": "alan.com",
          "life": "sante",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 3072,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-09-02",
            "until": "2027-03-19",
            "names": 3
          },
          "net": {
            "ip": "104.18.11.101",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://alan.com/",
            "code": 200,
            "csp": "frame-ancestors 'self' alanhealth.cloudflareaccess.com/ app.intercom.com/ app.eu.intercom.com/ cdp-eu.customer.io/ *.eu.saleor.cloud",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "6vvt7k9n.twic.pics",
              "static.cloudflareinsights.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "",
            "coop": "",
            "bytes": 1391727
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15552000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 3072,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Ankorstore",
          "host": "www.ankorstore.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-07",
            "until": "2026-12-06",
            "names": 4
          },
          "net": {
            "ip": "34.111.32.250",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "",
          "front": "google",
          "server": "istio-envoy",
          "at": "2026-10-19T06:14:04Z",
          "cost": null,
          "page": {
            "final": "https://www.ankorstore.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.ankorstore.com",
              "cdnjs.cloudflare.com",
              "code.jquery.com",
              "js.stripe.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 517995
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": {
              "date": "2026-10-15",
              "pq": "partial",
              "name": "Google Cloud",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 4
              }
            }
          }
        },
        {
          "name": "Back Market",
          "host": "www.backmarket.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-05",
            "until": "2026-12-04",
            "names": 11
          },
          "net": {
            "ip": "104.17.99.116",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15768000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:05Z",
          "cost": null,
          "page": {
            "final": "https://www.backmarket.fr/fr-fr",
            "code": 200,
            "csp": "script-src 'self' https://*.statics.backmarket.com https://gobbledygook.backmarket.fr https://eps.backmarket.fr https://front-office.statics.backmarket.com/49cd40352ccdf8cf263cb58abb5bcc1c2c2083e2/ https://www.googletagmanager.com https://*.hotjar.com https://*.hotjar.io https://sc-static.net https://www.google.com/pagead/ https://www.googleadservices.com https://www.googletagservices.com https://*.googlesyndication.com https://www.gstatic.com https://retail.googleapis.com https://*.yahoo.co.jp https://*.g.doubleclick.net https://d34r8q7sht0t9k.cloudfront.net https://connect.facebook.net https://bat.bing.com https://bat.bing-int.com https://www.redditstatic.com https://analytics.tiktok.com https://www.dwin1.com https://js.adsrvr.org https://*.dotomi.com https://*.teads.tv https://pixel.byspotify.com https://cdn.attraqt.io https://*.tvsquared.com https://*.yimg.jp https://*.yimg.com https://*.outbrain.com https://js.cnnx.link https://cdn.taboola.com https://d.line-scdn.net https://lantern.roeyecdn.com https://statics.a8.net https://static.ads-twitter.com https://the.sciencebehindecommerce.com https://embed.typeform.com https://widgets.trustedshops.com https://*.clarity.ms https://widget.trustpilot.com https://cdn.scalapay.com https://www.awin1.com https://*.creativecdn.com https://*.pinimg.com https://*.pinterest.com https://cdn.amplitude.com https://tag.flvcdn.net https://www.youtube.com https://ozasp.jp https://capi-automation.s3.us-east-2.amazonaws.com https://bzrcdn.openai.com https://app.intercom.io https://widget.intercom.io https://js.intercomcdn.com https://cdn-scripts.signifyd.com https://imgs.signifyd.com https://64.online-metrix.net https://d354c9v5bptm0r.cloudfront.net https://h64.online-metrix.net https://sdk.privacy-center.org https://api.privacy-center.org https://assets.oney.io https://cdn.scalapay.com https://cdn1.affirm.com https://*.klarna.com https://*.klarnacdn.net https://js.processout.com https://*.squarecdn.com https://pay.google.com https://applepay.cdn-apple.com https://www.paypal.com https://*.paylution.com https://backmarket.mydral.com blob: 'unsafe-inline' 'unsafe-eval'; object-src 'none'; report-uri https://browser-intake-datadoghq.com/api/v2/logs?dd-api-key=pubdc168fd6fb5f2bf245b09ff737b0112b&ddsource=csp-report&dd-evp-origin=content-security-policy&ddtags=environment%3Aprod%2Ccontinent%3Aeu%2Csource%3Anode%2Cservice%3Afront-office%2CserviceVersion%3A49cd40352ccdf8cf263cb58abb5bcc1c2c2083e2%2Cpolicy-id%3Av1;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "front-office.statics.backmarket.com",
              "gobbledygook.backmarket.fr"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 1068078
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15768000; includesubdomains",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "BlaBlaCar",
          "host": "www.blablacar.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-12",
            "until": "2026-12-11",
            "names": 57
          },
          "net": {
            "ip": "34.36.86.125",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "google",
          "server": "istio-envoy",
          "at": "2026-10-19T06:14:07Z",
          "cost": null,
          "page": {
            "final": "https://www.blablacar.fr/",
            "code": 200,
            "csp": "frame-ancestors https://zen.blablacar.com https://1a0da4d7-3c75-43a2-b88c-9c2c82364eff-staging.weweb-preview.io/",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.blablacar.com",
              "try.abtasty.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin, strict-origin-when-cross-origin",
            "permissions": "geolocation=(self), microphone=()",
            "coop": "",
            "bytes": 242819
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": {
              "date": "2026-10-15",
              "pq": "partial",
              "name": "Google Cloud",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Brevo",
          "host": "app.brevo.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-08-21",
            "until": "2026-11-19",
            "names": 1
          },
          "net": {
            "ip": "141.101.90.104",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:35Z",
          "cost": null,
          "page": {
            "final": "https://app.brevo.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "mfe.brevo.com",
              "static.cloudflareinsights.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 114063
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Contentsquare",
          "host": "contentsquare.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-25",
            "until": "2026-12-24",
            "names": 1
          },
          "net": {
            "ip": "76.76.21.21",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000",
          "front": "other",
          "server": "vercel",
          "at": "2026-10-19T06:13:42Z",
          "cost": null,
          "page": {
            "final": "https://contentsquare.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "reveal.clearbit.com",
              "t.contentsquare.net",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 565089
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 4
              }
            }
          }
        },
        {
          "name": "Dental Monitoring",
          "host": "dentalmonitoring.com",
          "life": "sante",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-22",
            "until": "2026-12-21",
            "names": 2
          },
          "net": {
            "ip": "54.77.90.66",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "other",
          "server": "apache",
          "at": "2026-10-19T06:13:44Z",
          "cost": null,
          "page": {
            "final": "https://dentalmonitoring.com/",
            "code": 200,
            "csp": "frame-ancestors 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "dentalmonitoring.com",
              "kit.fontawesome.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 160522
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 4
              }
            }
          }
        },
        {
          "name": "EcoVadis",
          "host": "ecovadis.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-07",
            "until": "2027-01-05",
            "names": 22
          },
          "net": {
            "ip": "104.18.18.98",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains;",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:45Z",
          "cost": null,
          "page": {
            "final": "https://ecovadis.com/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'report-sample' 'self' 'unsafe-inline' 'unsafe-eval' www.google.com *.ecovadis.com *.googleapis.com *.cookielaw.org *.cloudflare.com *.facebook.net *.cdntwrk.com *.wistia.com *.ml314.com ml314.com *.pardot.com *.salesloft.com *.hotjar.com *.pathmotion.io *.demandbase.com *.googletagmanager.com *.youtube.com *.cookielaw.org *.cloudflare.com *.cdntwrk.com *.wistia.com *.wistia.net *.googletagmanager.com *.google-analytics.com *.hotjar.com *.ecovadis-surveys.com *.licdn.com *.google.com *.gstatic.com *.gstatic.cn *.googleadservices.com *.doubleclick.net *.pardot.com *.recaptcha.net *.zscloud.net *.jsdelivr.net *.facebook.net *.scoop.it *.googleapis.com *.zoominfo.com *.clickagy.com *.hs-scripts.com *.zi-scripts.com *.hscollectedforms.net *.hs-analytics.net *.hs-banner.com *.hsadspixel.net *.hsforms.net yoast.com *.hubspot.com *.sentry-cdn.com *.surveymonkey.com *.dstillery.com *.bing.com *.media6degrees.com *.vwo.com *.clarity.ms *.visualwebsiteoptimizer.com *.g2.com cdn.pushcrew.com embed.jochat.ai blob:; style-src 'report-sample' 'self' 'unsafe-inline' *.ecovadis.com  *.cloudflare.com *.googleapis.com *.scoop.it *.googletagmanager.com *.vwo.com *.visualwebsiteoptimizer.com eu.winstonchat.smartrecruiters.com; object-src 'none'; base-uri 'self'; connect-src 'self' * *.ecovadis.com api.mixpanel.com cdn.cookielaw.org embedwistia-a.akamaihd.net *.wistia.com *.wistia.net *.litix.io v2.api.uberflip.com *.onetrust.com *.google-analytics.com stats.g.doubleclick.net *.hotjar.com *.hotjar.com *.hotjar.io *.company-target.com *.salesloft.com *.recaptcha.net cdn.linkedin.oribi.io *.facebook.net *.google.com *.clickagy.com *.zoominfo.com *.demandbase.com *.zi-scripts.com *.hscollectedforms.net *.hubapi.com; font-src 'self' data: *.ecovadis.com/ *.gstatic.com *.wistia.com *.wistia.net *.wp.com; frame-src 'self' *.ecovadis.com *.ecovadis-surveys.com *.ecovadis-survey.com ecovadis.career-inspiration.com *.hotjar.com *.google.com  *.recaptcha.net *.facebook.com *.company-target.com *.doubleclick.net *.securityscorecard.com *.securityscorecard.io *.hsforms.com *.hsappstatic.net *.hubspot.com *.embedly.com *.wistia.com *.surveymonkey.com *.googletagmanager.com ecovadis.scan-datamining.com *.vwo.com *.visualwebsiteoptimizer.com *.hsforms.net embed.acast.com eu.winstonchat.smartrecruiters.com www.youtube.com *.scan-datamining.com; img-src 'self' data: *.ecovadis.com *.cdntwrk.com *.wistia.com *.wistia.net *.scoop.it *.gravatar.com *.cookielaw.org *.google-analytics.com *.googletagmanager.com *.google.com *.google.pl https://id.rlcdn.com https://match.prod.bidr.io *.linkedin.com *.company-target.com  *.recaptcha.net *.facebook.com *.doubleclick.net *.clickagy.com *.openx.net *.rlcdn.com *.agkn.com *.google.it *.google.fr *.google.de *.hsforms.com *.hubspot.com *.hubspotusercontent-eu1.net *.hsappstatic.net *.googleusercontent.com *.cloudinary.com *.adsrvr.org *.gstatic.com *.bing.com *.visualwebsiteoptimizer.com *.bing.net *.googleadservices.com *.vwo.com; manifest-src 'self'; media-src 'self' *.ecovadis.com *.wistia.net *.wistia.com blob:; frame-ancestors 'self' *.ecovadis.com *.google.com; worker-src self blob: https://ecovadis.com/wp-content/plugins/wordpress-seo/js/dist/analysis-worker.js;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "cdnjs.cloudflare.com",
              "ecovadis.com",
              "js-eu1.hs-scripts.com",
              "js.qualified.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin,",
            "permissions": "accelerometer=(), autoplay=*, camera=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=()",
            "coop": "",
            "bytes": 187346
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains;",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 6
              }
            }
          }
        },
        {
          "name": "Exotec",
          "host": "www.exotec.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-18",
            "until": "2026-12-17",
            "names": 3
          },
          "net": {
            "ip": "23.185.0.4",
            "asn": "54113",
            "cc": "US",
            "as": "FASTLY - Fastly, Inc., US"
          },
          "hsts": "max-age=31622400",
          "front": "fastly",
          "server": "nginx",
          "at": "2026-10-19T06:14:24Z",
          "cost": null,
          "page": {
            "final": "https://www.exotec.com/",
            "code": 200,
            "csp": "frame-ancestors 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn-cookieyes.com",
              "se.monetate.net",
              "www.exotec.com",
              "www.googletagmanager.com",
              "www.youtube.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer",
            "permissions": "",
            "coop": "",
            "bytes": 438652
          },
          "cle": {
            "kind": "cdn",
            "name": "Fastly",
            "country": "US",
            "asn": "54113",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Fastly",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31622400",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 5
              }
            }
          }
        },
        {
          "name": "Harmattan AI",
          "host": "harmattan.ai",
          "reachable": true,
          "pq": "partial",
          "hits": 1,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Google Trust Services",
            "from": "2026-09-15",
            "until": "2026-12-14",
            "names": 2
          },
          "net": {
            "ip": "34.107.208.59",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "",
          "front": "other",
          "server": "uploadserver",
          "at": "2026-10-19T06:13:51Z",
          "cost": null,
          "page": {
            "final": "https://harmattan.ai/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 355635
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": {
              "date": "2026-10-15",
              "pq": "partial",
              "name": "Google Cloud",
              "kind": "cloud",
              "protocols": [
                "tls1",
                "tls1_1",
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "iad",
          "host": "www.iadfrance.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-10-11",
            "until": "2027-04-26",
            "names": 1
          },
          "net": {
            "ip": "18.245.175.95",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "cloudfront",
          "server": "nginx/1.26.3",
          "at": "2026-10-19T06:14:47Z",
          "cost": null,
          "page": {
            "final": "https://www.iadfrance.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 230443
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1",
                "tls1_1",
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Ivalua",
          "host": "www.ivalua.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-12",
            "until": "2027-01-10",
            "names": 1
          },
          "net": {
            "ip": "141.193.213.21",
            "asn": "209242",
            "cc": "US",
            "as": "CLOUDFLARESPECTRUM - Cloudflare London, LLC, US"
          },
          "hsts": "max-age=63072000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:25Z",
          "cost": null,
          "page": {
            "final": "https://www.ivalua.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "consent.cookiebot.com",
              "cse.google.com",
              "player.vimeo.com",
              "www.ivalua.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "geolocation=(), midi=(), sync-xhr=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), fullscreen=(self), payment=()",
            "coop": "",
            "bytes": 243713
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "209242",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 4
              }
            }
          }
        },
        {
          "name": "Ledger",
          "host": "www.ledger.com",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-05",
            "until": "2027-01-03",
            "names": 3
          },
          "net": {
            "ip": "172.64.153.104",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:28Z",
          "cost": null,
          "page": {
            "final": "https://www.ledger.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "script-src 'unsafe-inline' 'unsafe-eval'; connect-src 'none'; report-uri https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?m=zhJcaGsK8v7ImaM_xA.ER4bn3z8LB_UIpvfBkUadEDE-1792390553.557482-1.0.1.1-VgNc2QHWpiQ_nIWz6pBxw_MgmAUNQMEi6y0CWOi1U75ktdjFSWkcRuGH3j1ESmNYIdqsySU7X.P1l1XASX8VsUB9O_T2A0Wzh0yIFcndWekYNeGhyLipMV6fBYbwYdIAdstpejUqUtv5jTSwd.DCVCmISyf1zFg1lCdWBHGfSPY; report-to cf-csp-endpoint",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "cdn.optimizely.com",
              "cdnjs.cloudflare.com",
              "kit.fontawesome.com",
              "www.ledger.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 271965
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 5
              }
            }
          }
        },
        {
          "name": "Lydia",
          "host": "www.lydia-app.com",
          "life": "banques",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Google Trust Services",
            "from": "2026-09-01",
            "until": "2026-11-30",
            "names": 2
          },
          "net": {
            "ip": "35.227.224.90",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "",
          "front": "google",
          "server": "nginx",
          "at": "2026-10-19T06:14:30Z",
          "cost": null,
          "page": {
            "final": "https://sumeria.eu/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "player.vimeo.com",
              "sumeria.eu",
              "widget.trustpilot.com"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 91986
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": {
              "date": "2026-10-15",
              "pq": "partial",
              "name": "Google Cloud",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "ManoMano",
          "host": "www.manomano.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-30",
            "until": "2026-12-29",
            "names": 1
          },
          "net": {
            "ip": "104.18.34.254",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:31Z",
          "cost": null,
          "page": {
            "final": "https://www.manomano.fr/",
            "code": 200,
            "csp": "frame-ancestors 'self' https://*.manomano.fr *.manomano.com *.manomano.tech; script-src 'nonce-NmM4NjY0ZTItY2VmOS00ZjEwLThlZWUtN2Q4OTA2NTg1NjBk' 'strict-dynamic' 'self' 'sha256-3NLv9noPeilbdo9psOAjUxvQheNTsUubZ0XDi3qpsmg=' 'sha256-mOD3IyhE+LFUH7xW73lbDY1seVd8buyPdkj+Thxu+hk=' https:; object-src 'none'; base-uri 'none'; report-uri https://manomano.uriports.com/reports; report-to default",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdnjs.cloudflare.com",
              "static.cloudflareinsights.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "same-origin-allow-popups",
            "bytes": 421782
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 403,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Mirakl",
          "host": "www.mirakl.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-12",
            "until": "2026-12-11",
            "names": 2
          },
          "net": {
            "ip": "63.176.8.218",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "netlify",
          "at": "2026-10-19T06:14:34Z",
          "cost": null,
          "page": {
            "final": "https://www.mirakl.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hsforms.net https://*.hs-scripts.com https://js.hs-analytics.net https://js.hscollectedforms.net https://js.hsadspixel.net https://js.hubspot.com https://*.hs-banner.com https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.google.com https://sdk.privacy-center.org https://cdn.heapanalytics.com https://*.heap-api.com https://connect.facebook.net https://bat.bing.com https://snap.licdn.com https://*.6sc.co https://*.hotjar.com https://www.redditstatic.com https://*.clarity.ms https://cdn.drda.io https://cdn.dreamdata.cloud https://*.tamtam.ai; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; object-src 'self'; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://forms.hsforms.com https://*.hs-sites.com https://www.googletagmanager.com https://eulerapp.com https://submit-irm.trustarc.com https://embed.podcasts.apple.com; media-src 'self' https://videos.ctfassets.net; connect-src 'self' https://*.hsforms.com https://js.hsforms.net https://*.hubspot.com https://*.hubapi.com https://static.hsappstatic.net https://boards-api.greenhouse.io https://www.googletagmanager.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.google.com https://google.com https://www.google.fr https://www.google.de https://www.google.co.uk https://www.google.es https://www.google.it https://www.google.nl https://www.google.be https://www.google.co.jp https://www.google.ca https://www.google.com.br https://www.google.com.au https://www.google.com.mx https://sdk.privacy-center.org https://api.privacy-center.org https://heapanalytics.com https://*.heap-api.com https://www.facebook.com https://bat.bing.com https://px.ads.linkedin.com https://*.6sc.co https://*.6sense.com https://*.adnxs.com https://*.reddit.com https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com https://*.clarity.ms https://cdn.dreamdata.cloud https://*.tamtam.ai https://*.nsvcs.net;",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 222606
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Mistral AI",
          "host": "mistral.ai",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-09",
            "until": "2027-01-07",
            "names": 2
          },
          "net": {
            "ip": "172.66.2.203",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:54Z",
          "cost": null,
          "page": {
            "final": "https://mistral.ai/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://client.axept.io https://api.axept.io https://static.axept.io https://js-eu1.hs-scripts.com https://js-eu1.hscollectedforms.net https://js-eu1.hs-analytics.net https://js-eu1.hs-banner.com https://forms-eu1.hscollectedforms.net https://cdn.jsdelivr.net https://static.claydar.com https://cdn.claydar.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://fonts.googleapis.com https://fonts.axept.io; font-src 'self' https://fonts.gstatic.com https://fonts.axept.io; img-src 'self' data: blob: https://cms.globalaegis.net https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://axeptio.imgix.net https://track-eu1.hubspot.com https://favicons.axept.io https://i.ytimg.com https://www.google.com https://www.google.fr https://www.google.de https://www.google.co.uk https://www.google.es https://www.google.it https://www.google.nl https://www.google.be https://www.google.ch https://www.google.at https://www.google.pt https://www.google.ie https://www.google.dk https://www.google.se https://www.google.no https://www.google.fi https://www.google.pl https://www.google.cz https://www.google.gr https://www.google.hu https://www.google.ro https://www.google.sk https://www.google.bg https://www.google.hr https://www.google.si https://www.google.lt https://www.google.lv https://www.google.ee https://www.google.lu https://www.google.com.tr https://www.google.ru https://www.google.com.ua https://www.google.ca https://www.google.com.mx https://www.google.com.br https://www.google.com.ar https://www.google.co.jp https://www.google.com.au https://www.google.co.nz https://www.google.co.in https://www.google.com.sg https://www.google.com.hk https://www.google.co.kr https://www.google.com.my https://www.google.co.th https://www.google.co.id https://www.google.com.ph https://www.google.com.vn https://www.google.co.za https://www.google.ae https://www.google.com.sa https://www.google.co.il https://www.google.com.eg; media-src 'self' https://cms.globalaegis.net blob:; connect-src 'self' https://cms.globalaegis.net https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com https://client.axept.io https://static.axept.io https://api.axept.io https://forms-eu1.hscollectedforms.net https://ingesteer.services-prod.nsvcs.net https://api.claydar.com https://pagead2.googlesyndication.com https://stats.g.doubleclick.net https://www.google.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://app.storylane.io https://spaces-blogs-staging-mistral-01d83c8e.koyeb.app/ https://*.demo.emmi.ai/ https://challenges.cloudflare.com https://ml4-blog-widgets.netlify.app; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self' https://chat.mistral.ai; frame-ancestors 'none'; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "camera=(), microphone=(), geolocation=()",
            "coop": "",
            "bytes": 325947
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Morpho",
          "host": "morpho.org",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-08-27",
            "until": "2026-11-25",
            "names": 1
          },
          "net": {
            "ip": "64.239.109.1",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "other",
          "server": "vercel",
          "at": "2026-10-19T06:13:54Z",
          "cost": null,
          "page": {
            "final": "https://morpho.org/",
            "code": 200,
            "csp": "default-src 'self'; script-src 'self' 'nonce-ilYjelQEp6Es1Ju3yst7dA==' 'strict-dynamic'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://secure.gravatar.com https://cdn.morpho.org https://*.public.blob.vercel-storage.com; font-src 'self' data:; media-src 'self' https://*.public.blob.vercel-storage.com; connect-src 'self' https://api.morpho.org https://*.public.blob.vercel-storage.com https://s2620792.us-west-2a.betterstackdata.com; frame-src 'self' https://*.framer.app https://*.figma.site https://platform.twitter.com; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests; report-uri https://s2620792.us-west-2a.betterstackdata.com/api/2620792/security/?sentry_key=RQszR15fqLGZZAwiiDRKn6E6; report-to csp-endpoint",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "geolocation=(), microphone=(), camera=(), payment=()",
            "coop": "same-origin",
            "bytes": 802903
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "NW Groupe",
          "host": "www.nw-groupe.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-14",
            "until": "2026-12-13",
            "names": 1
          },
          "net": {
            "ip": "5.135.23.164",
            "asn": "16276",
            "cc": "FR",
            "as": "OVH - OVH SAS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "apache",
          "at": "2026-10-19T06:14:34Z",
          "cost": null,
          "page": {
            "final": "https://www.nw-groupe.com/fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.nw-groupe.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 99188
          },
          "cle": {
            "kind": "hebergeur",
            "name": "OVHcloud",
            "country": "FR",
            "asn": "16276",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "OVHcloud",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Pasqal",
          "host": "www.pasqal.com",
          "fact": "Pasqal construit des ordinateurs quantiques, à atomes neutres.",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-27",
            "until": "2026-12-26",
            "names": 2
          },
          "net": {
            "ip": "192.0.66.122",
            "asn": "2635",
            "cc": "US",
            "as": "AUTOMATTIC - Automattic, Inc, US"
          },
          "hsts": "",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:14:37Z",
          "cost": null,
          "page": {
            "final": "https://www.pasqal.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "stats.wp.com",
              "www.googletagmanager.com",
              "www.pasqal.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 297880
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Automattic (WordPress VIP)",
            "country": "US",
            "asn": "2635",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Automattic (WordPress VIP)",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "PayFit",
          "host": "app.payfit.com",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-01-11",
            "until": "2027-02-09",
            "names": 2
          },
          "net": {
            "ip": "99.86.109.61",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "cloudfront",
          "server": "amazons3",
          "at": "2026-10-19T06:13:59Z",
          "cost": null,
          "page": {
            "final": "https://app.payfit.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 1015
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Pennylane",
          "host": "app.pennylane.com",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-27",
            "until": "2026-12-26",
            "names": 1
          },
          "net": {
            "ip": "104.18.25.229",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:35Z",
          "cost": null,
          "page": {
            "final": "https://app.pennylane.com/auth/login",
            "code": 200,
            "csp": "default-src 'self'; base-uri 'self'; connect-src 'self' https: blob: https://*.birdie.so/ wss://*.birdie.so https://*.birdiefly.com wss://*.birdiefly.com https://*.screeb.app wss://*.screeb.app https://track-eu.customer.io https://*.api.gist.build https://*.cloud.gist.build https://sentry.io wss://ws-eu.pusher.com wss://*.pennylane.com wss://*.intercom.io wss://*.intercom-messenger.com https://api.segment.io https://cdn.segment.com https://*.intercom.io https://*.eu.intercom.io https://rum.browser-intake-datadoghq.eu https://browser-intake-datadoghq.eu https://in.eu2.segmentapis.com https://events.eu1.segmentapis.com https://*.amplitude.com; child-src 'self' data: https://demo.arcade.software https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://jeancaisse-20190924.s3.eu-west-1.amazonaws.com https://challenges.cloudflare.com https://app.datadoghq.eu/ https://www.figma.com https://*.githubusercontent.com https://*.google.com blob: https://js.intercomcdn.com https://widget.intercom.io https://intercom-sheets.com https://video-messages.intercomcdn.com https://www.loom.com https://metabase.pennylane.tech https://metabase.pennylane.com https://*.pennylane.com https://identity.swan.io https://stage.teledec.fr https://www.teledec.fr https://form.typeform.com/ https://www.youtube.com https://m.youtube.com https://content.pennylane.com https://pay-sandbox.gocardless.com https://pay.gocardless.com https://js.stripe.com https://hooks.stripe.com https://view.officeapps.live.com https://checkoutshopper-test.adyen.com https://checkoutshopper-live.adyen.com https://pal-test.adyen.com https://pal-live.adyen.com https://app.vialink.biz https://app.eu.vialink.biz https://app.vialink.fr https://app.eu.vialink.fr; font-src 'self' http: https: data: blob:; frame-src 'self' data: https://demo.arcade.software https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://jeancaisse-20190924.s3.eu-west-1.amazonaws.com https://challenges.cloudflare.com https://app.datadoghq.eu/ https://www.figma.com https://renderer.gist.build https://code.gist.build https://*.githubusercontent.com https://*.google.com blob: https://js.intercomcdn.com https://widget.intercom.io https://intercom-sheets.com https://video-messages.intercomcdn.com https://www.loom.com https://metabase.pennylane.tech https://metabase.pennylane.com https://*.pennylane.com https://identity.swan.io https://oauth.swan.io https://mandate-v2.sandbox.swan.io https://mandate-v2.swan.io https://stage.teledec.fr https://www.teledec.fr https://form.typeform.com/ https://www.youtube.com https://m.youtube.com https://content.pennylane.com https://pay-sandbox.gocardless.com https://pay.gocardless.com https://*.screeb.app wss://*.screeb.app https://js.stripe.com https://hooks.stripe.com https://view.officeapps.live.com https://mandate-previews.gocardless.com/ https://apps.universign.com https://apps.alpha.universign.com https://checkoutshopper-test.adyen.com https://checkoutshopper-live.adyen.com https://pal-test.adyen.com https://pal-live.adyen.com https://app.vialink.biz https://app.eu.vialink.biz https://app.vialink.fr https://app.eu.vialink.fr https://*.wlp-acs.com; frame-ancestors 'self' data: https://business.foodetective.co https://business.staging.foodtekk.com https://renderer.gist.build https://code.gist.build https://*.google.com https://*.pennylane.com blob:; img-src 'self' https: blob: data: https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://track-eu.customer.io https://*.api.gist.build https://*.cloud.gist.build https://*.amplitude.com; media-src 'self' data: https://js.intercomcdn.com https://widget.intercom.io https://intercom-sheets.com https://video-messages.intercomcdn.com https://*.amplitude.com; object-src 'self' mailto: https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://jeancaisse-20190924.s3.eu-west-1.amazonaws.com https://portail.e-facture.net http://www.lei-france.insee.fr https://www.lei-france.insee.fr https://invoice.stripe.com https://mandate-v2.sandbox.swan.io https://mandate-v2.swan.io https://mandate-previews.gocardless.com/; script-src 'self' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' https: http: https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://*.birdie.so/ wss://*.birdie.so https://*.birdiefly.com wss://*.birdiefly.com https://cdn.segment.com https://www.figma.com https://assets.customer.io https://code.gist.build https://js.intercomcdn.com https://widget.intercom.io https://intercom-sheets.com https://video-messages.intercomcdn.com https://unpkg.com https://*.screeb.app wss://*.screeb.app https://form.typeform.com/ https://www.youtube.com https://m.youtube.com https://appsforoffice.microsoft.com https://*.amplitude.com 'nonce-1tus+IZqze7ZoBc6ps/8cQ=='; script-src-attr 'unsafe-inline' 'nonce-1tus+IZqze7ZoBc6ps/8cQ=='; script-src-elem 'self' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' https: http: https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://*.birdie.so/ wss://*.birdie.so https://*.birdiefly.com wss://*.birdiefly.com https://cdn.segment.com https://www.figma.com https://assets.customer.io https://code.gist.build https://js.intercomcdn.com https://widget.intercom.io https://intercom-sheets.com https://video-messages.intercomcdn.com https://unpkg.com https://*.screeb.app wss://*.screeb.app https://form.typeform.com/ https://www.youtube.com https://m.youtube.com https://appsforoffice.microsoft.com 'nonce-1tus+IZqze7ZoBc6ps/8cQ=='; style-src 'self' 'unsafe-inline' https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://*.birdie.so/ wss://*.birdie.so https://*.birdiefly.com wss://*.birdiefly.com https://cdn.jsdelivr.net/ https://ka-p.fontawesome.com https://use.fontawesome.com https://fonts.googleapis.com https://www.gstatic.com https://*.typekit.net https://api.pagescreen.io https://code.gist.build https://*.amplitude.com; style-src-elem 'self' data: 'unsafe-inline' https://d1sf7nqdl8wqk.cloudfront.net https://serve-cdn-assets.pennylane.workers.dev https://*.pennylane.com https://*.birdie.so/ wss://*.birdie.so https://*.birdiefly.com wss://*.birdiefly.com https://cdn.jsdelivr.net/ https://ka-p.fontawesome.com https://use.fontawesome.com https://fonts.googleapis.com https://www.gstatic.com https://*.typekit.net https://api.pagescreen.io https://code.gist.build https://jeanterpret.pennylane-staging.com https://jeanterpret.pennylane.com; worker-src 'self' blob:; report-uri https://pennylane.report-uri.com/r/d/csp/enforce",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "assets.pennylane.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(self), ambient-light-sensor=(), autoplay=(self), camera=(self), encrypted-media=(), fullscreen=(self \"https://*.youtube.com\"), geolocation=(self), gyroscope=(), magnetometer=(), microphone=(self), midi=(), payment=(self \"https://checkout.stripe.com\" \"https://hooks.stripe.com\" \"https://js.stripe.com\"), picture-in-picture=(self \"https://*.youtube.com\"), usb=(self)",
            "coop": "",
            "bytes": 15111
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Pigment",
          "host": "www.pigment.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-02",
            "until": "2026-12-01",
            "names": 1
          },
          "net": {
            "ip": "198.202.211.1",
            "asn": "209242",
            "cc": "US",
            "as": "CLOUDFLARESPECTRUM - Cloudflare London, LLC, US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:37Z",
          "cost": null,
          "page": {
            "final": "https://www.pigment.com/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.jsdelivr.net",
              "cdn.prod.website-files.com",
              "d3e54v103j8qbb.cloudfront.net",
              "hubspotonwebflow.com",
              "plausible.io",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 431978
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "209242",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 6
              }
            }
          }
        },
        {
          "name": "Qonto",
          "host": "app.qonto.com",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-01-23",
            "until": "2027-02-20",
            "names": 9
          },
          "net": {
            "ip": "13.227.173.34",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "cloudfront",
          "server": "amazons3",
          "at": "2026-10-19T06:13:59Z",
          "cost": null,
          "page": {
            "final": "https://app.qonto.com/",
            "code": 200,
            "csp": "frame-ancestors 'none'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 25353
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Shift Technology",
          "host": "www.shift-technology.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Gandi SAS",
            "from": "2026-09-02",
            "until": "2027-03-19",
            "names": 1
          },
          "net": {
            "ip": "199.60.103.31",
            "asn": "209242",
            "cc": "US",
            "as": "CLOUDFLARESPECTRUM - Cloudflare London, LLC, US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:42Z",
          "cost": null,
          "page": {
            "final": "https://www.shift-technology.com/",
            "code": 200,
            "csp": "upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "consent.cookiebot.com",
              "play.hubspotvideo.com",
              "static.hsappstatic.net",
              "tools.luckyorange.com",
              "www.googletagmanager.com",
              "www.shift-technology.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "",
            "coop": "",
            "bytes": 170271
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "209242",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Gandi SAS"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 6
              }
            }
          }
        },
        {
          "name": "Sorare",
          "host": "sorare.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-01-13",
            "until": "2027-02-11",
            "names": 2
          },
          "net": {
            "ip": "3.162.38.66",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=2592000; includesubdomains",
          "front": "cloudfront",
          "server": "cloudfront",
          "at": "2026-10-19T06:14:22Z",
          "cost": null,
          "page": {
            "final": "https://sorare.com/",
            "code": 200,
            "csp": "frame-ancestors 'self'",
            "csp_ro": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.hotjar.com *.amplitude.com *.ads-twitter.com use.typekit.net *.googletagmanager.com *.google-analytics.com *.googleadservices.com *.segment.com *.doubleclick.net sc-static.net *.google.com *.gstatic.com *.googlesyndication.com connect.facebook.net js.stripe.com cdn.seon.io www.redditstatic.com analytics.tiktok.com bat.bing.com *.checkout.com; font-src 'self' data: fonts.gstatic.com use.typekit.net frontend-assets.sorare.tech frontend-assets.sorare.com frontend-assets.sorare.dev; media-src 'self' *.ctfassets.net frontend-assets.sorare.com frontend-assets.sorare.tech frontend-assets.sorare.dev assets.sorare.com assets.sorare.tech assets.sorare.dev; style-src 'self' 'unsafe-inline' fonts.googleapis.com cdn.jsdelivr.net use.typekit.net use.fontawesome.com blob:; connect-src *; img-src * data:; frame-src *; manifest-src 'self' https://sorare.cloudflareaccess.com; object-src 'none'; worker-src blob:;",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "camera=(), geolocation=(), microphone=()",
            "coop": "same-origin-allow-popups",
            "bytes": 21273
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=2592000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Spendesk",
          "host": "app.spendesk.com",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-27",
            "until": "2026-12-26",
            "names": 1
          },
          "net": {
            "ip": "104.21.67.58",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:38Z",
          "cost": null,
          "page": {
            "final": "https://app.spendesk.com/app",
            "code": 200,
            "csp": "frame-ancestors 'self' https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com chrome-extension://dipeehgoehnglgojdgfmndjemdfepkeb https://*.marqeta.com https://app.storyblok.com https://www.spendesk.com",
            "csp_ro": "connect-src 'self' https://api.spendesk.com https://logs.browser-intake-datadoghq.eu https://rum.browser-intake-datadoghq.eu https://browser-intake-datadoghq.eu https://api.segment.io https://cdn.segment.com https://api.amplitude.com https://gs.eu.amplitude.com https://api-sr.eu.amplitude.com https://api.storyblok.com https://api-js.mixpanel.com https://api-iam.intercom.io https://d3r43gyd9zmfep.cloudfront.net wss://nexus-websocket-a.intercom.io https://bat.bing.com https://in.hotjar.com https://*.trychameleon.com https://forms.hubspot.com https://eligibility.wootric.com https://stats.g.doubleclick.net https://www.google-analytics.com https://*.google-analytics.com https://*.spendesk.tools https://*.spendesk.com https://spx-staging-dev-i18n.s3.eu-west-1.amazonaws.com https://spx-staging-dev.s3.eu-west-1.amazonaws.com https://spx-production-i18n.s3.eu-west-1.amazonaws.com https://spx-production.s3.eu-west-1.amazonaws.com https://s3.eu-west-1.amazonaws.com/spx-staging https://s3.eu-west-1.amazonaws.com/spx-production https://app.satismeter.com https://accounts.google.com https://px.ads.linkedin.com https://widgets.marqeta.com https://*.usercentrics.eu https://login.microsoftonline.com/* https://sr-client-cfg.eu.amplitude.com https://maps.googleapis.com https://places.googleapis.com https://maps.gstatic.com https://assets.duffel.com https://api.duffel.com wss://chat.stream-io-api.com/connect https://chat.stream-io-api.com 'report-sample';script-src 'self' https://*.marqeta.com https://js.intercomcdn.com https://*.google-analytics.com https://cdn.wootric.com https://fast.trychameleon.com https://fastly.trychameleon.com https://widget.intercom.io https://cdn.mxpnl.com https://cdn.segment.com https://cdn.amplitude.com https://cdn.eu.amplitude.com https://tracking.g2crowd.com https://scout-cdn.salesloft.com https://serve.albacross.com https://js.hsforms.net https://d3r43gyd9zmfep.cloudfront.net https://cdn-3.convertexperiments.com https://www.googleoptimize.com https://apis.google.com https://www.google.com https://accounts.google.com https://maps.googleapis.com https://maps.gstatic.com https://analytics.twitter.com https://bat.bing.com https://cdn.heapanalytics.com https://connect.facebook.net https://*.g.doubleclick.net https://js.hs-analytics.net https://js.hs-banner.com https://*.hs-scripts.com https://js.hsleadflows.net https://script.hotjar.com https://snap.licdn.com https://static.ads-twitter.com https://static.hotjar.com https://www.googleadservices.com https://*.googletagmanager.com https://unpkg.com https://*.spendesk.com https://app.satismeter.com https://*.usercentrics.eu https://assets.duffel.com 'nonce-ib_ULo7MuvbX5qJ97y6v2' 'report-sample';worker-src 'self' blob:;frame-ancestors 'self' https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com https://api.spendesk.com chrome-extension://dipeehgoehnglgojdgfmndjemdfepkeb https://*.marqeta.com https://app.storyblok.com https://www.spendesk.com;report-uri https://api.spendesk.com/security/report/csp;block-all-mixed-content",
            "meta_csp": "",
            "scripts": [
              "web.cmp.usercentrics.eu"
            ],
            "xfo": "sameorigin",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 47009
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Swile",
          "host": "www.swile.co",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-21",
            "until": "2026-12-20",
            "names": 1
          },
          "net": {
            "ip": "216.150.1.193",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000",
          "front": "other",
          "server": "vercel",
          "at": "2026-10-19T06:14:44Z",
          "cost": null,
          "page": {
            "final": "https://www.swile.co/",
            "code": 200,
            "csp": "",
            "csp_ro": "base-uri 'self'; default-src 'none'; frame-ancestors 'none'; font-src 'self' https://fonts.gstatic.com; form-action 'self'; frame-src 'self' https://td.doubleclick.net; connect-src 'self' https://swile-privacy.my.onetrust.com https://cdn.cookielaw.org https://static.axept.io https://api.axept.io https://client.axept.io https://swile.containers.piwik.pro https://swile.piwik.pro/ https://adservice.google.com https://googleads.g.doubleclick.net https://www.google.com; img-src 'self' blob: data: https://cdn.cookielaw.org https://static.axept.io https://axeptio.imgix.net https://www.google.fr https://www.googletagmanager.com https://fonts.gstatic.com; manifest-src 'self'; object-src 'none'; report-uri https://csp-report.browser-intake-datadoghq.eu/api/v2/logs?dd-api-key=pub1f7041eb55ec9a12eea50b161be3d8c0&dd-evp-origin=content-security-policy&ddsource=csp-report; report-to csp; script-src 'nonce-MzQ3MWEzOTktYzQ2MC00ZDhjLWI1NmMtOTk4N2ZiZTlmZDYx' 'strict-dynamic' https://static.axept.io; style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://fonts.googleapis.com",
            "meta_csp": "",
            "scripts": [
              "player.vimeo.com",
              "tss.swile.co"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 228039
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Veepee",
          "host": "www.veepee.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-09-07",
            "until": "2027-03-19",
            "names": 43
          },
          "net": {
            "ip": "104.18.23.160",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:45Z",
          "cost": null,
          "page": {
            "final": "https://www.veepee.fr/gr/home/default",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "appleid.cdn-apple.com",
              "cdn.cookielaw.org",
              "static.cloudflareinsights.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 719209
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Verkor",
          "host": "verkor.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-17",
            "until": "2026-12-16",
            "names": 2
          },
          "net": {
            "ip": "162.159.135.42",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:58Z",
          "cost": null,
          "page": {
            "final": "https://verkor.com/",
            "code": 200,
            "csp": "upgrade-insecure-requests; base-uri 'self'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "challenges.cloudflare.com",
              "static.addtoany.com",
              "verkor.com"
            ],
            "xfo": "sameorigin",
            "xcto": "nosniff",
            "referrer": "same-origin",
            "permissions": "fullscreen=(self \"https://verkor.com\"), geolocation=*, camera=()",
            "coop": "",
            "bytes": 100292
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "Vestiaire Collective",
          "host": "fr.vestiairecollective.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-05",
            "until": "2027-01-03",
            "names": 3
          },
          "net": {
            "ip": "172.64.152.172",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=2592000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:45Z",
          "cost": null,
          "page": {
            "final": "https://fr.vestiairecollective.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "assets.vestiairecollective.com",
              "static.cloudflareinsights.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 264189
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=2592000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Voodoo",
          "host": "voodoo.io",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-13",
            "until": "2026-12-12",
            "names": 1
          },
          "net": {
            "ip": "31.43.161.6",
            "asn": "16509",
            "cc": "NL",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "framer/24ab00f",
          "at": "2026-10-19T06:14:01Z",
          "cost": null,
          "page": {
            "final": "https://voodoo.io/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "events.framer.com",
              "framerusercontent.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 373252
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Younited",
          "host": "younited.com",
          "life": "banques",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-08-31",
            "until": "2026-11-29",
            "names": 2
          },
          "net": {
            "ip": "150.171.110.117",
            "asn": "8075",
            "cc": "US",
            "as": "MICROSOFT-CORP-MSN-AS-BLOCK - Microsoft Corporation, US"
          },
          "hsts": "",
          "front": "azure",
          "server": "",
          "at": "2026-10-19T06:14:46Z",
          "cost": null,
          "page": {
            "final": "https://younited.com/fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "default-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; manifest-src 'self'; media-src 'self'; worker-src 'self' blob:;script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.privacy-center.org https://widget.trustpilot.com https://*.hotjar.com https://*.hubspot.com https://*.hsforms.net https://www.youtube.com https://*.doubleclick.net https://*.realytics.io https://*.realytics.net https://*.bing.com https://*.tiktok.com https://*.criteo.com https://*.taboola.com https://*.outbrain.com https://*.quora.com https://*.licdn.com https://*.roeyecdn.com https://*.hs-scripts.com https://*.hscollectedforms.net https://*.hs-analytics.net https://www.dwin1.com https://*.younited.com https://*.younited-credit.com;style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://*.typekit.net;img-src 'self' data: https://www.googletagmanager.com https://www.google.com https://www.google.fr https://www.google.it https://www.google.es https://www.google.pt https://www.google.de https://www.facebook.com https://fonts.gstatic.com https://aca-pr-cms-weu.ace1.younited-private.com https://designassets.younited.com https://*.doubleclick.net https://*.bing.com https://*.quora.com https://*.licdn.com https://*.linkedin.com https://*.hubspot.com https://*.hsforms.com https://*.adnxs.com https://*.privacy-center.org https://*.analytics.google.com https://lantern.roeye.com https://*.younited.com https://*.younited-credit.com;font-src 'self' data: https://fonts.gstatic.com https://*.typekit.net;connect-src 'self' https://www.googletagmanager.com https://*.privacy-center.org https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com https://widget.trustpilot.com https://www.google.com https://*.tiktok.com https://*.tiktokw.us https://*.bing.com https://*.bing.net https://*.doubleclick.net https://www.googleadservices.com https://*.outbrain.com https://*.taboola.com https://*.creativecdn.com https://*.hubspot.com https://*.hubapi.com https://*.hsforms.com https://*.hscollectedforms.net https://*.licdn.com https://*.linkedin.com https://*.criteo.com https://*.younited.com https://*.younited-credit.com;frame-src 'self' https://widget.trustpilot.com https://www.googletagmanager.com https://*.criteo.com https://*.doubleclick.net https://*.youtube.com https://*.hsforms.net https://tr.cloud-media.fr;report-uri https://cspreport.services.younited-credit.com/csp-report;",
            "meta_csp": "",
            "scripts": [
              "widget.trustpilot.com",
              "www.younited.com",
              "younited.com"
            ],
            "xfo": "SAMEORIGIN, SAMEORIGIN",
            "xcto": "nosniff,nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), geolocation=(), fullscreen=(self \"https://demo.arcade.software\"), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), display-capture=()",
            "coop": "",
            "bytes": 212487
          },
          "cle": {
            "kind": "cloud",
            "name": "Microsoft Azure",
            "country": "US",
            "asn": "8075",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Microsoft Azure",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        }
      ]
    },
    {
      "key": "etat",
      "label": {
        "fr": "État et services publics",
        "en": "State and public services",
        "es": "Estado y servicios públicos"
      },
      "entries": [
        {
          "name": "Impots.gouv",
          "host": "www.impots.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-09-17",
            "until": "2027-04-03",
            "names": 2
          },
          "net": {
            "ip": "23.192.237.149",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=34560000; includesubdomains",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:24Z",
          "cost": null,
          "page": {
            "final": "https://www.impots.gouv.fr/accueil",
            "code": 200,
            "csp": "img-src 'self' impots.gouv.fr *.impots.gouv.fr *.france-services.gouv.fr *.openstreetmap.org *.w3.org *.basemaps.cartocdn.com data: *.w3.org *.data.economie.gouv.fr *.basemaps.cartocdn.com; script-src 'self' impots.gouv.fr *.impots.gouv.fr 'unsafe-eval' 'unsafe-inline'; style-src 'unsafe-eval' 'unsafe-inline' *.impots.gouv.fr 'self';frame-ancestors 'self'; worker-src blob:",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 297048
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=34560000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Service-Public",
          "host": "www.service-public.gouv.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-03-04",
            "until": "2027-03-04",
            "names": 18
          },
          "net": {
            "ip": "160.92.168.33",
            "asn": "47957",
            "cc": "FR",
            "as": "ING-AS - Worldline IGSA SA, FR"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:41Z",
          "cost": null,
          "page": {
            "final": "https://www.service-public.gouv.fr/",
            "code": 200,
            "csp": "default-src 'self' *.service-public.fr *.gouv.fr; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.abtasty.com https://policevss.minint.chat https://gendarmerie-nationale.minint.chat *.gouv.fr *.service-public.fr; connect-src 'self' *.abtasty.com *.service-public.fr *.gouv.fr *.readspeaker.com; img-src 'self' data: *.service-public.fr *.gouv.fr *.abtasty.com; font-src 'self' data: *.service-public.fr *.gouv.fr *.abtasty.com; style-src 'self' 'unsafe-inline' *.service-public.fr *.gouv.fr *.abtasty.com; object-src 'none'; frame-src *.gouv.fr *.service-public.fr https://gendarmerie-nationale.minint.chat https://policevss.minint.chat https://dggn.my.site.com https://www.youtube.com https://www.dailymotion.com https://vimeo.com https://player.vimeo.com https://www.youtube-nocookie.com *.readspeaker.com *.abtasty.com; frame-ancestors 'self' https://www.service-public.gouv.fr https://entreprendre.service-public.gouv.fr",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "try.abtasty.com",
              "www.service-public.gouv.fr"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=*, geolocation=(self), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=*, usb=(), xr-spatial-tracking=()",
            "coop": "same-origin-allow-popups",
            "bytes": 53172
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Worldline",
            "country": "FR",
            "asn": "47957",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Worldline",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "FranceConnect",
          "host": "franceconnect.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-09-09",
            "until": "2026-12-08",
            "names": 14
          },
          "net": {
            "ip": "45.60.33.39",
            "asn": "19551",
            "cc": "US",
            "as": "INCAPSULA - Incapsula Inc, US"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:13:46Z",
          "cost": null,
          "page": {
            "final": "https://www.franceconnect.gouv.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "geo.dailymotion.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 29607
          },
          "cle": {
            "kind": "cdn",
            "name": "Imperva",
            "country": "US",
            "asn": "19551",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Imperva",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Ameli",
          "host": "www.ameli.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2025-12-02",
            "until": "2026-12-02",
            "names": 16
          },
          "net": {
            "ip": "141.101.90.105",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:04Z",
          "cost": null,
          "page": {
            "final": "https://www.ameli.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.jsdelivr.net",
              "tag.aticdn.net",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "",
            "coop": "",
            "bytes": 88765
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "CAF",
          "host": "www.caf.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-04-28",
            "until": "2026-11-12",
            "names": 2
          },
          "net": {
            "ip": "66.22.41.120",
            "asn": "198949",
            "cc": "US",
            "as": "Radware - Radware Ltd, IL"
          },
          "hsts": "",
          "front": "other",
          "server": "rdwr",
          "at": "2026-10-19T06:14:07Z",
          "cost": null,
          "page": {
            "final": "https://www.caf.fr/",
            "code": 200,
            "csp": "report-uri /report-csp-violation",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 125636
          },
          "cle": {
            "kind": "cdn",
            "name": "Radware",
            "country": "IL",
            "asn": "198949",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Radware",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Urssaf",
          "host": "www.urssaf.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-09-30",
            "until": "2027-04-16",
            "names": 2
          },
          "net": {
            "ip": "193.178.136.246",
            "asn": "48140",
            "cc": "FR",
            "as": "cirtilnet - Agence Centrale Des Organismes De Securite Sociale, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:45Z",
          "cost": null,
          "page": {
            "final": "https://www.urssaf.fr/accueil.html",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 360902
          },
          "cle": {
            "kind": "propre",
            "name": "Cirtil (Urssaf)",
            "country": "FR",
            "asn": "48140",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cirtil (Urssaf)",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "France Travail",
          "host": "www.francetravail.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "ffdhe3072",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-05-20",
            "until": "2026-12-04",
            "names": 2
          },
          "net": {
            "ip": "185.215.64.79",
            "asn": "205461",
            "cc": "FR",
            "as": "PE-AS - France Travail EPA, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:43Z",
          "cost": null,
          "page": {
            "final": "https://www.francetravail.fr/accueil/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.francetravail.fr",
              "cdn.tagcommander.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 23264
          },
          "cle": {
            "kind": "propre",
            "name": "France Travail",
            "country": "FR",
            "asn": "205461",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "France Travail",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "ANTS",
          "host": "ants.gouv.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 3072,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-06-26",
            "until": "2027-01-11",
            "names": 19
          },
          "net": {
            "ip": "87.98.187.73",
            "asn": "16276",
            "cc": "FR",
            "as": "OVH - OVH SAS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://ants.gouv.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 222
          },
          "cle": {
            "kind": "hebergeur",
            "name": "OVHcloud",
            "country": "FR",
            "asn": "16276",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "OVHcloud",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 3072,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Élysée",
          "host": "www.elysee.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo (Europe) SL",
            "from": "2026-06-24",
            "until": "2027-01-08",
            "names": 2
          },
          "net": {
            "ip": "104.18.31.248",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:20Z",
          "cost": null,
          "page": {
            "final": "https://www.elysee.fr/",
            "code": 200,
            "csp": "upgrade-insecure-requests",
            "csp_ro": "default-src 'self' https:; base-uri https://www.elysee.fr; block-all-mixed-content; child-src *; font-src 'self' data: https://fonts.gstatic.com https://www.elysee.fr https://admin.elysee.fr https://www.elysee.fr; form-action 'self'; frame-ancestors 'none'; img-src https://stats.g.doubleclick.net data: https://www.elysee.fr https://admin.elysee.fr https://www.elysee.fr https://captcha.liveidentity.com https://*.tile.openstreetmap.org; object-src 'none'; script-src 'unsafe-inline' https://www.elysee.fr https://isho.elysee.fr https://admin.elysee.fr https://www.elysee.fr https://captcha.liveidentity.com https://platform.twitter.com https://www.instagram.com; style-src https://fonts.googleapis.com 'unsafe-inline' https://www.elysee.fr https://admin.elysee.fr https://www.elysee.fr",
            "meta_csp": "",
            "scripts": [
              "www.elysee.fr"
            ],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "no-referrer, strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 228429
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo (Europe) SL"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Gouvernement",
          "host": "www.info.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo (Europe) SL",
            "from": "2026-07-15",
            "until": "2027-01-29",
            "names": 4
          },
          "net": {
            "ip": "141.101.90.105",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:24Z",
          "cost": null,
          "page": {
            "final": "https://www.info.gouv.fr/",
            "code": 200,
            "csp": "default-src 'self'; base-uri 'self'; block-all-mixed-content; connect-src 'self' geo.api.gouv.fr *.gouvernement.fr *.api.swiftype.com app-eu.readspeaker.com cdn-eu.readspeaker.com vtdnntts-eu.readspeaker.com media-eu.readspeaker.com www.google.com translate.googleapis.com www.googleadservices.com googletagmanager.com www.googletagmanager.com cdn.by.wonderpush.com measurements-api.wonderpush.com api.wonderpush.com zhsv.info.gouv.fr ad.doubleclick.net server.adform.net s2.adform.net *.criteo.com connect.facebook.net www.facebook.com api.carte-jnr.fr wss://genii-messages.tolk.ai genii-api.tolk.ai c.amazon-adsystem.com/ aax-eu.amazon-adsystem.com ara.paa-reporting-advertising.amazon; font-src 'self' data: fonts.gstatic.com genii-script.tolk.ai/fonts/; frame-src 'self' *.doubleclick.net cdn.by.wonderpush.com instagram.com www.instagram.com twitter.com platform.twitter.com syndication.twitter.com x.com dailymotion.com www.dailymotion.com geo.dailymotion.com linkedin.com www.linkedin.com media.licdn.com vimeo.com www.vimeo.com player.vimeo.com youtube.com www.youtube.com www.youtube-nocookie.com connect.facebook.net www.facebook.com app-eu.readspeaker.com *.sibforms.com server.adform.net s2.adform.net *.criteo.com documentation-administrative.gouv.fr embed.acast.com aax-eu.amazon-adsystem.com; img-src blob: 'self' https://www.info.gouv.fr zhsv.info.gouv.fr data: piste.gouv.fr *.piste.gouv.fr cdn-eu.readspeaker.com openlayers.org tile.openstreetmap.org *.tile.openstreetmap.org tile.openstreetmap.fr *.tile.openstreetmap.fr data.geopf.fr *.doubleclick.net googletagmanager.com www.googletagmanager.com translate.google.com fonts.gstatic.com abs.twimg.com pbs.twimg.com ton.twimg.com platform.twitter.com syndication.twitter.com ytimg.com *.ytimg.com server.adform.net s2.adform.net *.criteo.com connect.facebook.net www.facebook.com genii-public.oos.cloudgouv-eu-west-1.outscale.com hawk-tracker.360yield.com; media-src blob: 'self' cdn-eu.readspeaker.com; object-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' 'self' barometre.gouvernement.fr zhsv.info.gouv.fr piste.gouv.fr *.piste.gouv.fr cdn-eu.readspeaker.com googletagmanager.com www.googletagmanager.com platform.twitter.com *.twitter.com www.instagram.com connect.facebook.net www.facebook.com cdn.by.wonderpush.com server.adform.net s2.adform.net *.criteo.com genii-script.tolk.ai kwo.eulerian.net c.amazon-adsystem.com libjs.s4mdsp.com; style-src 'unsafe-inline' 'self' barometre.gouvernement.fr piste.gouv.fr *.piste.gouv.fr cdn-eu.readspeaker.com www.gstatic.com ton.twimg.com platform.twitter.com genii-script.tolk.ai genii-public.oos.cloudgouv-eu-west-1.outscale.com/project-5cc16925-df8c-41f2-9020-58b67a0bfe79/css/custom.css",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer",
            "permissions": "",
            "coop": "",
            "bytes": 257880
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo (Europe) SL"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Ministère de l'Intérieur",
          "host": "www.interieur.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-07-20",
            "until": "2027-02-03",
            "names": 22
          },
          "net": {
            "ip": "172.66.149.1",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:25Z",
          "cost": null,
          "page": {
            "final": "https://www.interieur.gouv.fr/",
            "code": 200,
            "csp": "frame-ancestors 'self';,frame-ancestors 'self';,frame-ancestors 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 76317
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Ministère des Armées",
          "host": "www.defense.gouv.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo (Europe) SL",
            "from": "2026-03-09",
            "until": "2027-04-09",
            "names": 2
          },
          "net": {
            "ip": "185.24.185.2",
            "asn": "60855",
            "cc": "FR",
            "as": "DISIC-RIE-AS - LA DIRECTION INTERMINISTERIELLE DU NUMERIQUE, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:16Z",
          "cost": null,
          "page": {
            "final": "https://www.defense.gouv.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 94040
          },
          "cle": {
            "kind": "propre",
            "name": "Réseau interministériel de l'État (DINUM)",
            "country": "FR",
            "asn": "60855",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Réseau interministériel de l'État (DINUM)",
              "kind": "propre",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo (Europe) SL"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Ministère de l'Économie",
          "host": "www.economie.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 3072,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-08-18",
            "until": "2027-03-04",
            "names": 2
          },
          "net": {
            "ip": "141.101.90.96",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:17Z",
          "cost": null,
          "page": {
            "final": "https://www.economie.gouv.fr/",
            "code": 200,
            "csp": "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src https: ; child-src https: platform.twitter.com; img-src https: data:; font-src 'self' data: https:; frame-ancestors 'self';",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "same-origin",
            "permissions": "",
            "coop": "",
            "bytes": 135182
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=15552000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 3072,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Ministère de la Justice",
          "host": "www.justice.gouv.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo (Europe) SL",
            "from": "2026-07-10",
            "until": "2027-01-24",
            "names": 8
          },
          "net": {
            "ip": "185.24.184.182",
            "asn": "60855",
            "cc": "FR",
            "as": "DISIC-RIE-AS - LA DIRECTION INTERMINISTERIELLE DU NUMERIQUE, FR"
          },
          "hsts": "max-age=16070400; includesubdomains",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:26Z",
          "cost": null,
          "page": {
            "final": "https://www.justice.gouv.fr/",
            "code": 200,
            "csp": "default-src 'self' 'unsafe-inline' *.youtube-nocookie.com gva.et-gv.fr bhog.justice.gouv.fr minjus.ent.et-gv.fr; script-src 'self' 'unsafe-inline' *.youtube-nocookie.com gva.et-gv.fr bhog.justice.gouv.fr minjus.ent.et-gv.fr; object-src 'none'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' 'unsafe-inline' data: *.youtube.com *.ytimg.com *.tile.openstreetmap.fr gva.et-gv.fr *.gva.et-gv.fr bhog.justice.gouv.fr *.bhog.justice.gouv.fr minjus.ent.et-gv.fr; media-src 'self' *.youtube.com *.mediatheque.justice.gouv.fr; frame-src 'self' *.youtube.com *.youtube-nocookie.com *.dailymotion.com player.vimeo.com *.stats.justice.gouv.fr; font-src 'self' 'unsafe-inline' data: fonts.googleapis.com fonts.gstatic.com ; connect-src 'self' 'unsafe-inline' *.tile.openstreetmap.fr; report-uri /report-csp-violation; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 81060
          },
          "cle": {
            "kind": "propre",
            "name": "Réseau interministériel de l'État (DINUM)",
            "country": "FR",
            "asn": "60855",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Réseau interministériel de l'État (DINUM)",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo (Europe) SL"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Ministère de la Santé",
          "host": "sante.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Ireland Limited",
            "from": "2026-09-21",
            "until": "2027-04-07",
            "names": 26
          },
          "net": {
            "ip": "185.194.82.27",
            "asn": "12601",
            "cc": "FR",
            "as": "CEGEDIM - Cegedim.Cloud SASU, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:00Z",
          "cost": null,
          "page": {
            "final": "https://sante.gouv.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 6007
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Cegedim.Cloud",
            "country": "FR",
            "asn": "12601",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cegedim.Cloud",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Ireland Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Éducation nationale",
          "host": "www.education.gouv.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 384,
            "curve": "P-384",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Hellenic Academic and Research Institutions CA",
            "from": "2025-12-30",
            "until": "2026-12-30",
            "names": 3
          },
          "net": {
            "ip": "141.101.90.107",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:19Z",
          "cost": null,
          "page": {
            "final": "https://www.education.gouv.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 94089
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 384,
                "curve": "P-384",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Hellenic Academic and Research Institutions CA"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Affaires étrangères",
          "host": "www.diplomatie.gouv.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Gandi SAS",
            "from": "2025-10-16",
            "until": "2026-11-14",
            "names": 2
          },
          "net": {
            "ip": "45.145.121.70",
            "asn": "50588",
            "cc": "FR",
            "as": "FR-MAE - Ministere De L_europe Et Des Affaires Etrangeres, FR"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:17Z",
          "cost": null,
          "page": {
            "final": "https://www.diplomatie.gouv.fr/fr",
            "code": 200,
            "csp": "default-src 'self'; script-src 'self' 'unsafe-inline' https:; connect-src 'self' https:; object-src 'none'; frame-src 'self' https:; img-src 'self' https: data:; frame-ancestors 'self' https://*.diplomatie.gouv.fr; style-src 'self' 'unsafe-inline' https://*.ttwstatic.com; font-src 'self' data:;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "same-origin",
            "permissions": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
            "coop": "",
            "bytes": 131165
          },
          "cle": {
            "kind": "propre",
            "name": "Ministère de l'Europe et des Affaires étrangères",
            "country": "FR",
            "asn": "50588",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Ministère de l'Europe et des Affaires étrangères",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Gandi SAS"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "ANSSI",
          "host": "cyber.gouv.fr",
          "fact": "L'ANSSI recommande l'hybridation pour la transition post-quantique : avis de 2022, complété en décembre 2023.",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-10-17",
            "until": "2027-01-15",
            "names": 4
          },
          "net": {
            "ip": "45.60.36.39",
            "asn": "19551",
            "cc": "US",
            "as": "INCAPSULA - Incapsula Inc, US"
          },
          "hsts": "",
          "front": "imperva",
          "server": "",
          "at": "2026-10-19T06:13:43Z",
          "cost": null,
          "page": {
            "final": "https://cyber.gouv.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 840
          },
          "cle": {
            "kind": "cdn",
            "name": "Imperva",
            "country": "US",
            "asn": "19551",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "3DS Outscale",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Gandi SAS"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "CNIL",
          "host": "www.cnil.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo (Europe) SL",
            "from": "2026-05-07",
            "until": "2026-11-21",
            "names": 5
          },
          "net": {
            "ip": "104.20.39.48",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:13Z",
          "cost": null,
          "page": {
            "final": "https://www.cnil.fr/fr",
            "code": 200,
            "csp": "default-src *.openstreetmap.org *.openlayers.org *.cartocdn.com *.arcgisonline.com 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com cdn.jsdelivr.net unpkg.com *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr; script-src-elem 'self' data: 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com cdn.jsdelivr.net unpkg.com *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net cdnjs.cloudflare.com *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr; img-src 'self' *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr data:; font-src 'self' *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr; object-src 'self' *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr; frame-src 'self' *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr; frame-ancestors 'self' *.openstreetmap.org *.openlayers.org *.cartocdn.com *.cnil.fr ; form-action 'self' *.signal-spam.fr *.cnil.fr *.economie.gouv.fr ; block-all-mixed-content; base-uri 'self'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 84780
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1",
                "tls1_1",
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo (Europe) SL"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "Banque de France",
          "host": "www.banque-france.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-01-22",
            "until": "2027-01-21",
            "names": 53
          },
          "net": {
            "ip": "96.17.193.31",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=600",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:06Z",
          "cost": null,
          "page": {
            "final": "https://www.banque-france.fr/fr",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.jsdelivr.net",
              "cdn.trustcommander.net"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 370128
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=600",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        }
      ]
    },
    {
      "key": "banques",
      "label": {
        "fr": "Banques — espace client",
        "en": "Banks — customer area",
        "es": "Bancos — área de clientes"
      },
      "entries": [
        {
          "name": "Crédit Agricole",
          "host": "www.credit-agricole.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-CHACHA20-POLY1305",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-05-13",
            "until": "2026-11-27",
            "names": 2
          },
          "net": {
            "ip": "158.191.172.47",
            "asn": "9159",
            "cc": "FR",
            "as": "UNSPECIFIED - Credit Agricole SA, FR"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "apache",
          "at": "2026-10-19T06:14:15Z",
          "cost": null,
          "page": {
            "final": "https://www.credit-agricole.fr/",
            "code": 200,
            "csp": "frame-ancestors 'self' https://*.group.gca https://*.credit-agricole.fr https://*.banque-chalus.fr",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.tagcommander.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "sync-xhr=('https://*.credit-agricole.fr')",
            "coop": "same-origin-allow-popups",
            "bytes": 411895
          },
          "cle": {
            "kind": "propre",
            "name": "Crédit Agricole",
            "country": "FR",
            "asn": "9159",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Crédit Agricole",
              "kind": "propre",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "BNP Paribas",
          "host": "mabanque.bnpparibas",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Inc",
            "from": "2025-11-07",
            "until": "2026-11-06",
            "names": 12
          },
          "net": {
            "ip": "23.40.5.242",
            "asn": "16625",
            "cc": "US",
            "as": "AKAMAI-AS - Akamai Technologies, Inc., US"
          },
          "hsts": "",
          "front": "akamai",
          "server": "akamaighost",
          "at": "2026-10-19T06:13:53Z",
          "cost": null,
          "page": {
            "final": "https://mabanque.bnpparibas/",
            "code": 200,
            "csp": "frame-ancestors 'self' *.bnpparibas *.mosaic.fr *.biapi.pro *.dev.echonet *.bnpparibas.net *.protection24.com *.facil-iti.com *.herokuapp.com  *.matmut.com *.cardif-iard.fr;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "mabanque.bnpparibas"
            ],
            "xfo": "SAMEORIGIN,SAMEORIGIN",
            "xcto": "nosniff,nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 214838
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "16625",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Société Générale",
          "host": "particuliers.sg.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-08-26",
            "until": "2027-03-12",
            "names": 21
          },
          "net": {
            "ip": "54.246.44.239",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:13:57Z",
          "cost": null,
          "page": {
            "final": "https://particuliers.sg.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 121734
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Amazon Web Services",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "La Banque Postale",
          "host": "www.labanquepostale.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-04-13",
            "until": "2026-10-29",
            "names": 2
          },
          "net": {
            "ip": "23.33.90.134",
            "asn": "20940",
            "cc": "US",
            "as": "AKAMAI-ASN1 - Akamai International B.V., NL"
          },
          "hsts": "max-age=600",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:26Z",
          "cost": null,
          "page": {
            "final": "https://www.labanquepostale.fr/",
            "code": 200,
            "csp": "frame-ancestors 'self' *.sf.intra.laposte.fr *.labanquepostale.fr file://* ;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.tagcommander.com",
              "try.abtasty.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 219442
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "20940",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=600",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "LCL",
          "host": "www.lcl.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2025-11-03",
            "until": "2026-11-03",
            "names": 1
          },
          "net": {
            "ip": "34.49.172.181",
            "asn": "396982",
            "cc": "US",
            "as": "GOOGLE-CLOUD-PLATFORM - Google LLC, US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "google",
          "server": "",
          "at": "2026-10-19T06:14:27Z",
          "cost": null,
          "page": {
            "final": "https://www.lcl.fr/",
            "code": 200,
            "csp": "default-src 'self' https://*.lcl.fr https://*.id.fr.cly; base-uri 'self'; object-src 'none'; frame-ancestors 'self' https://*.lcl.fr https://*.id.fr.cly https://i.ytimg.com; frame-src 'self' https://*.lcl.gca https://*.lcl.fr https://*.fr.cly https://*.group.gca https://*.prodinfo.gca https://cdn.trustcommander.net https://www.google.com https://*.prismic.io https://www.youtube.com https://youtube.com https://diagnostic.nexecur.fr https://*.streamlike.com https://lcl.clients.harvest.fr http://lcl.clients.harvest.fr https://www.facebook.com https://www.instagram.com https://www.linkedin.com https://x.com https://*.x.com https://*.twitter.com https://w.soundcloud.com https://www.tiktok.com https://alarme.nexecur.fr; script-src 'self' 'unsafe-eval' 'nonce-F+8XCXDO0u37qW+Z/0zJys0VqFHUKn5mv043kbS0zD8=' https://onelinksmartscript.appsflyer.com https://cdn.tagcommander.com https://cdn.trustcommander.net https://cdn.jsdelivr.net https://prismic.io https://*.prismic.io https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.tiktok.com https://*.tiktok.com https://*.ttwstatic.com https://*.tiktokw.us https://*.tiktokw.eu https://*.tiktokcdn-us.com https://x.com https://*.x.com https://*.twitter.com https://snap.licdn.com https://connect.facebook.net https://static.ads-twitter.com https://*.g.doubleclick.net https://mmtro.com https://*.mmtro.com https://html2canvas.hertzen.com https://tag.aticdn.net 'unsafe-hashes' 'sha256-MhtPZXr7+LpJUY5qtMutB+qWfQtMaPccfe7QXtCcEYc='; style-src 'self' 'nonce-F+8XCXDO0u37qW+Z/0zJys0VqFHUKn5mv043kbS0zD8=' https://fonts.googleapis.com https://*.ttwstatic.com 'unsafe-hashes' 'sha256-YLrkGJkSArF0qiusPn6+SF6+M6tuJnaRhTlSmYTyi1c=' 'sha256-UP0QZg7irvSMvOBz9mH2PIIE28+57UiavRfeVea0l3g=' 'sha256-QUUarKcK1+Uvj9wHZFN/a5AstfkLR+1kuL90J98KHIA=' 'sha256-ibtZaD1lK+plWZu6IsOsIEaldm8AHwaipEnluSX5aZw=' 'sha256-URq8ZilbVVMjAd6zOVE5B4r5Z+qQs4pbe1annO6TVt4=' 'sha256-BP+M1AXHqyPKnYRRgXdxpigh6EyqAOpwfw/E1kKZtQQ=' 'sha256-/aBYYnLJ+kjOFJoffiEokT/6p+C/XZIAcr8Pt6wp0aI=' 'sha256-7fYo8yTdFATeW9s9rooTjEaPsP5NAh+ldMQgArv/l70=' 'sha256-ryAKBfXWli4W45M0TcE6ZrgydwbsdY7gamWZ8zZL7eM='; style-src-attr 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https: ws: wss:;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "onelinksmartscript.appsflyer.com",
              "static.cdn.prismic.io"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 431624
          },
          "cle": {
            "kind": "cloud",
            "name": "Google Cloud",
            "country": "US",
            "asn": "396982",
            "prev": {
              "date": "2026-10-15",
              "pq": "partial",
              "name": "Google Cloud",
              "kind": "cloud",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Caisse d'Épargne",
          "host": "www.caisse-epargne.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-09-22",
            "until": "2027-04-08",
            "names": 2
          },
          "net": {
            "ip": "13.227.231.64",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudfront",
          "server": "",
          "at": "2026-10-19T06:14:32Z",
          "cost": null,
          "page": {
            "final": "https://www.caisse-epargne.fr/",
            "code": 200,
            "csp": "default-src 'none'; script-src 'self' acdn.adnxs.com cdn.admo.tv cstatic.weborama.fr dc.ads.linkedin.com developers.atinternet-solutions.com *.dom101.mapres *.dom101.intres *.dom101.prdres *.doubleclick.net d.turn.com *.evermaps.net *.evermaps.io *.facebook.net facebook.com *.gbpce.net *.googletagmanager.com *.google.com *.google.fr *.googleadservices.com *.hcaptcha.com *.kameleoon.eu *.kameleoon.com *.kameleoon.io *.k-app.io marketing.adobe.com my.tealiumiq.com publicidees.com px.ads.linkedin.com r.turn.com secure.adnxs.com snap.licdn.com support.criteo.com *.tiqcdn.com 'unsafe-inline' 'unsafe-eval' *.1bis.com *.myfeelback.com cdn.trustindex.io analytics.tiktok.com s2.adform.net track.adform.net *.adform.net *.bing.com *.teads.tv *.criteo.com *.pinterest.com *.pinimg.com sc-static.net *.snapchat.com adservice.google.com *.taboola.com *.adsrvr.org tracking.e-novate.fr *.refiner.io www.redditstatic.com pixel-config.reddit.com *.experimentation.dev *.admo.tv *.iadvize.com *.caisse-epargne.fr; connect-src 'self' *.dom101.mapres *.dom101.intres *.dom101.prdres *.kameleoon.com *.kameleoon.eu *.kameleoon.io *.k-app.io *.omtrdc.net *.tealiumiq.com *.2o7.net *.hcaptcha.com cdn.linkedin.oribi.io adservice.google.com www.facebook.com *.prod.mycloud.intrabpce.fr google.com *.google.com *.google.fr analytics.tiktok.com px.ads.linkedin.com pagead2.googlesyndication.com gen-widgets.hom.mycloud.intrabpce.fr gen-widgets.prod.mycloud.intrabpce.fr wss://www.banquepopulaire.fr/genesys/genesys/cometd *.teads.tv *.bing.com *.criteo.com *.linkeo.com *.pinterest.com *.pinimg.com sc-static.net *.snapchat.com https://www.google.com *.adform.net *.taboola.com *.adsrvr.org *.googleadservices.com *.refiner.io tracking.e-novate.fr www.redditstatic.com pixel-config.reddit.com alb.reddit.com *.evermaps.io *.experimentation.dev wss://*.iadvize.com *.iadvize.com *.caisse-epargne.fr; img-src 'self' data: cdn.admo.tv *.cloudimg.io cstatic.weborama.fr developers.atinternet-solutions.com *.doubleclick.net d.turn.com www.facebook.com www.google.fr www.google.com *.googletagmanager.com *.kameleoon.eu *.kameleoon.com *.kameleoon.io *.k-app.io *.omtrdc.net ib.adnxs.com publicidees.com *.hcaptcha.com r.turn.com secure.adnxs.com snap.licdn.com support.criteo.com *.myfeelback.com *.kxcdn.com www.linkedin.com dc.ads.linkedin.com px.ads.linkedin.com px4.ads.linkedin.com cdn.trustindex.io my.tealiumiq.com action.metaffiliation.com *.bing.com *.teads.tv *.criteo.com *.pinterest.com *.pinimg.com sc-static.net *.snapchat.com adservice.google.com *.adform.net *.googleadservices.com tracking.e-novate.fr alb.reddit.com *.experimentation.dev *.2o7.net *.iadvize.com *.caisse-epargne.fr; style-src 'self' fonts.googleapis.com *.hcaptcha.com 'unsafe-inline' *.kameleoon.eu *.kameleoon.com *.kameleoon.io *.k-app.io cdn.trustindex.io *.iadvize.com *.caisse-epargne.fr; font-src 'self' data: fonts.gstatic.com *.iadvize.com; frame-ancestors 'self' *.dom101.mapres *.dom101.intres *.dom101.prdres *.caisse-epargne.fr; frame-src https: * *.refiner.io; worker-src 'self' blob: blob:; report-uri https://www.csp.bpce.fr/v1/record?id=CEPME;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "0ziq3geklq.kameleoon.eu",
              "www.caisse-epargne.fr"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "sync-xhr=(self)",
            "coop": "",
            "bytes": 331884
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Banque Populaire",
          "host": "www.banquepopulaire.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-02-03",
            "until": "2027-03-06",
            "names": 15
          },
          "net": {
            "ip": "18.245.175.79",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "cloudfront",
          "server": "",
          "at": "2026-10-19T06:14:31Z",
          "cost": null,
          "page": {
            "final": "https://www.banquepopulaire.fr/",
            "code": 200,
            "csp": "default-src 'none'; script-src 'self' acdn.adnxs.com cdn.admo.tv cstatic.weborama.fr dc.ads.linkedin.com developers.atinternet-solutions.com *.dom101.mapres *.dom101.intres *.dom101.prdres *.doubleclick.net d.turn.com *.evermaps.net *.evermaps.io *.facebook.net facebook.com *.gbpce.net *.googletagmanager.com *.google.com *.google.fr *.googleadservices.com *.hcaptcha.com *.kameleoon.eu *.kameleoon.com *.kameleoon.io *.k-app.io marketing.adobe.com my.tealiumiq.com publicidees.com px.ads.linkedin.com r.turn.com secure.adnxs.com snap.licdn.com support.criteo.com *.tiqcdn.com 'unsafe-inline' 'unsafe-eval' *.1bis.com *.myfeelback.com cdn.trustindex.io analytics.tiktok.com s2.adform.net track.adform.net *.adform.net *.bing.com *.teads.tv *.criteo.com *.pinterest.com *.pinimg.com sc-static.net *.snapchat.com adservice.google.com *.taboola.com *.adsrvr.org tracking.e-novate.fr *.refiner.io www.redditstatic.com pixel-config.reddit.com *.experimentation.dev *.linkeo.com reversimmo.banquepopulaire.fr *.banquepopulaire.fr; connect-src 'self' *.dom101.mapres *.dom101.intres *.dom101.prdres *.kameleoon.com *.kameleoon.eu *.kameleoon.io *.k-app.io *.omtrdc.net *.tealiumiq.com *.2o7.net *.hcaptcha.com cdn.linkedin.oribi.io adservice.google.com www.facebook.com *.prod.mycloud.intrabpce.fr google.com *.google.com *.google.fr analytics.tiktok.com px.ads.linkedin.com pagead2.googlesyndication.com gen-widgets.hom.mycloud.intrabpce.fr gen-widgets.prod.mycloud.intrabpce.fr wss://www.banquepopulaire.fr/genesys/genesys/cometd *.teads.tv *.bing.com *.criteo.com *.linkeo.com *.pinterest.com *.pinimg.com sc-static.net *.snapchat.com https://www.google.com *.adform.net *.taboola.com *.adsrvr.org *.googleadservices.com *.refiner.io tracking.e-novate.fr www.redditstatic.com pixel-config.reddit.com alb.reddit.com *.evermaps.io *.experimentation.dev *.banquepopulaire.fr; img-src 'self' data: cdn.admo.tv *.cloudimg.io cstatic.weborama.fr developers.atinternet-solutions.com *.doubleclick.net d.turn.com www.facebook.com www.google.fr www.google.com *.googletagmanager.com *.kameleoon.eu *.kameleoon.com *.kameleoon.io *.k-app.io *.omtrdc.net ib.adnxs.com publicidees.com *.hcaptcha.com r.turn.com secure.adnxs.com snap.licdn.com support.criteo.com *.myfeelback.com *.kxcdn.com www.linkedin.com dc.ads.linkedin.com px.ads.linkedin.com px4.ads.linkedin.com cdn.trustindex.io my.tealiumiq.com action.metaffiliation.com *.bing.com *.teads.tv *.criteo.com *.pinterest.com *.pinimg.com sc-static.net *.snapchat.com adservice.google.com *.adform.net *.googleadservices.com tracking.e-novate.fr alb.reddit.com *.experimentation.dev *.linkeo.com *.banquepopulaire.fr; style-src 'self' fonts.googleapis.com *.hcaptcha.com 'unsafe-inline' *.kameleoon.eu *.kameleoon.com *.kameleoon.io *.k-app.io cdn.trustindex.io *.linkeo.com *.banquepopulaire.fr; font-src 'self' data: fonts.gstatic.com; frame-ancestors 'self' *.dom101.mapres *.dom101.intres *.dom101.prdres *.banquepopulaire.fr; frame-src https: * *.refiner.io; worker-src 'self' blob:; report-uri https://www.csp.bpce.fr/v1/record?id=CEPME;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "pno21vdz38.kameleoon.eu",
              "www.banquepopulaire.fr"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "sync-xhr=(self)",
            "coop": "",
            "bytes": 332228
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Crédit Mutuel",
          "host": "www.creditmutuel.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES256-GCM-SHA384",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-07-01",
            "until": "2027-01-16",
            "names": 15
          },
          "net": {
            "ip": "145.226.238.148",
            "asn": "8255",
            "cc": "FR",
            "as": "EURO-INFORMATION - Euro-Information-Europeenne de Traitement de l_Information SAS, FR"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "eiws",
          "at": "2026-10-19T06:14:16Z",
          "cost": null,
          "page": {
            "final": "https://www.creditmutuel.fr/home/index.html",
            "code": 200,
            "csp": "default-src 'self' data: https://*.e-i.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: *.google.com *.googleusercontent.com *.monetico-services.com https://*.abtasty.com https://*.e-i.com https://*.ggpht.com https://*.googleapis.com https://*.gstatic.com https://*.linkedin.com https://bat.bing.com https://cdn.persa.do https://cdn.persado.com https://cdn.tagcommander.com https://cdna.creditmutuel.fr https://connect.facebook.net https://googleads.g.doubleclick.net https://h.online-metrix.net https://h64.online-metrix.net https://pagead2.googlesyndication.com https://platform.linkedin.com https://player.vimeo.com https://rts.persado.com https://snap.licdn.com https://tag.aticdn.net https://www.facebook.com https://www.google.com https://www.googleadservices.com https://www.googletagmanager.com https://www.youtube.com; style-src 'self' 'unsafe-inline' data: https://*.abtasty.com https://*.e-i.com https://fonts.googleapis.com; img-src 'self' blob: data: *.google.com *.googleusercontent.com https://*.aa.online-metrix.net https://*.abtasty.com https://*.commander1.com https://*.e-i.com https://*.ggpht.com https://*.googleapis.com https://*.gstatic.com https://*.linkedin.com https://ad.doubleclick.net https://bat.bing.com https://bat.bing.net https://cdna.creditmutuel.fr https://connect.facebook.net https://googleads.g.doubleclick.net https://i.vimeocdn.com https://i.ytimg.com https://img.youtube.com https://manager.tagcommander.com https://pagead2.googlesyndication.com https://pubads.g.doubleclick.net https://wat.creditmutuel.fr https://www.facebook.com https://www.google.com https://www.google.fr https://www.googleadservices.com https://www.googletagmanager.com https://cmo.creditmutuel.fr https://infos.creditmutuel.fr https://mabn.creditmutuel.fr; font-src 'self' data: https://*.e-i.com https://common-fonts.abtasty.com https://fonts.gstatic.com; media-src 'self' blob: data: https://*.e-i.com https://download-video-ak.vimeocdn.com https://player.vimeo.com; base-uri 'none'; form-action 'self' *.monetico-services.com https://bconnect.net https://cic.lekiosqueaservices.fr https://creditmutuel.lekiosqueaservices.fr https://pixiselus.partners.e-i.com https://pixiseluscmo.partners.e-i.com https://pixiselusmabn.partners.e-i.com https://video.ibm.com https://www.facebook.com https://www.homji.fr https://www.lekiosqueaservices.fr https://www.linkedin.com digipin-aff1.europ3c.fr digipin-aff2.europ3c.fr digipin-aff3.europ3c.fr digipin-aff4.europ3c.fr https://authent.lidentitenumerique.laposte.fr https://bconnect.net https://idp.docapost.io https://pixiselus.partners.e-i.com https://pixiselus.sasext.e-i.com https://pixiseluscmo.partners.e-i.com https://pixiselusmabn.partners.e-i.com https://sign-qualifie.certinomis.fr https://smartpinlive.oberthur.com https://www.afedim.fr https://www.homji.fr https://www.votaccess.fr; frame-ancestors 'self'; child-src 'self' blob: data: *.google.com *.monetico-services.com http://www.ustream.tv https://*.e-i.com https://*.fls.doubleclick.net https://api.linkedin.com https://bat.bing.com https://bid.g.doubleclick.net https://cdna.creditmutuel.fr https://h.online-metrix.net https://maps.google.fr https://player.vimeo.com https://qa-assistant.abtasty.com https://td.doubleclick.net https://video.ibm.com https://www.facebook.com https://www.googletagmanager.com https://www.linkedin.com https://www.youtube-nocookie.com https://www.youtube.com digipin-aff1.europ3c.fr digipin-aff2.europ3c.fr digipin-aff3.europ3c.fr digipin-aff4.europ3c.fr https://smartpinlive.oberthur.com; connect-src 'self' blob: data: *.commander1.com *.google.com https://*.abtasty.com https://*.e-i.com https://*.googleapis.com https://*.googlesyndication.com https://*.gstatic.com https://*.linkedin.com https://ad.doubleclick.net https://adservice.google.com https://bat.bing.com https://bat.bing.net https://cdn.persa.do https://cdna.creditmutuel.fr https://connect.facebook.net https://google.com https://googleads.g.doubleclick.net https://logs1412.xiti.com https://pagead2.googlesyndication.com https://rts.persado.com https://stats.g.doubleclick.net https://vimeo.com/api/ https://wat.creditmutuel.fr https://www.agri-mutuel.com https://www.facebook.com https://www.google.com https://www.google.fr https://www.googleadservices.com https://www.googletagmanager.com https://zkkwkzt.pa-cd.com wss://127.0.0.1:* https://www.associatheque.fr/fr/actu/rss-cm/flux-rss-json-html.cgi https://www.guide-association.cic.fr/fr/actu/rss-cic/flux-rss-json-html.cgi; report-uri https://report.e-i.com/csp-reporting.html",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdnsi.e-i.com",
              "cdnwmsi.e-i.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 36013
          },
          "cle": {
            "kind": "propre",
            "name": "Euro-Information (Crédit Mutuel)",
            "country": "FR",
            "asn": "8255",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Euro-Information (Crédit Mutuel)",
              "kind": "propre",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "CIC",
          "host": "www.cic.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES256-GCM-SHA384",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GlobalSign nv-sa",
            "from": "2026-06-03",
            "until": "2026-12-19",
            "names": 15
          },
          "net": {
            "ip": "145.226.174.166",
            "asn": "8255",
            "cc": "FR",
            "as": "EURO-INFORMATION - Euro-Information-Europeenne de Traitement de l_Information SAS, FR"
          },
          "hsts": "max-age=31536000",
          "front": "other",
          "server": "eiws",
          "at": "2026-10-19T06:14:13Z",
          "cost": null,
          "page": {
            "final": "https://www.cic.fr/fr/particuliers.html",
            "code": 200,
            "csp": "default-src 'self' data: https://*.e-i.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: *.google.com *.googleusercontent.com *.monetico-services.com https://*.abtasty.com https://*.e-i.com https://*.ggpht.com https://*.googleapis.com https://*.gstatic.com https://bat.bing.com https://cdn.persa.do https://cdn.persado.com https://cdn.tagcommander.com https://cdna.cic.fr https://connect.facebook.net https://googleads.g.doubleclick.net https://h.online-metrix.net https://h64.online-metrix.net https://pagead2.googlesyndication.com https://player.vimeo.com https://rts.persado.com https://tag.aticdn.net https://www.facebook.com https://www.google.com https://www.googleadservices.com https://www.googletagmanager.com https://www.youtube.com; style-src 'self' 'unsafe-inline' data: https://*.abtasty.com https://*.e-i.com https://fonts.googleapis.com; img-src 'self' blob: data: *.google.com *.googleusercontent.com https://*.aa.online-metrix.net https://*.abtasty.com https://*.commander1.com https://*.e-i.com https://*.ggpht.com https://*.googleapis.com https://*.gstatic.com https://ad.doubleclick.net https://bat.bing.com https://bat.bing.net https://cdna.cic.fr https://connect.facebook.net https://googleads.g.doubleclick.net https://i.vimeocdn.com https://i.ytimg.com https://img.youtube.com https://manager.tagcommander.com https://pagead2.googlesyndication.com https://pubads.g.doubleclick.net https://wat.cic.fr https://www.creditmutuel-am.eu/ https://www.facebook.com https://www.google.com https://www.google.fr https://www.googleadservices.com https://www.googletagmanager.com https://infos.cic.fr; font-src 'self' data: https://*.e-i.com https://common-fonts.abtasty.com https://fonts.gstatic.com; media-src 'self' blob: data: https://*.e-i.com https://download-video-ak.vimeocdn.com https://player.vimeo.com https://www.creditmutuel-am.eu/; base-uri 'none'; form-action 'self' *.monetico-services.com https://bconnect.net https://cic.lekiosqueaservices.fr https://creditmutuel.lekiosqueaservices.fr https://video.ibm.com https://www.facebook.com https://www.homji.fr https://www.lekiosqueaservices.fr digipin-aff1.europ3c.fr digipin-aff2.europ3c.fr digipin-aff3.europ3c.fr digipin-aff4.europ3c.fr https://authent.lidentitenumerique.laposte.fr https://bconnect.net https://idp.docapost.io https://sign-qualifie.certinomis.fr https://smartpinlive.oberthur.com https://www.afedim.fr https://www.homji.fr https://www.votaccess.fr; frame-ancestors 'self'; child-src 'self' blob: data: *.google.com *.monetico-services.com http://www.ustream.tv https://*.e-i.com https://*.fls.doubleclick.net https://bat.bing.com https://bid.g.doubleclick.net https://cdna.cic.fr https://h.online-metrix.net https://maps.google.fr https://player.vimeo.com https://qa-assistant.abtasty.com https://td.doubleclick.net https://video.ibm.com https://www.facebook.com https://www.googletagmanager.com https://www.youtube-nocookie.com https://www.youtube.com digipin-aff1.europ3c.fr digipin-aff2.europ3c.fr digipin-aff3.europ3c.fr digipin-aff4.europ3c.fr https://smartpinlive.oberthur.com; connect-src 'self' blob: data: *.commander1.com *.google.com https://*.abtasty.com https://*.e-i.com https://*.googleapis.com https://*.googlesyndication.com https://*.gstatic.com https://ad.doubleclick.net https://adservice.google.com https://bat.bing.com https://bat.bing.net https://cdn.persa.do https://cdna.cic.fr https://connect.facebook.net https://google.com https://googleads.g.doubleclick.net https://logs1412.xiti.com https://pagead2.googlesyndication.com https://rts.persado.com https://stats.g.doubleclick.net https://vimeo.com/api/ https://wat.cic.fr https://www.agri-mutuel.com https://www.facebook.com https://www.google.com https://www.google.fr https://www.googleadservices.com https://www.googletagmanager.com https://zkkwkzt.pa-cd.com wss://127.0.0.1:* https://www.associatheque.fr/fr/actu/rss-cm/flux-rss-json-html.cgi https://www.guide-association.cic.fr/fr/actu/rss-cic/flux-rss-json-html.cgi; report-uri",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdnii.e-i.com",
              "cdnwmii.e-i.com",
              "cdnwmsi.e-i.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 164360
          },
          "cle": {
            "kind": "propre",
            "name": "Euro-Information (Crédit Mutuel)",
            "country": "FR",
            "asn": "8255",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Euro-Information (Crédit Mutuel)",
              "kind": "propre",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "max-age=31536000",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "GlobalSign nv-sa"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 3
              }
            }
          }
        },
        {
          "name": "BoursoBank",
          "host": "www.boursobank.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-09-17",
            "until": "2027-04-03",
            "names": 1
          },
          "net": {
            "ip": "195.42.250.28",
            "asn": "20675",
            "cc": "FR",
            "as": "BOURSORAMA-ASnumber - BOURSORAMA S.A., FR"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:07Z",
          "cost": null,
          "page": {
            "final": "https://www.boursobank.com/",
            "code": 200,
            "csp": "frame-ancestors 'self' *.boursobank.com; object-src *.boursorama.com *.boursobank.com *.brsimg.com",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "widget.trustpilot.com",
              "www.boursobank.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 350503
          },
          "cle": {
            "kind": "propre",
            "name": "Boursorama",
            "country": "FR",
            "asn": "20675",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Boursorama",
              "kind": "propre",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Fortuneo",
          "host": "www.fortuneo.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-08-01",
            "until": "2027-02-14",
            "names": 1
          },
          "net": {
            "ip": "3.162.38.111",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "cloudfront",
          "server": "cloudfront",
          "at": "2026-10-19T06:14:46Z",
          "cost": null,
          "page": {
            "final": "https://www.fortuneo.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "try.abtasty.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "same-origin",
            "permissions": "",
            "coop": "",
            "bytes": 813280
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Amazon CloudFront",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Amazon"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "Hello bank!",
          "host": "www.hellobank.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "DigiCert Inc",
            "from": "2026-08-12",
            "until": "2027-02-26",
            "names": 27
          },
          "net": {
            "ip": "23.40.6.142",
            "asn": "16625",
            "cc": "US",
            "as": "AKAMAI-AS - Akamai Technologies, Inc., US"
          },
          "hsts": "",
          "front": "akamai",
          "server": "akamaighost",
          "at": "2026-10-19T06:14:23Z",
          "cost": null,
          "page": {
            "final": "https://www.hellobank.fr/",
            "code": 200,
            "csp": "frame-ancestors 'self' *.hellobank.fr *.hellobankpro.fr *.bnpparibas *.mosaic.fr *.biapi.pro *.bnpparibas.net *.protection24.com *.facil-iti.net *.herokuapp.com *.matmut.com *.cardif-iard.fr; ",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.hellobank.fr"
            ],
            "xfo": "SAMEORIGIN,SAMEORIGIN",
            "xcto": "nosniff,nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 201719
          },
          "cle": {
            "kind": "cdn",
            "name": "Akamai",
            "country": "US",
            "asn": "16625",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Akamai",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "DigiCert Inc"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        }
      ]
    },
    {
      "key": "sante",
      "label": {
        "fr": "Santé",
        "en": "Health",
        "es": "Salud"
      },
      "entries": [
        {
          "name": "Doctolib",
          "host": "www.doctolib.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-27",
            "until": "2026-12-26",
            "names": 4
          },
          "net": {
            "ip": "93.115.102.100",
            "asn": "209242",
            "cc": "FR",
            "as": "CLOUDFLARESPECTRUM - Cloudflare London, LLC, US"
          },
          "hsts": "max-age=63072000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:17Z",
          "cost": null,
          "page": {
            "final": "https://www.doctolib.fr/",
            "code": 200,
            "csp": "default-src 'self'; script-src report-sample 'self' blob: data: https://assets.doctolib.fr https://sdk.privacy-center.org https://www.datadoghq-browser-agent.com https://challenges.cloudflare.com https://*.walkme.com https://*.screeb.app https://*.googleapis.com https://static.opentok.com https://sdk.onfido.com https://applepay.cdn-apple.com https://pay.google.com https://tok.doctolib.fr 'wasm-unsafe-eval' 'nonce-VH4quX2fv5Mw0EqYBA/x4g==' 'nonce-VH4quX2fv5Mw0EqYBA/x4g=='; style-src report-sample 'self' 'unsafe-inline' data: https://assets.doctolib.fr https://sdk.onfido.com https://www.gstatic.com https://*.googleapis.com https://*.walkme.com https://maxcdn.bootstrapcdn.com https://*.fontawesome.com; object-src 'none'; base-uri 'self'; connect-src 'self' blob: data: https://assets.doctolib.fr https://api.doctolib.fr https://tok.doctolib.fr wss://tok.doctolib.fr https://exceptions.doctolib.fr https://siilo-api.doctolib.fr https://*.siilo.com https://*.doctolibdata.com https://www.doctolib.fr https://api.privacy-center.org https://browser-intake-datadoghq.eu https://challenges.cloudflare.com https://*.walkme.com https://*.tokbox.com wss://*.tokbox.com https://*.opentok.com https://*.screeb.app https://*.googleapis.com https://maps.gstatic.com https://*.sentry.io https://eu-api.friendlycaptcha.eu https://media.doctolib.com https://media-assets.doctolib.com https://api.eu.onfido.com wss://sync.onfido.com https://*.google.com https://google.com https://doctolib-pa-audio-production.s3.eu-central-1.amazonaws.com https://finos-qbf-prd-aws-de-fra-1.s3.eu-central-1.amazonaws.com https://finos-invoices-prd-aws-fr-par-1.s3.eu-west-3.amazonaws.com https://finos-invoices-prd-aws-de-fra-1.s3.eu-central-1.amazonaws.com https://doctolib-ehr-imports-prd-aws-de-fra-1.s3.eu-central-1.amazonaws.com https://checkoutshopper-live.cdn.adyen.com https://checkoutshopper-live.adyen.com https://checkoutanalytics-live.adyen.com https://events-logs.doctolib.com https://events-logs.doctolib.fr; font-src data: blob: *; frame-src blob: data: tel: *; img-src data: blob: *; manifest-src 'self'; media-src 'self' data: https://doctolib-pa-audio-production.s3.eu-central-1.amazonaws.com; worker-src 'self' blob: data: https://assets.doctolib.fr https://pro.doctolib.fr/service-worker.js; report-uri https://api.doctolib.fr/__csp_report__",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "assets.doctolib.fr",
              "www.datadoghq-browser-agent.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 1662595
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "209242",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Cloudflare",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA256",
                "issuer": "Google Trust Services"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Mon espace santé",
          "host": "www.monespacesante.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-09-28",
            "until": "2027-04-14",
            "names": 8
          },
          "net": {
            "ip": "80.78.12.3",
            "asn": "21000",
            "cc": "FR",
            "as": "ATOS-AS - Atos France SAS, FR"
          },
          "hsts": "max-age=63072000; includesubdomains",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:34Z",
          "cost": null,
          "page": {
            "final": "https://www.monespacesante.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "DENY",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "same-origin-allow-popups",
            "bytes": 5938
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Atos",
            "country": "FR",
            "asn": "21000",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Atos",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2"
              ],
              "hsts": "max-age=63072000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "AP-HP",
          "host": "www.aphp.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2025-11-05",
            "until": "2026-11-20",
            "names": 2
          },
          "net": {
            "ip": "66.22.32.117",
            "asn": "48851",
            "cc": "US",
            "as": "radware - Radware Ltd, IL"
          },
          "hsts": "",
          "front": "other",
          "server": "rdwr",
          "at": "2026-10-19T06:14:05Z",
          "cost": null,
          "page": {
            "final": "https://www.aphp.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 317894
          },
          "cle": {
            "kind": "cdn",
            "name": "Radware",
            "country": "IL",
            "asn": "48851",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Radware",
              "kind": "cdn",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "AP-HM",
          "host": "fr.ap-hm.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-23",
            "until": "2026-12-22",
            "names": 4
          },
          "net": {
            "ip": "31.15.25.39",
            "asn": "41628",
            "cc": "FR",
            "as": "ALTERWAYHOSTING-NETWORK - Alter Way SAS, FR"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:13:45Z",
          "cost": null,
          "page": {
            "final": "https://fr.ap-hm.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "fr.ap-hm.fr",
              "maps.googleapis.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "",
            "coop": "",
            "bytes": 89779
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Alter Way",
            "country": "FR",
            "asn": "41628",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Alter Way",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "Hospices Civils de Lyon",
          "host": "www.chu-lyon.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Hellenic Academic and Research Institutions CA",
            "from": "2026-07-31",
            "until": "2027-02-15",
            "names": 2
          },
          "net": {
            "ip": "195.254.160.208",
            "asn": "51038",
            "cc": "FR",
            "as": "HCL - HCL, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "apache",
          "at": "2026-10-19T06:14:11Z",
          "cost": null,
          "page": {
            "final": "https://www.chu-lyon.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 106511
          },
          "cle": {
            "kind": "hebergeur",
            "name": "HCL",
            "country": "IN",
            "asn": "51038",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "HCL",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Hellenic Academic and Research Institutions CA"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "CHU de Bordeaux",
          "host": "www.chu-bordeaux.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2026-03-02",
            "until": "2027-03-02",
            "names": 2
          },
          "net": {
            "ip": "194.167.180.68",
            "asn": "2200",
            "cc": "FR",
            "as": "FR-RENATER - Renater, FR"
          },
          "hsts": "max-age=63072000; includesubdomains",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:10Z",
          "cost": null,
          "page": {
            "final": "https://www.chu-bordeaux.fr/",
            "code": 200,
            "csp": "script-src 'self' https://piwikpro.chu-bordeaux.fr  'unsafe-inline' 'unsafe-eval' blob: https:; style-src 'self'  'unsafe-inline'; object-src 'self' blob:; frame-ancestors 'self' https://piwikpro.chu-bordeaux.fr ; worker-src 'self' blob:",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 61713
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Renater",
            "country": "FR",
            "asn": "2200",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Renater",
              "kind": "hebergeur",
              "protocols": [
                "tls1",
                "tls1_1",
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=63072000; includesubdomains",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "CHU de Lille",
          "host": "www.chu-lille.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-01",
            "until": "2026-11-30",
            "names": 1
          },
          "net": {
            "ip": "46.105.204.27",
            "asn": "16276",
            "cc": "FR",
            "as": "OVH - OVH SAS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:13Z",
          "cost": null,
          "page": {
            "final": "https://www.chu-lille.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.chu-lille.fr",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 382791
          },
          "cle": {
            "kind": "hebergeur",
            "name": "OVHcloud",
            "country": "FR",
            "asn": "16276",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "OVHcloud",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "id-ecPublicKey",
                "bits": 256,
                "curve": "P-256",
                "sig": "ecdsa-with-SHA384",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 2
              }
            }
          }
        },
        {
          "name": "CHU de Toulouse",
          "host": "www.chu-toulouse.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-07",
            "until": "2026-12-06",
            "names": 1
          },
          "net": {
            "ip": "46.183.49.241",
            "asn": "48426",
            "cc": "FR",
            "as": "OVER-LINK - _OVER-LINK_ s.a.s., FR"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:14:13Z",
          "cost": null,
          "page": {
            "final": "https://www.chu-toulouse.fr/",
            "code": 200,
            "csp": "default-src 'self' https://www.chu-toulouse.fr;font-src 'self';img-src 'self' blob: data: https://statistiques.chu-toulouse.fr https://www.gstatic.com https://tile.openstreetmap.org/;script-src 'sha256-bLlTWyhCXMpvY0qISCjl98ALtZ7QWJbNw3Madev72jM=' 'sha256-l6XDslsw9JSbKKQIGTfS0g9y9EjrKOepFWVN3wnlL44=' 'self' https://statistiques.chu-toulouse.fr;style-src 'self' 'unsafe-inline';frame-src https://youtube.com https://www.youtube.com https://www.youtube-nocookie.com https://38d3b6a7.sibforms.com;connect-src 'self' https://statistiques.chu-toulouse.fr https://stats.g.doubleclick.net https://region1.google-analytics.com https://region1.analytics.google.com;object-src 'none';frame-ancestors 'none';base-uri 'self';form-action 'self';worker-src 'none';upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "accelerometer=(), ambient-light-sensor=(), autoplay=(),  camera=(),display-capture=(), cross-origin-isolated=(), encrypted-media=(), fullscreen=(self \"https://www.youtube.com\" \"https://www.youtube-nocookie.com\"), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), sync-xhr=(self), usb=()",
            "coop": "",
            "bytes": 107750
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Over-Link",
            "country": "FR",
            "asn": "48426",
            "prev": {
              "date": "2026-10-15",
              "pq": "full",
              "name": "Over-Link",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "max-age=31536000; includesubdomains; preload",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Let's Encrypt"
              },
              "page": {
                "code": 200,
                "csp": true,
                "scripts": 0
              }
            }
          }
        },
        {
          "name": "CHU de Nantes",
          "host": "www.chu-nantes.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Sectigo Limited",
            "from": "2025-10-24",
            "until": "2026-11-24",
            "names": 2
          },
          "net": {
            "ip": "80.82.234.142",
            "asn": "47608",
            "cc": "FR",
            "as": "GIGALIS-AS - GROUPEMENT D_INTERET PUBLIC GIGALIS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "apache/2.4.6 (centos) openssl/1.0.2k-fips mod_jk/1.2.46",
          "at": "2026-10-19T06:14:12Z",
          "cost": null,
          "page": {
            "final": "https://www.chu-nantes.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.chu-nantes.fr"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 144856
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Gigalis",
            "country": "FR",
            "asn": "47608",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Gigalis",
              "kind": "hebergeur",
              "protocols": [
                "tls1",
                "tls1_1",
                "tls1_2"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 2048,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Sectigo Limited"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        },
        {
          "name": "CHU de Strasbourg",
          "host": "www.chru-strasbourg.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 4096,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Hellenic Academic and Research Institutions CA",
            "from": "2026-01-23",
            "until": "2027-01-23",
            "names": 28
          },
          "net": {
            "ip": "217.18.82.58",
            "asn": "50818",
            "cc": "FR",
            "as": "MUONA - Muona SAS, FR"
          },
          "hsts": "",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:14:10Z",
          "cost": null,
          "page": {
            "final": "https://www.chru-strasbourg.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.chru-strasbourg.fr"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 172416
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Muona",
            "country": "FR",
            "asn": "50818",
            "prev": {
              "date": "2026-10-15",
              "pq": "none",
              "name": "Muona",
              "kind": "hebergeur",
              "protocols": [
                "tls1_2",
                "tls1_3"
              ],
              "hsts": "",
              "cert": {
                "key": "rsaEncryption",
                "bits": 4096,
                "curve": "",
                "sig": "sha256WithRSAEncryption",
                "issuer": "Hellenic Academic and Research Institutions CA"
              },
              "page": {
                "code": 200,
                "csp": false,
                "scripts": 1
              }
            }
          }
        }
      ]
    },
    {
      "key": "rencontres",
      "label": {
        "fr": "Rencontres",
        "en": "Dating",
        "es": "Citas"
      },
      "entries": [
        {
          "name": "Tinder",
          "host": "tinder.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-01-17",
            "until": "2027-02-15",
            "names": 2
          },
          "net": {
            "ip": "52.84.150.54",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudfront",
          "server": "nginx",
          "at": "2026-10-19T06:14:22Z",
          "cost": null,
          "page": {
            "final": "https://tinder.com/",
            "code": 200,
            "csp": "default-src 'self';base-uri 'self';connect-src 'self' data: https: wss://keepalive.gotinder.com wss://keepalive.ue1.d1.tstaging.com;script-src 'nonce-uFnNeb7/VhmhnQdL/uXh/A==' 'strict-dynamic' 'unsafe-hashes' 'unsafe-eval' 'wasm-unsafe-eval' 'sha256-PLCxbpHSwAa8+W198R1KQQ9UDCexTvYy4z4YmCg21NM=' 'unsafe-inline';style-src 'self' 'unsafe-inline' blob: https://*.googleapis.com https://accounts.google.com;frame-src 'self' https:;frame-ancestors 'self';form-action 'self' https:;object-src 'none';img-src 'self' data: blob: https:;media-src 'self' data: https:;font-src 'self' data: https:;manifest-src 'self' https:",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "origin-when-cross-origin",
            "permissions": "",
            "coop": "same-origin-allow-popups",
            "bytes": 644051
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Tinder, l'appli",
          "host": "api.gotinder.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-08-27",
            "until": "2027-03-12",
            "names": 10
          },
          "net": {
            "ip": "3.162.38.82",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "cloudfront",
          "server": "awselb/2.0",
          "at": "2026-10-19T06:13:55Z",
          "cost": null,
          "page": {
            "final": "https://api.gotinder.com/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 0
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Bumble",
          "host": "bumble.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-10-10",
            "until": "2027-01-08",
            "names": 2
          },
          "net": {
            "ip": "31.222.67.113",
            "asn": "12678",
            "cc": "GB",
            "as": "BADOO-U - Badoo Trading Limited, GB"
          },
          "hsts": "max-age=300; includesubdomains",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:13:40Z",
          "cost": null,
          "page": {
            "final": "https://bumble.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "default-src 'self' https://cdn.ampproject.org https://snap.licdn.com https://www.youtube.com *.youtube.com *.google-analytics.com https://www.googletagmanager.com https://consent.bumble.com *.typeform.com *.doubleclick.net *.taboola.com; script-src 'self' 'unsafe-inline' 'report-sample' 'nonce-iv4DC6qnu3JT67nlRqt4fw==' https://cdn.ampproject.org https://snap.licdn.com https://www.youtube.com *.youtube.com *.google-analytics.com https://www.googletagmanager.com https://consent.bumble.com *.typeform.com *.doubleclick.net *.taboola.com; style-src 'self' 'unsafe-inline' *.typeform.com; connect-src 'self' https://cdn.ampproject.org https://consent.bumble.com https://www.googletagmanager.com *.google-analytics.com *.analytics.google.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com/pagead *.googlesyndication.com *.typeform.com *.typeformcdn.com; child-src 'self'; font-src 'self' data:; manifest-src 'self'; base-uri 'self'; frame-src 'self' https://cdn.ampproject.org https://snap.licdn.com https://www.youtube.com *.youtube.com *.google-analytics.com https://www.googletagmanager.com https://consent.bumble.com *.typeform.com *.doubleclick.net *.taboola.com; img-src * data: blob: www.googletagmanager.com; media-src * data: blob:; report-uri /jss/csp_report.phtml?token=bumble_team_site&env=production;",
            "meta_csp": "",
            "scripts": [
              "consent.bumble.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 186585
          },
          "cle": {
            "kind": "propre",
            "name": "Bumble (Badoo)",
            "country": "GB",
            "asn": "12678",
            "prev": null
          }
        },
        {
          "name": "Bumble, l'appli web",
          "host": "am1.bumble.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-10-10",
            "until": "2027-01-08",
            "names": 2
          },
          "net": {
            "ip": "31.222.70.21",
            "asn": "12678",
            "cc": "GB",
            "as": "BADOO-U - Badoo Trading Limited, GB"
          },
          "hsts": "max-age=300; includesubdomains",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://am1.bumble.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "default-src 'self' https://cdn.ampproject.org https://snap.licdn.com https://www.youtube.com *.youtube.com *.google-analytics.com https://www.googletagmanager.com https://consent.bumble.com *.typeform.com *.doubleclick.net *.taboola.com; script-src 'self' 'unsafe-inline' 'report-sample' 'nonce-KFS3vyT08T/BQ3m+ksobzw==' https://cdn.ampproject.org https://snap.licdn.com https://www.youtube.com *.youtube.com *.google-analytics.com https://www.googletagmanager.com https://consent.bumble.com *.typeform.com *.doubleclick.net *.taboola.com; style-src 'self' 'unsafe-inline' *.typeform.com; connect-src 'self' https://cdn.ampproject.org https://consent.bumble.com https://www.googletagmanager.com *.google-analytics.com *.analytics.google.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com/pagead *.googlesyndication.com *.typeform.com *.typeformcdn.com; child-src 'self'; font-src 'self' data:; manifest-src 'self'; base-uri 'self'; frame-src 'self' https://cdn.ampproject.org https://snap.licdn.com https://www.youtube.com *.youtube.com *.google-analytics.com https://www.googletagmanager.com https://consent.bumble.com *.typeform.com *.doubleclick.net *.taboola.com; img-src * data: blob: www.googletagmanager.com; media-src * data: blob:; report-uri /jss/csp_report.phtml?token=bumble_team_site&env=production;",
            "meta_csp": "",
            "scripts": [
              "consent.bumble.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 186585
          },
          "cle": {
            "kind": "propre",
            "name": "Bumble (Badoo)",
            "country": "GB",
            "asn": "12678",
            "prev": null
          }
        },
        {
          "name": "Badoo",
          "host": "badoo.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-10-10",
            "until": "2027-01-08",
            "names": 4
          },
          "net": {
            "ip": "31.222.67.112",
            "asn": "12678",
            "cc": "GB",
            "as": "BADOO-U - Badoo Trading Limited, GB"
          },
          "hsts": "max-age=300; includesubdomains",
          "front": "other",
          "server": "nginx",
          "at": "2026-10-19T06:13:39Z",
          "cost": null,
          "page": {
            "final": "https://badoo.com/",
            "code": 200,
            "csp": "default-src 'self' https://consent.badoo.com; script-src 'self' 'unsafe-inline' 'report-sample' 'nonce-Rs6xrRO56D3BvJ+Yc4kQwg==' badoocdn.com *.badoocdn.com https://consent.badoo.com https://*.googletagmanager.com https://tr.snapchat.com https://tr-shadow.snapchat.com; style-src 'self' 'unsafe-inline'; connect-src 'self' *.badoo.com *.badoo.eu *.badoo.us https://consent.badoo.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com https://tr.snapchat.com https://tr-shadow.snapchat.com https://*.sentry.io; child-src 'self' blob:; font-src * data:; manifest-src 'self'; base-uri 'self'; frame-src * bds: bdp:; img-src * data: blob:; media-src * data: blob:; report-uri /jss/csp_report.phtml?token=badoo_homepage&env=production; upgrade-insecure-requests;",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "consent.badoo.com",
              "eu1.ecdn2.badoocdn.com",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 87466
          },
          "cle": {
            "kind": "propre",
            "name": "Bumble (Badoo)",
            "country": "GB",
            "asn": "12678",
            "prev": null
          }
        },
        {
          "name": "Hinge",
          "host": "hinge.co",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Let's Encrypt",
            "from": "2026-09-23",
            "until": "2026-12-22",
            "names": 1
          },
          "net": {
            "ip": "76.76.21.21",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "other",
          "server": "vercel",
          "at": "2026-10-19T06:13:52Z",
          "cost": null,
          "page": {
            "final": "https://hinge.co/fr-fr",
            "code": 200,
            "csp": "default-src 'none'; script-src 'self' https://cdn.cookielaw.org https://connect.facebook.net https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://sc-static.net https://analytics.tiktok.com https://static.ads-twitter.com https://s.pinimg.com https://ct.pinterest.com https://www.redditstatic.com https://cdn.taboola.com https://trc.taboola.com https://*.taboola.com https://platform.twitter.com https://www.youtube.com https://www.tiktok.com https://embed.typeform.com https://impressions.onelink.me https://www.google.com https://www.google.co.uk https://www.google.de https://www.google.dk https://www.google.nl https://www.google.fi https://www.google.fr https://www.google.at https://www.google.ch https://www.google.it https://www.google.no https://www.google.pt https://www.google.com.br https://www.google.es https://www.google.com.mx https://www.google.se https://tr.snapchat.com https://pixel.byspotify.com https://sf16-website-login.neutral.ttwstatic.com https://ads.realizeperformance.com https://s.yimg.com https://d34r8q7sht0t9k.cloudfront.net; connect-src 'self' https://o4504284418801664.ingest.sentry.io https://api.lever.co https://cdn.sanity.io https://images.hinge.co https://files.hinge.co https://*.appsflyer.com https://onelinksmartscript.appsflyer.com https://*.facebook.com https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://www.google.com https://www.googleadservices.com https://*.doubleclick.net https://sc-static.net https://tr.snapchat.com https://tr6.snapchat.com https://analytics.tiktok.com https://analytics-ipv6.tiktokw.us https://*.ads-twitter.com https://analytics.twitter.com https://ct.pinterest.com https://*.pinimg.com https://pixel-config.reddit.com https://www.redditstatic.com https://*.taboola.com https://trc.taboola.com https://trc-events.taboola.com https://public-api.wordpress.com https://cdn.cookielaw.org https://*.onetrust.com https://l7pj44pm.api.sanity.io https://evnt.byspotify.com https://pixels.spotify.com https://www.tiktok.com https://*.tiktokv.com https://ads.realizeperformance.com https://api.typeform.com https://s.yimg.com https://sp.analytics.yahoo.com https://verifi.podscribe.com https://verifi.pdscrb.com https://pixel.tapad.com https://ipv4.podscribe.com https://ipv4.pdscrb.com; img-src 'self' data: blob: https://images.hinge.co https://cdn.sanity.io https://cdn.cookielaw.org https://www.facebook.com https://*.facebook.com https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://www.google.com https://www.google.co.uk https://www.google.de https://www.google.dk https://www.google.nl https://www.google.fi https://www.google.fr https://www.google.at https://www.google.ch https://www.google.it https://www.google.no https://www.google.pt https://www.google.com.br https://www.google.es https://www.google.com.mx https://www.google.se https://*.pinimg.com https://alb.reddit.com https://www.redditstatic.com https://public-api.wordpress.com https://t.co https://analytics.tiktok.com https://analytics.twitter.com https://impressions.onelink.me https://i.liadm.com https://trkn.us https://*.taboola.com https://sp.analytics.yahoo.com https://verifi.podscribe.com https://verifi.pdscrb.com https://pixel.tapad.com https://ipv4.podscribe.com https://ipv4.pdscrb.com; style-src 'self' 'unsafe-inline' https://sf16-website-login.neutral.ttwstatic.com https://ads.realizeperformance.com https://embed.typeform.com/next/css/widget.css; font-src 'self' data: https://hinge-co-one-more-hour.s3.amazonaws.com; frame-src 'self' data: blob: https://www.youtube.com https://player.vimeo.com https://hinge-co-one-more-hour.s3.amazonaws.com https://platform.twitter.com https://www.tiktok.com https://embed.typeform.com https://www.googletagmanager.com https://*.flipsnack.com https://tr.snapchat.com https://ct.pinterest.com https://*.facebook.com https://*.doubleclick.net https://*.taboola.com https://ads.realizeperformance.com https://form.typeform.com; media-src 'self' https://cdn.sanity.io https://files.hinge.co https://sanctu-placeholders.s3.us-east-1.amazonaws.com; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors https://hinge.sanity.studio https://www.sanity.io; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
            "coop": "",
            "bytes": 96097
          },
          "cle": {
            "kind": "cloud",
            "name": "Amazon Web Services",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Hinge, l'appli",
          "host": "prod-api.hingeaws.net",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-13",
            "until": "2026-12-12",
            "names": 1
          },
          "net": {
            "ip": "104.18.26.22",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:56Z",
          "cost": null,
          "page": {
            "final": "https://prod-api.hingeaws.net/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 0
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Meetic",
          "host": "www.meetic.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-16",
            "until": "2026-12-16",
            "names": 2
          },
          "net": {
            "ip": "104.18.21.144",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=30",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:32Z",
          "cost": null,
          "page": {
            "final": "https://www.meetic.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 278786
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Disons Demain (Meetic)",
          "host": "www.disonsdemain.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-18",
            "until": "2026-12-17",
            "names": 2
          },
          "net": {
            "ip": "104.18.0.137",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=30",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:17Z",
          "cost": null,
          "page": {
            "final": "https://www.disonsdemain.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 270591
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "happn",
          "host": "happn.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-ECDSA-CHACHA20-POLY1305",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-12",
            "until": "2026-12-11",
            "names": 2
          },
          "net": {
            "ip": "104.16.33.190",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:51Z",
          "cost": null,
          "page": {
            "final": "https://www.happn.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "events.framer.com",
              "framerusercontent.com",
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 300080
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "happn, l'appli",
          "host": "api.happn.fr",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "X25519",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-ECDSA-CHACHA20-POLY1305",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-02",
            "until": "2026-12-01",
            "names": 2
          },
          "net": {
            "ip": "104.17.230.168",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:32Z",
          "cost": null,
          "page": {
            "final": "https://api.happn.fr/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 0
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Fruitz",
          "host": "fruitz.io",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Google Trust Services",
            "from": "2026-09-23",
            "until": "2026-12-22",
            "names": 100
          },
          "net": {
            "ip": "151.101.1.195",
            "asn": "54113",
            "cc": "US",
            "as": "FASTLY - Fastly, Inc., US"
          },
          "hsts": "max-age=31556926",
          "front": "fastly",
          "server": "",
          "at": "2026-10-19T06:13:46Z",
          "cost": null,
          "page": {
            "final": "https://fruitz.io/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 43212
          },
          "cle": {
            "kind": "cdn",
            "name": "Fastly",
            "country": "US",
            "asn": "54113",
            "prev": null
          }
        },
        {
          "name": "adopte",
          "host": "www.adopteunmec.com",
          "reachable": true,
          "pq": "none",
          "hits": 0,
          "tries": 5,
          "group": "prime256v1",
          "protocol": "TLSv1.2",
          "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
          "protocols": [
            "tls1_2"
          ],
          "groups": [],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "DigiCert Inc",
            "from": "2026-07-31",
            "until": "2027-02-14",
            "names": 18
          },
          "net": {
            "ip": "62.210.210.200",
            "asn": "12876",
            "cc": "FR",
            "as": "AS12876 - Scaleway SAS, FR"
          },
          "hsts": "max-age=31536000; includesubdomains; preload",
          "front": "other",
          "server": "",
          "at": "2026-10-19T06:14:02Z",
          "cost": null,
          "page": {
            "final": "https://www.adopte.app/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "s.adopte.app",
              "www.google.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN,SAMEORIGIN",
            "xcto": "nosniff",
            "referrer": "strict-origin-when-cross-origin",
            "permissions": "",
            "coop": "",
            "bytes": 10382
          },
          "cle": {
            "kind": "hebergeur",
            "name": "Scaleway",
            "country": "FR",
            "asn": "12876",
            "prev": null
          }
        },
        {
          "name": "OkCupid",
          "host": "www.okcupid.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-19",
            "until": "2026-12-18",
            "names": 4
          },
          "net": {
            "ip": "104.16.144.63",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=15552000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:34Z",
          "cost": null,
          "page": {
            "final": "https://www.okcupid.com/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 4067
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Grindr",
          "host": "grindr.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_128_GCM_SHA256",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "SecP256r1MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "Amazon",
            "from": "2026-01-10",
            "until": "2027-02-08",
            "names": 2
          },
          "net": {
            "ip": "18.155.129.16",
            "asn": "16509",
            "cc": "US",
            "as": "AMAZON-02 - Amazon.com, Inc., US"
          },
          "hsts": "",
          "front": "cloudfront",
          "server": "cloudfront",
          "at": "2026-10-19T06:14:11Z",
          "cost": null,
          "page": {
            "final": "https://www.grindr.com/",
            "code": 200,
            "csp": "frame-ancestors 'self'",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "ajax.googleapis.com",
              "assets.grindr.com",
              "cdn.jsdelivr.net",
              "cdn.prod.website-files.com",
              "d3e54v103j8qbb.cloudfront.net",
              "unpkg.com",
              "www.googletagmanager.com"
            ],
            "xfo": "SAMEORIGIN",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 72547
          },
          "cle": {
            "kind": "cdn",
            "name": "Amazon CloudFront",
            "country": "US",
            "asn": "16509",
            "prev": null
          }
        },
        {
          "name": "Grindr, l'appli",
          "host": "grindr.mobi",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "rsaEncryption",
            "bits": 2048,
            "curve": "",
            "sig": "sha256WithRSAEncryption",
            "issuer": "GoDaddy.com, Inc.",
            "from": "2025-10-08",
            "until": "2026-11-09",
            "names": 2
          },
          "net": {
            "ip": "104.16.203.43",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=300; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:48Z",
          "cost": null,
          "page": {
            "final": "https://grindr.mobi/",
            "code": 404,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 19
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Lovoo",
          "host": "lovoo.com",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-05",
            "until": "2026-12-04",
            "names": 2
          },
          "net": {
            "ip": "104.17.14.92",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:53Z",
          "cost": null,
          "page": {
            "final": "https://www.lovoo.com/en/",
            "code": 200,
            "csp": "default-src 'self'; base-uri 'self'; script-src 'self' 'nonce-8a5447921ef0b78a50dd9627ebf06f35' 'strict-dynamic' 'unsafe-inline' https: 'report-sample' https://cdn.cookielaw.org; connect-src 'self' https://cdn.cookielaw.org *.onetrust.com analytics.lovoo.com; frame-ancestors *; frame-src 'none'; object-src 'none'; img-src 'self' data: http: https:; font-src 'self' data:; style-src 'self' 'unsafe-inline' 'report-sample'; upgrade-insecure-requests",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "cdn.cookielaw.org",
              "www.lovoo.com"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 31131
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Feeld",
          "host": "feeld.co",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-10-16",
            "until": "2027-01-14",
            "names": 3
          },
          "net": {
            "ip": "104.26.2.45",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:13:45Z",
          "cost": null,
          "page": {
            "final": "https://feeld.co/",
            "code": 200,
            "csp": "",
            "csp_ro": "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; report-uri https://nz14bhs2.uriports.com/reports/report; report-to default",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 627456
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Mektoube",
          "host": "www.mektoube.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1",
            "tls1_1",
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA256",
            "issuer": "Google Trust Services",
            "from": "2026-09-10",
            "until": "2026-12-09",
            "names": 1
          },
          "net": {
            "ip": "172.66.156.167",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=31536000; includesubdomains",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:32Z",
          "cost": null,
          "page": {
            "final": "https://www.mektoube.fr/",
            "code": 200,
            "csp": "",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "www.googletagmanager.com"
            ],
            "xfo": "",
            "xcto": "",
            "referrer": "",
            "permissions": "",
            "coop": "",
            "bytes": 508211
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        },
        {
          "name": "Parship",
          "host": "www.parship.fr",
          "reachable": true,
          "pq": "full",
          "hits": 5,
          "tries": 5,
          "group": "X25519MLKEM768",
          "protocol": "TLSv1.3",
          "cipher": "TLS_AES_256_GCM_SHA384",
          "protocols": [
            "tls1_2",
            "tls1_3"
          ],
          "groups": [
            "X25519MLKEM768",
            "X25519",
            "secp256r1",
            "secp384r1"
          ],
          "cert": {
            "key": "id-ecPublicKey",
            "bits": 256,
            "curve": "P-256",
            "sig": "ecdsa-with-SHA384",
            "issuer": "Let's Encrypt",
            "from": "2026-09-08",
            "until": "2026-12-07",
            "names": 1
          },
          "net": {
            "ip": "104.16.224.144",
            "asn": "13335",
            "cc": "US",
            "as": "CLOUDFLARENET - Cloudflare, Inc., US"
          },
          "hsts": "max-age=63072000; includesubdomains; preload",
          "front": "cloudflare",
          "server": "cloudflare",
          "at": "2026-10-19T06:14:36Z",
          "cost": null,
          "page": {
            "final": "https://www.parship.fr/",
            "code": 200,
            "csp": "default-src 'self'; base-uri 'self'; script-src 'self' 'nonce-3035b5d31bdbf92407d3972cea7efe6f' 'strict-dynamic' 'unsafe-inline' https: 'report-sample'; connect-src 'self' *.facebook.com translate.googleapis.com *.instana.io wss://mpsnare.iesnare.com *.usercentrics.eu bat.bing.com/actionp/ *.liadm.com *.googlesyndication.com www.googletagmanager.com www.googleadservices.com googleads.g.doubleclick.net ad.doubleclick.net google.com *.google.com www.google.de www.google.at www.google.ch www.google.nl www.google.be www.google.fr www.google.co.uk www.google.ca www.google.com.au *.taboola.com; frame-ancestors 'self' secure1.parship.com; frame-src 'self' support.parship.fr tms.parship.fr *.greatviews.de app.usercentrics.eu web.cmp.usercentrics.eu www.youtube-nocookie.com accounts.google.com translate.googleapis.com *.doubleclick.net *.liadm.com www.googletagmanager.com *.cloudflare.com; object-src 'none'; img-src 'self' data: *.instana.io static.cloudflareinsights.com app.usercentrics.eu uct.service.usercentrics.eu www.gstatic.com/images/ i.ytimg.com google.com *.google.com www.google.de www.google.at www.google.ch www.google.nl www.google.be www.google.fr www.google.co.uk www.google.ca www.google.com.au www.googleadservices.com www.googletagmanager.com *.g.doubleclick.net ad.doubleclick.net pagead2.googlesyndication.com *.liadm.com *.taboola.com www.parship.de; font-src 'self' assets.parship.com; style-src 'self' 'unsafe-inline' 'report-sample' accounts.google.com/gsi/style translate.googleapis.com; upgrade-insecure-requests ; report-uri /ls/",
            "csp_ro": "",
            "meta_csp": "",
            "scripts": [
              "static.cloudflareinsights.com",
              "www.parship.fr"
            ],
            "xfo": "",
            "xcto": "nosniff",
            "referrer": "no-referrer-when-downgrade",
            "permissions": "",
            "coop": "",
            "bytes": 67262
          },
          "cle": {
            "kind": "cdn",
            "name": "Cloudflare",
            "country": "US",
            "asn": "13335",
            "prev": null
          }
        }
      ]
    }
  ]
}
;
