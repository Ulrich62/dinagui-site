# DINAGUI SARL - Clone Next.js

## Contexte du projet

Clone du site WordPress **dinagui-sarlu.bigdanhe.com** en Next.js.
DINAGUI SARL est une entreprise guinéenne spécialisée en BTP, gestion immobilière et services pluridisciplinaires, basée à Conakry.

## Stack technique

- **Framework** : Next.js 16 (App Router) + TypeScript
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion
- **Carousel** : Swiper
- **Compteurs animés** : React CountUp + React Intersection Observer
- **Icones** : React Icons (Feather Icons), Heroicons, Lucide React
- **Polices** : Roboto + Roboto Condensed (Google Fonts via next/font)

## Charte graphique

| Token | Valeur | Usage |
|-------|--------|-------|
| `orange` | `#F88732` | Couleur principale, CTA, accents |
| `orange-dark` | `#e0752a` | Hover sur boutons |
| `orange-light` | `#FCEEE5` | Fonds clairs, badges |
| `dark` | `#1f2d3d` | Texte principal, header, footer |
| `gray` | `#6b7280` | Texte secondaire |
| `beige` | `#faf5f0` | Fonds de sections alternées |

## Architecture du projet

```
src/
├── app/
│   ├── layout.tsx              # Layout racine (Header + Footer)
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux + thème Tailwind
│   ├── a-propos/page.tsx       # Page À-propos
│   ├── notre-equipe/page.tsx   # Page Équipe (6 membres)
│   ├── contact/page.tsx        # Page Contact (formulaire)
│   ├── blog/page.tsx           # Page Blog
│   ├── appartements-f3/page.tsx
│   ├── appartements-f4/page.tsx
│   ├── appartements-f5/page.tsx
│   └── services/
│       ├── service-btp/page.tsx
│       ├── gestion-immobiliere/page.tsx
│       ├── placements-de-personnels/page.tsx
│       ├── service-de-gardiennage-de-conciergerie/page.tsx
│       ├── service-de-nettoyage/page.tsx
│       ├── fourniture-de-bureau-et-equipement/page.tsx
│       ├── logistique-et-transport/page.tsx
│       ├── commerce-general/page.tsx
│       ├── transit-et-douane/page.tsx
│       └── consulting/page.tsx
├── components/
│   ├── Header.tsx              # Navigation sticky + menu mobile
│   ├── Footer.tsx              # Footer 4 colonnes
│   ├── HeroSlider.tsx          # Hero fullscreen page d'accueil
│   ├── ExpertiseCards.tsx      # 4 cartes expertise
│   ├── AboutSection.tsx        # Section "Qui sommes-nous"
│   ├── StatsSection.tsx        # Compteurs animés (parallaxe)
│   ├── ServicesSection.tsx     # Grille 2x2 services
│   ├── ProjectsSection.tsx     # Projet phare (F3)
│   ├── TeamSection.tsx         # 4 membres équipe
│   ├── CTASection.tsx          # Call-to-action "Investissez"
│   ├── TestimonialsSection.tsx # Carousel témoignages (Swiper)
│   ├── PageHero.tsx            # Banner hero réutilisable
│   ├── ServicePageLayout.tsx   # Layout réutilisable pages services
│   └── ApartmentCard.tsx       # Carte appartement réutilisable
public/
└── images/
    ├── logo-dinagui.avif       # Logo principal
    ├── logo-dinagui-small.avif # Logo footer
    ├── parallax-bg.avif        # Background parallaxe stats
    ├── pattern-bg.png          # Pattern décoratif
    ├── about-famille.avif      # Image section about
    ├── icons/                  # Icones expertise (webp/avif)
    ├── services/               # Photos des services (avif)
    ├── team/                   # Photo équipe (png)
    ├── apartments/             # Plans et photos appartements
    └── blog/                   # Images articles blog
```

## Conventions de code

- **Composants client** : marqués `"use client"` uniquement quand nécessaire (state, effets, événements)
- **Images** : toujours `next/image` avec `width`/`height` explicites
- **Liens** : toujours `next/link`
- **Couleurs** : utiliser les tokens Tailwind custom définis dans `globals.css`, ou les valeurs hex directes entre crochets (ex: `bg-[#F88732]`)
- **Espacement** : `max-w-[1340px] mx-auto px-6` pour le conteneur principal
- **Boutons CTA** : `bg-[#F88732] text-white rounded-full px-8 py-3 hover:bg-[#e0752a]`
- **Cartes** : `rounded-[10px] shadow-md hover:-translate-y-1.5 transition-all duration-300`
- **Sections** : padding vertical `py-20`, fond alterné blanc / beige (`#faf5f0`)

## Pages et leur contenu

### Page d'accueil (`/`)
9 sections : HeroSlider, ExpertiseCards, AboutSection, StatsSection, ServicesSection, ProjectsSection, TeamSection, CTASection, TestimonialsSection

### Pages services (10)
Utilisent `ServicePageLayout` : hero banner, texte intro, grille de cartes services, CTA, liste "Autres services"

### Pages appartements (3)
Utilisent `ApartmentCard` : hero, cartes avec plan/photo, surface, configuration, features, prix, section contact

### Pages institutionnelles
- **À-propos** : présentation, 4 piliers, FAQ accordion, CTA
- **Notre équipe** : grille 6 membres
- **Contact** : infos + formulaire avec validation client
- **Blog** : listing articles

## Commandes

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linting ESLint
```

## Informations entreprise (données du site)

- **Raison sociale** : DINAGUI SARL
- **Slogan** : "Un choix sur et durable"
- **Telephone** : (+224) 613 50 04 04
- **Email** : dinagui.sarlu@gmail.com
- **Adresse** : Conakry/Kipe, C/Ratoma Centre emetteur Cite Plaza Platinium
- **Directeur General** : Dine DIALLO
- **Activite depuis** : 2012

## Points d'attention pour la suite

- Le formulaire de contact est front-end uniquement (pas de backend/API route)
- Les images d'equipe utilisent toutes le meme placeholder
- Le blog n'a qu'un seul article (comme le site original)
- Les temoignages sont des donnees fictives realistes
- Pas de page 404 custom pour l'instant
- Pas de sitemap.xml ni robots.txt generes
