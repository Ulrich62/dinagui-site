import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheck,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHome,
  FiBookOpen,
  FiHeart,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import { breadcrumbList, realEstateListingProduct, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Location d'appartements — Plaza Platinium Immeuble 5",
  description:
    "Appartements F3 et F4 modernes à la Cité Plaza Platinium, Immeuble 5, Kipé (Conakry). 6 typologies de 83 à 119 m², plan de financement accessible, commodités complètes.",
  alternates: { canonical: "/nos-offres/location-dappartements" },
  openGraph: {
    title: "Location d'appartements — Plaza Platinium Immeuble 5",
    description:
      "Appartements F3 et F4 à la Cité Plaza Platinium, Kipé (Conakry). 6 typologies, plan de financement, commodités premium.",
    url: "/nos-offres/location-dappartements",
    locale: "fr_GN",
    type: "website",
    images: [{ url: "/images/plaza-platinium/brochure-01.jpg", width: 1200, height: 630, alt: "Plaza Platinium — Immeuble 5" }],
  },
};

type Typologie = {
  code: string;
  variant?: string;
  surface: string;
  plan: string;
  rooms: { label: string; surface: string }[];
};

const typologies: Typologie[] = [
  {
    code: "C1",
    variant: "Variante symétrique C1'",
    surface: "118,71 m²",
    plan: "/images/plaza-platinium/brochure-09.jpg",
    rooms: [
      { label: "Chambre Principale", surface: "17,46 m²" },
      { label: "Toilette", surface: "7,09 m²" },
      { label: "Chambre 2", surface: "16,81 m²" },
      { label: "Toilette 2", surface: "6,78 m²" },
      { label: "Chambre 3", surface: "10,62 m²" },
      { label: "Toilette 3", surface: "7,58 m²" },
      { label: "Salon + Salle à manger", surface: "36,36 m²" },
      { label: "Cuisine", surface: "10,46 m²" },
      { label: "Balcon", surface: "5,56 m²" },
    ],
  },
  {
    code: "C2",
    variant: "Variante symétrique C2'",
    surface: "100,54 m²",
    plan: "/images/plaza-platinium/brochure-11.jpg",
    rooms: [
      { label: "Chambre Principale", surface: "17,18 m²" },
      { label: "Toilette", surface: "7,11 m²" },
      { label: "Chambre 2", surface: "12,15 m²" },
      { label: "Toilette 2", surface: "7,85 m²" },
      { label: "Chambre 3", surface: "10,30 m²" },
      { label: "Salon + Salle à manger", surface: "31,95 m²" },
      { label: "Cuisine", surface: "8,64 m²" },
      { label: "Balcon", surface: "5,38 m²" },
    ],
  },
  {
    code: "C3",
    variant: "Variante symétrique C3'",
    surface: "83,11 m²",
    plan: "/images/plaza-platinium/brochure-13.jpg",
    rooms: [
      { label: "Chambre Principale", surface: "14,81 m²" },
      { label: "Toilette", surface: "6,45 m²" },
      { label: "Chambre", surface: "12,50 m²" },
      { label: "Toilette 2", surface: "6,90 m²" },
      { label: "Salon + Salle à manger", surface: "24,50 m²" },
      { label: "Cuisine", surface: "9,30 m²" },
      { label: "Balcon 1", surface: "3,60 m²" },
      { label: "Balcon 2", surface: "5,05 m²" },
    ],
  },
];

const commodites = [
  "Jardin de 10 000 m²",
  "Terrain de basket-ball",
  "Espace de jeux pour enfants",
  "Système d'interphone par appartement",
  "Un parking par appartement",
  "Service de gardiennage 24h/24",
  "Service d'entretien et de nettoyage",
  "Groupes électrogènes de grande capacité (1000 kW par groupe)",
  "Ascenseurs aux normes internationales",
  "Réserves d'eau",
  "Fibre optique",
  "Électricité 24/24",
];

const kipePiliers = [
  {
    icon: FiMapPin,
    title: "Accessibilité",
    items: [
      "Aéroport",
      "10 min du centre ville",
      "30 min du CBD Koloma",
      "5 min Route Corniche nord / rond-point Kipé",
    ],
  },
  {
    icon: FiBookOpen,
    title: "Éducation",
    items: [
      "Lycée Français Albert Camus",
      "Université Mercure International",
      "Crèche École Tom Pouce",
    ],
  },
  {
    icon: FiHeart,
    title: "Santé",
    items: [
      "Hôpital de l'Amitié Sino-Guinéenne",
      "Flamboyant Centre de Santé",
      "Pharmacie Nouni / central de Kipé",
      "Clinique Ophtalmologique Baratinée",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Institutions & entreprises",
    items: [
      "Ambassades / Ministères",
      "Sièges de sociétés multinationales",
      "Parcs industriels",
    ],
  },
  {
    icon: FiCheck,
    title: "Quotidienne & loisirs",
    items: [
      "Hôtel Sheraton",
      "Prima Center / Plaza Mall",
      "Centre commercial Plaza Diamant",
      "Banques : Ecobank, Vista, Banque Islamique, Orabank, BPMG",
      "Restaurant, bar, boulangerie, supérette, salle de gym",
    ],
  },
];

const programme = [
  {
    title: "Loisirs",
    items: ["Espaces de jeux pour enfants", "Salle de sport, terrain basket & football", "Jardins publics"],
  },
  {
    title: "Services publics",
    items: ["Établissements scolaires", "Hôpitaux", "Gendarmerie", "Hôtel Sheraton"],
  },
  {
    title: "Espaces commerciaux",
    items: ["Plaza Mall", "Restaurants", "Banques", "Supérettes", "Télécommunication"],
  },
];

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          realEstateListingProduct({
            name: "Plaza Platinium — Immeuble 5",
            description: "Location d'appartements F3 et F4 à la Cité Plaza Platinium, Kipé, Conakry. Typologies C1/C2/C3 de 83 à 119 m² avec commodités complètes et plan de financement.",
            path: "/nos-offres/location-dappartements",
            image: "/images/plaza-platinium/brochure-01.jpg",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbList([
            { name: "Accueil", path: "/" },
            { name: "Nos offres", path: "/nos-offres" },
            { name: "Location d'appartements", path: "/nos-offres/location-dappartements" },
          ])
        )}
      />
      <PageHero
        title="Location d'appartements"
        subtitle="Cité Plaza Platinium — Immeuble 5 · Kipé, Conakry"
        backgroundImage="/images/plaza-platinium/brochure-01.jpg"
        bordered
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1340px] mx-auto px-6 py-4 text-sm text-[#6b7280] font-[Roboto]">
          <Link href="/" className="hover:text-[#F88732]">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/nos-offres" className="hover:text-[#F88732]">Nos offres</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1f2d3d]">Location d&apos;appartements</span>
        </div>
      </div>

      {/* Présentation */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-[#F88732]" />
                <div className="w-8 h-px bg-gray-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-6">
                Présentation du projet
              </h2>
              <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto] mb-5">
                La <strong className="text-[#1f2d3d]">Cité Plaza Platinium</strong> vise à
                offrir des logements modernes, de qualité et abordables, à proximité du
                nouveau centre administratif et financier de Conakry, dans le quartier de
                <strong className="text-[#1f2d3d]"> Kipé</strong>, un quartier dynamique et
                en pleine expansion.
              </p>
              <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto] mb-5">
                L&apos;<strong className="text-[#1f2d3d]">Immeuble 5</strong> vous propose
                des appartements de F3 à F4, avec un aménagement intérieur optimisé offrant
                davantage de confort au niveau de la chambre principale et du séjour.
              </p>
              <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto]">
                Un <strong className="text-[#F88732]">plan de financement</strong> avantageux
                est également accordé à nos futurs locataires, rendant ces magnifiques
                appartements plus accessibles à tous.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/plaza-platinium/brochure-02.jpg"
                alt="Vue aérienne de la Cité Plaza Platinium à Kipé"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Présentation du programme
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              Un écosystème complet pensé pour le quotidien, les loisirs et les services essentiels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programme.map((bloc) => (
              <div
                key={bloc.title}
                className="bg-white rounded-[10px] shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F88732] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <h3 className="text-xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-5">
                  {bloc.title}
                </h3>
                <ul className="space-y-3">
                  {bloc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#6b7280] text-[15px] font-[Roboto]">
                      <FiCheck className="text-[#F88732] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kipé - pôle urbain */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-[#F88732]" />
                <div className="w-8 h-px bg-gray-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-6">
                Kipé — pôle urbain dynamique, cadre de vie convivial
              </h2>
              <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto]">
                Plaza Platinium bénéficie d&apos;une situation géographique stratégique à
                Kipé, à quelques minutes de l&apos;aéroport, du centre-ville et des
                principaux pôles économiques, éducatifs et de santé de Conakry.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/plaza-platinium/brochure-05.jpg"
                alt="Situation géographique de Kipé"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {kipePiliers.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-[#faf5f0] rounded-[10px] p-7 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#F88732] flex items-center justify-center mb-5">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-4">
                    {p.title}
                  </h3>
                  <ul className="space-y-2">
                    {p.items.map((it, i) => (
                      <li key={i} className="text-[#6b7280] text-sm font-[Roboto] leading-relaxed">
                        · {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galerie ambiance */}
      <section className="py-24 bg-[#1f2d3d]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[Roboto_Condensed] uppercase">
              Ambiance & architecture
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/plaza-platinium/brochure-06.jpg",
              "/images/plaza-platinium/brochure-07.jpg",
              "/images/plaza-platinium/brochure-08.jpg",
              "/images/plaza-platinium/brochure-15.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-lg overflow-hidden group">
                <Image
                  src={src}
                  alt={`Plaza Platinium vue ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typologies */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Typologies d&apos;appartements
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              Trois typologies et leurs variantes symétriques — chaque plan est conçu pour maximiser lumière, ventilation et confort.
            </p>
          </div>

          <div className="space-y-10">
            {typologies.map((t) => (
              <div
                key={t.code}
                className="bg-white rounded-[10px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="relative h-[320px] lg:h-auto min-h-[360px] bg-white">
                  <Image
                    src={t.plan}
                    alt={`Plan type ${t.code}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                  <div className="absolute top-4 left-4 bg-[#F88732] text-white px-4 py-2 rounded">
                    <span className="text-lg font-bold font-[Roboto_Condensed]">{t.surface}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                        Type {t.code}
                      </h3>
                      {t.variant && (
                        <p className="text-sm text-[#F88732] font-[Roboto] mt-1">{t.variant}</p>
                      )}
                    </div>
                    <span className="bg-[#FCEEE5] text-[#1f2d3d] text-sm font-medium px-3 py-1.5 rounded font-[Roboto]">
                      {t.surface}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs uppercase tracking-wider text-[#6b7280] font-[Roboto_Condensed] font-semibold mb-3">
                      Désignation
                    </p>
                    <ul className="divide-y divide-gray-100">
                      {t.rooms.map((r, i) => (
                        <li key={i} className="flex items-center justify-between py-2.5 text-[15px] font-[Roboto]">
                          <span className="text-[#1f2d3d]">{r.label}</span>
                          <span className="text-[#6b7280]">{r.surface}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodités */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/plaza-platinium/brochure-15.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2332]/80" />
        <div className="relative z-10 max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[Roboto_Condensed] uppercase">
              Les commodités
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[15px] text-white/80 leading-relaxed font-[Roboto]">
              Tous les services et équipements pour un cadre de vie serein et sécurisé.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commodites.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-5 hover:bg-white/15 transition-colors"
              >
                <FiCheck className="text-[#F88732] mt-1 flex-shrink-0 text-lg" />
                <span className="text-white text-[15px] font-[Roboto]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens complémentaires */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Pour aller plus loin
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link
              href="/nos-offres/standard-de-livraison"
              className="group bg-[#F88732] hover:bg-[#e0752a] text-white rounded-[10px] p-8 flex items-center gap-5 transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <FiFileText className="text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-[Roboto_Condensed] uppercase mb-1">
                  Standard de livraison
                </h3>
                <p className="text-white/90 text-sm font-[Roboto]">
                  Voir tout ce qui est inclus dans la livraison
                </p>
              </div>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/nos-offres"
              className="group bg-[#1f2d3d] hover:bg-[#263447] text-white rounded-[10px] p-8 flex items-center gap-5 transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-lg bg-[#F88732] flex items-center justify-center flex-shrink-0">
                <FiHome className="text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-[Roboto_Condensed] uppercase mb-1">
                  Toutes nos offres
                </h3>
                <p className="text-white/80 text-sm font-[Roboto]">
                  Retour au catalogue des offres
                </p>
              </div>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Appartements F3", href: "/appartements-f3" },
              { name: "Appartements F4", href: "/appartements-f4" },
              { name: "Appartements F5", href: "/appartements-f5" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center justify-between border border-gray-200 hover:border-[#F88732] rounded-lg px-5 py-4 text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto] text-[15px]"
              >
                <span>{a.name}</span>
                <FiArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires bancaires */}
      <section className="py-20 bg-[#faf5f0]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className="w-8 h-px bg-gray-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-3">
            Nos partenaires bancaires
          </h2>
          <p className="text-[#6b7280] text-[15px] font-[Roboto] mb-10 max-w-[640px] mx-auto">
            Un plan de financement adapté, en partenariat avec les grandes institutions bancaires de la place.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Ecobank", "Banque Islamique de Guinée", "Orabank", "Vista"].map((b) => (
              <div
                key={b}
                className="bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow px-6 py-8 flex items-center justify-center text-[#1f2d3d] font-[Roboto_Condensed] font-bold uppercase tracking-wide text-sm md:text-base text-center"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#1f2d3d]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className="w-8 h-px bg-white/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[Roboto_Condensed] uppercase leading-tight">
            Informations & visites
          </h2>
          <p className="text-white/75 text-[15px] md:text-base mb-10 font-[Roboto] max-w-[640px] mx-auto leading-relaxed">
            Planifions une visite de l&apos;Immeuble 5 et parlons de votre projet
            d&apos;acquisition ou de location.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[760px] mx-auto mb-10 text-left">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="text-xs uppercase tracking-wider text-[#F88732] font-[Roboto_Condensed] font-bold mb-2">
                Contact direct Plaza Platinium
              </p>
              <a href="tel:+224627277272" className="flex items-center gap-2 text-white text-lg font-[Roboto_Condensed] font-bold hover:text-[#F88732] transition-colors mb-1">
                <FiPhone /> 627 27 72 72
              </a>
              <a href="https://www.plazaplatinium.com" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm font-[Roboto] hover:text-[#F88732] transition-colors">
                www.plazaplatinium.com
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="text-xs uppercase tracking-wider text-[#F88732] font-[Roboto_Condensed] font-bold mb-2">
                Contact DINAGUI SARL
              </p>
              <a href="tel:+224613500404" className="flex items-center gap-2 text-white text-lg font-[Roboto_Condensed] font-bold hover:text-[#F88732] transition-colors mb-1">
                <FiPhone /> +224 613 50 04 04
              </a>
              <a href="mailto:dinagui.sarlu@gmail.com" className="flex items-center gap-2 text-white/70 text-sm font-[Roboto] hover:text-[#F88732] transition-colors">
                <FiMail /> dinagui.sarlu@gmail.com
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
          >
            Demandez un devis <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
