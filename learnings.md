# Learnings — dinagui-site

Décisions et faits récurrents à consulter avant toute tâche non-triviale (cf. CLAUDE.md global).

## Données entreprise

- **Coordonnées bureau DINAGUI SARL** : `9.605534, -13.651446` — Cité Plaza Platinium, Kipé, Conakry. Référencées dans :
  - `src/app/layout.tsx` — JSON-LD `GeoCoordinates`
  - `src/app/contact/page.tsx` — iframe Google Maps
- **Téléphone** : `(+224) 613 50 04 04`
- **Email** : `contact@dinagui.com` (JSON-LD) / `dinagui.sarlu@gmail.com` (certains contenus legacy)

## Conventions techniques

- **Embed Google Maps** : utiliser `https://maps.google.com/maps?q=<lat>,<lng>&z=17&output=embed`. Éviter les URLs `pb=` (contiennent un place ID qui peut pointer vers un autre lieu après un déplacement de coordonnées).
- **Formatage** : Prettier est configuré en hook `PostToolUse`. Toucher un seul fichier peut déclencher un reformatage local de ce fichier ; si le working tree contient déjà 50+ fichiers modifiés au démarrage d'une session, c'est probablement du reformatage en attente — à committer séparément (`chore: prettier`) pour ne pas polluer les PR fonctionnelles.

## Workflow Git / Déploiement

- **Branches** : une par tâche (format `fix/...`, `feat/...`, `chore/...`), jamais de commit direct sur `main` (cf. CLAUDE.md global).
- **Commits** : Conventional Commits.
- **Hébergement** : Vercel (`dinagui-site.vercel.app`). Preview déployé automatiquement à l'ouverture d'une PR, prod déployé au merge sur `main`.
- **Remote** : `git@github.com:Ulrich62/dinagui-site.git`.
