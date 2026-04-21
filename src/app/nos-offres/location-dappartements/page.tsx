import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiShield,
  FiKey,
  FiHome,
  FiFileText,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import RentalGridCard from "@/components/RentalGridCard";
import { rentalOffers } from "@/lib/rentals";
import { breadcrumbList, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Location d'appartements — DINAGUI SARL",
  description:
    "Appartements meublés et non meublés à louer à Conakry — Kaloum, Camayenne, Kipé et Nongo. Gestion locative assurée par DINAGUI, sécurité 24h/24 et électricité garantie.",
  alternates: { canonical: "/nos-offres/location-dappartements" },
  openGraph: {
    title: "Location d'appartements — DINAGUI SARL",
    description:
      "Appartements meublés et non meublés à louer à Conakry — 2 et 3 chambres, gestion locative DINAGUI.",
    url: "/nos-offres/location-dappartements",
    locale: "fr_GN",
    type: "website",
    images: [
      {
        url: "/images/rentals/luxueux-meuble-2ch-a/photo-01.jpg",
        width: 1200,
        height: 630,
        alt: "Appartement en location à Conakry — DINAGUI",
      },
    ],
  },
};

const zones = [
  {
    name: "Kaloum",
    description: "Cœur administratif et économique de Conakry — idéal pour les cadres et expatriés.",
  },
  {
    name: "Camayenne",
    description: "Quartier résidentiel prisé, proche des commerces, ambassades et lieux de loisirs.",
  },
  {
    name: "Kipé",
    description: "Pôle urbain dynamique à proximité du nouveau centre administratif et financier.",
  },
  {
    name: "Nongo",
    description: "Zone en pleine expansion, accessible et calme, parfaite pour familles et investisseurs.",
  },
];

const services = [
  {
    icon: FiKey,
    title: "Mise en location rapide",
    description:
      "Sélection rigoureuse des locataires, diffusion ciblée et visite organisée pour minimiser la vacance.",
  },
  {
    icon: FiFileText,
    title: "Contrats conformes",
    description:
      "Baux clairs, équilibrés et conformes à la législation guinéenne — propriétaires et locataires protégés.",
  },
  {
    icon: FiShield,
    title: "Gardiennage & sécurité",
    description:
      "Présence humaine qualifiée, contrôle d'accès et rondes — sur nos résidences sous gestion.",
  },
  {
    icon: FiHome,
    title: "Suivi & entretien",
    description:
      "Encaissement sécurisé des loyers, interventions techniques et rapports mensuels transparents.",
  },
];

export default function LocationPage() {
  return (
    <>
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
        subtitle="Appartements meublés et non meublés à Conakry — gestion locative DINAGUI"
        backgroundImage="/images/rentals/luxueux-meuble-2ch-a/photo-01.jpg"
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

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className="w-8 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-6">
            Trouvez votre prochain logement à Conakry
          </h2>
          <p className="text-[#6b7280] text-[15px] md:text-base leading-relaxed font-[Roboto] mb-5">
            <strong className="text-[#1f2d3d]">DINAGUI SARL</strong> accompagne particuliers,
            familles et expatriés dans la location d&apos;appartements modernes, sûrs et bien
            entretenus. Nous sélectionnons pour vous des logements meublés ou non meublés,
            avec des prestations adaptées à chaque usage.
          </p>
          <p className="text-[#6b7280] text-[15px] md:text-base leading-relaxed font-[Roboto]">
            Nos appartements sont disponibles dans les quartiers les plus stratégiques de
            Conakry, à proximité des centres d&apos;affaires, écoles, ambassades et commerces.
          </p>
        </div>
      </section>

      {/* Zones desservies */}
      <section className="py-20 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Zones desservies
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              DINAGUI propose des appartements en location dans les quartiers les plus
              recherchés de Conakry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((z) => (
              <div
                key={z.name}
                className="bg-white rounded-[10px] p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FiMapPin className="text-[#F88732] text-xl" />
                  <h3 className="text-lg font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    {z.name}
                  </h3>
                </div>
                <p className="text-[#6b7280] text-sm font-[Roboto] leading-relaxed">
                  {z.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue offres */}
      <section id="offres" className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Appartements disponibles
            </h2>
            <p className="mt-4 max-w-[680px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              Découvrez nos logements disponibles immédiatement. Chaque appartement est
              visitable sur rendez-vous — contactez-nous pour les tarifs et modalités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rentalOffers.map((o) => (
              <RentalGridCard key={o.slug} offer={o} />
            ))}
          </div>
        </div>
      </section>

      {/* Gestion locative DINAGUI */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Pourquoi louer avec DINAGUI
            </h2>
            <p className="mt-4 max-w-[680px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              Une gestion professionnelle, transparente et proactive, pour des locations
              sans souci — côté locataires comme côté propriétaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-[10px] p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#F88732] flex items-center justify-center mb-5">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm font-[Roboto] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Propriétaires CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-[#faf5f0] rounded-[14px] p-10 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-3">
                Vous êtes propriétaire ?
              </h3>
              <p className="text-[#6b7280] text-[15px] font-[Roboto] leading-relaxed">
                Confiez-nous la gestion de votre bien : recherche de locataires,
                encaissement, entretien et reporting mensuel — nous assurons tout.
              </p>
            </div>
            <Link
              href="/services/gestion-immobiliere"
              className="inline-flex items-center gap-2 bg-[#1f2d3d] hover:bg-[#263447] text-white font-semibold px-7 py-3.5 rounded transition-all duration-300 font-[Roboto] text-[15px] whitespace-nowrap"
            >
              Découvrir la gestion immobilière <FiArrowRight />
            </Link>
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
            Planifions une visite
          </h2>
          <p className="text-white/75 text-[15px] md:text-base mb-10 font-[Roboto] max-w-[640px] mx-auto leading-relaxed">
            Contactez-nous pour organiser une visite, obtenir les tarifs ou discuter
            de votre projet locatif.
          </p>

          <div className="max-w-[420px] mx-auto mb-10 text-left">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="text-xs uppercase tracking-wider text-[#F88732] font-[Roboto_Condensed] font-bold mb-2">
                Contact DINAGUI SARL
              </p>
              <a
                href="tel:+224613500404"
                className="flex items-center gap-2 text-white text-lg font-[Roboto_Condensed] font-bold hover:text-[#F88732] transition-colors mb-1"
              >
                <FiPhone /> +224 613 50 04 04
              </a>
              <a
                href="mailto:contact@dinagui.com"
                className="flex items-center gap-2 text-white/70 text-sm font-[Roboto] hover:text-[#F88732] transition-colors"
              >
                <FiMail /> contact@dinagui.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
            >
              Formulaire de contact <FiArrowRight />
            </Link>
            <Link
              href="/nos-offres/vente-dappartements"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-[#F88732] text-white hover:text-[#F88732] font-semibold px-10 py-3.5 rounded transition-all duration-300 font-[Roboto]"
            >
              Voir nos offres de vente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
