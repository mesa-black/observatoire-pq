# L'école du Q-Day

*Relevé n° 5 · 16 février 2027 — et page permanente « Comprendre »*
*Brouillon. Chiffres des mesures du 16 octobre 2026, à remplacer par ceux de la passe de décembre.*

Depuis quatre relevés, on vous parle de TLS, de X25519MLKEM768, d'hybride et de Q-Day comme si c'était évident. Ça ne l'est pas. Ce relevé-ci ne mesure rien de nouveau : il explique, en neuf étapes courtes, ce que les autres mesurent. Pas besoin d'être ingénieur : si vous savez ce qu'est un cadenas, vous avez tout ce qu'il faut.

---

## 1. La porte d'entrée

Quand vous ouvrez le site de votre banque, un petit cadenas apparaît dans la barre d'adresse. Il veut dire deux choses : personne ne peut lire ce qui passe entre vous et la banque, et c'est bien la banque qui vous répond, pas un imposteur.

Ce cadenas, c'est **TLS** (*Transport Layer Security*), le protocole qui chiffre le web. Le « S » de HTTPS, c'est lui. Chaque fois que vous arrivez sur un site, votre navigateur et le serveur commencent par une **poignée de main** (*handshake*) : en quelques millisecondes, ils se mettent d'accord sur la manière de chiffrer, le serveur prouve son identité, et ils fabriquent ensemble une clé secrète que personne d'autre ne connaît.

Cette poignée de main se fait à la **porte d'entrée** du site : le premier serveur qui répond. C'est elle que l'Observatoire mesure, chaque mois, pour 115 organisations françaises. Ce qui se passe derrière la porte, on ne le voit pas d'ici, et on ne prétend pas le voir.

> **À essayer** — *[le test en direct]* Votre navigateur vient de faire une poignée de main avec nous. Elle a utilisé **{groupe}**. *(handshake.mesa.black)*

---

## 2. Se mettre d'accord sur un secret, devant tout le monde

Voici le tour de magie au cœur de tout ça. Votre navigateur et le serveur ne se sont jamais rencontrés. Tout ce qu'ils se disent passe par Internet, où n'importe qui peut écouter. Et pourtant, à la fin de la poignée de main, ils partagent un secret que l'espion qui a tout entendu ignore.

L'image la plus simple est celle des **pots de peinture**. Chacun choisit une couleur secrète. Ils partent d'une couleur commune, publique, disons du jaune. Chacun mélange sa couleur secrète au jaune et envoie le mélange à l'autre. L'espion voit passer les deux mélanges. Puis chacun ajoute sa propre couleur secrète au mélange reçu. Les deux obtiennent exactement la même teinte finale : jaune + secret A + secret B. L'espion, lui, a les deux mélanges mais ne sait pas « démélanger » la peinture pour retrouver les secrets.

C'est l'**échange de clés** (inventé en 1976 par Diffie et Hellman). En vrai, on ne mélange pas de la peinture mais des nombres, avec une opération mathématique facile à faire et quasi impossible à défaire. Aujourd'hui, la recette la plus utilisée s'appelle **X25519** : elle utilise une **courbe elliptique** (une famille de calculs sur une courbe particulière, la « Curve25519 »). Rapide, sûre, partout.

Sûre… contre les ordinateurs d'aujourd'hui.

---

## 3. Le Q-Day

Un **ordinateur quantique** n'est pas un ordinateur classique plus rapide. Il calcule autrement, et pour certains problèmes très précis, il change tout. En 1994, le mathématicien Peter Shor a montré qu'un ordinateur quantique assez grand saurait justement « démélanger la peinture » : retrouver le secret à partir de ce qui est passé en public. X25519 tomberait, et avec lui RSA et toutes les courbes elliptiques.

Le jour où une telle machine existera, on l'appelle le **Q-Day**. Personne ne connaît la date. Certains disent dix ans, d'autres vingt, d'autres jamais. L'Observatoire ne parie pas : il vous laisse faire avancer un curseur.

Mais voici ce qui rend la question urgente **aujourd'hui** : quelqu'un peut **enregistrer maintenant** tout le trafic chiffré qu'il intercepte, le stocker, et le **déchiffrer plus tard**, le jour du Q-Day. En anglais : *harvest now, decrypt later*. Vos échanges avec votre banque de 2026 sont peut-être déjà sur un disque quelque part, attendant la machine qui les ouvrira.

Ce n'est un problème que pour ce qui doit rester secret longtemps. Un code de connexion qui expire dans cinq minutes, peu importe. Un dossier médical, un secret industriel, une conversation diplomatique, beaucoup plus. C'est pour ça que chaque relevé associe à chaque organisation une **durée de vie** de ses données.

> **À essayer** — *[le curseur du Q-Day]* Faites avancer l'année. Les portes « classiques » dont les données doivent rester secrètes au-delà s'allument.

---

## 4. Une nouvelle recette : ML-KEM

Les cryptographes n'ont pas attendu. Depuis 2016, le NIST (l'institut américain des normes) a organisé un concours mondial pour trouver des recettes qui résistent aux ordinateurs quantiques. En août 2024, il a publié la gagnante pour l'échange de clés : **ML-KEM** (norme FIPS 203), issue d'une proposition nommée Kyber.

ML-KEM ne repose plus sur des courbes, mais sur des **réseaux euclidiens** (*lattices*). L'image : un immense quadrillage dans des centaines de dimensions, et un point légèrement « bruité », décalé au hasard. Retrouver de quel point exact du quadrillage il vient est facile si on a la bonne carte, et effroyablement difficile sinon, y compris pour un ordinateur quantique, autant qu'on le sache.

Le **768** de ML-KEM-768 indique sa taille, et donc son niveau de sécurité : le niveau intermédiaire des trois proposés, celui que tout le monde a choisi pour le web.

---

## 5. L'hybride, ou pourquoi on garde les deux

ML-KEM est récent. Les cryptographes sont confiants, mais une recette jeune peut avoir un défaut qu'on n'a pas encore trouvé. X25519, lui, est éprouvé depuis vingt ans, mais tombera au Q-Day.

La solution retenue partout : **les deux à la fois**. La poignée de main fait un échange X25519 *et* un échange ML-KEM, et mélange les deux secrets pour fabriquer la clé finale. Pour lire la conversation, un attaquant devrait casser **les deux**. Si ML-KEM a un défaut caché, X25519 tient encore aujourd'hui ; au Q-Day, X25519 tombe mais ML-KEM tient. C'est ce qu'on appelle un échange **hybride**. L'ANSSI le recommande explicitement.

Et voilà le nom qui revient dans tous les relevés, enfin décodé :

| X25519 | MLKEM | 768 |
|---|---|---|
| la recette classique, éprouvée | la recette post-quantique, normalisée en 2024 | sa taille, le niveau de sécurité |

**X25519MLKEM768**, c'est l'hybride. Quand un relevé dit qu'une porte est **scellée**, c'est qu'elle l'accepte.

Combien ça coûte ? Les messages sont un peu plus gros (un peu plus d'un kilo-octet de plus), et sur les portes que nous avons mesurées, la poignée de main hybride prend en médiane **1,8 milliseconde** de plus que la classique. Imperceptible.

---

## 6. Ce qui peut attendre : les signatures

La poignée de main fait deux choses : elle fabrique la clé secrète (l'échange de clés, chapitres 2 à 5) et elle prouve l'identité du serveur, grâce à un **certificat** signé par une autorité de confiance.

Cette signature-là n'a pas la même urgence. Pour se faire passer pour votre banque, un attaquant doit falsifier une signature **au moment** où vous vous connectez. Il ne peut pas enregistrer une signature aujourd'hui pour en profiter dans dix ans : la connexion sera finie depuis longtemps. Il n'y a pas de « *harvest now* » pour les signatures.

Les signatures post-quantiques existent (ML-DSA, normalisée elle aussi en 2024), et les certificats changeront. Mais sans urgence pour vos données : un certificat se remplace tous les trois mois, sans rien déménager. C'est pour ça que l'Observatoire juge les portes sur leur **échange de clés**, et pas sur leur certificat.

---

## 7. Qui tient la clé

Une précision qui change la lecture de tous les relevés : la porte d'entrée d'une organisation n'est pas forcément chez elle. Très souvent, c'est un **CDN** (*Content Delivery Network*), comme Cloudflare, Akamai ou CloudFront d'Amazon, qui répond à sa place : un réseau mondial de serveurs qui accélère et protège des milliers de sites à la fois.

Le CDN fait la poignée de main, donc il **tient la clé** : il déchiffre le trafic à l'entrée, puis le transmet au serveur de l'organisation. Et quand un CDN active l'hybride, il le fait pour **tous** ses clients d'un coup. Sur les mesures d'octobre, 67 des 80 portes scellées l'étaient grâce à leur CDN, sans que l'organisation ait rien eu à décider. Et sur les 13 organisations qui gardent leur clé sur leur propre réseau, seules 2 avaient l'hybride.

Une dernière condition : l'hybride n'existe que dans **TLS 1.3**, la version actuelle du protocole. Une porte restée en TLS 1.2 ne peut pas le proposer, quoi qu'il arrive. En octobre, c'était encore le cas du CIC, du Crédit Agricole, du ministère des Armées, de Mon espace santé ou de Renault.

---

## 8. Vérifiez vous-même

Rien de ce que publie l'Observatoire ne demande de nous croire sur parole.

- **Dans votre navigateur** — Chrome ou Edge : touche F12, onglet *Sécurité* (*Security*). La ligne « *Key exchange* » indique **X25519MLKEM768** si la connexion est hybride.
- **En ligne de commande** — avec OpenSSL 3.5 ou plus récent : `openssl s_client -connect www.exemple.fr:443 -groups X25519MLKEM768` ; si la poignée de main réussit, la porte est scellée.
- **Avec notre outil** — Sablier, l'outil open source qui produit ces mesures, sait faire la même vérification sur vos propres serveurs : `sablier probe votre-site.fr`.

Et votre navigateur à vous ? Les versions récentes de Chrome, Edge, Firefox et Safari parlent toutes l'hybride. *[Résultat du test en direct, rappelé ici.]*

---

## 9. Le glossaire

**CDN** — Réseau de serveurs qui répond à la place d'un site pour l'accélérer et le protéger. Il tient la clé de la porte d'entrée.
**Certificat** — Pièce d'identité d'un site, signée par une autorité de confiance. Prouve qu'on parle au bon serveur.
**Courbe elliptique** — Famille de calculs mathématiques utilisée par la cryptographie actuelle (X25519). Cassée par un ordinateur quantique.
**Échange de clés** — Moment de la poignée de main où les deux côtés fabriquent un secret commun sans jamais l'envoyer.
**Harvest now, decrypt later** — Enregistrer aujourd'hui du trafic chiffré pour le déchiffrer au Q-Day.
**HTTPS** — Le web chiffré : HTTP transporté dans TLS.
**Hybride** — Échange de clés qui combine une recette classique et une recette post-quantique : il faut casser les deux.
**ML-KEM** — La recette post-quantique d'échange de clés normalisée en 2024 (FIPS 203).
**ML-DSA** — Son équivalent pour les signatures (FIPS 204).
**Poignée de main (handshake)** — Les premiers échanges d'une connexion chiffrée.
**Porte d'entrée** — Le premier serveur qui répond quand on se connecte à un site. C'est ce que l'Observatoire mesure.
**Post-quantique** — Qui résiste, autant qu'on le sache, à un ordinateur quantique.
**Q-Day** — Le jour, inconnu, où un ordinateur quantique saura casser l'échange de clés classique.
**Scellée** — Dans nos relevés : une porte qui accepte l'échange hybride X25519MLKEM768.
**TLS** — Le protocole qui chiffre les connexions sur Internet. La version 1.3 est la seule à porter l'hybride.
**X25519** — La recette classique d'échange de clés la plus répandue.
**X25519MLKEM768** — L'hybride : X25519 et ML-KEM-768 ensemble.

---

## Notes pour la mise en page (à retirer)

- Chaque chapitre tient en un écran, avec une seule manipulation au plus : le test en direct (1 et 8), les pots de peinture animés (2), le curseur du Q-Day (3), le nom décortiqué au survol (5), le trousseau en miniature (7).
- Les exemples sont les vraies organisations des relevés, avec leurs chiffres du jour de mesure.
- Page permanente « Comprendre » : mêmes chapitres, sans la date ; chaque terme technique des relevés 1 à 4 renvoie à son entrée du glossaire.
- Le test en direct dépend de handshake.mesa.black (DNS à créer) et de l'ajout de cette adresse dans la CSP de l'observatoire (`connect-src`).
