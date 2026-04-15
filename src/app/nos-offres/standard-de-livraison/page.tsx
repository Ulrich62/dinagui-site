import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheck,
  FiPhone,
  FiMail,
  FiInfo,
  FiZap,
  FiPackage,
  FiHome,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import { breadcrumbList, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Standard de livraison — Immeuble 5 — DINAGUI SARL",
  description:
    "Inventaire des équipements et du mobilier inclus dans la livraison standard des appartements de l'Immeuble 5 à la Cité Plaza Platinium, Kipé, Conakry.",
  alternates: { canonical: "/nos-offres/standard-de-livraison" },
  openGraph: {
    title: "Standard de livraison — Immeuble 5 — DINAGUI SARL",
    description:
      "Four, climatisation, chauffe-eau, meubles de cuisine et salle de bain : tout ce qui est inclus dans la livraison standard.",
    url: "/nos-offres/standard-de-livraison",
    locale: "fr_GN",
    type: "website",
    images: [{ url: "/images/plaza-platinium/equip-cuisine.jpg", width: 1200, height: 630, alt: "Standard de livraison Immeuble 5" }],
  },
};

const electromenagers = [
  "Système de climatisation (salon + toutes les chambres)",
  "Chauffe-eau",
  "Four",
  "Plaques de cuisson",
  "Hotte aspirante",
];

const mobilier = [
  "Meubles de cuisine — placards hauts et bas",
  "Meubles de salle de bain — sous-vasque",
];

export default function StandardLivraisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbList([
            { name: "Accueil", path: "/" },
            { name: "Nos offres", path: "/nos-offres" },
            { name: "Standard de livraison", path: "/nos-offres/standard-de-livraison" },
          ])
        )}
      />
      <PageHero
        title="Standard de livraison"
        subtitle="Immeuble 5 · Cité Plaza Platinium, Kipé"
        backgroundImage="/images/plaza-platinium/brochure-07.jpg"
        bordered
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1340px] mx-auto px-6 py-4 text-sm text-[#6b7280] font-[Roboto]">
          <Link href="/" className="hover:text-[#F88732]">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/nos-offres" className="hover:text-[#F88732]">Nos offres</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1f2d3d]">Standard de livraison</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className="w-8 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-6">
            Inventaire des équipements inclus dans la livraison
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto]">
            Chaque appartement de l&apos;Immeuble 5 est livré prêt à vivre : électroménagers
            essentiels installés et mobilier intégré cuisine et salle de bain. Voici le
            détail complet de ce qui est inclus dans la livraison standard.
          </p>
        </div>
      </section>

      {/* Inventaire 2 colonnes */}
      <section className="py-16 bg-[#faf5f0]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[10px] shadow-md p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F88732]" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#F88732] flex items-center justify-center">
                  <FiZap className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                  Électroménagers
                </h3>
              </div>
              <ul className="space-y-3">
                {electromenagers.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6b7280] text-[15px] font-[Roboto]">
                    <FiCheck className="text-[#F88732] mt-0.5 flex-shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[10px] shadow-md p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F88732]" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#F88732] flex items-center justify-center">
                  <FiPackage className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                  Mobilier
                </h3>
              </div>
              <ul className="space-y-3">
                {mobilier.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6b7280] text-[15px] font-[Roboto]">
                    <FiCheck className="text-[#F88732] mt-0.5 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase équipements */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Les équipements en détail
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              Aperçu visuel de chaque équipement inclus dans la livraison standard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/images/plaza-platinium/equip-four.jpg",
                category: "Pack cuisson",
                title: "Four encastré",
                desc: "Four encastrable intégré aux meubles bas de la cuisine.",
              },
              {
                img: "/images/plaza-platinium/equip-cuisson.jpg",
                category: "Pack cuisson",
                title: "Plaques & hotte aspirante",
                desc: "Plaques de cuisson et hotte aspirante installées dans chaque logement.",
              },
              {
                img: "/images/plaza-platinium/equip-clim.jpg",
                category: "Confort thermique",
                title: "Climatisation",
                desc: "Unités de climatisation dans le salon et toutes les chambres.",
              },
              {
                img: "/images/plaza-platinium/equip-chauffe-eau.jpg",
                category: "Sanitaire",
                title: "Chauffe-eau",
                desc: "Chauffe-eau installé dans chaque appartement.",
              },
              {
                img: "/images/plaza-platinium/equip-cuisine.jpg",
                category: "Mobilier intégré",
                title: "Meubles de cuisine",
                desc: "Placards hauts et bas, finition bois et laque.",
              },
              {
                img: "/images/plaza-platinium/equip-vasque.jpg",
                category: "Mobilier intégré",
                title: "Sous-vasque salle de bain",
                desc: "Meuble sous-vasque intégré dans chaque salle de bain.",
              },
            ].map((e) => (
              <div
                key={e.title}
                className="group bg-white border border-gray-100 rounded-[10px] shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#faf5f0]">
                  <Image
                    src={e.img}
                    alt={e.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#F88732] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded font-[Roboto_Condensed]">
                    {e.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-2">
                    {e.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm font-[Roboto] leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-[#1f2d3d]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-5 bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="w-12 h-12 rounded-lg bg-[#F88732]/20 flex items-center justify-center flex-shrink-0">
              <FiInfo className="text-[#F88732] text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-[Roboto_Condensed] uppercase mb-2">
                À noter
              </h3>
              <p className="text-white/80 text-[15px] font-[Roboto] leading-relaxed">
                Aucun autre appareil électrique ou meuble n&apos;est inclus dans la
                livraison standard. Pour toute demande d&apos;équipement supplémentaire,
                contactez-nous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liens & CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Link
              href="/nos-offres/vente-et-location-dappartements"
              className="group bg-[#F88732] hover:bg-[#e0752a] text-white rounded-[10px] p-8 flex items-center gap-5 transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <FiHome className="text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-[Roboto_Condensed] uppercase mb-1">
                  Plaza Platinium — Immeuble 5
                </h3>
                <p className="text-white/90 text-sm font-[Roboto]">
                  Brochure, typologies et commodités
                </p>
              </div>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/nos-offres"
              className="group bg-[#1f2d3d] hover:bg-[#263447] text-white rounded-[10px] p-8 flex items-center gap-5 transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-lg bg-[#F88732] flex items-center justify-center flex-shrink-0">
                <FiArrowRight className="text-2xl rotate-180" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-[Roboto_Condensed] uppercase mb-1">
                  Retour à nos offres
                </h3>
                <p className="text-white/80 text-sm font-[Roboto]">
                  Explorer l&apos;ensemble du catalogue
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className="w-8 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase leading-tight">
            Des questions sur la livraison ?
          </h2>
          <p className="text-[#6b7280] text-[15px] md:text-base mb-10 font-[Roboto] max-w-[640px] mx-auto leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            techniques et organiser une visite sur site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-[#1f2d3d] text-[15px]">
            <a href="tel:+224613500404" className="flex items-center gap-2 hover:text-[#F88732] transition-colors font-[Roboto]">
              <FiPhone /> +224 613 50 04 04
            </a>
            <a href="mailto:dinagui.sarlu@gmail.com" className="flex items-center gap-2 hover:text-[#F88732] transition-colors font-[Roboto]">
              <FiMail /> dinagui.sarlu@gmail.com
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
          >
            Nous contacter <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
