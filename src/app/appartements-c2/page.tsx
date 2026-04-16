import type { Metadata } from "next";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ApartmentCard, { ApartmentType } from "@/components/ApartmentCard";
import OfferVideoSection from "@/components/OfferVideoSection";
import { apartmentListing, breadcrumbList, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Appartements Type C2 — DINAGUI SARL",
  description:
    "Appartements Type C2 à la Cité Plaza Platinium, Immeuble 5, Kipé, Conakry. 3 chambres, 100,54 m², aménagement intérieur optimisé.",
  alternates: { canonical: "/appartements-c2" },
  openGraph: {
    title: "Appartements Type C2 — DINAGUI SARL",
    description: "Appartements Type C2 (100,54 m²) à la Cité Plaza Platinium, Kipé, Conakry.",
    url: "/appartements-c2",
    locale: "fr_GN",
    type: "website",
    images: [{ url: "/images/plaza-platinium/brochure-11.jpg", width: 1200, height: 630, alt: "Plan Type C2 — Plaza Platinium" }],
  },
};

const apartments: ApartmentType[] = [
  {
    type: "Type C2",
    surface: "100,54 m²",
    config: "3 chambres, 2 toilettes, salon + salle à manger, cuisine, balcon",
    features: [
      "Chambre principale de 17,18 m² avec toilette de 7,11 m²",
      "Chambre 2 de 12,15 m² avec toilette de 7,85 m²",
      "Chambre 3 de 10,30 m²",
      "Salon + salle à manger de 31,95 m²",
      "Cuisine de 8,64 m²",
      "Balcon de 5,38 m²",
    ],
    image: "/images/plaza-platinium/brochure-11.jpg",
  },
  {
    type: "Type C2' (variante symétrique)",
    surface: "100,54 m²",
    config: "3 chambres, 2 toilettes, salon + salle à manger, cuisine, balcon",
    features: [
      "Plan symétrique du Type C2",
      "Mêmes surfaces et agencement optimisé",
      "Chambre principale de 17,18 m²",
      "Salon + salle à manger de 31,95 m²",
      "Cuisine de 8,64 m²",
      "Balcon de 5,38 m²",
    ],
    image: "/images/plaza-platinium/brochure-12.jpg",
  },
];

const schemaApartment = apartmentListing({
  name: "Appartement Type C2 — Cité Plaza Platinium",
  description: "Appartement Type C2 à la Cité Plaza Platinium, Kipé, Conakry. 3 chambres, 100,54 m².",
  path: "/appartements-c2",
  image: "/images/plaza-platinium/brochure-11.jpg",
  numberOfRooms: 3,
  floorSize: { min: 100, max: 101 },
  typologies: [
    { type: "Type C2", surface: "100,54 m²", price: "" },
    { type: "Type C2'", surface: "100,54 m²", price: "" },
  ],
});

const schemaBreadcrumb = breadcrumbList([
  { name: "Accueil", path: "/" },
  { name: "Appartements Type C2", path: "/appartements-c2" },
]);

export default function AppartementsC2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schemaApartment)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schemaBreadcrumb)} />
      <PageHero title="Appartements Type C2" subtitle="3 chambres · 100,54 m² · Cité Plaza Platinium, Immeuble 5" />
      <OfferVideoSection title="Découvrez l'appartement C2 en vidéo" subtitle="Visite guidée des espaces, des finitions et du cadre de vie." videoSrc="/videos/nos-offres-intro.mp4" poster="/images/plaza-platinium/brochure-11.jpg" background="white" />
      <section className="py-24 bg-[#faf5f0]"><div className="max-w-[1100px] mx-auto px-6"><div className="space-y-10">{apartments.map((a) => (<ApartmentCard key={a.type} apartment={a} />))}</div></div></section>
      <section className="py-24 bg-white"><div className="max-w-[1100px] mx-auto px-6"><h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-8 text-center font-[Roboto_Condensed] uppercase">Localisation</h2><div className="bg-[#faf5f0] rounded-2xl p-8 md:p-12 text-center shadow-sm"><div className="w-16 h-16 rounded-full bg-[#F88732]/10 flex items-center justify-center mx-auto mb-4"><FiMapPin className="text-[#F88732] text-2xl" /></div><p className="text-xl font-bold text-[#1f2d3d] mb-2 font-[Roboto_Condensed]">Cité Plaza Platinium — Immeuble 5</p><p className="text-[#6b7280] text-lg font-[Roboto]">Kipé, C/Ratoma Centre émetteur, Conakry</p></div></div></section>
      <section className="py-24 bg-[#1f2d3d]"><div className="max-w-[1100px] mx-auto px-6 text-center"><h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide font-[Roboto_Condensed]">Intéressé par un appartement C2 ?</h2><p className="text-white/80 mb-4 text-lg font-[Roboto]">Contactez-nous pour plus d&apos;informations ou pour planifier une visite.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-white/90"><a href="tel:+224613500404" className="flex items-center gap-2 hover:text-[#F88732] transition-colors font-[Roboto]"><FiPhone className="text-lg" /> +224 613 50 04 04</a><a href="mailto:contact@dinagui.com" className="flex items-center gap-2 hover:text-[#F88732] transition-colors font-[Roboto]"><FiMail className="text-lg" /> contact@dinagui.com</a></div><Link href="/contact" className="inline-block bg-[#F88732] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-[#e0752a] hover:shadow-lg hover:shadow-[#F88732]/25 transition-all duration-300 font-[Roboto]">Demandez un devis</Link></div></section>
    </>
  );
}
