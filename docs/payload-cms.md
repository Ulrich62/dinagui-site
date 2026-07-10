# Payload CMS — gestion des annonces DINAGUI

Le site intègre **Payload 3** pour que les annonces (location **et** vente
d'appartements), photos et vidéos soient gérées sans intervention développeur.
Une seule codebase Next.js, admin sur `/admin`, base Postgres (Neon) et médias
sur Vercel Blob.

- Interface d'administration : `https://<domaine>/admin`
- Le site public reste **statique (ISR)** : il est régénéré à chaque
  publication et continue de servir même si la base est en veille.

---

## Architecture

| Élément | Emplacement | Rôle |
| --- | --- | --- |
| Config Payload | `src/payload.config.ts` | collections, DB, Blob, i18n FR |
| Collections | `src/collections/` | `Listings`, `Media`, `Videos`, `Users` |
| Couche d'accès front | `src/lib/listings.ts` | mappe les docs Payload → `Offer` |
| Boilerplate admin/API | `src/app/(payload)/` | **ne pas modifier** |
| Site public | `src/app/(site)/` | pages Next existantes |
| Migrations DB | `src/migrations/` | schéma versionné (appliqué au build) |
| Script d'import | `scripts/migrate-listings.ts` | migration one-shot des annonces statiques |

Stockage des médias : **Vercel Blob** dès que `BLOB_READ_WRITE_TOKEN` est
présent (prod/preview). En local sans token → stockage disque (`/media`,
`/videos`, gitignorés).

---

## Rôles

- **Administrateur** : tout, y compris créer/supprimer des utilisateurs.
- **Éditeur** : gère les annonces et médias ; peut changer son mot de passe
  mais **pas** son rôle, et ne peut pas créer d'utilisateur.

---

## Mise en production (à faire une seule fois)

### 1. Provisionner la base et le stockage sur Vercel

1. Dashboard Vercel → projet → **Storage** → **Create Blob store**.
   La variable `BLOB_READ_WRITE_TOKEN` est injectée automatiquement.
2. Dashboard Vercel → **Marketplace** → **Neon** → connecter au projet.
   Utiliser la chaîne de connexion **poolée** (endpoint `-pooler`).
3. Générer le secret Payload : `openssl rand -hex 32`.

### 2. Variables d'environnement (Vercel → Settings → Environment Variables)

À définir en **Production** et **Preview** :

| Variable | Source |
| --- | --- |
| `DATABASE_URL` | Neon (chaîne poolée) — ou `POSTGRES_URL` selon l'intégration |
| `PAYLOAD_SECRET` | `openssl rand -hex 32` |
| `BLOB_READ_WRITE_TOKEN` | créé par le Blob store |

> Ces variables ne sont **jamais** committées. En local, les mettre dans
> `.env.local` (gitignoré).

### 3. Déploiement

Le build Vercel lance automatiquement les migrations :

```
build = payload migrate && next build   (script npm "build")
```

Sur une base Neon vierge, la migration `src/migrations/*_initial` crée tout le
schéma, puis Next construit le site.

### 4. Créer les comptes

Après le premier déploiement, aller sur `/admin` → l'écran **création du
premier utilisateur** apparaît (rôle `admin`). Créer ensuite le compte du
client en rôle **Éditeur**.

### 5. Importer les annonces existantes (une seule fois)

Avec les variables **de production** (Neon + Blob) dans l'environnement :

```bash
npx tsx scripts/migrate-listings.ts
```

Le script est **idempotent** (il saute les slugs déjà présents). Il importe les
6 annonces de `src/lib/rentals.ts` + photos/vidéos de `public/images/rentals/`.

> Ne supprimer `public/images/rentals/` et le tableau `rentalOffers` de
> `src/lib/rentals.ts` **qu'après recette complète** (réversibilité).

---

## Développement local

Payload a besoin d'un Postgres. Deux options :

- **Neon (recommandé)** : réutiliser une base Neon de dev, mettre les variables
  dans `.env.local`. Aucun réglage macOS.
- **Postgres local** : `createdb dinagui_payload` puis dans `.env.local` :
  `DATABASE_URL=postgresql://<user>@localhost:5432/dinagui_payload`.
  ⚠️ Avec **Postgres.app**, macOS demande de confirmer un dialogue de
  permission au premier accès de chaque process (sinon le serveur renvoie 500 :
  « failed to verify trust authentication »). Confirmer le dialogue une fois.

En local, le schéma est poussé automatiquement (`push`). Commandes utiles :

```bash
npm run dev              # serveur de dev (admin sur /admin)
npm run generate:types   # régénère src/payload-types.ts après un changement de collection
npm run migrate:create   # crée une migration après un changement de schéma (À COMMITTER)
npm run build:next       # build Next sans lancer les migrations (build local)
```

**Toute évolution de schéma** = `npm run migrate:create <nom>` + commit du
dossier `src/migrations/`. Jamais de modification manuelle du schéma en prod.

---

## Recette (compte Éditeur du client)

1. Créer une annonce complète (photos + vidéo > 4,5 Mo) et publier
   → visible sur le site en < 1 min.
2. Modifier le titre et une photo → la page se met à jour.
3. Passer **Disponible** à faux → l'annonce disparaît de la liste.
4. Créer un brouillon sans publier → invisible sur le site.
5. Supprimer une annonce test → la page détail renvoie une 404.
6. Vérifier qu'il **ne peut pas** créer d'utilisateur ni changer son rôle.

---

## Notes techniques

- Uploads > 4,5 Mo : gérés par `clientUploads: true` (envoi direct navigateur →
  Blob, contourne la limite serveur Vercel). Un échec 413 signifierait que
  cette option a sauté de la config.
- Le rappel de fin d'upload client ne peut pas joindre `localhost` : tester
  l'upload d'une grosse vidéo sur un déploiement **Preview**, pas en local.
- Le site public ne lit jamais la base à chaud (pages ISR) : pas de latence de
  réveil Neon côté visiteurs.
