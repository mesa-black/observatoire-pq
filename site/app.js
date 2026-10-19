// Observatoire post-quantique. Builds every node with createElement and
// textContent: no innerHTML anywhere, so the CSP can require Trusted Types.
(() => {
    'use strict';

    const D = window.OBSERVATOIRE;
    const RECORDED = Number(D.date.slice(0, 4));

    // How long what passes through that door stays worth reading. Hypotheses,
    // shown on the page next to the group they apply to.
    const LIFE = {
        cac40:   { years: 2,  what: 'candidature, formulaire de contact' },
        ia:      { years: 10, what: 'prompt, document confié, code source' },
        licornes:{ years: 5,  what: 'compte client, commande' },
        etat:    { years: 25, what: 'déclaration, dossier social, identité' },
        banques: { years: 10, what: 'relevé de compte, virement' },
        sante:   { years: 50, what: 'dossier patient, rendez-vous' },
        rencontres: { years: 50, what: 'conversation privée, orientation, photos' },
    };
    const CDN = { cloudflare: 'Cloudflare', akamai: 'Akamai', cloudfront: 'CloudFront', fastly: 'Fastly', azure: 'Azure', google: 'Google', imperva: 'Imperva' };

    /** h('p', {class: 'x'}, 'text', child) — the only way this page makes nodes. */
    function h(tag, attrs, ...children) {
        const el = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs || {})) {
            if (v === false || v == null) continue;
            if (k === 'class') el.className = v;
            else el.setAttribute(k, v === true ? '' : v);
        }
        for (const c of children.flat(Infinity)) {
            if (c == null || c === false) continue;
            el.append(c instanceof Node ? c : document.createTextNode(String(c)));
        }
        return el;
    }
    const $ = id => document.getElementById(id);
    const pct = (a, b) => Math.round(100 * a / b);
    const plural = (n, one, many) => `${n} ${n > 1 ? many : one}`;

    // A CDN is told by its headers, or else by the network that announces the
    // address: some (Akamai, Imperva) answer without a word about themselves.
    // Amazon, Google and Microsoft are left out: their networks also carry
    // plain servers, and the address alone cannot tell which.
    const CDN_AS = [[/^CLOUDFLARE/, 'cloudflare'], [/^AKAMAI|^PROLEXIC/, 'akamai'], [/^FASTLY/, 'fastly'], [/^INCAPSULA/, 'imperva']];
    for (const g of D.groups) for (const e of g.entries) {
        if (e.front && e.front !== 'other') { e.frontBy = 'en-têtes'; continue; }
        const hit = CDN_AS.find(([re]) => re.test((e.net && e.net.as) || ''));
        if (hit) { e.front = hit[1]; e.frontBy = 'réseau'; }
    }
    for (const g of D.groups) for (const e of g.entries) {
        // A door that takes the hybrid only when nothing else is offered gives a
        // browser, which offers both, the classical one: for a visitor it is
        // not sealed.
        if (e.pq === 'full' && e.group && !/MLKEM/.test(e.group)) { e.pq = 'partial'; e.onDemand = true; }
        // Over TLS 1.2 there is no hybrid to time: curl falls back to whatever
        // the server takes, and the "hybrid" figure would be a classical one.
        if (e.pq === 'none') e.cost = null;
    }
    // Each entry knows its group, the plaques' copies as much as the lists'.
    for (const g of D.groups) for (const e of g.entries) e.g = g.key;
    const all = D.groups.flatMap(g => g.entries.map(e => ({ ...e, g: g.key })));
    // Every figure on the page is about organisations. The AI providers of
    // relevé 2 and the dating apps of relevé 5 have their plaques and sheets,
    // but are not counted among them: they are where people send data, not the
    // French organisations under review (and most are foreign, which would
    // tilt every share). Their own figures are computed apart, by their relevé.
    const APART = new Set(['ia', 'rencontres']);
    const reachable = all.filter(e => e.reachable);
    const measured = reachable.filter(e => !APART.has(e.g));
    const sealed = measured.filter(e => e.pq === 'full');
    const cdn = measured.filter(e => e.front && e.front !== 'other');
    const own = measured.filter(e => e.front === 'other');

    const dateFr = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(D.date));
    const M = D.meta || {};
    // The sign carries the day the relevé came out; the measures keep their own
    // date (dateFr) wherever figures are quoted.
    const pubFr = M.published ? new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(M.published)) : dateFr;
    $('releve').textContent = `Relevé n° ${M.number || 1} · ${pubFr}`;
    // A relevé may carry its own headline; the figures under it are always computed.
    if (M.kicker) document.querySelector('.tete .sur').textContent = M.kicker;
    if (M.title) document.querySelector('.tete h1').replaceChildren(M.title[0], h('br'), h('em', null, M.title[1]));

    // Relevé 2: which AI providers each organisation opened a door to (public
    // DNS, ai.sh), and whether the way there is sealed, told from the
    // providers' own doors measured in the same run.
    const PROVIDERS = {
        openai: { label: 'OpenAI', hosts: ['chatgpt.com', 'api.openai.com'] },
        anthropic: { label: 'Anthropic', hosts: ['claude.ai', 'api.anthropic.com'] },
        mistral: { label: 'Mistral', hosts: ['chat.mistral.ai', 'api.mistral.ai'] },
        cursor: { label: 'Cursor', hosts: ['api2.cursor.sh'], what: 'le code source de ses développeurs', whatMany: 'le code source de leurs développeurs' },
        perplexity: { label: 'Perplexity', hosts: ['www.perplexity.ai', 'api.perplexity.ai'] },
    };
    const byHostAll = new Map(reachable.map(e => [e.host, e]));
    // A provider is sealed only if every door of it we measured is.
    const providerSealed = k => PROVIDERS[k].hosts.every(x => byHostAll.get(x)?.pq === 'full');
    const lifeOf = e => LIFE[e.life] || LIFE[e.g];
    // What goes to an AI stays sensitive at least as long as the AI group's
    // hypothesis says (code, documents), longer if the organisation's own data does.
    const aiUntil = e => RECORDED + Math.max(lifeOf(e).years, LIFE.ia.years);
    const usersOf = k => measured.filter(e => (e.ai || []).includes(k));
    // Relevé 6: who stands behind each third-party script, by its host,
    // classified by hand as holders.json is. What it does, only when its
    // publisher says so; a host not listed here is shown as itself.
    const TIERS_PROV = [
        [/googletagmanager\.com$/, 'Google Tag Manager', 'un gestionnaire de balises'], [/(cookielaw\.org|onetrust\.com)$/, 'OneTrust', 'un bandeau cookies'],
        [/cloudflareinsights\.com$/, 'Cloudflare Web Analytics', 'une mesure d\'audience'], [/^cdnjs\.cloudflare\.com$/, 'cdnjs'], [/^challenges\.cloudflare\.com$/, 'Cloudflare Turnstile'],
        [/jsdelivr\.net$/, 'jsDelivr'], [/tagcommander\.com$/, 'Tag Commander', 'un gestionnaire de balises'], [/trustcommander\.net$/, 'Trust Commander', 'un bandeau cookies'],
        [/youtube(-nocookie)?\.com$/, 'YouTube'], [/^maps\.googleapis\.com$/, 'Google Maps'], [/abtasty\.com$/, 'AB Tasty'],
        [/cookiebot\.com$/, 'Cookiebot', 'un bandeau cookies'], [/fontawesome\.com$/, 'Font Awesome'], [/vimeo\.com$/, 'Vimeo'], [/trustpilot\.com$/, 'Trustpilot'],
        [/wp\.com$/, 'Jetpack (WordPress.com)'], [/jquery\.com$/, 'jQuery CDN'], [/unpkg\.com$/, 'unpkg'], [/cookieyes\.com$/, 'CookieYes', 'un bandeau cookies'],
        [/aticdn\.net$/, 'Piano Analytics', 'une mesure d\'audience'], [/polyfill-fastly\.io$/, 'Polyfill (Fastly)'], [/parsely\.com$/, 'Parse.ly', 'une mesure d\'audience'],
        [/trustarc\.com$/, 'TrustArc', 'un bandeau cookies'], [/elfsight\.com$/, 'Elfsight'], [/clearbit\.com$/, 'Clearbit', 'un traceur qui identifie l\'entreprise du visiteur'],
        [/readspeaker\.com$/, 'ReadSpeaker', 'une lecture vocale'], [/usercentrics\.eu$/, 'Usercentrics', 'un bandeau cookies'], [/decibelinsight\.net$/, 'Decibel', 'un enregistreur de sessions'],
        [/mapbox\.com$/, 'Mapbox'], [/datatables\.net$/, 'DataTables'], [/bootstrapcdn\.com$/, 'BootstrapCDN'], [/(website-files\.com|d3e54v103j8qbb\.cloudfront\.net)$/, 'Webflow'],
        [/(hubspot|hs-scripts|hsappstatic)/, 'HubSpot'], [/plausible\.io$/, 'Plausible', 'une mesure d\'audience'], [/qualified\.com$/, 'Qualified'],
        [/luckyorange\.com$/, 'Lucky Orange', 'un enregistreur de sessions'], [/monetate\.net$/, 'Monetate'], [/optimizely\.com$/, 'Optimizely'], [/stripe\.com$/, 'Stripe'],
        [/^(www|cse)\.google\.com$/, 'Google (recherche)'], [/dynatrace\.com$/, 'Dynatrace'], [/trackingplan\.com$/, 'Trackingplan'],
        [/cdn-apple\.com$/, 'Apple ID'], [/twic\.pics$/, 'TwicPics'], [/addtoany\.com$/, 'AddToAny'], [/framer(usercontent)?\.com$/, 'Framer'],
        [/captcha-delivery\.com$/, 'DataDome'], [/appsflyer\.com$/, 'AppsFlyer'], [/prismic\.io$/, 'Prismic'], [/kameleoon\.eu$/, 'Kameleoon'],
        [/cloudimg\.io$/, 'Cloudimage'], [/dailymotion\.com$/, 'Dailymotion'], [/ahrefs\.com$/, 'Ahrefs'], [/datadoghq/, 'Datadog RUM'],
    ];
    const provOf = host => {
        const hit = TIERS_PROV.find(([re]) => re.test(host));
        return hit ? { name: hit[1], what: hit[2] || null } : { name: host, what: null };
    };
    // Relevé 3: who carries each organisation's mail, and whether TLS between
    // mail servers is required (MTA-STS enforce, DANE) or merely offered.
    const POST = {
        microsoft: ['Microsoft 365', 'US'], google: ['Google Workspace', 'US'], proofpoint: ['Proofpoint', 'US'],
        mimecast: ['Mimecast', 'GB'], cisco: ['Cisco', 'US'], broadcom: ['Broadcom', 'US'], barracuda: ['Barracuda', 'US'],
        trendmicro: ['Trend Micro', 'JP'], vade: ['Vade', 'FR'], ovhcloud: ['OVHcloud', 'FR'], gandi: ['Gandi', 'FR'],
        orange: ['Orange', 'FR'], proton: ['Proton', 'CH'], other: ['ses propres serveurs ou un autre', ''], none: ['aucun serveur de courrier', ''],
    };
    // Who holds the mail, by name when the exchanger says it (a known provider),
    // else by the network that announces its address. Country of the parent
    // company for the American ones, as in relevé 1; of the network otherwise.
    const MAIL_NET = [
        [/CLOUDFLARE/i, 'Cloudflare', 'US'], [/IRONP|CISCO/i, 'Cisco', 'US'], [/AMAZON/i, 'Amazon', 'US'], [/MICROSOFT/i, 'Microsoft', 'US'], [/GOOGLE/i, 'Google', 'US'],
        [/DISIC|INTERMINISTERIELLE/i, 'Réseau de l\'État (DINUM)', 'FR', 'propre'], [/FR-MAE/i, 'Affaires étrangères', 'FR', 'propre'],
        [/BPCE/i, 'BPCE', 'FR', 'propre'], [/BRS-BOI|BOURSORAMA/i, 'Boursorama', 'FR', 'propre'], [/BNP/i, 'BNP Paribas', 'FR', 'propre'],
        [/Societe Generale/i, 'Société Générale', 'FR', 'propre'], [/Credit Agricole/i, 'Crédit Agricole', 'FR', 'propre'],
        [/EURO-INFORMATION/i, 'Euro-Information (Crédit Mutuel)', 'FR', 'propre'], [/LA-POSTE/i, 'La Poste', 'FR', 'propre'],
        [/CHU-TLSE/i, 'CHU de Toulouse', 'FR', 'propre'], [/cirtilnet/i, 'Sécurité sociale', 'FR', 'propre'],
        [/RENATER/i, 'Renater', 'FR', 'public'],
        [/CELESTE/i, 'Celeste', 'FR', 'hebergeur'], [/AS3215|Orange S\.A/i, 'Orange', 'FR', 'hebergeur'], [/Odigo/i, 'Odigo', 'FR', 'hebergeur'],
        [/ATOS/i, 'Atos', 'FR', 'hebergeur'], [/^OVH/i, 'OVHcloud', 'FR', 'hebergeur'],
        [/DTAG/i, 'Deutsche Telekom', 'DE'], [/COLT/i, 'Colt', 'GB'],
    ];
    const POST_KIND = { vade: 'hebergeur', ovhcloud: 'hebergeur', gandi: 'hebergeur', orange: 'hebergeur' };
    const mailHolder = e => {
        const m = e.mail;
        if (!m || !m.mx.length) return null;
        if (m.provider !== 'other' && POST[m.provider]) return { name: POST[m.provider][0], cc: POST[m.provider][1], kind: POST_KIND[m.provider] || 'prestataire' };
        const as = (m.net && m.net.as) || '';
        const hit = MAIL_NET.find(([re]) => re.test(as));
        if (hit) return { name: hit[1], cc: hit[2], kind: hit[3] || 'prestataire' };
        const cc = (as.match(/, ([A-Z]{2})$/) || [])[1] || '';
        return { name: as.replace(/^\S+ - /, '').replace(/, [A-Z]{2}$/, '') || 'inconnu', cc, kind: 'prestataire' };
    };
    // Relevé 4: the doors measured at both dates, and what changed, subject by
    // subject. The verdict is compared raw: the « on demand » downgrade above
    // has no twin in the previous measurement, and would read as a loss. A
    // certificate counts as changed when its kind of key or its issuer does,
    // not when it is merely renewed.
    function keyMoves() {
        const both = measured.filter(e => e.cle?.prev && e.cle.prev.reachable !== false && e.cle.prev.pq);
        const prev = both[0]?.cle.prev.date;
        const P = e => e.cle.prev;
        const was = e => P(e).pq === 'full', is = e => (e.onDemand ? 'full' : e.pq) === 'full';
        const old = l => (l || []).some(v => v === 'tls1' || v === 'tls1_1');
        const t13 = l => (l || []).includes('tls1_3');
        const certKind = c => !c ? '' : /rsa/i.test(c.key) ? `RSA ${c.bits}` : `ECDSA ${c.curve || c.bits}`;
        const certOf = c => !c ? '' : `${certKind(c)}, ${c.issuer || '?'}`;
        const csp = pg => !!pg && !!(pg.csp || pg.meta_csp);
        const served = e => P(e).page?.code === 200 && e.page?.code === 200;
        const topics = [
            ["l'hybride post-quantique", "gagné", e => !was(e) && is(e)],
            ["l'hybride post-quantique", "perdu", e => was(e) && !is(e)],
            ['de mains', 'changé', e => P(e).name && P(e).name !== e.cle.name, e => `${P(e).name} → ${e.cle.name}`],
            ['TLS 1.0 et 1.1', 'fermé', e => old(P(e).protocols) && !old(e.protocols)],
            ['TLS 1.0 ou 1.1', 'rouvert', e => !old(P(e).protocols) && old(e.protocols)],
            ['TLS 1.3', 'ouvert', e => !t13(P(e).protocols) && t13(e.protocols)],
            ['TLS 1.3', 'fermé', e => t13(P(e).protocols) && !t13(e.protocols)],
            ['de certificat', 'changé', e => P(e).cert && e.cert && (certKind(P(e).cert) !== certKind(e.cert) || P(e).cert.issuer !== e.cert.issuer), e => `${certOf(P(e).cert)} → ${certOf(e.cert)}`],
            // HSTS is left out: probe.sh reads it on one HEAD request, and a door
            // that answers a robot with a 403, or one edge with and one without,
            // flips between two runs a day apart (BlaBlaCar, Caisse d'Épargne).
            // The policy is compared only when the home page answered 200 both
            // times: a blocking page has no policy, and is not a withdrawal.
            ['une politique de contenu (CSP)', 'ajouté', e => served(e) && !P(e).page.csp && csp(e.page)],
            ['leur politique de contenu (CSP)', 'retiré', e => served(e) && P(e).page.csp && !csp(e.page)],
        ].map(([what, verb, test, detail]) => ({ what, verb, detail, doors: both.filter(test) }));
        const moved = new Set(topics.flatMap(t => t.doors));
        const pick = (verb, what) => topics.find(t => t.verb === verb && t.what === what).doors;
        return {
            prev, compared: both.length, topics, moved: [...moved],
            prevFr: prev ? new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(prev)) : '',
            since: M.depuis ? `le relevé ${M.depuis}` : null,
            gained: pick('gagné', "l'hybride post-quantique"), lost: pick('perdu', "l'hybride post-quantique"), hands: pick('changé', 'de mains'),
        };
    }
    // Relevé 4 comes out the Saturday before Blue Monday (the third Monday of
    // January): a pinned note says so, when, and only when, the relevé is
    // published in the three days before it. Computed, so a republication in
    // February does not carry a stale joke.
    function blueMonday() {
        if (!M.published) return null;
        const pub = new Date(`${String(M.published).slice(0, 10)}T12:00:00`);
        const first = new Date(pub.getFullYear(), 0, 1, 12);
        const monday = new Date(first); monday.setDate(1 + ((8 - first.getDay()) % 7) + 14);
        const days = Math.round((monday - pub) / 864e5);
        if (days < 1 || days > 3) return null;
        const fmt = d => new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(d);
        return h('p', { class: 'clin' },
            h('span', null, `${fmt(pub)} : le relevé.`),
            h('span', null, `${fmt(monday)} : `, h('s', null, 'Blue Monday'), `, vos clés en laiton ne rouillent pas.`),
            h('span', null, `Q-Day : date inconnue.`));
    }
    // One sentence for the chapô: the hybrid and the hands first, then how many
    // doors moved at all; or that nothing did.
    function depuis(m) {
        const when = m.since ? `Depuis ${m.since} (${m.prevFr})` : `Depuis la mesure du ${m.prevFr}`;
        if (!m.moved.length) return `${when}, aucune porte n'a bougé.`;
        const parts = [
            m.gained.length && `${plural(m.gained.length, 'porte a gagné', 'portes ont gagné')} l'hybride`,
            m.lost.length && `${plural(m.lost.length, "l'a perdu", "l'ont perdu")}`,
            m.hands.length && `${plural(m.hands.length, 'a changé', 'ont changé')} de mains`,
        ].filter(Boolean);
        return `${when} : ${parts.length ? parts.join(', ') + ' ; ' : ''}${plural(m.moved.length, 'porte a bougé', 'portes ont bougé')} en tout.`;
    }
    const postState = e => {
        const m = e.mail;
        if (!m) return null;
        if (!m.mx.length) return 'sans';
        if (m.mtasts === 'enforce' || m.dane) return 'cachetee';
        if (m.mtasts === 'testing') return 'entrouverte';
        return 'carte';
    };
    if (M.focus === 'courriel') {
        document.body.classList.add('releve-mail');
        // The façade, for mail: what one sees from outside is the exchanger's
        // door and the domain's published policies, not the mailboxes behind.
        document.querySelector('.facade').replaceChildren(
            h('b', null, 'On relève des façades. '),
            `Pour le courrier, la façade, ce sont les serveurs qui reçoivent les messages d'une organisation (ses MX) et les règles qu'elle publie dans son DNS : chiffrement imposé ou non, protection contre l'usurpation. `,
            `Ce qui se passe ensuite, entre ces serveurs et les boîtes des salariés, ne se voit pas d'ici. Et une organisation peut écrire depuis d'autres serveurs que ceux qui reçoivent.`);
        const withMx = measured.filter(e => e.mail && e.mail.mx.length);
        const sealedMail = withMx.filter(e => postState(e) === 'cachetee');
        const byProv = k => withMx.filter(e => e.mail.provider === k);
        const us = withMx.filter(e => POST[e.mail.provider]?.[1] === 'US');
        const top = Object.keys(POST).filter(k => byProv(k).length && POST[k][1]).sort((a, b) => byProv(b).length - byProv(a).length).slice(0, 5);
        $('chapo').append(
            `Sur `, h('strong', null, `${withMx.length} organisations`), ` qui reçoivent du courrier, `,
            h('strong', null, sealedMail.length), ` imposent qu'il arrive chiffré : `, h('span', null, names(sealedMail)), `. `,
            `Pour les ${withMx.length - sealedMail.length} autres, le chiffrement entre serveurs n'est que proposé : quelqu'un placé sur le trajet peut obtenir que le message arrive en clair. Pas besoin d'ordinateur quantique, c'est possible aujourd'hui. `,
            h('strong', null, `${us.length}`), ` confient leur courrier à une entreprise américaine : `, top.map(k => `${POST[k][0]} ${byProv(k).length}`).join(', '), '.',
        );
        sources($('chapo'), `les enregistrements MX, `, h('code', null, '_mta-sts'), `, TLSA, DS, `, h('code', null, '_dmarc'), ` et SPF de chaque domaine, lus le ${dateFr} sur ses serveurs DNS faisant autorité ; la politique MTA-STS servie sur `, h('code', null, 'https://mta-sts.<domaine>/'), `. Pour vérifier : `, h('code', null, 'dig +short TXT _mta-sts.danone.com'), '.');
    } else if (M.focus === 'ia') {
        // Relevé 2 is its own page: the near horizon first, and none of relevé
        // 1's blocks (see the vision, at the end).
        $('q').value = 2027;
        $('sablier-sonde').textContent = `Ce relevé, comme le premier, a été fait avec des sondes écrites pour l'occasion : OpenSSL 3.5 pour les portes, les serveurs DNS faisant autorité pour les espaces d'IA, l'API publique de Hugging Face pour l'open source. Elles passeront par Sablier.`;
        document.body.classList.add('releve-ia');
        const orgs = measured.filter(e => e.g !== 'ia');
        const open = orgs.filter(e => (e.ai || []).length);
        const keys = Object.keys(PROVIDERS).filter(k => usersOf(k).length).sort((a, b) => usersOf(b).length - usersOf(a).length);
        const sealedP = keys.filter(providerSealed), openP = keys.filter(k => !providerSealed(k));
        $('chapo').append(
            h('strong', null, `${open.length} organisations sur ${orgs.length}`),
            ` ont ouvert un espace chez un fournisseur d'IA, d'après leurs propres enregistrements DNS : `,
            keys.map(k => `${PROVIDERS[k].label} ${usersOf(k).length}`).join(', '), '. ',
            sealedP.length ? `Le chemin vers ${sealedP.map(k => PROVIDERS[k].label).join(', ')} est déjà hybride. ` : '',
            openP.length ? h('span', null, ...openP.map(k => h('span', null, 'Celui vers ', h('strong', null, PROVIDERS[k].label),
                ` ne l'est pas : ${PROVIDERS[k].whatMany || 'ce qui y part'} chez ${usersOf(k).length} d'entre elles, dont `, names(usersOf(k), 4), `, s'échange en classique. `))) : '',
            `Combien de temps cela reste-t-il secret ? Faites avancer le Q-Day.`,
        );
        sources($('chapo'), `les enregistrements DNS publics de chaque organisation (`, h('code', null, 'openai-domain-verification'), `, `,
            h('code', null, 'anthropic-domain-verification'), `, `, h('code', null, 'cursor-domain-verification'), `…), lus le ${dateFr} sur ses serveurs DNS faisant autorité, et la porte de chaque fournisseur, mesurée le même jour. `,
            `Pour vérifier : `, h('code', null, 'dig +short TXT qonto.com'), '.');
    } else if (M.focus === 'rencontres') {
        // Relevé 5, Saint-Valentin: the dating apps, counted apart (APART) and
        // told here, as letters sealed or left open (the letters' table below).
        document.body.classList.add('releve-rencontres');
        const apps = reachable.filter(e => e.g === 'rencontres');
        const sealedApps = apps.filter(e => e.pq === 'full');
        $('chapo').append(
            `Deux jours après la Saint-Valentin, nous avons frappé à `, h('strong', null, `${apps.length} portes d'entrée`),
            ` d'applis et de sites de rencontre utilisés en France. `,
            h('strong', null, sealedApps.length), ` sont cachetées à l'hybride X25519MLKEM768 ; `,
            h('strong', null, apps.length - sealedApps.length), ` partent encore sous pli ouvert, en échange de clés classique. `,
            `Conversations privées, orientation, photos : des secrets qui doivent le rester toute une vie.`,
        );
        sources($('chapo'), `chaque porte mesurée le ${dateFr} (OpenSSL 3.5, seul groupe offert X25519MLKEM768) ; pour une appli qui appelle sa propre adresse, cette adresse aussi.`);
    } else if (M.focus === 'oeufs') {
        // Relevé 6, Easter: the third parties each home page loads (tiers.sh),
        // eggs hidden in the grass. Told in the chocolate shop below.
        document.body.classList.add('releve-oeufs');
        const read = measured.filter(e => e.page);
        const hunted = measured.filter(e => (e.tiers || []).length);
        const eggs = hunted.flatMap(e => e.tiers);
        const dark = eggs.filter(t => t.pq !== 'full');
        const betrayed = hunted.filter(e => e.pq === 'full' && e.tiers.some(t => t.pq !== 'full'));
        $('chapo').append(
            `Une page d'accueil, c'est une porte d'entrée… et des œufs cachés dans l'herbe : les scripts tiers, chacun une connexion TLS vers le serveur d'un autre, sous la clé d'un autre. `,
            `Sur ${read.length} pages d'accueil lues, ${hunted.length} en cachent : `, h('strong', null, `${eggs.length} œufs`), `, venus de `,
            h('strong', null, `${new Set(eggs.map(t => provOf(t.host).name)).size} fournisseurs`), `. `,
            `${eggs.length - dark.length} sont emballés en hybride. `, h('strong', null, `${dark.length} sont en chocolat noir`),
            betrayed.length ? `, dont ${betrayed.length} chez des organisations qui ont pourtant scellé leur propre porte.` : '.',
        );
        sources($('chapo'), `les scripts que nomme le HTML servi de chaque page d'accueil, lu le ${dateFr} ; la porte de chaque tiers, mesurée le même jour (OpenSSL 3.5, seul groupe offert X25519MLKEM768). `,
            `Compte plancher : ce qu'un gestionnaire de balises ajoute une fois la page chargée ne se voit pas d'ici.`);
    } else if (M.focus === 'cle') {
        // Relevé 4: relevé 1's page, re-measured, read through who holds the
        // key of each door (cle.sh). Nothing of relevé 1 is hidden.
        document.body.classList.add('releve-cle');
        const keyed = measured.filter(e => e.cle);
        const viaCdn = sealed.filter(e => e.cle?.kind === 'cdn');
        const ownKey = keyed.filter(e => e.cle.kind === 'propre');
        const moves = keyMoves();
        $('chapo').append(
            `Sur `, h('strong', null, `${keyed.length} portes d'entrée françaises`), `, `, h('strong', null, sealed.length), ` parlent l'hybride post-quantique. `,
            h('strong', null, viaCdn.length), ` d'entre elles le doivent à leur CDN, qui l'a activé pour tous ses clients sans qu'elles aient rien demandé. `,
            `Celles qui tiennent elles-mêmes leur clé, sur leur propre réseau : `, h('strong', null, `${ownKey.filter(e => e.pq === 'full').length} sur ${ownKey.length}`), `. `,
            moves.prev ? depuis(moves) : '',
        );
        sources($('chapo'), `chaque porte mesurée le ${dateFr} (OpenSSL 3.5, seul groupe offert X25519MLKEM768) ; qui la tient, d'après le réseau qui répond à la connexion TLS (Team Cymru), classé à la main dans `, h('code', null, 'holders.json'), ` : jamais deviné.`);
    } else {
        $('chapo').append(
            `Qui enregistre aujourd'hui le trafic chiffré vers un site pourra le lire le jour où un ordinateur quantique cassera l'échange de clés classique. Sur `,
            h('strong', null, measured.length), ` portes d'entrée françaises, `,
            h('strong', null, sealed.length), ` parlent déjà l'hybride post-quantique. Faites avancer le temps pour voir ce que les autres laisseront lire.`,
        );
    }
    // A relevé that leaves its usual day (the 16th) says so, under its headline.
    if (M.exception) $('chapo').after(h('p', { class: 'exception' }, M.exception));

    const s = D.self;
    $('nous').append(
        h('b', null, 'On commence par nous. '),
        h('code', null, s.host), ` · ${s.pq === 'full' ? `scellé, ${s.hits} connexions sur ${s.tries}` : 'pas scellé'} · ${s.group} · ${s.protocol}`,
        s.cost ? ` · hybride ${String(s.cost.hybrid).replace('.', ',')} ms contre ${String(s.cost.classical).replace('.', ',')} ms en classique. ` : '. ',
        `L'hybride, nous ne l'avons pas configuré : c'est le comportement par défaut du proxy qui sert ce site. Une façade scellée sans décision, comme beaucoup d'autres ci-dessous.`,
        // What we did decide, once measured: TLS 1.3 alone, HSTS asking to be preloaded.
        ...(() => {
            const done = [
                (s.protocols || []).length && !(s.protocols || []).includes('tls1_2') ? 'TLS 1.3 seulement' : '',
                s.hsts && /preload/i.test(s.hsts) ? 'HSTS demandé en préchargement dans les navigateurs' : '',
            ].filter(Boolean);
            return done.length ? [` Ce que nous avons décidé : ${done.join(', ')}.`] : [];
        })(),
        s.page && cspOf(s)?.kind === 'aucun' ? ` Sa CSP n'autorise aucun script${/fonts.googleapis/.test(s.page.csp) ? ` ; elle autorise en revanche les polices de Google Fonts, un tiers américain que nous devons encore retirer` : ''}.` : '',
    );
    // What is still wrong at home, from the same measurement: said as plainly
    // as for the others.
    const classicalGroups = (s.groups || []).filter(g => !/MLKEM/i.test(g));
    const wrong = [
        s.cert && !/ML-?DSA|SLH-?DSA/i.test(s.cert.sig || '') ? `notre certificat est signé en classique (${s.cert.curve ? `ECDSA ${s.cert.curve}` : s.cert.key}, ${s.cert.issuer}) : au Q-Day, quelqu'un pourra se faire passer pour nous. Aucune autorité reconnue par les navigateurs ne délivre encore de certificat post-quantique` : '',
        classicalGroups.length ? `un navigateur qui ne connaît pas ML-KEM obtient de nous un échange classique (${classicalGroups.join(', ')}), sans que rien ne le refuse${(s.protocols || []).includes('tls1_2') ? ` ; TLS 1.2, encore accepté, ne peut pas faire mieux` : ''}` : '',
        !s.hsts ? `pas de HSTS : un visiteur peut être ramené en HTTP` : !/preload/i.test(s.hsts) ? `notre HSTS n'est pas préchargé dans les navigateurs : la toute première visite peut encore être détournée en HTTP` : '',
    ].filter(Boolean);
    if (wrong.length) $('nous').append(' ', h('b', null, 'Ce qui ne va pas chez nous : '), wrong.join(' ; '), '.');
    // And the reader: handshake.mesa.black (devops/handshake in the
    // observatoire) answers with the key exchange this browser just
    // negotiated, the one fact a page cannot read on its own. One request, no
    // cookie; nothing is shown if it does not answer (the prototype, opened
    // here, is not an origin it serves).
    fetch('https://handshake.mesa.black/', { cache: 'no-store', credentials: 'omit' })
        .then(r => (r.ok ? r.json() : null))
        .then(t => {
            if (!t || !t.group) return;
            const tls12 = t.version === 'TLS 1.2';
            $('nous').append(h('span', { class: 'et-vous' }, h('b', null, 'Et vous ? '),
                `Votre navigateur vient de négocier `, h('code', null, t.group), ` avec nous${tls12 ? ', en TLS 1.2' : ''} : `,
                t.hybrid ? `votre connexion est déjà hybride post-quantique.`
                    : `${tls12 ? `TLS 1.2 ne peut pas porter l'hybride. ` : `un échange classique. `}Une version récente de Chrome, Edge, Firefox ou Safari parlerait l'hybride ; derrière le proxy d'une entreprise qui inspecte le trafic, c'est lui qui a répondu.`,
                ' ', h('a', { href: '/comprendre#hybride' }, 'Ce que ça veut dire →')));
        })
        .catch(() => {});
    // A themed relevé (2: the AI, 3: the mail) opens on its own screens: we
    // come first, right under the façade note.
    if (M.focus) {
        const box = h('div', { class: 'wrap' });
        $('scan').before(box);
        box.append($('nous'));
    }

    // Deterministic noise per host: the same door always shows the same ciphertext.
    const GLYPHS = '0123456789abcdef';
    function noise(seed, len) {
        let x = 2166136261;
        for (const c of seed) x = Math.imul(x ^ c.charCodeAt(0), 16777619);
        let out = '';
        for (let i = 0; i < len; i++) {
            x = Math.imul(x ^ (x >>> 13), 1274126177);
            out += GLYPHS[(x >>> 0) % 16];
            if (i % 4 === 3) out += ' ';
        }
        return out.trim();
    }

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let settled = false;
    function scramble(el, target) {
        if (el.dataset.text === target) return;
        el.dataset.text = target;
        // The page opens settled; only a move of the slider animates.
        if (reduce || !settled) { el.textContent = target; return; }
        const from = el.textContent;
        const len = Math.max(from.length, target.length);
        const frames = 14;
        let frame = 0;
        cancelAnimationFrame(el._raf);
        const step = () => {
            frame++;
            let out = '';
            for (let i = 0; i < len; i++) {
                const at = (i / len) * frames;
                if (frame >= at + 3) out += target[i] ?? '';
                else if (frame >= at) out += GLYPHS[(Math.random() * 16) | 0];
                else out += from[i] ?? '';
            }
            el.textContent = out;
            if (frame < frames + 3) el._raf = requestAnimationFrame(step);
            else el.textContent = target;
        };
        el._raf = requestAnimationFrame(step);
    }


    // ------------------------------------------------------------ the scan
    // Relevé 2 only: the AI doors read out one by one, as a machine would read
    // them. Original typography and sound, nothing borrowed: the mood of the
    // films, none of their material.
    if (M.focus === 'ia') {
        const scan = $('scan');
        const log = h('ol', { class: 'scan-log', 'aria-live': 'off' });
        const tally = h('p', { class: 'scan-bilan' });
        const sound = h('button', { type: 'button', class: 'scan-son', 'aria-pressed': 'false' }, 'Activer le son');
        scan.hidden = false;
        scan.append(
            h('div', { class: 'scan-ecran' },
                h('div', { class: 'scan-tete' },
                    h('span', { class: 'scan-oeil', 'aria-hidden': 'true' }),
                    h('h2', { id: 'scan-titre' }, 'Qui confie quoi à quelle IA'),
                    sound,
                ),
                log, tally,
                h('div', { class: 'scan-balayage', 'aria-hidden': 'true' }),
            ),
        );
        const pad = (t, n) => t.length >= n ? t.slice(0, n - 1) + '…' : t + ' ' + '.'.repeat(n - t.length - 1);
        // One line per organisation and provider; the classical ones last, so
        // the readout ends on them.
        const links = [];
        for (const e of measured.filter(o => o.g !== 'ia')) for (const k of e.ai || []) links.push({ e, k, ok: providerSealed(k) });
        links.sort((a, b) => a.ok === b.ok ? a.e.name.localeCompare(b.e.name, 'fr') : a.ok ? -1 : 1);
        const lines = links.map(({ e, k, ok }) => {
            const until = aiUntil(e);
            return {
                e,
                text: `${pad(e.apexName || e.host.replace(/^(www|app|group|corporate|fr)\./, ''), 26)} → ${pad(PROVIDERS[k].label.toUpperCase(), 12)} `,
                verdict: ok ? 'SCELLÉ' : `LISIBLE · SENSIBLE JUSQU'EN ${until}`,
                cls: ok ? 'ok' : 'cible',
            };
        });
        const done = () => {
            const bad = [...new Set(links.filter(l => !l.ok).map(l => l.e))];
            tally.replaceChildren(
                h('b', null, `${links.filter(l => l.ok).length} / ${links.length} LIENS SCELLÉS. `),
                bad.length ? h('span', null, `PAS ENCORE SCELLÉS : `, names(bad, 99), '.') : '',
            );
            tally.classList.add('vu');
        };
        const row = l => h('li', { class: l.cls },
            h('a', { href: `#${l.e.host}` }, l.text), h('span', { class: 'verdict' }, l.verdict));

        // The music: the film's theme, read from archive.org (the owner's
        // choice, 16/10/2026). On by default, but no browser lets a page play
        // sound before the visitor's first gesture: it starts then, the button
        // cuts it. Loaded only once it is needed, so a visitor who never
        // clicks never asks archive.org for anything.
        const MUSIC = 'https://archive.org/download/tvtunes_20681/The%20Terminator.mp3';
        let audio = null, muted = false;
        const start = () => {
            if (muted) return;
            if (!audio) { audio = new Audio(MUSIC); audio.loop = true; audio.volume = .7; }
            audio.play().then(() => {
                sound.setAttribute('aria-pressed', 'true'); sound.textContent = 'Couper le son';
                for (const t of ['pointerdown', 'keydown']) removeEventListener(t, first, true);
            }).catch(() => {});
        };
        const stop = () => {
            if (audio) audio.pause();
            sound.setAttribute('aria-pressed', 'false'); sound.textContent = 'Remettre le son';
        };
        const tick = () => {};
        sound.textContent = 'Son au premier clic · couper';
        sound.addEventListener('click', ev => {
            ev.stopPropagation();
            if (audio && !audio.paused) { muted = true; stop(); } else { muted = false; start(); }
        });
        // Tried as soon as the page opens: a browser that already saw the
        // visitor interact with the site (Chrome, arriving from relevé 1) lets
        // it play. Otherwise the first gesture anywhere starts it, unless cut before.
        const first = () => { start(); for (const t of ['pointerdown', 'keydown']) removeEventListener(t, first, true); };
        for (const t of ['pointerdown', 'keydown']) addEventListener(t, first, true);
        start();

        let started = false;
        const run = () => {
            if (started) return;
            started = true;
            if (reduce) { log.append(...lines.map(row)); done(); return; }
            scan.classList.add('en-cours');
            let i = 0;
            const next = () => {
                if (i >= lines.length) { scan.classList.remove('en-cours'); done(); return; }
                const l = lines[i++];
                const li = row(l);
                log.append(li);
                log.scrollTop = log.scrollHeight;
                tick(l.cls);
                setTimeout(next, l.cls === 'cible' ? 450 : 70);
            };
            next();
        };
        new IntersectionObserver((entries, obs) => {
            if (entries[0].isIntersecting) { run(); obs.disconnect(); }
        }, { threshold: .35 }).observe(scan);
    }

    // ------------------------------------------------------------ plaques
    const plaques = [];
    const groupExpo = {};
    for (const g of D.groups) {
        const life = LIFE[g.key];
        const m = g.entries.filter(e => e.reachable);
        const n = m.filter(e => e.pq === 'full').length;
        const wall = h('ul', { class: 'mur' });
        $('groupes').append(h('section', { class: 'groupe' },
            h('div', { class: 'groupe-tete' },
                h('h2', null, g.label.fr),
                h('span', { class: 'plaque numero', title: `${n} scellés sur ${m.length}` }, n, h('small', null, ` / ${m.length}`)),
                // The one figure of the header that follows the slider.
                groupExpo[g.key] = h('span', { class: 'expo', 'aria-live': 'polite' }),
                h('span', { class: 'duree' }, `Ce qui passe par ces portes : ${life.what} · sensible `, h('i', null, `${life.years} ans`), ' (hypothèse)',
                    g.entries.some(e => e.life) ? ` ; fintech ${LIFE.banques.years} ans, santé ${LIFE.sante.years} ans` : null),
            ),
            wall,
        ));
        for (const e of g.entries) {
            const isCdn = Boolean(e.front && e.front !== 'other');
            const flux = h('span', { class: 'flux' }, noise(e.host, 16));
            const etat = h('span', { class: 'etat' });
            // A button, so every plaque opens its own sheet from the keyboard too.
            const card = h('button', { type: 'button', class: 'plaque' + (isCdn ? ' cdn' : ''), 'aria-haspopup': 'dialog' },
                isCdn && h('span', { class: 'porte', title: `La connexion relevée est servie par ${CDN[e.front]}` }, CDN[e.front]),
                h('span', { class: 'org' }, e.name),
                h('span', { class: 'hote' }, e.host),
                flux,
                etat,
            );
            // An entry may live by another group's clock: Qonto's account
            // statements age like a bank's, Alan's claims like a patient file.
            const plaque = { e, card, flux, etat, life: LIFE[e.life] || life, group: g };
            card.addEventListener('click', () => openSheet(plaque));
            wall.append(h('li', null, card));
            plaques.push(plaque);
        }
    }

    // ------------------------------------------------------------ time
    const q = $('q');
    function render() {
        const Y = Number(q.value);
        $('annee').textContent = Y;
        document.querySelectorAll('.annee-ref').forEach(el => { el.textContent = Y; });
        let exposed = 0;
        const perGroup = {};
        for (const { e, card: li, flux, etat, life, group } of plaques) {
            const before = li.classList.contains('ouvert') ? 'ouvert' : li.classList.contains('perime') ? 'perime' : null;
            li.classList.remove('scelle', 'partie', 'ouvert', 'perime', 'absent');
            if (!e.reachable) {
                li.classList.add('absent');
                etat.textContent = 'Non relevé';
                continue;
            }
            const sensitive = Y <= RECORDED + life.years;
            // How much of the data's sensitive life is gone by the Q-Day: the veil.
            li.style.setProperty('--age', `${Math.max(0, Math.min(100, (Y - RECORDED) / life.years * 100)).toFixed(1)}%`);
            const kind = life.what.split(',')[0];
            const label = kind.charAt(0).toUpperCase() + kind.slice(1);
            if (e.pq === 'full') {
                li.classList.add('scelle');
                etat.textContent = `■ Scellé · ${e.group}`;
                scramble(flux, noise(e.host, 16));
            } else if (e.pq === 'partial') {
                li.classList.add('partie');
                // Its years, so the plaque says what the slider changes for it.
                etat.textContent = (e.onDemand ? `◩ Sur demande · ${e.group} par défaut` : `◩ En partie · ${e.hits} connexions sur ${e.tries}`)
                    + (sensitive ? ` · sensible jusqu'en ${RECORDED + life.years}` : ` · plus sensible depuis ${RECORDED + life.years + 1}`);
                if (sensitive) { if (!APART.has(group.key)) exposed++; perGroup[group.key] = (perGroup[group.key] || 0) + 1; }
                scramble(flux, `${noise(e.host, 8)} ${kind}`);
            } else {
                const now = sensitive ? 'ouvert' : 'perime';
                li.classList.add(now);
                // A plaque that crosses its line says so: few do, they should be seen.
                if (settled && before && before !== now && !reduce) {
                    li.classList.remove('bascule-anim'); void li.offsetWidth; li.classList.add('bascule-anim');
                }
                const until = RECORDED + life.years;
                etat.textContent = sensitive
                    ? `▲ Lisible en ${Y} · sensible jusqu'en ${until}, encore ${plural(until - Y + 1, 'an', 'ans')}`
                    : `△ Lisible en ${Y} · plus sensible depuis ${until + 1}`;
                if (sensitive) { if (!APART.has(group.key)) exposed++; perGroup[group.key] = (perGroup[group.key] || 0) + 1; }
                scramble(flux, label);
            }
        }
        for (const [k, el] of Object.entries(groupExpo)) {
            const n = perGroup[k] || 0;
            el.textContent = n ? `${n} exposée${n > 1 ? 's' : ''} en ${Y}` : `aucune exposée en ${Y}`;
            el.classList.toggle('zero', !n);
        }
        $('expose').textContent = exposed;
        $('expose-quoi').textContent = `exposées en ${Y}`;
    }
    {
        // Say up front how little the year can move, and why: it is the finding.
        const fixed = measured.filter(e => e.pq !== 'none').length;
        if (M.focus === 'ia') $('curseur-note').textContent =
            `Le Q-Day règle la vision machine ci-dessous : lancez le temps, et regardez ce qui se lit l'année où il tombe. `
            + `Ce qui part vers une IA est supposé sensible ${LIFE.ia.years} ans au moins, plus si l'organisation garde des données plus longtemps.`;
        else $('curseur-note').textContent =
            `${fixed} portes sur ${measured.length} acceptent l'hybride, en tout ou en partie : aucune année ne change leur couleur. `
            + `Les ${measured.length - fixed} autres affichent leurs années et basculent quand le Q-Day dépasse la durée de vie de leurs données. `
            + `Tout le reste de la page est mesuré le jour du relevé.`;
    }
    q.addEventListener('input', render);
    render();
    settled = true;

    // ------------------------------------------------------------ the sheet
    // One dialog, filled on demand. Its address is the host, so a sheet can be
    // shared: observatoire.mesa.black/#www.lcl.fr opens LCL's.
    const sheet = $('fiche');
    const sheetBody = $('fiche-corps');
    const dateTimeFr = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });

    function stateOf(e, Y, life) {
        if (!e.reachable) return { cls: 'absent', label: 'Non relevé' };
        if (e.pq === 'full') return { cls: 'scelle', label: '■ Scellé' };
        if (e.pq === 'partial') return { cls: 'partie', label: e.onDemand ? '◩ Hybride sur demande seulement' : '◩ En partie' };
        return Y <= RECORDED + life.years
            ? { cls: 'ouvert', label: '▲ Lisible, encore sensible' }
            : { cls: 'perime', label: '△ Lisible, plus sensible' };
    }

    // Everything below is said of one door, from its own measures or from how it
    // stands against the others in the same run. Nothing is said of every door.
    const nameOf = new Map(all.map(e => [e.host, e.name]));
    const others = (e, keep) => measured.filter(o => o.host !== e.host && keep(o));
    const sealedIn = list => list.filter(o => o.pq === 'full');
    const hybridForBrowser = e => /MLKEM/.test(e.group || '');
    const has = (e, v) => (e.protocols || []).includes(v);
    const ms = n => `${String(Math.round(n * 10) / 10).replace('.', ',')} ms`;
    const dateShort = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    const PROTO = { tls1: 'TLS 1.0', tls1_1: 'TLS 1.1', tls1_2: 'TLS 1.2', tls1_3: 'TLS 1.3' };
    const HYBRID = ['X25519MLKEM768', 'SecP256r1MLKEM768', 'SecP384r1MLKEM1024'];
    const CLASSIC = ['X25519', 'secp256r1', 'secp384r1'];

    /** "AMAZON-02 - Amazon.com, Inc., US" -> { name: 'Amazon.com, Inc.', cc: 'US' } */
    function operator(e) {
        const raw = e.net && e.net.as;
        if (!raw) return null;
        const m = raw.match(/^\S+ - (.*), ([A-Z]{2})$/);
        return { asn: e.net.asn, name: (m ? m[1] : raw).replace(/_/g, '\u2019'), cc: m ? m[2] : (e.net.cc || ''), key: raw };
    }
    function certOf(e) {
        const c = e.cert || {};
        if (!c.key) return null;
        const kind = c.key === 'rsaEncryption' ? `RSA ${c.bits}` : c.curve ? `ECDSA ${c.curve}` : `${c.key} ${c.bits || ''}`.trim();
        return { ...c, kind, left: Math.round((new Date(c.until) - new Date(D.date)) / 864e5) };
    }
    /** "CNIL, CHU de Bordeaux et iad", each one a link to its own sheet. */
    function names(list, max = 6) {
        const shown = list.slice(0, max);
        const out = [];
        shown.forEach((o, i) => {
            if (i) out.push(i === shown.length - 1 && list.length <= max ? ' et ' : ', ');
            out.push(h('a', { href: `#${o.host}` }, o.name || nameOf.get(o.host)));
        });
        if (list.length > max) out.push(list.length - max > 1 ? ` et ${list.length - max} autres` : ' et 1 autre')
        return out;
    }


    // ------------------------------------------------------------ the page itself
    // TLS ends in the browser. From there on, the Content-Security-Policy says
    // which code may run in the page and read what is typed in it.
    const THIRD = [
        [/(^|\.)(googletagmanager|google-analytics|googleadservices|googlesyndication|doubleclick|googleapis|gstatic|google|youtube|youtube-nocookie)\.(com|net|fr)$/, 'Google', 'US'],
        [/(^|\.)(facebook\.net|facebook\.com|fbcdn\.net)$/, 'Meta', 'US'],
        [/(^|\.)(licdn\.com|linkedin\.com)$/, 'LinkedIn (Microsoft)', 'US'],
        [/(^|\.)(clarity\.ms|bing\.com|microsoft\.com)$/, 'Microsoft', 'US'],
        [/(^|\.)cookielaw\.org$|(^|\.)onetrust\.com$/, 'OneTrust', 'US'],
        [/(^|\.)(cloudflareinsights\.com|cdnjs\.cloudflare\.com)$/, 'Cloudflare', 'US'],
        [/(^|\.)unpkg\.com$/, 'unpkg', 'US'],
        [/(^|\.)jsdelivr\.net$/, 'jsDelivr', '?'],
        [/(^|\.)(twitter\.com|twimg\.com|x\.com)$/, 'X', 'US'],
        [/(^|\.)vimeo(cdn)?\.com$/, 'Vimeo', 'US'],
        [/(^|\.)hotjar\.(com|io)$/, 'Hotjar', 'MT'],
        [/(^|\.)fontawesome\.com$/, 'Font Awesome', 'US'],
        [/(^|\.)(wp\.com|wordpress\.com)$/, 'Automattic', 'US'],
        [/(^|\.)jquery\.com$/, 'jQuery (OpenJS)', 'US'],
        [/(^|\.)clearbit\.com$/, 'Clearbit (HubSpot)', 'US'],
        [/(^|\.)trustpilot\.com$/, 'Trustpilot', 'DK'],
        [/(^|\.)(cookiebot\.com|usercentrics\.eu)$/, 'Usercentrics', 'DE'],
        [/(^|\.)tagcommander\.com$|(^|\.)commandersact\.com$/, 'Commanders Act', 'FR'],
        [/(^|\.)abtasty\.com$/, 'AB Tasty', 'FR'],
        [/(^|\.)aticdn\.net$|(^|\.)xiti\.com$/, 'Piano (AT Internet)', 'FR'],
        [/(^|\.)contentsquare\.net$/, 'Contentsquare', 'FR'],
        [/(^|\.)brevo\.com$/, 'Brevo', 'FR'],
        [/(^|\.)cookieyes\.com$/, 'CookieYes', 'GB'],
        [/(^|\.)polyfill-fastly\.io$/, 'Fastly', 'US'],
    ];
    const thirdOf = host => { const t = THIRD.find(([re]) => re.test(host)); return t ? { company: t[1], cc: t[2] } : null; };

    /** The policy that governs scripts, read the way a browser reads it. */
    function cspOf(e) {
        const pg = e.page;
        if (!pg) return null;
        if (pg.code >= 400) return { kind: 'bloque' };
        const raw = pg.csp || pg.meta_csp;
        // Several policies (headers joined by commas) all apply: their rules add up.
        const dir = {};
        for (const pol of (raw || '').split(',')) for (const part of pol.split(';')) {
            const [k, ...v] = part.trim().split(/\s+/);
            if (k) (dir[k.toLowerCase()] ||= []).push(...v);
        }
        const src = (dir['script-src'] || dir['default-src'] || null);
        const low = (src || []).map(x => x.toLowerCase());
        const nonce = low.some(x => /^'(nonce|sha(256|384|512))-/.test(x));
        const flags = {
            unsafeInline: low.includes("'unsafe-inline'") && !nonce,
            unsafeEval: low.includes("'unsafe-eval'"),
            wildcard: low.find(x => ['*', 'https:', 'http:', 'data:'].includes(x)) || null,
            nonce, strictDynamic: low.includes("'strict-dynamic'"),
            trustedTypes: 'require-trusted-types-for' in dir,
            frameAncestors: 'frame-ancestors' in dir || /deny|sameorigin/i.test(pg.xfo || ''),
        };
        let kind;
        if (!raw) kind = pg.csp_ro ? 'rapport' : 'absente';
        else if (!src) kind = 'cadres';
        // 'none' alone: no script at all, stricter than any nonce.
        else if (low.length === 1 && low[0] === "'none'") kind = 'aucun';
        else if (flags.wildcard || flags.unsafeInline) kind = 'passoire';
        else if (nonce || flags.strictDynamic) kind = 'stricte';
        else kind = 'liste';
        const hosts = new Set();
        for (const v of Object.values(dir)) for (const x of v) {
            const l = x.toLowerCase();
            if (l.startsWith("'") || /^[a-z]+:$/.test(l) || l === '*') continue;
            const hst = l.replace(/^\w+:\/\//, '').split(/[/:]/)[0];
            if (hst && !hst.endsWith(e.host.replace(/^www\./, ''))) hosts.add(hst);
        }
        const loaded = (pg.scripts || []).filter(x => !x.endsWith(e.host.replace(/^www\./, '').split('.').slice(-2).join('.')));
        return { kind, flags, src, allowed: [...hosts], loaded, meta: !pg.csp && !!pg.meta_csp };
    }
    const CSP_LABEL = {
        aucun: 'aucun script autorisé', stricte: 'stricte (nonce, hash ou strict-dynamic)', liste: 'liste de domaines, sans code inline',
        passoire: 'présente, mais laisse tout passer', cadres: 'présente, mais ne dit rien des scripts',
        rapport: 'en mode rapport seulement', absente: 'absente', bloque: 'non lue (la page a refusé la sonde)',
    };

    function findings(e, Y, life) {
        const F = [];
        const add = (title, ...body) => F.push(h('li', null, h('b', null, title), ' ', ...body));
        if (e.fact) F.push(h('li', { class: 'contexte' }, e.fact));
        if (!e.reachable) {
            add('Pas de réponse.', `La sonde n'a pas obtenu de connexion TLS le ${dateFr}. La plaque reste vide jusqu'au prochain relevé.`);
            return F;
        }
        const until = RECORDED + life.years;
        const op = operator(e);
        const cdnName = CDN[e.front];

        if (e.pq === 'none') {
            if (Y <= until) add(`Lisible de ${Y} à ${until}.`,
                `Ce qui passe ici (${life.what}) reste sensible ${life.years} ans selon notre hypothèse : un échange enregistré aujourd'hui se lirait pendant ${plural(until - Y + 1, 'année', 'années')} où il compte encore.`);
            else add(`Plus sensible en ${Y}.`,
                `Lisible, mais ce qui passe ici (${life.what}) ne compte plus après ${until} selon notre hypothèse. Un Q-Day en ${until} ou avant changerait la réponse.`);
        }
        if (e.pq === 'partial' && !e.onDemand) {
            const part = others(e, o => o.pq === 'partial' && !o.onDemand);
            const same = op ? part.filter(o => operator(o)?.key === op.key) : [];
            add(`${e.hits} connexions hybrides sur ${e.tries}.`,
                `Plusieurs serveurs répondent sous ce nom et ils n'ont pas la même configuration : un navigateur tombe sur l'un ou sur l'autre.`,
                same.length && same.length === part.length
                    ? [` Les ${part.length} autres portes « en partie » de ce relevé passent toutes, comme celle-ci, par ${op.name} : `, names(same), '. Une flotte du fournisseur en cours de migration, plus probablement qu\'un choix de chacun.']
                    : null);
        }
        if (e.onDemand) {
            add('Un navigateur reçoit du classique.',
                `Imposé seul, X25519MLKEM768 est accepté. Proposé à côté de X25519, comme le font Chrome, Firefox et OpenSSL 3.5, il ne l'est plus : le serveur choisit ${e.group}. Sa préférence décide, et elle va au classique.`);
        }
        if (/^ffdhe/.test(e.group || '')) {
            add('Un Diffie-Hellman d\'un autre âge.',
                `Par défaut le serveur choisit ${e.group}, un groupe sur corps fini (RFC 7919), alors qu'il accepte ${(e.groups || []).filter(g => CLASSIC.includes(g)).join(', ')}. Aucun groupe hybride ne passe.`);
        }
        if (!has(e, 'tls1_3')) {
            const same = others(e, o => !has(o, 'tls1_3'));
            add('Pas de TLS 1.3.',
                `L'échange hybride n'existe qu'en TLS 1.3, normalisé en août 2018 (RFC 8446). Cette porte s'arrête à ${PROTO[(e.protocols || []).slice(-1)[0]] || 'TLS 1.2'}. `,
                same.length ? [`${plural(same.length, 'autre organisation est', 'autres organisations sont')} dans ce cas : `, names(same), '.'] : 'C\'est la seule du relevé.');
        }
        if (has(e, 'tls1') || has(e, 'tls1_1')) {
            const same = others(e, o => has(o, 'tls1') || has(o, 'tls1_1'));
            add('TLS 1.0 et 1.1 toujours ouverts.',
                `Retirés par la RFC 8996 en mars 2021, et que les navigateurs ne proposent plus depuis 2020. `,
                same.length ? [`Même chose chez `, names(same), '.'] : 'Seule porte du relevé dans ce cas.');
        }
        const ossl = (e.server || '').match(/openssl\/(\d+\.\d+\.\d+)/);
        if (ossl || /centos/.test(e.server || '')) {
            const facts = [];
            if (/^apache\/2\.4\.6\b/.test(e.server)) facts.push('Apache 2.4.6 date de juillet 2013.');
            if (/centos/.test(e.server)) facts.push('CentOS 7 est en fin de vie depuis le 30 juin 2024.');
            if (ossl && ossl[1].startsWith('1.0.')) facts.push(`OpenSSL ${ossl[1]} n'a plus de correctifs publics depuis le 31 décembre 2019 et ne sait pas faire TLS 1.3 ; ML-KEM n'est arrivé qu'avec OpenSSL 3.5, en avril 2025.`);
            add('Le serveur donne son âge.', `Il s'annonce « ${e.server} » dans ses en-têtes. `, facts.join(' '));
        }
        if (e.pq === 'full') {
            if (cdnName) {
                const same = measured.filter(o => o.front === e.front);
                add(`Scellé par ${cdnName}.`,
                    `${sealedIn(same).length} des ${same.length} portes tenues par ${cdnName} dans ce relevé le sont${e.frontBy === 'réseau' ? ` (${cdnName} ne se signale pas dans les en-têtes : c'est le réseau de l'adresse, AS${op ? op.asn : '?'}, qui le trahit)` : ''}. Le réglage est celui du CDN ; le trajet entre ${cdnName} et ${e.name} ne se voit pas d'ici.`);
            } else {
                add('Scellé sans CDN.',
                    `Aucun CDN ne s'est signalé : la porte est tenue par ${e.name} ou son hébergeur${op ? ` (${op.name}, AS${op.asn})` : ''}${e.server ? `, avec un serveur qui s'annonce « ${e.server} »` : ''}. Ils sont ${sealedIn(own).length} dans ce cas sur ${own.length} organisations sans CDN.`);
            }
        } else if (op && e.pq === 'none') {
            const same = others(e, o => operator(o)?.key === op.key);
            const ok = same.filter(o => o.pq === 'full');
            if (ok.length) add(`Le même réseau sait le faire.`,
                `L'adresse est annoncée par ${op.name} (AS${op.asn}). Chez ce même opérateur, ${ok.length} des ${same.length} autres portes du relevé acceptent l'hybride, dont `, names(ok, 3),
                '. La différence se joue sur le service qui répond, pas sur le réseau.');
            else if (same.length) add(`Personne chez ${op.name}.`,
                same.length > 1 ? `Aucune des ${same.length} autres portes annoncées par ${op.name} (AS${op.asn}) n'accepte l'hybride non plus : ` : `L'autre porte du relevé annoncée par ${op.name} (AS${op.asn}) n'accepte pas l'hybride non plus : `,
                names(same, 4), '.');
        }
        if (e.cost && e.cost.hybrid != null && e.cost.classical != null) {
            const d = e.cost.hybrid - e.cost.classical;
            add(d <= 0.5 ? 'Le prix mesuré : rien.' : `Le prix mesuré : +${ms(d)}.`,
                `Meilleur de ${e.cost.n[0]} handshakes hybrides, ${ms(e.cost.hybrid)} ; meilleur de ${e.cost.n[1]} en X25519 seul, ${ms(e.cost.classical)}. L'aller-retour réseau depuis la sonde est de ${ms(e.cost.rtt)}.`);
        }
        const c = certOf(e);
        if (c && c.key === 'rsaEncryption' && c.bits >= 4096) {
            add(`Une clé RSA ${c.bits}.`, `Plus lente à chaque connexion qu'une RSA 2048 ou qu'ECDSA, et pas plus solide face à l'algorithme de Shor, qui casse les deux de la même façon.`);
        }
        if ((e.ai || []).length && e.g !== 'ia') {
            const ok = e.ai.filter(providerSealed), ko = e.ai.filter(k => !providerSealed(k));
            const until = aiUntil(e);
            add(`Ouvert à l'IA : ${e.ai.map(k => PROVIDERS[k].label).join(', ')}.`,
                `D'après ses enregistrements DNS publics, ${e.name} a vérifié son domaine auprès de ${e.ai.length > 1 ? `ces ${e.ai.length} fournisseurs` : 'ce fournisseur'}, ce que demande l'ouverture d'un espace d'entreprise. `,
                ok.length ? `Vers ${ok.map(k => PROVIDERS[k].label).join(' et ')}, le chemin est hybride : un échange enregistré aujourd'hui y reste illisible après le Q-Day. ` : '',
                ko.map(k => Y <= until
                    ? `Vers ${PROVIDERS[k].label}, il est classique : ${PROVIDERS[k].what || 'ce qui y part'}, enregistré aujourd'hui, serait lisible en ${Y} et resterait sensible jusqu'en ${until}, soit ${plural(until - Y + 1, 'année', 'années')} d'exposition. `
                    : `Vers ${PROVIDERS[k].label}, il est classique, mais ce qui y part ne serait plus sensible en ${Y} selon notre hypothèse (jusqu'en ${until}). `),
                `On ne voit ni ce qui est envoyé, ni en quelle quantité.`);
        }
        if (e.mail && M.focus === 'courriel') {
            const m = e.mail, st = postState(e);
            const prov = POST[m.provider] || POST.other;
            if (st === 'sans') add('Pas de courrier.', `Le domaine ${m.apex} ne publie aucun serveur de courrier (MX).`);
            else add(st === 'cachetee' ? 'Lettre cachetée.' : st === 'entrouverte' ? 'Enveloppe entrouverte.' : 'Carte postale.',
                `Le courrier de ${m.apex} arrive chez ${prov[0]}${prov[1] ? ` (${COUNTRY_MAIL[prov[1]] || prov[1]})` : ''} : ${m.mx.join(', ')}. `,
                st === 'cachetee' ? (m.dane ? `Le chiffrement est épinglé par DANE : un expéditeur qui vérifie DNSSEC refuse de livrer en clair.` : `Sa politique MTA-STS est en mode enforce : un expéditeur qui la respecte refuse de livrer sans chiffrement.`)
                    : st === 'entrouverte' ? `Sa politique MTA-STS est en mode testing : les écarts sont signalés, rien n'est imposé.`
                        : `Aucune politique MTA-STS ni DANE : le chiffrement entre serveurs n'est que proposé, et un attaquant sur le trajet peut le faire sauter.`,
                ` DMARC : ${m.dmarc || 'absent'}${m.dmarc === 'reject' ? ' (un faux courriel à son nom est rejeté)' : m.dmarc === 'quarantine' ? ' (mis en indésirables)' : ' (un faux courriel à son nom passe)'}. SPF : ${m.spf || 'absent'}. DNSSEC : ${m.dnssec ? 'oui' : 'non'}.`);
        }
        if ((e.hf || []).length) {
            const tot = k => e.hf.reduce((n, o) => n + (o[k] || 0), 0);
            add('En open source.', `Sur Hugging Face, ${plural(e.hf.length, 'compte vérifié', 'comptes vérifiés')} (${e.hf.map(o => o.name).join(', ')}) : `,
                `${plural(tot('models'), 'modèle publié', 'modèles publiés')}, ${plural(tot('datasets'), 'jeu de données', 'jeux de données')}, ${plural(tot('spaces'), 'démonstration', 'démonstrations')}. `,
                tot('models') + tot('datasets') ? `${e.name} ne fait pas que consommer de l'IA : elle en publie.` : `Un compte ouvert, rien de publié pour l'instant.`);
        }
        if (e.g === 'ia') {
            const k = Object.keys(PROVIDERS).find(x => PROVIDERS[x].hosts.includes(e.host));
            const users = k ? usersOf(k) : [];
            if (users.length) add(`${plural(users.length, 'organisation de ce relevé', 'organisations de ce relevé')} y ont un espace.`,
                `D'après leurs enregistrements DNS : `, names(users, 8), '. ',
                e.pq === 'full' ? `Ce qu'elles y envoient passe par une porte scellée.` : `Ce qu'elles y envoient passe par une porte classique : lisible au Q-Day.`);
        }
        const p = cspOf(e);
        if (p && p.kind !== 'bloque') {
            const third = [...new Set(p.loaded.map(thirdOf).filter(Boolean).map(t => `${t.company}${t.cc !== '?' ? ` (${t.cc})` : ''}`))];
            const loadedTxt = p.loaded.length
                ? ` La page d'accueil charge ${plural(p.loaded.length, 'script ou cadre tiers', 'scripts ou cadres tiers')} : ${p.loaded.join(', ')}${third.length ? `, soit ${third.join(', ')}` : ''}.`
                : '';
            if (p.kind === 'aucun') add('Une CSP qui n\'autorise aucun script.',
                `Aucun script ne s'exécute dans la page, injecté ou non : le plus strict, pour une page qui n'en a pas besoin.`, loadedTxt);
            else if (p.kind === 'stricte') add('Une CSP qui tient.',
                `Seuls les scripts portant un jeton (nonce) ou une empreinte s'exécutent : un script injecté ne passe pas. ${flags(p)}`, loadedTxt);
            else if (p.kind === 'passoire') add('Une CSP qui laisse tout passer.',
                p.flags.wildcard ? `Elle autorise des scripts depuis « ${p.flags.wildcard} », c'est-à-dire de n'importe où. ` : `Elle autorise le code inline ('unsafe-inline') : un script injecté dans la page s'exécute. `,
                p.flags.unsafeEval ? `Elle autorise aussi 'unsafe-eval'. ` : '', `${p.allowed.length} domaines tiers y sont nommés.`, loadedTxt);
            else if (p.kind === 'cadres') add('Une CSP muette sur les scripts.',
                `Elle ne règle que d'autres choses (cadres, images…) : n'importe quel script peut s'exécuter.`, loadedTxt);
            else if (p.kind === 'liste') add('Une CSP par liste de domaines.',
                `Pas de code inline, mais tout script hébergé sur l'un des ${p.allowed.length} domaines autorisés s'exécute.`, loadedTxt);
            else add(p.kind === 'rapport' ? 'Une CSP qui ne fait qu\'observer.' : 'Pas de CSP.',
                p.kind === 'rapport' ? `Elle signale les écarts sans rien bloquer.` : `Rien ne limite les scripts qui s'exécutent dans la page.`, loadedTxt);
        }
        if (!e.hsts) {
            add('Pas de HSTS.', 'Une adresse tapée sans https:// part d\'abord en clair.');
        }
        return F;
    }

    function flags(p) {
        const f = [];
        if (p.flags.unsafeEval) f.push("'unsafe-eval' reste permis");
        if (!p.flags.trustedTypes) f.push('pas de Trusted Types');
        return f.length ? `Limites : ${f.join(', ')}.` : 'Trusted Types compris.';
    }

    function remedies(e) {
        if (!e.reachable) return [];
        const out = [];
        const ossl = (e.server || '').match(/openssl\/(\d+)\.(\d+\.\d+)/);
        const op = operator(e);
        if (ossl && Number(ossl[1]) < 3) out.push([`Changer de socle : OpenSSL ${ossl[1]}.${ossl[2]} ne connaît ni TLS 1.3 ni ML-KEM. Il faut OpenSSL 3.5 ou plus récent.`]);
        else if (!has(e, 'tls1_3')) out.push(['Activer TLS 1.3 sur le terminateur TLS.']);
        if (e.pq === 'none') {
            if (CDN[e.front]) out.push([`Activer le post-quantique dans les réglages de ${CDN[e.front]} : c'est lui qui tient la porte.`]);
            else if (/^nginx/.test(e.server)) out.push(['Avec nginx compilé contre OpenSSL 3.5 : ', h('code', null, 'ssl_ecdh_curve X25519MLKEM768:X25519:prime256v1;')]);
            else if (/^apache/.test(e.server)) out.push(['Avec Apache et OpenSSL 3.5 : ', h('code', null, 'SSLOpenSSLConfCmd Curves X25519MLKEM768:X25519:prime256v1')]);
            else if (['netlify', 'vercel'].includes(e.server) || /AUTOMATTIC|GOOGLE|MICROSOFT/.test(op?.key || '')) out.push([`Le site est servi par ${e.server && e.server !== 'nginx' ? e.server : op.name} : le réglage est chez l'hébergeur, à lui demander.`]);
            else out.push([`Ajouter X25519MLKEM768 en tête des groupes du terminateur TLS${e.server ? ` (« ${e.server} »)` : ''}.`]);
        }
        if (e.pq === 'partial' && !e.onDemand) out.push([`Aligner tous les serveurs derrière ce nom : ${e.tries - e.hits} connexions sur ${e.tries} sont tombées sur un serveur classique.`]);
        if (e.onDemand) out.push(['Mettre X25519MLKEM768 avant X25519 dans les préférences du serveur.']);
        if (has(e, 'tls1') || has(e, 'tls1_1')) out.push(['Fermer TLS 1.0 et 1.1.']);
        if (!e.hsts) out.push([h('code', null, 'Strict-Transport-Security: max-age=31536000'), ' dans les réponses.']);
        const pc = cspOf(e);
        if (pc && ['absente', 'rapport', 'cadres', 'passoire'].includes(pc.kind)) out.push(['Une CSP qui règle les scripts, avec un jeton par réponse : ', h('code', null, "script-src 'nonce-…' 'strict-dynamic'; object-src 'none'; base-uri 'none'")]);
        return out;
    }

    // ------------------------------------------------------------ the map
    // Who stands between a visitor and the organisation, and who else stands
    // behind the same door. SVG built node by node, laid out by a small force
    // simulation seeded from the host name: the same sheet always draws the same map.
    const SVG = 'http://www.w3.org/2000/svg';
    function s_(tag, attrs, ...children) {
        const el = document.createElementNS(SVG, tag);
        for (const [k, v] of Object.entries(attrs || {})) if (v != null) el.setAttribute(k, v);
        for (const c of children.flat(Infinity)) if (c != null && c !== false) el.append(c instanceof Node ? c : document.createTextNode(String(c)));
        return el;
    }
    const stateClass = o => o.pq === 'full' ? 'scelle' : o.pq === 'partial' ? 'partie' : 'ouvert';

    function mapOf(e, most = 6) {
        const nodes = [], links = [];
        const node = (id, full, kind, r, extra) => {
            const label = full.length > 26 ? full.slice(0, 25) + '…' : full;
            nodes.push({ id, label, full, kind, r, w: label.length * (kind === 'org' ? 7 : 6) + 12, ...extra });
            return id;
        };
        const link = (a, b) => links.push([a, b]);
        const op = operator(e);
        const cdnName = CDN[e.front];
        const c = certOf(e);

        node('org', e.name, 'org', 22);
        node('host', e.host, `hote ${stateClass(e)}`, 11);
        link('org', 'host');

        // The CDN and the network that announces it are one company more often
        // than not: one node then, named for both.
        const opShort = op ? op.name.replace(/,? (Inc\.?|LLC|SAS|SASU|Ltd|B\.V\.)$/i, '') : null;
        const merged = cdnName && op && op.name.toLowerCase().includes(cdnName.toLowerCase().slice(0, 5));
        let door = 'host';
        if (cdnName) {
            node('cdn', merged ? `${cdnName} · AS${op.asn}` : cdnName, 'tiers', 16);
            link('host', 'cdn');
            door = 'cdn';
        }
        if (op && !merged) {
            node('net', `AS${op.asn} ${opShort}`, 'tiers', 14);
            link(door, 'net');
        }
        if (c && c.issuer) { node('ca', c.issuer, 'ac', 9); link('host', 'ca'); }
        if (e.server && !(cdnName && e.server.toLowerCase().startsWith(cdnName.toLowerCase().slice(0, 5)))) {
            node('srv', e.server, 'logiciel', 7);
            link('host', 'srv');
        }

        // Its ties to AI: providers it opened an account with (DNS), coloured by
        // whether the way there is sealed, and what it publishes in the open.
        if (e.g !== 'ia') {
            (e.ai || []).forEach((k, i) => {
                const door = PROVIDERS[k].hosts[0];
                node(`ia${i}`, PROVIDERS[k].label, `fournisseur ${providerSealed(k) ? 'scelle' : 'ouvert'}`, 10, { href: `#${door}` });
                link('org', `ia${i}`);
            });
            for (const [i, o] of (e.hf || []).entries()) {
                const what = [o.models && `${o.models} modèles`, o.datasets && `${o.datasets} jeux`].filter(Boolean).join(', ') || 'compte vérifié';
                node(`hf${i}`, `Hugging Face · ${what}`, 'logiciel', 7);
                link('org', `hf${i}`);
            }
        } else {
            // A provider's sheet: the organisations that opened an account with it.
            const k = Object.keys(PROVIDERS).find(x => PROVIDERS[x].hosts.includes(e.host));
            const users = k ? usersOf(k) : [];
            if (users.length) {
                node('clients', `${users.length} organisations clientes`, 'tiers', 12);
                link('org', 'clients');
                users.slice(0, most).forEach((o, i) => { node(`u${i}`, o.name, `voisin ${stateClass(o)}`, 6, { href: `#${o.host}` }); link('clients', `u${i}`); });
                if (users.length > most) { node('urest', `+ ${users.length - most} autres`, 'reste', 4); link('clients', 'urest'); }
            }
        }

        // Neighbours: the organisations behind the same CDN, or else the same network.
        const hub = cdnName ? 'cdn' : op ? 'net' : null;
        if (hub && !(e.g === 'ia' && nodes.some(n => n.id === 'clients'))) {
            const same = others(e, o => cdnName ? o.front === e.front : operator(o)?.key === op.key);
            // A mix is what tells the story: alternate sealed and not, six at most
            // (four on a phone).
            const a = same.filter(o => o.pq === 'full'), b = same.filter(o => o.pq !== 'full');
            const pick = [];
            while (pick.length < most && (a.length || b.length)) {
                if (b.length) pick.push(b.shift());
                if (a.length && pick.length < most) pick.push(a.shift());
            }
            pick.forEach((o, i) => { node(`p${i}`, o.name, `voisin ${stateClass(o)}`, 6, { href: `#${o.host}` }); link(hub, `p${i}`); });
            const rest = same.length - pick.length;
            if (rest > 0) { node('rest', `+ ${rest} autre${rest > 1 ? 's' : ''}`, 'reste', 4); link(hub, 'rest'); }
        }
        return { nodes, links };
    }

    function layout({ nodes, links }, W, H, seed) {
        let x = 2166136261;
        for (const ch of seed) x = Math.imul(x ^ ch.charCodeAt(0), 16777619);
        const rnd = () => { x = Math.imul(x ^ (x >>> 13), 1274126177); return ((x >>> 0) % 1000) / 1000; };
        const by = new Map(nodes.map(n => [n.id, n]));
        nodes.forEach((n, i) => { n.x = W / 2 + (rnd() - .5) * W * .6; n.y = H / 2 + (rnd() - .5) * H * .6; });
        const L = links.map(([a, b]) => [by.get(a), by.get(b)]);
        for (let it = 0; it < 400; it++) {
            const t = 1 - it / 400;
            for (const a of nodes) { a.vx = 0; a.vy = 0; }
            for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                let dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy + .01;
                // Wide labels push harder, so they do not land on each other.
                const f = 2600 * (1 + (a.w + b.w) / 90) / d2;
                const d = Math.sqrt(d2);
                a.vx += dx / d * f; a.vy += dy / d * f; b.vx -= dx / d * f; b.vy -= dy / d * f;
            }
            for (const [a, b] of L) {
                const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1;
                const want = 26 + a.r + b.r + (b.kind.startsWith('voisin') || b.kind === 'reste' ? 0 : 30);
                const f = (d - want) * .08;
                a.vx += dx / d * f; a.vy += dy / d * f; b.vx -= dx / d * f; b.vy -= dy / d * f;
            }
            for (const a of nodes) {
                a.vx += (W / 2 - a.x) * .01; a.vy += (H / 2 - a.y) * .02;
                a.x += Math.max(-12, Math.min(12, a.vx)) * t;
                a.y += Math.max(-12, Math.min(12, a.vy)) * t;
            }
        }
        // Fit what was drawn into the frame, labels included.
        const pad = 14;
        const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
        const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
        const half = Math.max(...nodes.map(n => n.w / 2));
        const k = Math.min((W - 2 * pad - 2 * half) / (x1 - x0 || 1), (H - 2 * pad - 70) / (y1 - y0 || 1), 3);
        for (const n of nodes) {
            n.x = W / 2 + (n.x - (x0 + x1) / 2) * k;
            n.y = H / 2 + 6 + (n.y - (y0 + y1) / 2) * k;
            // Keep each label inside the frame.
            n.x = Math.max(pad + n.w / 2, Math.min(W - pad - n.w / 2, n.x));
            n.below = false;
        }
        // A label sits above its node, or below when above it would cover another.
        const box = n => {
            const y = n.below ? n.y + n.r + 4 : n.y - n.r - 20;
            return [n.x - n.w / 2, y, n.x + n.w / 2, y + 16];
        };
        const hits = (a, b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
        const disc = n => [n.x - n.r, n.y - n.r, n.x + n.r, n.y + n.r];
        const clash = n => nodes.some(o => o !== n && (hits(box(n), box(o)) || hits(box(n), disc(o))));
        for (let pass = 0; pass < 3; pass++) for (const n of nodes) if (clash(n)) { n.below = !n.below; if (clash(n)) n.below = !n.below; }
        return L;
    }

    function drawMap(e) {
        // On a phone the sheet is narrow: a squarer frame keeps the labels legible.
        const narrow = matchMedia('(max-width: 34rem)').matches;
        const W = narrow ? 360 : 560, H = narrow ? 380 : 320;
        const m = mapOf(e, narrow ? 4 : 6);
        const L = layout(m, W, H, e.host);
        const label = n => {
            const y = n.below ? n.y + n.r + 4 : n.y - n.r - 20;
            return s_('g', { class: 'etiquette' },
                n.full !== n.label ? s_('title', null, n.full) : null,
                s_('rect', { x: n.x - n.w / 2, y, width: n.w, height: 16, rx: 3 }),
                s_('text', { x: n.x, y: y + 12, 'text-anchor': 'middle' }, n.label));
        };
        const desc = m.nodes.filter(n => n.id !== 'org').map(n => n.label).join(', ');
        return s_('svg', { viewBox: `0 0 ${W} ${H}`, class: 'carte', role: 'img', 'aria-label': `Cartographie de ${e.name} : ${desc}` },
            s_('g', { class: 'liens' }, L.map(([a, b]) => s_('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y }))),
            m.nodes.map(n => {
                const g = s_('g', { class: `noeud ${n.kind}` }, s_('circle', { cx: n.x, cy: n.y, r: n.r }), label(n));
                return n.href ? s_('a', { href: n.href }, s_('title', null, `Ouvrir la fiche de ${n.label}`), g) : g;
            }),
        );
    }

    function chips(list, on) {
        return h('span', { class: 'puces' }, list.map(([k, label]) =>
            h('span', { class: 'puce' + (on.includes(k) ? ' oui' : ''), title: on.includes(k) ? 'accepté' : 'refusé' },
                h('span', { 'aria-hidden': 'true' }, on.includes(k) ? '✓ ' : '✕ '), label, h('span', { class: 'sr' }, on.includes(k) ? ' : accepté' : ' : refusé'))));
    }

    function openSheet(p, fromHash = false) {
        const { e, life, group } = p;
        const Y = Number(q.value);
        const st = stateOf(e, Y, life);
        const row = (k, v, mono) => [h('dt', null, k), h('dd', mono ? { class: 'm' } : null, v)];
        const op = operator(e);
        const c = certOf(e);
        const maxAge = (e.hsts || '').match(/max-age=(\d+)/);
        const fixes = remedies(e);
        const F = findings(e, Y, life);

        sheetBody.replaceChildren(
            h('header', { class: `plaque fiche-tete ${st.cls}` },
                h('span', { class: 'sur' }, `${group.label.fr} · relevé du ${dateFr}`),
                h('h2', { id: 'fiche-titre' }, e.name),
                h('span', { class: 'hote' }, e.host),
                h('span', { class: 'etat' }, st.label),
            ),
            h('div', { class: 'fiche-in' },
                h('h3', null, `Constats, si le Q-Day tombe en ${Y}`),
                h('ul', { class: 'constats' }, F),
                e.reachable && [
                    h('h3', null, `Cartographie de ${e.name}`),
                    h('figure', { class: 'carte-cadre' },
                        drawMap(e),
                        h('figcaption', { class: 'carte-legende' },
                            h('span', null, h('i', { class: 'pastille org' }), 'organisation'),
                            h('span', null, h('i', { class: 'pastille tiers' }), 'qui tient la porte, le réseau'),
                            h('span', null, h('i', { class: 'pastille ac' }), 'certificat, logiciel'),
                            (e.ai || []).length && e.g !== 'ia' ? h('span', null, h('i', { class: 'pastille scelle' }), h('i', { class: 'pastille ouvert' }), 'fournisseurs d\'IA : chemin scellé ou classique') : null,
                            h('span', null, h('i', { class: 'pastille scelle' }), h('i', { class: 'pastille ouvert' }), 'mêmes voisins, cliquables'),
                        ),
                    ),
                    h('h3', null, 'Relevé'),
                    h('dl', null,
                        row('Hybride imposé', `${e.hits} connexions sur ${e.tries}`),
                        row('Un navigateur obtient', e.group || '—', true),
                        row('Versions', chips(Object.entries(PROTO), e.protocols || [])),
                        // Groups are tried under TLS 1.3 only: without it, there is nothing to show.
                        has(e, 'tls1_3')
                            // X25519MLKEM768 is told by the five tries above, the others by one each.
                            ? [row('Échanges hybrides', chips(HYBRID.map(g => [g, g]), [...(e.groups || []), ...(e.hits ? ['X25519MLKEM768'] : [])])),
                               row('Échanges classiques', chips(CLASSIC.map(g => [g, g]), e.groups || []))]
                            : row('Échanges', 'non testés groupe par groupe : sans TLS 1.3, pas d\'hybride possible'),
                        row('Chiffrement', e.cipher || '—', true),
                        c && row('Certificat', `${c.kind} · ${c.issuer} · jusqu'au ${dateShort.format(new Date(c.until))}${c.left >= 0 ? ` (${c.left} j)` : ''}`),
                        op && row('Réseau', `${e.net.ip} · AS${op.asn} ${op.name}${op.cc ? ` (${op.cc})` : ''}`),
                        row('Porte', [CDN[e.front] ? `${CDN[e.front]}, CDN` : 'pas de CDN signalé', e.server ? ` · « ${e.server} »` : '']),
                        (e.ai || []).length && e.g !== 'ia' && row('Fournisseurs d\'IA', e.ai.map(k => `${PROVIDERS[k].label}${providerSealed(k) ? '' : ' (classique)'}`).join(', ')),
                        cspOf(e) && row('CSP', CSP_LABEL[cspOf(e).kind] + (cspOf(e).meta ? ' (balise meta)' : '')),
                        (e.tiers || []).length && row('Scripts tiers', e.tiers.map(t => `${t.host}${t.pq === 'full' ? '' : ' (classique)'}`).join(', ')),
                        row('HSTS', maxAge ? `${Math.round(maxAge[1] / 86400)} jours${/includesubdomains/.test(e.hsts) ? ', sous-domaines compris' : ''}${/preload/.test(e.hsts) ? ', préchargé' : ''}` : 'absent'),
                        row('Hypothèse', `${life.what} : sensible ${life.years} ans`),
                        row('Relevé', e.at ? `${dateTimeFr.format(new Date(e.at))} UTC` : dateFr),
                    ),
                ],
                fixes.length && [h('h3', null, 'Ce qui suffirait'), h('ol', { class: 'remedes' }, fixes.map(f => h('li', null, f)))],
                h('details', { class: 'verifier' },
                    h('summary', null, 'Vérifier sans nous'),
                    h('pre', null, h('code', null,
                        `# avec Sablier\nmake probe HOST=${e.host}\n\n# ou avec OpenSSL 3.5 ou plus récent\nopenssl s_client -connect ${e.host}:443 \\\n  -servername ${e.host} -groups X25519MLKEM768`)),
                ),
            ),
        );
        sheet.setAttribute('aria-labelledby', 'fiche-titre');
        p.card.setAttribute('aria-expanded', 'true');
        sheet._from = p.card;
        if (!sheet.open) sheet.showModal();
        sheet.scrollTop = 0;
        if (!fromHash) history.replaceState(null, '', `#${e.host}`);
    }

    function closeSheet() {
        if (sheet.open) sheet.close();
    }
    sheet.addEventListener('close', () => {
        if (sheet._from) { sheet._from.setAttribute('aria-expanded', 'false'); sheet._from.focus(); }
        history.replaceState(null, '', location.pathname + location.search);
    });
    $('fiche-fermer').addEventListener('click', closeSheet);
    // A click on the backdrop lands on the dialog itself, outside its content.
    sheet.addEventListener('click', ev => { if (ev.target === sheet) closeSheet(); });

    const byHost = new Map(plaques.map(p => [p.e.host, p]));
    function fromHash() {
        const host = decodeURIComponent(location.hash.slice(1));
        const p = byHost.get(host);
        if (p) { p.card.scrollIntoView({ block: 'center' }); openSheet(p, true); }
    }
    addEventListener('hashchange', fromHash);
    fromHash();

    $('les-leurs').addEventListener('change', ev => {
        document.body.classList.toggle('les-leurs', ev.target.checked);
    });

    // ------------------------------------------------------------ who
    const cdnSealed = cdn.filter(e => e.pq === 'full').length;
    const ownSealed = own.filter(e => e.pq === 'full').length;
    // Each percentage says what it counts: sealed doors, out of the doors of
    // that kind, never out of the whole run.
    $('qui-titre').append(
        `Portes scellées : ${pct(cdnSealed, cdn.length)} % de celles derrière un CDN (${cdnSealed} sur ${cdn.length}), `,
        h('em', null, `${pct(ownSealed, own.length)} %`), ` de celles sur les serveurs des organisations (${ownSealed} sur ${own.length}).`,
    );
    $('qui-texte').textContent =
        `La transition post-quantique visible de l'extérieur est, pour l'essentiel, celle des CDN : tous les sites servis par Cloudflare, Imperva ou CloudFront dans ce relevé sont scellés. `
        + `Une organisation dont la façade est scellée par son CDN n'a peut-être rien changé chez elle, et c'est exactement ce que la façade ne permet pas de savoir.`;
    for (const [label, a, b] of [
        ['Porte prêtée par un CDN', cdnSealed, cdn.length],
        ["Serveur de l'organisation", ownSealed, own.length],
    ]) {
        const fill = h('div', { class: 'rempli' });
        const row = h('div', { class: 'barre' },
            h('span', { class: 'lib' }, label, h('small', null, `${a} portes scellées sur ${b}`)),
            h('div', { class: 'piste', role: 'img', 'aria-label': `${label} : ${pct(a, b)} % scellées` }, fill),
            h('span', { class: 'pct' }, `${pct(a, b)} %`, h('small', null, 'scellées')),
        );
        $('barres').append(row);
        new IntersectionObserver((entries, obs) => {
            if (entries[0].isIntersecting) { fill.style.width = `${pct(a, b)}%`; obs.disconnect(); }
        }, { threshold: .4 }).observe(row);
    }


    // ------------------------------------------------------------ atlas
    // Every door, tied to the company that answers at its address, or that
    // signed its certificate. Told from the façade (network announcement,
    // certificate), never from a contract: "held by", not "client of".
    const COMPANY = [
        [/CLOUDFLARE/i, 'Cloudflare'], [/AMAZON/i, 'Amazon'], [/AKAMAI|PROLEXIC/i, 'Akamai'],
        [/GOOGLE/i, 'Google'], [/INCAPSULA/i, 'Imperva'], [/FASTLY/i, 'Fastly'], [/MICROSOFT/i, 'Microsoft'],
        [/AUTOMATTIC/i, 'Automattic'], [/RADWARE/i, 'Radware'], [/^OVH/i, 'OVHcloud'],
        [/^ANTHROPIC/i, 'Anthropic'], [/^FACEBOOK/i, 'Meta'], [/^GITHUB/i, 'GitHub (Microsoft)'], [/Alibaba/i, 'Alibaba'],
        [/Scaleway/i, 'Scaleway'], [/^OUTSCALE/i, 'Outscale'],
        [/INTERMINISTERIELLE DU NUMERIQUE/i, 'DINUM'], [/EURO-INFORMATION/i, 'Euro-Information'], [/Credit Agricole/i, 'Crédit Agricole'],
    ];
    const ISSUER = [
        [/^Sectigo/, 'Sectigo'], [/^DigiCert/, 'DigiCert'], [/^Gandi/, 'Gandi'], [/^Hellenic/, 'HARICA'],
        [/^GlobalSign/, 'GlobalSign'], [/^Google Trust/, 'Google Trust Services'],
    ];
    const atlasBy = {
        porte(e) {
            const raw = (e.net && e.net.as) || '';
            const hit = COMPANY.find(([re]) => re.test(raw));
            return hit ? hit[1] : operator(e) ? operator(e).name.replace(/,? (Inc\.?|LLC|SAS|SASU|SA|S\.A\.|EPA|GIE)$/i, '') : 'inconnu';
        },
        ac(e) {
            const i = (e.cert && e.cert.issuer) || 'inconnu';
            const hit = ISSUER.find(([re]) => re.test(i));
            return hit ? hit[1] : i;
        },
    };

    function atlasGroups(by) {
        const m = new Map();
        for (const e of measured) {
            const k = atlasBy[by](e);
            if (!m.has(k)) m.set(k, []);
            m.get(k).push(e);
        }
        let hubs = [...m].map(([name, list]) => ({ name, list }));
        // A network that holds one door only is drawn once, with the others like it.
        const lone = hubs.filter(x => x.list.length === 1);
        hubs = hubs.filter(x => x.list.length > 1);
        if (lone.length) hubs.push({ name: `${lone.length} réseaux, une porte chacun`, list: lone.flatMap(x => x.list), lone: true });
        const order = { full: 0, partial: 1, none: 2 };
        for (const x of hubs) x.list.sort((a, b) => order[a.pq] - order[b.pq] || a.name.localeCompare(b.name, 'fr'));
        return hubs.sort((a, b) => b.list.length - a.list.length);
    }

    function drawAtlas(by) {
        const narrow = matchMedia('(max-width: 34rem)').matches;
        const W = narrow ? 360 : 1000;
        const hubs = atlasGroups(by);
        const DOT = narrow ? 4.2 : 5.5, STEP = DOT * 2 + 3;
        // Dots in rings around their hub; the hub's reach is the outer ring.
        for (const x of hubs) {
            x.r = 7 + 2.2 * Math.sqrt(x.list.length);
            let ring = 0, placed = 0;
            x.dots = [];
            while (placed < x.list.length) {
                const rr = x.r + 9 + ring * STEP;
                const cap = Math.max(1, Math.floor(2 * Math.PI * rr / STEP));
                const n = Math.min(cap, x.list.length - placed);
                for (let i = 0; i < n; i++) {
                    const a = -Math.PI / 2 + (2 * Math.PI * i) / n + ring * .35;
                    x.dots.push({ e: x.list[placed + i], dx: Math.cos(a) * rr, dy: Math.sin(a) * rr });
                }
                placed += n; ring++;
            }
            x.reach = x.r + 9 + (ring - 1) * STEP + DOT + 4;
        }
        // Each hub takes a box: its rings, plus its label (above for the big
        // ones, a short name below for the others). Boxes are pushed apart
        // until none overlap, and pulled toward the centre.
        const bigOf = x => x.list.length >= (narrow ? 4 : 3) || x.lone;
        for (const x of hubs) {
            x.big = bigOf(x);
            x.title = x.lone ? 'Réseaux à une porte' : x.name;
            x.short = x.title.length > 22 ? x.title.slice(0, 21) + '…' : x.title;
            const lw = x.big ? Math.max(x.title.length * 7.6, 120) : x.short.length * 5.8;
            x.hw = Math.max(x.reach, lw / 2) + 4;
            x.top = x.reach + (x.big ? 34 : 4);
            x.bot = x.reach + (x.big ? 4 : 16);
        }
        hubs.forEach((x, i) => {
            const a = i * 2.4, d = i ? 30 + 30 * Math.sqrt(i) : 0;
            x.x = Math.cos(a) * d * (narrow ? .6 : 1.6); x.y = Math.sin(a) * d;
        });
        const gap = narrow ? 8 : 14;
        for (let it = 0; it < 600; it++) {
            for (let i = 0; i < hubs.length; i++) for (let j = i + 1; j < hubs.length; j++) {
                const a = hubs[i], b = hubs[j];
                const ox = (a.hw + b.hw + gap) - Math.abs(a.x - b.x);
                const oy = (b.y > a.y ? a.bot + b.top : b.bot + a.top) + gap - Math.abs(a.y - b.y);
                if (ox > 0 && oy > 0) {
                    // Out along the shorter overlap: the cheapest way apart.
                    if (ox / (narrow ? 1.6 : 1) < oy * (narrow ? 1 : 1.4)) {
                        const sx = a.x < b.x ? 1 : -1;
                        a.x -= sx * ox / 2; b.x += sx * ox / 2;
                    } else {
                        const sy = a.y < b.y ? 1 : -1;
                        a.y -= sy * oy / 2; b.y += sy * oy / 2;
                    }
                }
            }
            // A wide frame on a screen, a tall one on a phone; never wider
            // than the frame, so a phone grows the drawing downward instead.
            for (const x of hubs) {
                x.x *= narrow ? .985 : .995; x.y *= narrow ? .997 : .985;
                const lim = W / 2 - 12 - x.hw;
                x.x = Math.max(-lim, Math.min(lim, x.x));
            }
        }
        let Hh;
        if (narrow) {
            // A phone is too narrow for a free layout: shelves instead, biggest
            // first, each row as tall as its tallest box. Nothing can overlap.
            let x = 12, y = 12, rowH = 0;
            const rows = [[]];
            for (const hub of hubs) {
                const w = 2 * hub.hw + 8;
                if (x + w > W - 12 && rows[rows.length - 1].length) { rows.push([]); x = 12; y += rowH + 10; rowH = 0; }
                rows[rows.length - 1].push(hub);
                hub.x = x + w / 2; hub.y = y + hub.top;
                x += w; rowH = Math.max(rowH, hub.top + hub.bot);
            }
            // Centre each row across the frame.
            for (const row of rows) {
                const left = row[0].x - row[0].hw - 4, right = row[row.length - 1].x + row[row.length - 1].hw + 4;
                const shift = (W - (right - left)) / 2 - left;
                for (const hub of row) hub.x += shift;
            }
            Hh = Math.ceil(y + rowH + 16);
        } else {
            // The frame follows the drawing: fixed width, height as needed.
            const x0 = Math.min(...hubs.map(x => x.x - x.hw)), x1 = Math.max(...hubs.map(x => x.x + x.hw));
            const y0 = Math.min(...hubs.map(x => x.y - x.top)), y1 = Math.max(...hubs.map(x => x.y + x.bot));
            const kx = Math.min(1.25, (W - 24) / (x1 - x0));
            for (const x of hubs) { x.x = W / 2 + (x.x - (x0 + x1) / 2) * kx; x.y = 16 + (x.y - y0) * kx; }
            Hh = Math.ceil((y1 - y0) * kx + 32);
        }

        const arc = (cx, cy, r, f) => {
            if (f >= 1) return s_('circle', { cx, cy, r, class: 'part-pleine' });
            if (f <= 0) return null;
            const a = 2 * Math.PI * f - Math.PI / 2;
            return s_('path', { class: 'part-pleine', d: `M${cx},${cy} L${cx},${cy - r} A${r},${r} 0 ${f > .5 ? 1 : 0} 1 ${cx + r * Math.cos(a)},${cy + r * Math.sin(a)} Z` });
        };
        const svg = s_('svg', {
            viewBox: `0 0 ${W} ${Hh}`, class: 'atlas-svg', role: 'img',
            'aria-label': `${measured.length} organisations reliées à ${hubs.length} ${by === 'porte' ? 'entreprises qui répondent à leur adresse' : 'autorités de certification'} : `
                + hubs.slice(0, 6).map(x => `${x.name} ${x.list.length}`).join(', '),
        });
        for (const x of hubs) {
            const sealedN = x.list.filter(o => o.pq === 'full').length;
            const g = s_('g', { class: 'grappe' + (x.lone ? ' seules' : '') });
            for (const d of x.dots) g.append(s_('line', { x1: x.x, y1: x.y, x2: x.x + d.dx, y2: x.y + d.dy }));
            g.append(s_('circle', { cx: x.x, cy: x.y, r: x.r, class: 'moyeu' }), arc(x.x, x.y, x.r, sealedN / x.list.length) || '');
            for (const d of x.dots) {
                const o = d.e;
                g.append(s_('a', { href: `#${o.host}` },
                    s_('title', null, `${o.name} · ${o.host} · ${o.pq === 'full' ? 'scellé' : o.pq === 'partial' ? 'en partie' : 'classique'}`),
                    s_('circle', { cx: x.x + d.dx, cy: x.y + d.dy, r: DOT, class: `point ${stateClass(o)}` })));
            }
            if (x.big) {
                const ty = x.y - x.reach - 6;
                g.append(s_('text', { x: x.x, y: ty - 13, class: 'nom-moyeu', 'text-anchor': 'middle' }, x.title));
                g.append(s_('text', { x: x.x, y: ty, class: 'compte', 'text-anchor': 'middle' },
                    x.lone ? `${x.list.length} réseaux · ${sealedN} scellés` : `${x.list.length} portes · ${sealedN} scellées`));
            } else {
                g.append(s_('text', { x: x.x, y: x.y + x.reach + 11, class: 'nom-petit', 'text-anchor': 'middle' }, s_('title', null, `${x.name} : ${x.list.length} portes`), x.short));
            }
            svg.append(g);
        }
        $('atlas').replaceChildren(svg);

        $('atlas-liste').replaceChildren(h('ul', null, hubs.map(x => h('li', null,
            h('b', null, `${x.name} (${x.list.length})`), ' : ', names(x.list, 99), '.'))));
        return hubs;
    }

    {
        const hubs = drawAtlas('porte');
        const real = hubs.filter(x => !x.lone);
        const top = real.slice(0, 5);
        const held = top.reduce((n, x) => n + x.list.length, 0);
        const topSealed = top.reduce((n, x) => n + x.list.filter(o => o.pq === 'full').length, 0);
        const rest = measured.length - held;
        const restSealed = sealed.length - topSealed;
        const google = hubs.find(x => x.name === 'Google');
        sources($('atlas-texte'),
            `le réseau qui annonce l'adresse de chaque porte (Team Cymru, relevé du ${dateFr}), regroupé par entreprise ; pour les certificats, l'émetteur lu dans le certificat servi. Les ${reachable.length - measured.length} fournisseurs d'IA du relevé ne sont pas comptés.`);
        $('atlas-titre').append(`Cinq entreprises tiennent `, h('em', null, `${held} portes sur ${measured.length}`), '.');
        $('atlas-texte').append(
            top.map(x => `${x.name} ${x.list.length}`).join(', '), `. Derrière elles, ${pct(topSealed, held)} % des portes sont scellées ; chez tous les autres réunis, ${pct(restSealed, rest)} %. `,
            `Quand l'une de ces entreprises active l'hybride, des dizaines d'organisations françaises basculent sans avoir rien décidé. Quand elle tarde, elles attendent`,
            google ? [` : chez Google, ${google.list.filter(o => o.pq === 'full').length} porte${google.list.filter(o => o.pq === 'full').length > 1 ? 's' : ''} scellée${google.list.filter(o => o.pq === 'full').length > 1 ? 's' : ''} sur ${google.list.length}.`] : '.',
        );
        for (const b of document.querySelectorAll('.atlas-choix .choix')) {
            b.addEventListener('click', () => {
                for (const o of document.querySelectorAll('.atlas-choix .choix')) o.setAttribute('aria-pressed', String(o === b));
                drawAtlas(b.dataset.par);
            });
        }
        let wasNarrow = matchMedia('(max-width: 34rem)').matches;
        addEventListener('resize', () => {
            const n = matchMedia('(max-width: 34rem)').matches;
            if (n !== wasNarrow) { wasNarrow = n; drawAtlas(document.querySelector('.choix[aria-pressed="true"]').dataset.par); }
        });
    }



    // Where a block's figures come from, and how to check one without us.
    function sources(after, ...body) {
        after.after(h('p', { class: 'sources' }, h('b', null, 'Sources. '), ...body));
    }
    const asLink = asn => h('a', { href: `https://bgp.he.net/AS${asn}`, rel: 'noopener' }, `AS${asn}`);

    // ------------------------------------------------------------ jurisdiction
    // Whose law reaches the company that answers at the address. The parent
    // company decides, not where the server or the network is registered: a
    // datacentre in Paris run by an American company answers to American law.
    const PARENT = {
        Cloudflare: 'US', Amazon: 'US', Akamai: 'US', Google: 'US', Microsoft: 'US', Fastly: 'US',
        Automattic: 'US', Imperva: 'US', Radware: 'IL',
        Anthropic: 'US', Meta: 'US', 'GitHub (Microsoft)': 'US', Alibaba: 'CN',
    };
    const COUNTRY_MAIL = { US: 'États-Unis', GB: 'Royaume-Uni', FR: 'France', JP: 'Japon', CH: 'Suisse', DE: 'Allemagne' };
    const COUNTRY = { US: 'États-Unis', FR: 'France', IL: 'Israël', DE: 'Allemagne', DK: 'Danemark', MT: 'Malte', GB: 'Royaume-Uni', CN: 'Chine', SG: 'Singapour' };
    const lawOf = e => {
        const company = atlasBy.porte(e);
        if (PARENT[company]) return PARENT[company];
        // Orange's Tunisian network still belongs to the French group.
        if (/^Orange/i.test((e.net && e.net.as) || '')) return 'FR';
        return operator(e)?.cc || '?';
    };
    // Among French doors, what kind of hand holds them. Told from the network
    // name, so a list kept by hand: a new network lands in "hébergeur" until
    // someone looks at it.
    const FR_KIND = [
        [/^Orange/i, 'ailleurs'],
        [/RENATER|GIGALIS/i, 'public'],
        [/DISIC|EURO-INFORMATION|Credit Agricole|^HCL|PE-AS|cirtil|FR-MAE|AXA-TECH|^VINCI|BOURSORAMA/i, 'propre'],
    ];
    const frKind = e => (FR_KIND.find(([re]) => re.test((e.net && e.net.as) || '')) || [, 'hebergeur'])[1];
    const FR_LABEL = {
        propre: 'Réseau de l\'organisation elle-même', hebergeur: 'Hébergeur ou intégrateur français',
        public: 'Réseau public (recherche, collectivités)', ailleurs: 'Groupe français, réseau hors de France',
    };
    {
        const byLaw = new Map();
        for (const e of measured) { const k = lawOf(e); if (!byLaw.has(k)) byLaw.set(k, []); byLaw.get(k).push(e); }
        const us = byLaw.get('US') || [];
        const fr = byLaw.get('FR') || [];
        // A CDN does not only carry the traffic: it ends TLS at its edge and
        // reads it in clear before passing it on.
        const usCdn = us.filter(e => e.front && e.front !== 'other');
        $('droit-titre').append(`Tenues par des entreprises américaines : `, h('em', null, `${us.length} portes sur ${measured.length}`), '.');
        $('droit-texte').append(
            `Ce n'est pas qu'une affaire de droit. Une porte tenue par un fournisseur dépend de ses choix : ses tarifs, ses conditions, ses pannes, son calendrier, y compris pour le post-quantique. `,
            `Le droit s'y ajoute, et héberger en France n'y change rien : le CLOUD Act (2018) permet aux autorités américaines d'exiger d'une entreprise américaine les données qu'elle contrôle, où qu'elles soient stockées ; la section 702 du FISA autorise la collecte, auprès de ces mêmes fournisseurs, des communications de personnes non américaines. `,
            h('b', null, `${usCdn.length} de ces portes passent par un CDN américain, qui déchiffre le trafic à son entrée. `),
            `Le post-quantique protège contre qui enregistre le trajet. Il ne protège pas contre qui tient la porte : lui lit en clair.`,
        );
        const rows = [...byLaw].sort((a, b) => b[1].length - a[1].length);
        for (const [k, list] of rows) {
            const fill = h('div', { class: 'rempli' + (k === 'FR' ? ' fr' : '') });
            const small = h('small', null);
            const piste = h('div', { class: 'piste', role: 'img' }, fill);
            const pctEl = h('span', { class: 'pct' });
            let shown = list;
            const paint = () => {
                small.textContent = `${shown.length} portes sur ${measured.length} · dont ${shown.filter(o => o.pq === 'full').length} scellées`;
                pctEl.replaceChildren(`${pct(shown.length, measured.length)} %`, h('small', null, 'des portes'));
                piste.setAttribute('aria-label', `${COUNTRY[k] || k} : ${pct(shown.length, measured.length)} % des portes`);
                if (fill.dataset.seen) fill.style.width = `${pct(shown.length, measured.length)}%`;
            };
            // France alone gets a filter: French by its parent company is one
            // thing, French all the way down to the network is another.
            let filter = null, detail = null;
            if (k === 'FR') {
                const box = h('input', { type: 'checkbox' });
                filter = h('label', { class: 'bascule filtre' }, box, ' souveraines seulement');
                detail = h('ul', { class: 'fr-detail' });
                const kinds = ['propre', 'hebergeur', 'public', 'ailleurs'];
                for (const kd of kinds) {
                    const sub = list.filter(e => frKind(e) === kd);
                    if (sub.length) detail.append(h('li', { 'data-kind': kd },
                        h('b', null, `${FR_LABEL[kd]} · ${sub.length}`), ' ', names(sub, 99), '.'));
                }
                box.addEventListener('change', () => {
                    shown = box.checked ? list.filter(e => frKind(e) !== 'ailleurs') : list;
                    detail.classList.toggle('ouvert', box.checked);
                    paint();
                });
            }
            const row = h('div', { class: 'barre' },
                h('span', { class: 'lib' }, COUNTRY[k] || k, small, filter),
                piste, pctEl,
            );
            paint();
            $('droit-barres').append(row);
            if (detail) $('droit-barres').append(detail);
            new IntersectionObserver((entries, obs) => {
                if (entries[0].isIntersecting) { fill.dataset.seen = '1'; paint(); obs.disconnect(); }
            }, { threshold: .4 }).observe(row);
        }
        // Group by group: where the question bites hardest.
        for (const g of D.groups) {
            const m = measured.filter(e => e.g === g.key);
            const u = m.filter(e => lawOf(e) === 'US');
            $('droit-groupes').append(h('li', null,
                h('span', { class: 'n' }, `${u.length}`, h('small', null, ` / ${m.length}`)),
                h('span', { class: 'lib' }, g.label.fr),
                h('span', { class: 'noms' }, u.length ? names(u, 4) : 'aucune'),
            ));
        }
        const il = byLaw.get('IL') || [];
        $('droit-note').append(
            il.length ? h('span', null, names(il), ` passent par Radware, société israélienne. `) : '',
            `« Souveraine » veut dire ici : maison mère française et réseau annoncé en France. `,
            `En France, la qualification SecNumCloud de l'ANSSI exige que le prestataire échappe aux lois extra-européennes ; vue de l'extérieur, rien ne dit si un site l'utilise. `,
            `On rattache chaque porte à la maison mère de l'entreprise qui répond à son adresse : c'est une lecture de la façade, pas un audit des contrats.`,
        );
        const asnsOf = list => [...new Set(list.map(e => operator(e)?.asn).filter(Boolean))].sort((a, b) => a - b);
        sources($('droit-note'),
            `pour chacune des ${measured.length} organisations, l'adresse IP de sa porte, résolue le ${dateFr} ; le réseau qui annonce cette adresse sur Internet (annonce BGP) et le nom sous lequel il est enregistré, lus dans la base publique de Team Cymru ; la maison mère de ce réseau, rattachée par nous : `,
            Object.entries(PARENT).filter(([c]) => measured.some(e => atlasBy.porte(e) === c)).map(([c, cc]) => `${c} (${COUNTRY[cc] || cc})`).join(', '),
            ` ; les autres réseaux, au pays sous lequel ils sont enregistrés. `,
            `Réseaux comptés aux États-Unis : `, asnsOf(us).flatMap((a, i) => [i ? ', ' : '', asLink(a)]), '. ',
            `Chaque fiche donne l'adresse et le réseau de sa porte. Pour en vérifier une : `,
            h('code', null, 'dig +short TXT <IP à l\'envers>.origin.asn.cymru.com'), '.',
        );
    }


    // ------------------------------------------------------------ in the page
    {
        const read = measured.map(e => [e, cspOf(e)]).filter(([, p]) => p && p.kind !== 'bloque');
        const blocked = measured.filter(e => cspOf(e)?.kind === 'bloque');
        const of = k => read.filter(([, p]) => k.includes(p.kind)).map(([e]) => e);
        const strict = of(['aucun', 'stricte']);
        $('csp-titre').append(`Seuls `, h('em', null, `${strict.length} sites sur ${read.length}`), ` décident vraiment quel code s'exécute dans leur page.`);
        $('csp-texte').append(
            `Le chiffrement, hybride ou non, s'arrête au navigateur. Ensuite, c'est la Content-Security-Policy qui dit quels scripts ont le droit de s'exécuter, et donc de lire ce qu'on tape : identifiant, IBAN, dossier. `,
            h('b', null, `Un script tiers est une porte de plus, tenue par quelqu'un d'autre, qui lit en clair.`),
            ` Les scripts tiers sont la voie d'attaque classique quand le chiffrement tient.`,
        );
        for (const [label, kinds, cls] of [
            ['Aucun script', ['aucun'], ''], ['Stricte', ['stricte'], ''], ['Liste de domaines', ['liste'], ''],
            ['Présente, laisse tout passer', ['passoire'], ' ouvert'], ['Muette sur les scripts', ['cadres'], ' ouvert'],
            ['Absente ou en rapport seul', ['absente', 'rapport'], ' ouvert'],
        ]) {
            const list = of(kinds);
            if (!list.length) continue;
            const fill = h('div', { class: 'rempli' + cls });
            const row = h('div', { class: 'barre' },
                h('span', { class: 'lib' }, label, h('small', null, list.length <= 6 ? names(list) : `${list.length} sites`)),
                h('div', { class: 'piste', role: 'img', 'aria-label': `${label} : ${list.length} sites sur ${read.length}` }, fill),
                h('span', { class: 'pct' }, list.length),
            );
            $('csp-barres').append(row);
            new IntersectionObserver((entries, obs) => {
                if (entries[0].isIntersecting) { fill.style.width = `${pct(list.length, read.length)}%`; obs.disconnect(); }
            }, { threshold: .4 }).observe(row);
        }
        // Who runs code on the most home pages, counted once per page.
        const by = new Map();
        for (const [e, p] of read) {
            const seen = new Set();
            for (const x of p.loaded) {
                const t = thirdOf(x);
                const k = t ? t.company : null;
                if (!k || seen.has(k)) continue;
                seen.add(k);
                if (!by.has(k)) by.set(k, { cc: t.cc, list: [] });
                by.get(k).list.push(e);
            }
        }
        for (const [k, v] of [...by].sort((a, b) => b[1].list.length - a[1].list.length).slice(0, 8)) {
            $('csp-tiers').append(h('li', null,
                h('span', { class: 'n' }, v.list.length),
                h('span', { class: 'lib' }, k, v.cc !== '?' ? h('small', null, ` · ${COUNTRY[v.cc] || v.cc}`) : null),
                h('span', { class: 'noms' }, names(v.list, 4), '.'),
            ));
        }
        sources($('csp-texte'), `l'en-tête Content-Security-Policy (ou la balise meta) de la page d'accueil de chaque organisation, chargée comme par un navigateur, redirections suivies, le ${dateFr} ; les scripts tiers présents dans son HTML. Pour vérifier : `,
            h('code', null, 'curl -sIL https://<site>/ | grep -i content-security-policy'), '.');
        const eval_ = read.filter(([, p]) => p.flags && p.flags.unsafeEval).length;
        const tt = read.filter(([, p]) => p.flags && p.flags.trustedTypes).length;
        $('csp-note').append(
            `${tt} site${tt > 1 ? 's' : ''} sur ${read.length} impose${tt > 1 ? 'nt' : ''} les Trusted Types ; ${eval_} autorisent encore 'unsafe-eval'. `,
            `Seul le HTML servi est lu : les scripts que d'autres scripts ajoutent ensuite ne se voient pas, et ces comptes sont des minimums. `,
            blocked.length ? h('span', null, names(blocked), ` ont refusé la sonde (protection anti-robot) et ne sont pas comptés.`) : '',
        );
    }

    // ------------------------------------------------------------ fixed or moving
    // Only the stamp, the plaques' colours, the group counters and the sheets
    // follow the slider. Everything else is a measure of one day: say so where
    // it is shown, so nobody waits for it to move.
    for (const el of document.querySelectorAll('.atlas > .sur, .qui > .sur, .chiffres > .sur, .qui > h3:first-child')) {
        el.after(h('span', { class: 'fixe' }, `Mesuré le ${dateFr} · ne dépend pas du Q-Day`));
    }

    // ------------------------------------------------------------ figures
    // What the run says beyond hybrid or not, each figure with the names behind it.
    {
        const costs = measured.filter(e => e.cost).map(e => e.cost.hybrid - e.cost.classical).sort((a, b) => a - b);
        const rtts = measured.filter(e => e.cost && e.cost.rtt != null).map(e => e.cost.rtt).sort((a, b) => a - b);
        const median = l => l[Math.floor(l.length / 2)];
        const noTls13 = measured.filter(e => !has(e, 'tls1_3'));
        const oldTls = measured.filter(e => has(e, 'tls1') || has(e, 'tls1_1'));
        const prefClassic = measured.filter(e => e.onDemand);
        const partial = measured.filter(e => e.pq === 'partial' && !e.onDemand);
        const frLaw = measured.filter(e => lawOf(e) === 'FR');
        const frSealed = frLaw.filter(e => e.pq === 'full');
        const usLawN = measured.filter(e => lawOf(e) === 'US').length;
        const usSealedN = measured.filter(e => lawOf(e) === 'US' && e.pq === 'full').length;
        const certs = measured.map(certOf).filter(Boolean);
        const rsa = certs.filter(c => c.key === 'rsaEncryption').length;
        const noHsts = measured.filter(e => !e.hsts);
        const fig = (n, label, ...rest) => h('li', { class: 'chiffre' }, h('span', { class: 'n' }, n), h('span', { class: 'lib' }, label), rest.length ? h('span', { class: 'noms' }, ...rest) : null);
        const sign = d => `${d > 0 ? '+' : ''}${String(Math.round(d * 10) / 10).replace('.', ',')}`;
        $('chiffres').append(
            fig(`${sign(median(costs))} ms`, `Le prix médian de l'hybride sur un handshake TLS, mesuré sur ${costs.length} serveurs qui l'acceptent`,
                `Meilleur de dix handshakes de chaque sorte, alternés, un serveur à la fois ; aller-retour réseau médian ${String(median(rtts)).replace('.', ',')} ms.`),
            fig(noTls13.length, `portes sans TLS 1.3, donc sans hybride possible`, ...names(noTls13, 8), '.'),
            fig(oldTls.length, 'acceptent encore TLS 1.0 ou 1.1, retirés en 2021', ...names(oldTls, 8), '.'),
            prefClassic.length && fig(prefClassic.length, `${prefClassic.length > 1 ? 'acceptent' : 'accepte'} l'hybride mais ${prefClassic.length > 1 ? 'servent' : 'sert'} du classique aux navigateurs`, ...names(prefClassic, 8), '.'),
            fig(`${partial.filter(e => /GOOGLE/.test(operator(e)?.key || '')).length} / ${partial.length}`, 'des portes « en partie » passent par Google Cloud', ...names(partial, 8), '.'),
            // Sovereignty and the hybrid pull apart: the French-held doors are
            // the least sealed. Same rule as the jurisdiction block above.
            fig(`${frSealed.length} / ${frLaw.length}`, 'portes scellées parmi celles tenues par une entreprise française',
                frSealed.length ? ['Seules ', ...names(frSealed, 8), `. Sous droit américain : ${usSealedN} sur ${usLawN}.`] : 'Aucune.'),
            fig(`0 / ${certs.length}`, 'certificats post-quantiques',
                `${rsa} RSA, ${certs.length - rsa} ECDSA. L'enregistrement d'aujourd'hui ne permet pas de forger une signature demain : ce chantier-là a son propre calendrier.`),
            fig(noHsts.length, 'sites sans HSTS : une première visite peut partir en clair', ...names(noHsts, 5), '.'),
        );
    }

    // ------------------------------------------------------------ table
    const stateLabel = { full: 'scellé', partial: 'en partie', none: 'non' };
    const groupLabel = Object.fromEntries(D.groups.map(g => [g.key, g.label.fr]));
    $('tableau').append(
        h('thead', null, h('tr', null, ['Groupe', 'Organisation', 'Nom relevé', 'Hybride', 'Navigateur', 'Versions', 'Certificat', 'Réseau', 'Porte', 'HSTS', 'CSP'].map(t => h('th', { scope: 'col' }, t)))),
        h('tbody', null, all.map(e => h('tr', null,
            h('td', null, groupLabel[e.g]),
            h('td', null, e.name),
            h('td', { class: 'm' }, e.host),
            h('td', null, e.reachable ? `${e.onDemand ? "sur demande" : stateLabel[e.pq]} (${e.hits}/${e.tries})` : 'non relevé'),
            h('td', { class: 'm' }, e.group || '—'),
            h('td', { class: 'm' }, (e.protocols || []).map(v => PROTO[v].slice(4)).join(' ') || '—'),
            h('td', null, certOf(e)?.kind || '—'),
            h('td', null, operator(e) ? `AS${operator(e).asn} ${operator(e).name}` : '—'),
            h('td', null, CDN[e.front] || 'propre'),
            h('td', null, e.hsts ? 'oui' : 'non'),
            h('td', null, cspOf(e) ? cspOf(e).kind : '—'),
        ))),
    );

    // ------------------------------------------------------------ the machine's vision (relevé 2)
    // Every organisation as a target: its own door and its ways to AI. Time runs
    // from today; until the Q-Day everything recorded is noise, and on that
    // year what went the classical way turns readable, line by line. What is
    // sealed stays noise. What is no longer sensitive greys out.
    if (M.focus === 'ia') {
        const vis = $('vision');
        const NOW = RECORDED;
        const qInput = $('q');
        const t = h('input', { type: 'range', id: 'vision-t', min: NOW, max: 2050, step: 1, value: NOW, 'aria-label': 'Année' });
        const tYear = h('span', { class: 'vision-annee' });
        const qYear = h('span', { class: 'vision-q' });
        const play = h('button', { type: 'button', class: 'scan-son vision-play' }, '▶ Lancer le temps');
        const qMinus = h('button', { type: 'button', class: 'vision-btn', 'aria-label': 'Q-Day un an plus tôt' }, '−');
        const qPlus = h('button', { type: 'button', class: 'vision-btn', 'aria-label': 'Q-Day un an plus tard' }, '+');
        const moveQ = d => {
            qInput.value = Math.min(Number(qInput.max), Math.max(Number(qInput.min), Number(qInput.value) + d));
            qInput.dispatchEvent(new Event('input'));
        };
        qMinus.addEventListener('click', () => moveQ(-1));
        qPlus.addEventListener('click', () => moveQ(1));
        const count = h('p', { class: 'vision-compte', 'aria-live': 'polite' });
        const wall = h('ul', { class: 'vision-mur' });
        const rest = h('ul', { class: 'vision-mur vision-reste', hidden: true });
        const more = h('button', { type: 'button', class: 'scan-son' });

        const hex = '0123456789abcdef';
        const junk = n => Array.from({ length: n }, (_, i) => hex[(Math.random() * 16) | 0] + (i % 4 === 3 ? ' ' : '')).join('').trim();
        const plaqueOf = new Map(plaques.map(p => [p.e.host, p]));

        const targets = measured.filter(e => e.g !== 'ia').map(e => {
            const life = lifeOf(e);
            const until = RECORDED + life.years;
            const what = life.what.split(',')[0];
            const lines = [{ label: 'PORTE', what, sealed: e.pq === 'full', until }];
            for (const k of e.ai || []) lines.push({ label: `→ ${PROVIDERS[k].label.toUpperCase()}`, what: PROVIDERS[k].what ? 'code source' : 'prompts, documents confiés', sealed: providerSealed(k), until: aiUntil(e) });
            const card = h('button', { type: 'button', class: 'cible' });
            const rows = lines.map(l => {
                const txt = h('span', { class: 'v-txt' }, junk(12));
                const st = h('span', { class: 'v-st' });
                card.append(h('span', { class: 'v-ligne' }, h('span', { class: 'v-lab' }, l.label), txt, st));
                return { ...l, txt, st, state: '' };
            });
            card.prepend(h('span', { class: 'v-org' }, e.name), h('span', { class: 'v-hote' }, e.host));
            if ((e.hf || []).some(o => o.models)) card.append(h('span', { class: 'v-hf' }, `↗ publie ${e.hf.reduce((n, o) => n + (o.models || 0), 0)} modèles`));
            card.addEventListener('click', () => { const p = plaqueOf.get(e.host); if (p) openSheet(p); });
            (e.ai || []).length ? wall.append(h('li', null, card)) : rest.append(h('li', null, card));
            return { e, card, rows };
        });

        vis.hidden = false;
        vis.append(h('div', { class: 'scan-ecran vision-ecran' },
            h('div', { class: 'scan-tete' },
                h('span', { class: 'scan-oeil', 'aria-hidden': 'true' }),
                h('h2', { id: 'vision-titre' }, 'Vision machine · ce qui se lit, année après année'),
                play,
            ),
            h('div', { class: 'vision-temps' },
                h('div', null, h('span', { class: 'vision-lab' }, 'Année'), tYear),
                // The Q-Day is set here, the page's own slider being hidden on this relevé.
                h('div', { class: 'vision-qday' }, h('span', { class: 'vision-lab' }, 'Q-Day'),
                    h('span', { class: 'vision-pas' }, qMinus, qYear, qPlus)),
                h('label', { class: 'vision-curseur' }, t),
            ),
            count,
            h('p', { class: 'vision-note' }, `Avant le Q-Day, tout ce qui a été enregistré n'est que du bruit. Le Q-Day venu, ce qui est passé par un chemin classique se lit ; ce qui est passé par un chemin hybride reste illisible. Ce qui part vers une IA est supposé sensible ${LIFE.ia.years} ans au moins, plus si l'organisation garde des données plus longtemps. Les organisations avec un espace chez un fournisseur d'IA d'abord.`),
            wall,
            more, rest,
            h('div', { class: 'scan-balayage', 'aria-hidden': 'true' }),
        ));
        const others = targets.filter(x => !(x.e.ai || []).length).length;
        more.textContent = `Afficher les ${others} autres organisations`;
        more.addEventListener('click', () => { rest.hidden = !rest.hidden; more.textContent = rest.hidden ? `Afficher les ${others} autres organisations` : 'Masquer les autres'; });

        const paint = () => {
            const Y = Number(t.value), Q = Number(qInput.value);
            tYear.textContent = Y; qYear.textContent = Q;
            let read = 0;
            for (const x of targets) {
                let any = false, all = true;
                for (const r of x.rows) {
                    const state = Y < Q ? 'crypte' : r.sealed ? 'scelle' : Y <= r.until ? 'lu' : 'perime';
                    if (state === 'lu') any = true;
                    if (state !== 'perime' && !r.sealed) all = false;
                    if (state === r.state) continue;
                    r.state = state;
                    r.txt.parentNode.className = `v-ligne ${state}`;
                    if (state === 'lu' || state === 'perime') r.txt.textContent = r.what.toUpperCase();
                    else r.txt.textContent = junk(12);
                    r.st.textContent = { crypte: 'CHIFFRÉ', scelle: '■ SCELLÉ', lu: `LU · SENSIBLE JUSQU'EN ${r.until}`, perime: 'LU · PLUS SENSIBLE' }[state];
                }
                x.card.classList.toggle('lue', any);
                x.card.classList.toggle('perimee', !any && all && Y >= Q && x.rows.some(r => !r.sealed));
                if (any) read++;
            }
            count.replaceChildren(
                Y < Q ? `${Y}. Le Q-Day n'est pas encore tombé : tout est chiffré.`
                    : h('span', null, h('b', null, `${read} organisation${read > 1 ? 's' : ''} sur ${targets.length}`), ` dont une partie de ce qui a été enregistré en ${RECORDED} se lit en ${Y}, et compte encore.`));
        };
        // The noise itself moves, so the screen looks alive before the Q-Day.
        if (!reduce) setInterval(() => {
            for (let i = 0; i < 6; i++) {
                const x = targets[(Math.random() * targets.length) | 0];
                const r = x.rows[(Math.random() * x.rows.length) | 0];
                if (r.state === 'crypte' || r.state === 'scelle') r.txt.textContent = junk(12);
            }
        }, 120);

        let timer = null;
        const stopPlay = () => { clearInterval(timer); timer = null; play.textContent = '▶ Lancer le temps'; };
        play.addEventListener('click', () => {
            if (timer) return stopPlay();
            if (Number(t.value) >= 2050) t.value = NOW;
            play.textContent = '❚❚ Arrêter';
            timer = setInterval(() => {
                t.value = Number(t.value) + 1;
                paint();
                if (Number(t.value) >= 2050) stopPlay();
            }, reduce ? 50 : 650);
        });
        t.addEventListener('input', () => { stopPlay(); paint(); });
        qInput.addEventListener('input', paint);
        paint();
    }


    // ------------------------------------------------------------ the sorting office (relevé 3)
    // Every organisation's mail as a piece of post: a sealed letter when TLS
    // between servers is required, a postcard when it is only offered. The
    // switch puts someone on the way: postcards turn over.
    if (M.focus === 'courriel') {
        // What fits on a stamp.
        const STAMP = { microsoft: 'M365', google: 'Google', proofpoint: 'Proof­point', mimecast: 'Mime­cast', trendmicro: 'Trend', other: 'privé', none: '—' };
        const sec = h('section', { class: 'wrap tri', 'aria-labelledby': 'tri-titre' });
        document.querySelector('.machine').before(sec);
        const sw = h('input', { type: 'checkbox', id: 'attaque' });
        const wall = h('ul', { class: 'tri-mur' });
        const plaqueOf = new Map(plaques.map(p => [p.e.host, p]));
        const order = { cachetee: 0, entrouverte: 1, carte: 2, sans: 3 };
        const list = measured.filter(e => e.mail).sort((a, b) => order[postState(a)] - order[postState(b)] || a.name.localeCompare(b.name, 'fr'));
        for (const e of list) {
            const m = e.mail, st = postState(e), prov = POST[m.provider] || POST.other;
            const what = lifeOf(e).what.split(',')[0];
            const card = h('button', { type: 'button', class: `piece ${st}${mailHolder(e)?.cc === 'FR' ? ' fr' : ''}` },
                h('span', { class: 'timbre', title: `Courrier tenu par ${mailHolder(e)?.name || prov[0]}` }, m.provider === 'other' ? (mailHolder(e)?.name.split(/[ (]/)[0] || 'privé') : (STAMP[m.provider] || prov[0].split(' ')[0]), (mailHolder(e)?.cc || prov[1]) ? h('small', null, mailHolder(e)?.cc || prov[1]) : null),
                h('span', { class: 'p-org' }, e.name),
                h('span', { class: 'p-adr' }, st === 'sans' ? 'pas de MX' : `MX ${m.mx[0]}`),
                st === 'cachetee' ? h('span', { class: 'cachet', title: m.dane ? 'DANE' : 'MTA-STS enforce' }, m.dane ? 'DANE' : 'STS') : null,
                st !== 'sans' ? h('span', { class: 'p-dos' }, h('b', null, st === 'cachetee' ? 'LISIBLE AU Q-DAY' : 'EN CLAIR SUR LE TRAJET'), h('span', null, `${what}…`)) : null,
                h('span', { class: 'p-pied' }, `DMARC ${m.dmarc || '—'} · SPF ${m.spf || '—'}${m.dnssec ? ' · DNSSEC' : ''}`),
            );
            card.addEventListener('click', () => { const p = plaqueOf.get(e.host); if (p) openSheet(p); });
            wall.append(h('li', null, card));
        }
        const counts = Object.fromEntries(Object.keys(order).map(k => [k, list.filter(e => postState(e) === k).length]));
        sec.append(
            h('p', { class: 'sur' }, 'Le tri postal'),
            h('h2', { id: 'tri-titre' }, `${counts.cachetee} lettres cachetées, ${counts.carte + counts.entrouverte} cartes postales.`),
            h('div', { class: 'tri-commandes' },
                h('label', { class: 'bascule' }, sw, ' Un attaquant se place sur le trajet'),
                h('span', { class: 'tri-legende' },
                    // Each term opens its entry in the course's glossary.
                    h('span', null, h('i', { class: 'mini cachetee' }), 'cachetée (', h('a', { href: '/comprendre#g-mta-sts' }, 'MTA-STS'), ' enforce ou ', h('a', { href: '/comprendre#g-dane' }, 'DANE'), `) ${counts.cachetee}`),
                    h('span', null, h('i', { class: 'mini entrouverte' }), 'entrouverte (', h('a', { href: '/comprendre#g-mta-sts' }, 'MTA-STS'), ` testing) ${counts.entrouverte}`),
                    h('span', null, h('i', { class: 'mini carte' }), `carte postale ${counts.carte}`),
                    counts.sans ? h('span', null, h('i', { class: 'mini sans' }), `pas de courrier ${counts.sans}`) : null),
                h('a', { class: 'tri-comprendre', href: '/comprendre#courrier' }, 'Lettre, carte postale : ce que ça veut dire →'.replace(' :', '\u00a0:')),
            ),
            wall,
            h('p', { class: 'tri-note' }, `Et le Q-Day ? Même cachetée, une lettre voyage en TLS : il faut encore savoir si les serveurs de courrier acceptent l'hybride post-quantique. Cette mesure se fait sur le port 25, fermé depuis la machine de ce brouillon : elle viendra du serveur de l'observatoire.`),
        );
        sw.addEventListener('change', () => sec.classList.toggle('attaque', sw.checked));

        // The Q-Day, once the exchangers' TLS is measured (mail-starttls.sh, from
        // the server): a letter is sealed against a recorder only if its
        // exchanger takes the hybrid; the others' wax gives way.
        const measuredTls = list.filter(e => e.mail.tls && e.mail.tls.reachable);
        if (measuredTls.length) {
            const hyb = measuredTls.filter(e => e.mail.tls.hybrid);
            for (const [i, e] of list.entries()) {
                const t = e.mail.tls;
                if (!t || !t.reachable) continue;
                const card = wall.children[i].firstChild;
                card.classList.add(t.hybrid ? 'pq' : 'classique');
                if (t.hybrid) card.append(h('span', { class: 'timbre-pq', title: 'Le serveur de courrier accepte X25519MLKEM768' }, 'ML-KEM'));
            }
            const q = h('input', { type: 'checkbox' });
            sec.querySelector('.tri-commandes').append(h('label', { class: 'bascule' }, q, ' Le Q-Day tombe'));
            q.addEventListener('change', () => sec.classList.toggle('qday', q.checked));
            // Who carries the hybrid: counted by holder, most first.
            const by = new Map();
            for (const e of hyb) { const n = mailHolder(e)?.name || 'inconnu'; by.set(n, (by.get(n) || 0) + 1); }
            const holders = [...by].sort((a, b) => b[1] - a[1]).map(([n, c]) => `${c} chez ${n}`).join(', ');
            const hybFr = hyb.filter(e => mailHolder(e)?.cc === 'FR').length;
            sec.querySelector('.tri-note').replaceChildren(
                h('b', null, `Et le Q-Day ? `),
                `${hyb.length} organisations sur ${measuredTls.length} reçoivent leur courrier sur un serveur qui accepte l'hybride post-quantique (mesuré depuis le serveur de l'observatoire, port 25) : ${holders}. `,
                hybFr ? '' : `Aucune de celles qui tiennent leur courrier en France. `,
                `L'hybride ne protège une lettre que si le serveur qui l'envoie le parle aussi. `,
                `Les autres lettres, cachetées en classique, se décachettent le jour où un ordinateur quantique casse cet échange : cochez « Le Q-Day tombe ».`);
        }

        // Sovereignty of the mail: the country of whoever holds each exchanger.
        const held = list.filter(e => mailHolder(e));
        const byCc = new Map();
        for (const e of held) { const k = mailHolder(e).cc || '?'; if (!byCc.has(k)) byCc.set(k, []); byCc.get(k).push(e); }
        const fr = byCc.get('FR') || [], usM = byCc.get('US') || [];
        const frSw = h('input', { type: 'checkbox' });
        sec.querySelector('.tri-commandes').append(h('label', { class: 'bascule' }, frSw, ` Courrier tenu en France seulement (${fr.length})`));
        frSw.addEventListener('change', () => sec.classList.toggle('france', frSw.checked));
        const KIND = { propre: 'Son propre réseau', public: 'Réseau public', hebergeur: 'Prestataire ou hébergeur français' };
        const souv = h('div', { class: 'tri-souv' },
            h('p', { class: 'sur' }, 'Souveraineté du courrier'),
            h('h3', null, `Tenu en France : ${fr.length} sur ${held.length}. Par une entreprise américaine : ${usM.length}.`),
            h('p', null, `Ici la France tient mieux qu'ailleurs : l'État achemine son courrier par son propre réseau interministériel, les grandes banques par les leurs. Le CAC 40 et les licornes, eux, l'ont confié à Google, Microsoft ou Proofpoint. `,
                `Et le courrier tenu en France n'est pas pour autant mieux fermé : `, h('b', null, `${plural(fr.filter(e => postState(e) === 'cachetee').length, 'lettre cachetée', 'lettres cachetées')} sur ${fr.length}`),
                fr.some(e => postState(e) === 'cachetee') ? h('span', null, ' : ', names(fr.filter(e => postState(e) === 'cachetee'))) : '', '.'),
            h('ul', { class: 'tri-souv-liste' }, Object.entries(KIND).map(([k, label]) => {
                const sub = fr.filter(e => mailHolder(e).kind === k);
                return sub.length ? h('li', null, h('b', null, `${label} · ${sub.length}`), ' ', names(sub, 99), '.') : null;
            }), h('li', null, h('b', null, 'Ailleurs · '), [...byCc].filter(([k]) => k !== 'FR').sort((a, b) => b[1].length - a[1].length).map(([k, l]) => `${COUNTRY_MAIL[k] || k} ${l.length}`).join(', '), '.')),
        );
        wall.before(souv);
        sources(souv.querySelector('ul'), `pour chaque domaine, l'adresse du serveur de courrier de plus haute priorité, et le réseau qui l'annonce (Team Cymru), lus le ${dateFr}. Le prestataire est reconnu au nom du serveur quand il le dit (Google, Microsoft, Proofpoint…), au réseau sinon.`);
    }

    // ------------------------------------------------------------ who holds the key (relevé 4)
    // Four kinds of holder, from cle.sh: the hybrid of most French front doors
    // is their CDN's default, and the doors that keep their own key are the
    // ones without it. Then what moved since the previous measurement.
    if (M.focus === 'cle') {
        const keyed = measured.filter(e => e.cle);
        const sec = h('section', { class: 'wrap qui cle', 'aria-labelledby': 'cle-titre' });
        $('atlas-bloc').before(sec);

        // The key rings: one per holder, one key per organisation, brass when
        // its door takes the hybrid, iron when it does not. A ring's size
        // follows its number of keys. Drawn with s_(), never as markup: the
        // page's policy forbids HTML sinks.
        const RINGS = [
            ['cdn', 'Les CDN', 'le réseau qui répond devant le site'],
            ['cloud', 'Les clouds', "l'équilibreur de charge d'un géant du nuage"],
            ['hebergeur', 'Les hébergeurs', 'un prestataire qui loue ses serveurs'],
            ['propre', 'Les réseaux maison', "l'organisation tient sa clé elle-même"],
        ];
        const sealedOf = e => e.pq === 'full';
        const plaqueOf = new Map(plaques.map(p => [p.e.host, p]));
        const openOf = e => () => { const p = plaqueOf.get(e.host); if (p) openSheet(p); };
        const holders = new Map();
        for (const e of keyed) {
            if (!holders.has(e.cle.name)) holders.set(e.cle.name, { name: e.cle.name, kind: e.cle.kind, cc: e.cle.country, keys: [] });
            holders.get(e.cle.name).keys.push(e);
        }
        const ringsOf = k => [...holders.values()].filter(x => x.kind === k)
            .sort((a, b) => b.keys.length - a.keys.length || b.keys.filter(sealedOf).length - a.keys.filter(sealedOf).length || a.name.localeCompare(b.name, 'fr'));
        // A key points along +x, the hole of its bow at the origin, where the ring passes.
        const BLADE = 'M6.5,-3.8 H12 V-2.3 H42 L44.8,-0.3 V2.3 H40.5 V6.6 H37.8 V4.3 H35.2 V7.4 H32.2 V4.3 H29.6 V2.3 H12 V3.8 H6.5 Z';
        const keyOf = (x, y, deg, e) => s_('g', { class: `cle-svg ${sealedOf(e) ? 'or' : 'fer'}`, transform: `translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${deg.toFixed(1)})` },
            s_('title', null, `${e.name} · ${sealedOf(e) ? 'post-quantique' : 'classique'}`),
            s_('path', { d: BLADE, class: 'metal' }), s_('circle', { r: 8.6, class: 'metal' }), s_('circle', { r: 3.3, class: 'trou' }));
        const ringOf = (keys, scale, label) => {
            const n = keys.length, r = Math.round(10 + 14.4 * Math.sqrt(n));
            // Many keys spread all round the ring; a few hang below, fanned out.
            const angles = keys.map((_, i) => n >= 10 ? 90 + 360 * (i + .5) / n : 90 + (i - (n - 1) / 2) * 24);
            let x0 = -r - 4, x1 = r + 4, y0 = -r - 4, y1 = r + 4;
            for (const a of angles) {
                const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
                for (const d of [r, r + 47]) { x0 = Math.min(x0, c * d - 9); x1 = Math.max(x1, c * d + 9); y0 = Math.min(y0, s * d - 9); y1 = Math.max(y1, s * d + 9); }
            }
            x0 -= 6; y0 -= 6; x1 += 6; y1 += 6;
            return s_('svg', { class: 'anneau', viewBox: `${x0.toFixed(1)} ${y0.toFixed(1)} ${(x1 - x0).toFixed(1)} ${(y1 - y0).toFixed(1)}`,
                width: ((x1 - x0) * scale).toFixed(0), height: ((y1 - y0) * scale).toFixed(0), role: 'img', 'aria-label': label },
                keys.map((e, i) => keyOf(Math.cos(angles[i] * Math.PI / 180) * r, Math.sin(angles[i] * Math.PI / 180) * r, angles[i], e)),
                s_('circle', { r, class: 'anneau-fil' }));
        };
        const nameOf = e => h('button', { type: 'button', class: `nom-cle ${sealedOf(e) ? 'or' : 'fer'}` }, e.name);
        const trousseau = h('div', { class: 'trousseau' },
            // The gradients, once for every key on the page.
            s_('svg', { width: 0, height: 0, 'aria-hidden': 'true', class: 'defs-cles' }, s_('defs', null,
                ...[['cle-or', '#f3dc92', '#d1a845', '#9c7322'], ['cle-fer', '#c5c9cc', '#90959a', '#62676b'], ['cle-rouille', '#c4743c', '#93461f', '#5f2c13']]
                    .map(([id, a, b, c]) => s_('linearGradient', { id, x1: 0, y1: 0, x2: 0, y2: 1 },
                        s_('stop', { offset: 0, 'stop-color': a }), s_('stop', { offset: '.5', 'stop-color': b }), s_('stop', { offset: 1, 'stop-color': c }))))));
        const cdnSealed = keyed.filter(e => e.cle.kind === 'cdn' && sealedOf(e)).length;
        const sealedAll = keyed.filter(sealedOf).length;
        for (const [k, title, sub] of RINGS) {
            const rs = ringsOf(k);
            if (!rs.length) continue;
            const all = rs.flatMap(x => x.keys), ok = all.filter(sealedOf).length;
            const row = h('div', { class: 'anneaux' });
            for (const x of rs) {
                const gold = x.keys.filter(sealedOf).length, n = x.keys.length;
                x.keys.sort((a, b) => sealedOf(b) - sealedOf(a) || a.name.localeCompare(b.name, 'fr'));
                const big = n >= 20, small = n <= 2;
                const names = h('div', { class: 'noms-cles' }, x.keys.map(e => { const b = nameOf(e); b.addEventListener('click', openOf(e)); return b; }));
                row.append(h('div', { class: `anneau-carte${big ? ' grand' : small ? ' petit' : ''}` },
                    ringOf(x.keys, big ? 1 : small ? .62 : n >= 10 ? .78 : .9, `${x.name} : ${n} clés, ${gold} en laiton`),
                    h('div', { class: 'anneau-legende' },
                        h('b', null, x.name, ' ', h('span', { class: `pays${x.cc === 'FR' ? ' fr' : ''}` }, x.cc)),
                        h('small', null, n === 1 ? `1 clé · ${gold ? 'laiton' : 'fer'}` : `${n} clés · ${gold} en laiton`),
                        names)));
            }
            if (k === 'cdn') row.append(h('div', { class: 'encart' }, h('b', null, `${cdnSealed} `, h('em', null, `sur ${sealedAll}.`)),
                h('p', null, `Des ${sealedAll} portes scellées, ${cdnSealed} le sont par leur CDN. Les clés ont été refaites sur le trousseau du prestataire, pas chez l'organisation.`)));
            if (k === 'cloud') {
                const sized = rs.filter(x => x.keys.length >= 3).map(x => ({ x, s: x.keys.filter(sealedOf).length }));
                const worst = sized.reduce((a, b) => (!a || b.s / b.x.keys.length < a.s / a.x.keys.length ? b : a), null);
                const best = sized.reduce((a, b) => (!a || b.s / b.x.keys.length > a.s / a.x.keys.length ? b : a), null);
                if (worst && best && worst !== best) row.append(h('div', { class: 'encart' }, h('b', null, `${worst.x.name} : `, h('em', null, `${worst.s} sur ${worst.x.keys.length}.`)),
                    h('p', null, `Même rang de géant américain, autre résultat : ${best.x.name} a ${best.s} clés sur ${best.x.keys.length} en laiton, ${worst.x.name} ${worst.s ? worst.s : 'aucune'}.`)));
            }
            const fill = h('i', { style: `--p: ${pct(ok, all.length)}%` });
            trousseau.append(h('div', { class: 'bande' },
                h('div', { class: 'bande-tete' },
                    h('h3', null, title, h('em', null, ` · ${sub}`)),
                    h('span', { class: 'bande-compte' }, `${plural(rs.length, 'trousseau', 'trousseaux')} · ${plural(all.length, 'clé', 'clés')}`),
                    h('span', { class: 'bande-barre', role: 'img', 'aria-label': `${pct(ok, all.length)} % en laiton` }, fill, `${ok}/${all.length} en laiton · ${pct(ok, all.length)} %`)),
                row));
        }
        const qday = h('input', { type: 'checkbox' });
        qday.addEventListener('change', () => trousseau.classList.toggle('qday', qday.checked));
        const iron = keyed.filter(e => !sealedOf(e)).length;
        const us = keyed.filter(e => e.cle.country === 'US');
        const biggest = [...holders.values()].sort((a, b) => b.keys.length - a.keys.length)[0];
        const allGold = biggest.keys.every(sealedOf);
        sec.append(
            h('p', { class: 'sur' }, 'Qui tient la clé'),
            h('h2', { id: 'cle-titre' }, `${holders.size} trousseaux pour ${keyed.length} portes. `, h('em', null, `Le plus gros, celui de ${biggest.name}, est ${allGold ? 'tout' : 'presque tout'} en laiton.`)),
            h('div', { class: 'trousseau-tete' },
                h('p', null, `Chaque porte d'entrée est une clé, accrochée au trousseau de celui qui répond à sa connexion chiffrée, et qui peut donc lire ce qui passe. `,
                    `En laiton, elle parle déjà l'hybride post-quantique ; en fer, elle reste classique. `,
                    `${us.length} clés sur ${keyed.length} pendent au trousseau d'une entreprise américaine, que sa loi peut contraindre à livrer ce qu'elle voit passer, hybride ou pas.`),
                h('div', { class: 'trousseau-legende' },
                    h('span', null, h('i', { class: 'mini-cle laiton' }), `laiton · post-quantique `, h('b', null, sealedAll)),
                    h('span', null, h('i', { class: 'mini-cle fer' }), `fer · classique `, h('b', null, iron)),
                    h('label', { class: 'bascule' }, qday, ` Le Q-Day tombe : ${iron} clés de fer rouillent d'un coup`),
                    blueMonday())),
            h('span', { class: 'fixe' }, `Mesuré le ${dateFr} · ne dépend pas du Q-Day`),
            trousseau,
            h('p', { class: 'trousseau-note' }, `Une clé, une porte d'entrée HTTPS ; la taille du trousseau suit son nombre de clés. Chaque nom ouvre la fiche de l'organisation.`),
        );

        // What moved since the previous measurement, subject by subject.
        const moves = keyMoves();
        if (moves.prev) {
            const ch = h('section', { class: 'wrap qui cle-depuis', 'aria-labelledby': 'depuis-titre' });
            sec.after(ch);
            const when = moves.since ? `${moves.since}, le ${moves.prevFr}` : `la mesure du ${moves.prevFr}`;
            const rows = moves.topics.filter(t => t.doors.length).map(t => h('li', null,
                h('b', null, `${plural(t.doors.length, `porte a ${t.verb}`, `portes ont ${t.verb}`)} ${t.what}`), ' : ',
                t.detail ? t.doors.map(e => `${e.name} (${t.detail(e)})`).join(', ') : names(t.doors, 99), '.'));
            ch.append(
                h('p', { class: 'sur' }, moves.since ? `Depuis ${moves.since}` : `Depuis le ${moves.prevFr}`),
                h('h2', { id: 'depuis-titre' }, moves.moved.length ? `${plural(moves.moved.length, 'porte a bougé', 'portes ont bougé')}, ${plural(moves.compared - moves.moved.length, "n'a pas changé", "n'ont pas changé")}.` : `Aucune porte n'a bougé.`),
                h('p', null, `Les mêmes portes, mesurées de la même façon : ${when}, puis le ${dateFr}. ${moves.compared} étaient joignables les deux fois. `,
                    `On compte l'hybride, qui tient la clé, les versions de TLS acceptées, le certificat (un renouvellement ne compte pas, un changement de type de clé ou d'émetteur oui) et la politique de contenu de la page d'accueil quand elle a répondu les deux fois.`),
            );
            if (rows.length) ch.append(h('ul', { class: 'cle-liste' }, rows));
        }
    }

    // ------------------------------------------------------------ the letters' table (relevé 5)
    // Each dating door is a love letter: sealed with a heart of wax when it
    // takes the hybrid, its flap open when it does not. Every envelope has the
    // same height, open or shut, so the rows stay even. Built with s_(), never
    // as markup (Trusted Types). The letters read at the Q-Day are fiction,
    // drawn from a pool so that the page holds whatever doors stay open.
    if (M.focus === 'rencontres') {
        const apps = reachable.filter(e => e.g === 'rencontres');
        const isSealed = e => e.pq === 'full';
        const plaqueOf = new Map(plaques.map(p => [p.e.host, p]));
        const holderOf = e => e.cle ? `${e.cle.name}${e.cle.country === 'FR' ? ', France' : e.cle.country === 'GB' ? ', Royaume-Uni' : ''}` : '';
        const tls12 = e => !(e.protocols || []).includes('tls1_3');
        const HEART = 'M0 14 C-13 5 -17 -1 -17 -6.5 -17 -12 -13 -16 -8 -16 -4.4 -16 -1.6 -14 0 -11 1.6 -14 4.4 -16 8 -16 13 -16 17 -12 17 -6.5 17 -1 13 5 0 14Z';
        const grad = (id, kind, stops, extra = {}) => s_(kind, { id, ...extra }, stops.map(([o, c]) => s_('stop', { offset: o, 'stop-color': c })));
        const defs = s_('svg', { width: 0, height: 0, 'aria-hidden': 'true', class: 'defs-lettres' }, s_('defs', null,
            grad('lt-paper', 'linearGradient', [[0, '#fffdf8'], [1, '#f6efe4']], { x1: 0, y1: 0, x2: 0, y2: 1 }),
            grad('lt-flap', 'linearGradient', [[0, '#f7f0e4'], [1, '#efe4d4']], { x1: 0, y1: 0, x2: 0, y2: 1 }),
            grad('lt-in', 'linearGradient', [[0, '#e8c9c2'], [1, '#dcb3ab']], { x1: 0, y1: 0, x2: 0, y2: 1 }),
            grad('lt-wax', 'radialGradient', [[0, '#cf3a4a'], ['.55', '#a61e2d'], [1, '#7c1220']], { cx: '.38', cy: '.32', r: '.8' })));
        // One envelope, 200 × 190 whatever its state: the open flap rises into
        // the space the sealed one leaves empty.
        const envelope = (e, i) => {
            if (isSealed(e)) return s_('svg', { class: 'enveloppe', viewBox: '0 0 200 190', 'aria-hidden': 'true' },
                s_('rect', { x: 2, y: 58, width: 196, height: 128, rx: 4, fill: 'url(#lt-paper)', stroke: '#d9cbb7' }),
                s_('path', { d: 'M2 186 L100 120 L198 186', fill: 'none', stroke: '#e7dbc9', 'stroke-width': 1.5 }),
                s_('path', { d: 'M3 59 L100 122 L197 59 Z', fill: 'url(#lt-flap)', stroke: '#d9cbb7' }),
                s_('g', { transform: 'translate(100 112)' },
                    s_('circle', { r: 30, fill: '#a61e2d', opacity: '.18', transform: 'translate(1 3)' }),
                    s_('path', { d: HEART, fill: 'url(#lt-wax)', transform: 'scale(1.95)' }),
                    s_('path', { d: HEART, fill: 'none', stroke: '#7c1220', 'stroke-opacity': '.55', 'stroke-width': '.8', transform: 'scale(1.5)' }),
                    s_('text', { class: 'cachet-texte', y: 1, 'text-anchor': 'middle' }, 'ML-KEM')));
            return s_('svg', { class: 'enveloppe', viewBox: '0 0 200 190', 'aria-hidden': 'true' },
                s_('path', { d: 'M3 59 L100 4 L197 59 Z', fill: 'url(#lt-in)', stroke: '#d3b1a8' }),
                s_('g', { transform: `rotate(${i % 2 ? -3 : 3} 100 90)` },
                    s_('rect', { x: 26, y: 16, width: 148, height: 120, fill: '#fffdf8', stroke: '#ddd0bd' }),
                    s_('text', { class: 'lettre-debut', x: 38, y: 38 }, 'Mon cœur,'),
                    s_('path', { d: 'M38 50h112M38 61h96M38 72h120M38 83h80', stroke: '#1f2326', 'stroke-opacity': '.22', 'stroke-width': 2.2, 'stroke-linecap': 'round' })),
                s_('path', { d: 'M2 59 L100 118 L198 59 L198 186 L2 186 Z', fill: 'url(#lt-paper)', stroke: '#d9cbb7' }),
                s_('path', { d: 'M2 186 L88 124 M198 186 L112 124', stroke: '#e7dbc9', 'stroke-width': 1.5 }));
        };
        // Sealed first, then open: the eye finds the open letters together.
        const order = [...apps].sort((a, b) => isSealed(b) - isSealed(a));
        const grid = h('ul', { class: 'lettres-grille' });
        order.forEach((e, i) => {
            const b = h('button', { type: 'button', class: `lettre-env ${isSealed(e) ? 'cachetee' : 'ouverte'}`, style: `--r: ${[-2, 1.4, -.6, 1.8, -1.4, .8][i % 6]}deg`,
                'aria-label': `${e.name} : ${isSealed(e) ? 'cachetée, échange hybride' : 'pli ouvert, échange classique'}` },
                envelope(e, i),
                h('span', { class: 'env-nom' }, e.name),
                h('span', { class: 'env-hote' }, e.host),
                h('span', { class: 'env-chez' }, h('i', null, 'chez '), holderOf(e), tls12(e) ? h('span', { class: 'env-tls' }, 'TLS 1.2') : null));
            b.addEventListener('click', () => { const p = plaqueOf.get(e.host); if (p) openSheet(p); });
            grid.append(h('li', null, b));
        });
        const sealedApps = apps.filter(isSealed), open = apps.filter(e => !isSealed(e));
        // The cases worth a sentence, found in the data rather than named here.
        const brand = e => e.name.split(',')[0].replace(/ \(.*\)$/, '');
        const brands = list => [...new Set(list.map(brand))];
        const cdnButOld = open.filter(e => e.cle?.kind === 'cdn' && tls12(e));
        const ownNet = open.filter(e => e.cle?.kind === 'propre');
        const elsewhere = open.filter(e => !cdnButOld.includes(e) && !ownNet.includes(e));
        const notes = [];
        if (cdnButOld.length) notes.push(h('div', { class: 'lettres-encart' },
            h('p', { class: 'sur' }, 'Le cas ' + brands(cdnButOld).join(', ')),
            h('p', { class: 'lettres-encart-titre' }, `${brands(cdnButOld).join(' et ')} ${brands(cdnButOld).length > 1 ? 'sont' : 'est'} chez ${[...new Set(cdnButOld.map(e => e.cle.name))].join(', ')}, mais ${brands(cdnButOld).length > 1 ? 'ont' : 'a'} gardé TLS 1.2 : `, h('em', null, `${brands(cdnButOld).length > 1 ? 'ils se sont privés' : 'il s\'est privé'} de l'hybride.`)),
            h('p', null, `L'hybride n'existe qu'en TLS 1.3. Le CDN le propose à tous ses clients, encore faut-il ouvrir la porte à TLS 1.3.`)));
        if (ownNet.length) notes.push(h('div', { class: 'lettres-encart' },
            h('p', { class: 'sur' }, 'Réseau maison'),
            h('p', { class: 'lettres-encart-titre' }, `${brands(ownNet).join(' et ')} servent `, h('em', null, `depuis leur propre réseau`), `${ownNet[0].cle.country === 'GB' ? ', au Royaume-Uni' : ''}.`),
            h('p', null, `Sans CDN pour le faire à leur place, ils négocient encore un échange classique. Comme au relevé 4 : qui garde sa clé n'a pas l'hybride.`)));
        if (elsewhere.length) notes.push(h('div', { class: 'lettres-encart' },
            h('p', { class: 'sur' }, 'Ailleurs'),
            h('p', { class: 'lettres-encart-titre' }, `${brands(elsewhere).join(', ')} : `, h('em', null, `un pli ouvert.`)),
            h('p', null, elsewhere.map(e => `${e.host} chez ${holderOf(e)}${tls12(e) ? ', TLS 1.2 seulement' : ''}`).join(' ; ') + '.')));
        const heart = (filled) => s_('svg', { class: `coeur ${filled ? 'plein' : 'vide'}`, viewBox: '-18 -17 36 32', 'aria-hidden': 'true' }, s_('path', { d: HEART }));
        const byCdn = sealedApps.filter(e => e.cle?.kind === 'cdn').length;
        const tally = h('div', { class: 'lettres-compte' },
            h('p', null, h('b', null, sealedApps.length), ' cachetées ', h('span', { class: 'coeurs' }, sealedApps.map(() => heart(true)))),
            h('p', null, h('b', null, open.length), ' plis ouverts ', h('span', { class: 'coeurs' }, open.map(() => heart(false)))),
            h('p', { class: 'lettres-compte-note' }, `Sur les ${sealedApps.length} cachetées, ${byCdn} le doivent à leur CDN.`));
        const sec = h('section', { class: 'wrap lettres', 'aria-labelledby': 'lettres-titre' },
            defs,
            h('p', { class: 'sur' }, 'La table des lettres'),
            h('h2', { id: 'lettres-titre' }, `${sealedApps.length} lettres cachetées, `, h('em', null, `${open.length} plis ouverts.`)),
            h('p', { class: 'lettres-chapo' }, `Chaque appli est une lettre. Cachetée d'un cœur de cire quand sa porte parle l'hybride post-quantique : illisible, même après le jour Q. Sous pli ouvert quand elle s'en tient à l'échange classique : enregistrée aujourd'hui, lue le jour Q. Chaque lettre ouvre la fiche de l'appli.`),
            h('div', { class: 'lettres-table' }, grid),
            h('div', { class: 'lettres-bas' }, h('div', { class: 'lettres-encarts' }, notes), tally));
        $('scan').before(sec);

        // The Q-Day: the open letters, read aloud. Fiction, one per open door.
        const POOL = [
            ['Mon cœur, à samedi, même heure, même terrasse. Je garde la table près de la fenêtre.', '— C.'],
            ['Tu sais, je n\'ai encore rien dit à ma famille. Laisse-moi un peu de temps.', '— ta J.'],
            ['Les photos d\'hier soir, garde-les pour toi, promis ? Je t\'embrasse fort.', '— M.'],
            ['On s\'est croisés au marché, rue des Martyrs. Tu portais un ciré jaune.', '— A.'],
            ['J\'habite au troisième, code 41B. Monte quand tu veux, je laisse la lumière.', '— L.'],
            ['Je n\'ai jamais osé l\'écrire à personne : je crois que je t\'aime.', '— R.'],
            ['Ne dis rien au bureau, pas encore. Vendredi, même endroit ?', '— S.'],
            ['Mon médecin dit que tout va bien. Je voulais que tu le saches avant tout le monde.', '— N.'],
        ];
        if (open.length) {
            const lus = h('ul', { class: 'lettres-lues' }, open.map((e, i) => h('li', null,
                h('p', { class: 'lue-de' }, e.host), h('p', { class: 'lue-texte' }, POOL[i % POOL.length][0]), h('p', { class: 'lue-sig' }, POOL[i % POOL.length][1]))));
            sec.after(h('section', { class: 'wrap lettres-qday', 'aria-labelledby': 'lettres-qday-titre' },
                h('p', { class: 'sur' }, 'Le jour Q · simulation'),
                h('h2', { id: 'lettres-qday-titre' }, `Le jour où l'ordinateur quantique arrive, `, h('em', null, `les plis ouverts se lisent à voix haute.`)),
                h('p', null, `Une conversation chiffrée en classique peut être enregistrée dès aujourd'hui et déchiffrée ce jour-là. Voici ce que deviendraient les ${open.length} lettres restées ouvertes. Les ${sealedApps.length} autres gardent leur cachet.`),
                lus,
                h('p', { class: 'lettres-qday-pied' }, h('span', { class: 'coeurs' }, sealedApps.map(() => heart(true))), ` ${sealedApps.length} lettres cachetées · toujours illisibles après le jour Q. Textes des lettres : fictifs.`)));
        }
    }

    // ------------------------------------------------------------ the chocolate shop (relevé 6)
    // Each third party is an egg in the shop window, one per provider, its
    // size by the number of pages that load it: wrapped in gold foil when its
    // own door takes the hybrid, bare dark chocolate when it does not. The
    // dark ones are labelled with the pages that serve them, each opening
    // that organisation's sheet. Built with s_(), never as markup.
    if (M.focus === 'oeufs') {
        const hunted = measured.filter(e => (e.tiers || []).length);
        const plaqueOf = new Map(plaques.map(p => [p.e.host, p]));
        const isGold = t => t.pq === 'full';
        // One provider per name and wrapping: a provider with a classical host
        // and sealed ones shows on both shelves.
        const byProv = new Map();
        for (const e of hunted) for (const t of e.tiers) {
            const pv = provOf(t.host), k = (isGold(t) ? '' : '!') + pv.name;
            const p = byProv.get(k) || byProv.set(k, { ...pv, gold: isGold(t), pages: new Set(), hosts: new Set(), orgs: [] }).get(k);
            p.pages.add(e.host); p.hosts.add(t.host);
            if (!p.orgs.includes(e)) p.orgs.push(e);
        }
        const provs = [...byProv.values()].map(p => ({ ...p, n: p.pages.size })).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name, 'fr'));
        const gold = provs.filter(p => p.gold), dark = provs.filter(p => !p.gold);

        // The egg: 100 × 130, one path. Foil facets drawn from a seed per
        // provider, so the same egg always crinkles the same way.
        const EGG = 'M50 0C79 0 100 44 100 80 100 111 78 130 50 130 22 130 0 111 0 80 0 44 21 0 50 0Z';
        const CRACK = 'M-2 66L12 58 22 70 34 57 45 69 56 56 67 70 78 58 89 68 102 60';
        const grad = (id, stops) => s_('radialGradient', { id, cx: '36%', cy: '30%', r: '80%' }, stops.map(([o, c]) => s_('stop', { offset: o, 'stop-color': c })));
        const defs = s_('svg', { width: 0, height: 0, 'aria-hidden': 'true', class: 'defs-oeufs' }, s_('defs', null,
            grad('oe-or', [[0, '#fbeeb8'], ['.35', '#f3dc92'], ['.7', '#c99c3f'], [1, '#8f6420']]),
            grad('oe-choc', [[0, '#8a5a3a'], ['.35', '#5a3520'], [1, '#2a170b']]),
            s_('clipPath', { id: 'oe-forme' }, s_('path', { d: EGG }))));
        const seeded = name => { let x = 7; for (const c of name) x = (x * 31 + c.charCodeAt(0)) % 2147483647; return () => (x = (x * 16807) % 2147483647) / 2147483647; };
        const shine = op => s_('ellipse', { cx: 33, cy: 34, rx: 12, ry: 20, transform: 'rotate(-24 33 34)', fill: '#fff', opacity: op });
        function egg(px, kind, name = '') {
            const svg = s_('svg', { class: `oeuf ${kind}`, width: Math.round(px * 108 / 140), height: px, style: `--h: ${px}px`, viewBox: '-4 -4 108 140', 'aria-hidden': 'true' },
                s_('ellipse', { cx: 50, cy: 131, rx: 44, ry: 5, fill: '#2a170b', opacity: '.22' }));
            if (kind === 'fendu') {
                // Bottom half in place, the top lifted off: what the Q-Day does to a classical exchange.
                const half = d => s_('g', { 'clip-path': 'url(#oe-forme)' }, s_('path', { d: EGG, fill: 'url(#oe-choc)' }), s_('path', { d, class: 'oeuf-vide' }), s_('path', { d: CRACK, fill: 'none', stroke: '#1a0d05', 'stroke-width': 2 }));
                svg.append(half(`${CRACK}L102 -5 -2 -5Z`), s_('g', { transform: 'translate(-8 -26) rotate(-16 20 60)' }, half(`${CRACK}L102 140 -2 140Z`)),
                    s_('path', { d: 'M70 128l5-4 3 5zM84 130l3-3 2 3zM18 129l4-3 1 4z', fill: '#3b2212' }));
                return svg;
            }
            const inside = s_('g', { 'clip-path': 'url(#oe-forme)' });
            if (kind === 'or') {
                const rnd = seeded(name);
                for (let i = 0; i < 26; i++) {
                    const x = rnd() * 110 - 5, y = rnd() * 140 - 5, r = 8 + rnd() * 16, k = 3 + Math.floor(rnd() * 3), pts = [];
                    for (let j = 0; j < k; j++) { const a = j / k * 6.283 + rnd() * .8; pts.push(`${(x + Math.cos(a) * r).toFixed(1)},${(y + Math.sin(a) * r * .8).toFixed(1)}`); }
                    const lit = rnd() < .5;
                    inside.append(s_('polygon', { points: pts.join(' '), fill: lit ? '#fff8d8' : '#7a5310', opacity: ((lit ? .18 : .14) * (.5 + rnd())).toFixed(3) }));
                }
                for (let i = 0; i < 34; i++) {
                    let x = rnd() * 100, y = rnd() * 130, d = `M${x.toFixed(1)} ${y.toFixed(1)}`;
                    for (let j = 0; j < 3; j++) { x += rnd() * 14 - 7; y += rnd() * 14 - 7; d += `L${x.toFixed(1)} ${y.toFixed(1)}`; }
                    inside.append(s_('path', { d, fill: 'none', stroke: rnd() < .55 ? '#fffbe6' : '#6e4a12', 'stroke-width': (.5 + rnd() * .7).toFixed(2), opacity: (.35 + rnd() * .35).toFixed(2), 'stroke-linejoin': 'bevel' }));
                }
                inside.append(s_('path', { d: 'M-5 74C25 66 75 84 105 72', fill: 'none', stroke: '#fff3c4', 'stroke-width': 1.2, opacity: '.6' }),
                    s_('path', { d: 'M-5 77C25 69 75 87 105 75', fill: 'none', stroke: '#7a5310', opacity: '.35' }), shine('.45'));
            } else {
                inside.append(s_('path', { d: 'M8 70C30 64 70 64 92 70', fill: 'none', stroke: '#2a170b', 'stroke-width': 1.4, opacity: '.55' }),
                    s_('path', { d: 'M8 72C30 66 70 66 92 72', fill: 'none', stroke: '#a2724f', 'stroke-width': .8, opacity: '.45' }), shine('.22'));
            }
            svg.append(s_('path', { d: EGG, fill: kind === 'or' ? 'url(#oe-or)' : 'url(#oe-choc)' }), inside,
                s_('path', { d: EGG, fill: 'none', stroke: kind === 'or' ? '#8f6420' : '#22130a', opacity: '.5' }));
            return svg;
        }
        const size = n => Math.round(30 + 27 * Math.sqrt(n));
        const pages = n => plural(n, 'page', 'pages');
        const orgButton = e => {
            const b = h('button', { type: 'button', class: 'oeuf-chez' }, e.name);
            b.addEventListener('click', () => { const p = plaqueOf.get(e.host); if (p) openSheet(p); });
            return b;
        };
        // A shelf: the eggs stand on a glass plank, each item carrying its own
        // piece of it so that a row that wraps keeps its plank.
        const shelf = (title, sub, items, dark) => {
            const zone = (dark ? 84 : Math.max(...items.map(p => size(p.n)))) + 8;
            return h('div', { class: 'rayon' },
                h('div', { class: 'rayon-tete' }, h('h3', null, ...title), h('span', null, sub)),
                h('ul', { class: 'rayon-oeufs', style: `--zone: ${zone}px` }, items.map((p, i) => h('li', { style: `--r: ${((i % 3) - 1) * (dark ? 1.3 : 2.2)}deg` },
                    h('div', { class: 'oeuf-zone' }, egg(dark ? 84 : size(p.n), dark ? 'choc' : 'or', p.name)),
                    dark
                        ? h('div', { class: 'etiquette' }, h('span', { class: 'etiquette-nom' }, p.name),
                            p.name !== [...p.hosts][0] ? h('span', { class: 'etiquette-hote' }, [...p.hosts].join(', ')) : null,
                            h('span', { class: 'etiquette-chez' }, 'chez ', p.orgs.map((e, j) => [j ? ', ' : '', orgButton(e)])))
                        : h('div', { class: `etiquette${p.n > 9 ? ' grande' : ''}`, title: [...p.hosts].join(', ') }, h('span', { class: 'etiquette-nom' }, p.name),
                            h('span', { class: 'etiquette-pages' }, pages(p.n)))))));
        };
        const big = gold.filter(p => p.n >= 5), mid = gold.filter(p => p.n >= 3 && p.n < 5), two = gold.filter(p => p.n === 2), one = gold.filter(p => p.n === 1);
        const vitre = h('div', { class: 'vitre' },
            big.length && shelf(['Les pièces ', h('em', null, 'maîtresses')], 'Emballé or · un œuf par fournisseur, sa taille selon le nombre de pages', big),
            mid.length && shelf(['La ', h('em', null, 'collection')], '3 à 4 pages', mid),
            two.length && shelf(['Les ', h('em', null, 'petits sujets')], '2 pages', two),
            one.length && h('details', { class: 'assortiment' },
                h('summary', null, h('span', { class: 'assortiment-titre' }, 'L\'assortiment ', h('em', null, 'au détail')), h('span', null, `${one.length} fournisseurs, une page chacun ; tous emballés or`)),
                h('ul', null, one.map(p => h('li', { title: [...p.hosts].join(', ') }, egg(22, 'or', p.name), h('span', null, p.name))))),
            dark.length && h('div', { class: 'chocolat-noir' }, shelf(['Chocolat noir : ', h('em', null, 'non emballé')], `${plural(dark.length, 'fournisseur', 'fournisseurs')} en échange classique · l'étiquette dit quelle page le sert`, dark, true)),
            h('div', { class: 'vitrine-legende' },
                h('span', null, egg(26, 'or', 'légende'), 'Papier doré : le serveur tiers accepte X25519MLKEM768'),
                h('span', null, egg(26, 'choc'), 'Chocolat nu : échange de clés classique'),
                h('span', { class: 'vitrine-echelle' }, 'Taille de l\'œuf selon √ pages')));

        // The paradox, from the data: a sealed front door whose page still
        // opens a classical connection to someone else.
        const classicalOf = e => e.tiers.filter(t => !isGold(t));
        const betrayed = hunted.filter(e => e.pq === 'full' && classicalOf(e).length);
        const neither = hunted.filter(e => e.pq !== 'full' && classicalOf(e).length);
        const whats = [...new Set(betrayed.flatMap(e => classicalOf(e).map(t => provOf(t.host).what)).filter(Boolean))];
        const unnamed = betrayed.flatMap(classicalOf).filter(t => !provOf(t.host).what).length;
        const paradoxe = betrayed.length && h('div', { class: 'paradoxe' },
            h('p', { class: 'sur' }, 'Le paradoxe'),
            h('p', { class: 'paradoxe-titre' }, 'Une porte blindée, ', h('em', null, 'un tiers en fer-blanc.')),
            h('p', null, h('b', null, `${betrayed.length === 6 ? 'Six' : betrayed.length} ${betrayed.length > 1 ? 'maisons' : 'maison'}`), ` ${betrayed.length > 1 ? 'ont' : 'a'} scellé leur propre porte, mais leur page appelle un tiers resté classique : `,
                [...whats, unnamed ? `${plural(unnamed, 'script', 'scripts')} dont l'éditeur ne se présente pas` : null].filter(Boolean).join(', '),
                `. Le visiteur ouvre deux connexions, et la plus faible fixe le niveau.`),
            h('ul', { class: 'paradoxe-liste' }, betrayed.map(e => h('li', null, orgButton(e), ' ', h('code', null, classicalOf(e).map(t => t.host).join(', '))))),
            neither.length ? h('p', { class: 'paradoxe-ni' }, h('b', null, neither.map(e => e.name).join(', ')), ` : ni l'une ni l'autre. Porte d'entrée classique, et un tiers classique aussi (`, neither.map(e => classicalOf(e).map(t => t.host).join(', ')).join(' ; '), `).`) : null);

        const sec = h('section', { class: 'wrap chocolaterie', 'aria-labelledby': 'chocolaterie-titre' },
            defs,
            h('div', { class: 'enseigne' }, h('p', { class: 'enseigne-nom', id: 'chocolaterie-titre' }, 'Chocolaterie du Q-Day'), h('p', { class: 'enseigne-sous' }, 'Maison fondée sur X25519MLKEM768')),
            h('div', { class: 'store', 'aria-hidden': 'true' }),
            h('div', { class: 'devanture' }, vitre),
            paradoxe);
        $('scan').before(sec);

        // The Q-Day: the gold holds, the dark chocolate cracks.
        const keep = gold.slice(0, 2);
        sec.after(h('section', { class: 'wrap oeufs-qday', 'aria-labelledby': 'oeufs-qday-titre' },
            h('div', null,
                h('p', { class: 'sur' }, 'Le jour où l\'ordinateur quantique arrive'),
                h('h2', { id: 'oeufs-qday-titre' }, 'Le papier doré tient, ', h('em', null, 'le chocolat nu se fend.')),
                h('p', null, `Un échange de clés enregistré aujourd'hui en classique se lira ce jour-là. L'emballage hybride, lui, résiste.`)),
            h('ul', { class: 'oeufs-qday-rang' },
                keep.map(p => h('li', { class: 'tient' }, egg(62, 'or', p.name), h('span', null, p.name))),
                h('li', { class: 'separe', 'aria-hidden': 'true' }),
                dark.map(p => h('li', null, egg(62, 'fendu'), h('span', null, p.orgs.map(e => e.name).join(', ')))))));
    }
})();
