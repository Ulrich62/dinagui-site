import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPhone, FiMail, FiHome, FiFileText } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import OfferCard, { Offer } from "@/components/OfferCard";
import { breadcrumbList, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nos offres — DINAGUI SARL",
  description:
    "Découvrez les appartements F3, F4 et F5 à la Cité Plaza Platinium, Kipé (Conakry). Visite vidéo, plans, surfaces et standard de livraison complet.",
  alternates: { canonical: "/nos-offres" },
  openGraph: {
    title: "Nos offres — DINAGUI SARL",
    description:
      "Appartements F3, F4 et F5 à la Cité Plaza Platinium (Kipé, Conakry) — visite vidéo, plans et commodités.",
    url: "/nos-offres",
    locale: "fr_GN",
    type: "website",
    images: [{ url: "/images/plaza-platinium/brochure-06.jpg", width: 1200, height: 630, alt: "Plaza Platinium — Immeuble 5" }],
  },
};

const offres: Offer[] = [
  {
    title: "Appartements F3",
    kicker: "2 chambres",
    surface: "76 – 88 m²",
    description:
      "Appartements F3 lumineux, conçus pour la ventilation naturelle et adaptés au climat tropical.",
    highlights: [
      "2 chambres, 2 salons",
      "Balcon cuisine + balcon salon",
      "Ventilation naturelle optimisée",
    ],
    href: "/appartements-f3",
    poster: "/images/apartments/f3-photo.jpg",
    video: "/videos/nos-offres-intro.mp4",
  },
  {
    title: "Appartements F4",
    kicker: "3 chambres",
    surface: "95 – 107 m²",
    description:
      "Appartements F4 spacieux, parfaits pour les familles, avec pièces de vie généreuses et finitions adaptées au climat tropical.",
    highlights: [
      "3 chambres, 2 salons, 2 toilettes",
      "4 variantes de plan (B1, B1-1, B2, B2-1)",
      "Balcon cuisine + balcon salon",
    ],
    href: "/appartements-f4",
    poster: "/images/apartments/f4-photo.jpg",
    video: "/videos/nos-offres-intro.mp4",
  },
  {
    title: "Appartements F5",
    kicker: "4 chambres",
    surface: "117 – 129 m²",
    description:
      "Appartements F5 d'exception — le plus grand format, idéal pour les familles à la recherche d'espace et de confort.",
    highlights: [
      "4 chambres, 2 salons, 3 toilettes",
      "2 typologies disponibles (C1, C2)",
      "Ventilation naturelle optimisée",
    ],
    href: "/appartements-f5",
    poster: "/images/apartments/f5-photo.jpg",
    video: "/videos/nos-offres-intro.mp4",
  },
];

export default function NosOffresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbList([
            { name: "Accueil", path: "/" },
            { name: "Nos offres", path: "/nos-offres" },
          ])
        )}
      />
      <PageHero
        title="Nos offres"
        subtitle="Des programmes immobiliers pensés pour votre confort, à Conakry"
        backgroundImage="/images/plaza-platinium/brochure-06.jpg"
        bordered
      />

      {/* Description + Video */}
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
                Un choix sûr et durable pour votre habitat
              </h2>
              <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto] mb-5">
                DINAGUI SARL accompagne particuliers et investisseurs dans l&apos;acquisition
                et la location de biens immobiliers de standing à Conakry. Nos offres
                regroupent des logements modernes, soigneusement finis et intégrés à un
                cadre de vie dynamique.
              </p>
              <p className="text-[#6b7280] text-[15px] leading-relaxed font-[Roboto] mb-8">
                Découvrez en vidéo la Cité Plaza Platinium, l&apos;environnement Kipé et les
                finitions de nos appartements — puis explorez nos offres en détail.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#offres"
                  className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-3 rounded transition-all duration-300 text-[15px] font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
                >
                  Voir nos offres <FiArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#1f2d3d]/15 text-[#1f2d3d] hover:border-[#F88732] hover:text-[#F88732] font-semibold px-8 py-3 rounded transition-all duration-300 text-[15px] font-[Roboto]"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl bg-[#1f2d3d] aspect-[4/3] lg:aspect-square">
              {/* Blurred ambient background */}
              <video
                className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                poster="/images/plaza-platinium/brochure-06.jpg"
              >
                <source src="/videos/nos-offres-intro.webm" type="video/webm" />
                <source src="/videos/nos-offres-intro.mp4" type="video/mp4" />
              </video>
              {/* Foreground video */}
              <video
                className="relative z-10 w-full h-full object-contain"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                poster="/images/plaza-platinium/brochure-06.jpg"
              >
                <source src="/videos/nos-offres-intro.webm" type="video/webm" />
                <source src="/videos/nos-offres-intro.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Offres cards */}
      <section id="offres" className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-[#F88732]" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
              Découvrez nos offres
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[15px] text-[#6b7280] leading-relaxed font-[Roboto]">
              Chaque offre est détaillée sur sa propre page, avec photos, plans et vidéo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offres.map((offre) => (
              <OfferCard key={offre.href} offer={offre} />
            ))}
          </div>

          <p className="text-center text-xs text-[#6b7280]/80 font-[Roboto] mt-8 italic">
            Survolez une carte pour prévisualiser l&apos;offre en vidéo.
          </p>
        </div>
      </section>

      {/* Dual CTA banner */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/nos-offres/vente-dappartements"
              className="group relative overflow-hidden rounded-[10px] p-10 bg-[#1f2d3d] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image
                  src="/images/plaza-platinium/brochure-06.jpg"
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#F88732] flex items-center justify-center mb-5">
                  <FiHome className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white font-[Roboto_Condensed] uppercase mb-3">
                  Vente d&apos;appartements
                </h3>
                <p className="text-white/75 text-[15px] font-[Roboto] leading-relaxed mb-6">
                  Typologies, plans, commodités et plan de financement à la Cité Plaza Platinium.
                </p>
                <span className="inline-flex items-center gap-2 text-[#F88732] font-semibold text-[15px] font-[Roboto] group-hover:gap-3 transition-all">
                  Découvrir <FiArrowRight />
                </span>
              </div>
            </Link>

            <Link
              href="/nos-offres/location-dappartements"
              className="group relative overflow-hidden rounded-[10px] p-10 bg-[#1f2d3d] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image
                  src="/images/plaza-platinium/brochure-07.jpg"
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#F88732] flex items-center justify-center mb-5">
                  <FiHome className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white font-[Roboto_Condensed] uppercase mb-3">
                  Location d&apos;appartements
                </h3>
                <p className="text-white/75 text-[15px] font-[Roboto] leading-relaxed mb-6">
                  Appartements F3 et F4 en location à la Cité Plaza Platinium, Kipé.
                </p>
                <span className="inline-flex items-center gap-2 text-[#F88732] font-semibold text-[15px] font-[Roboto] group-hover:gap-3 transition-all">
                  Découvrir <FiArrowRight />
                </span>
              </div>
            </Link>

            <Link
              href="/nos-offres/standard-de-livraison"
              className="group relative overflow-hidden rounded-[10px] p-10 bg-[#F88732] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-5">
                  <FiFileText className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white font-[Roboto_Condensed] uppercase mb-3">
                  Standard de livraison — Immeuble 5
                </h3>
                <p className="text-white/90 text-[15px] font-[Roboto] leading-relaxed mb-6">
                  Inventaire des équipements et du mobilier inclus dans la livraison standard.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-[15px] font-[Roboto] group-hover:gap-3 transition-all">
                  Consulter le standard <FiArrowRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final contact CTA */}
      <section className="py-24 bg-[#1f2d3d]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className="w-8 h-px bg-white/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[Roboto_Condensed] uppercase leading-tight">
            Un projet d&apos;acquisition ou de location ?
          </h2>
          <p className="text-white/75 text-[15px] md:text-base mb-10 font-[Roboto] max-w-[640px] mx-auto leading-relaxed">
            Notre équipe vous accompagne de la première visite à la remise des clés.
            Parlons de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-white/90 text-[15px]">
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
            Demandez un devis <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
