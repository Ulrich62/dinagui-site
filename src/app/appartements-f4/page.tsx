import type { Metadata } from "next";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ApartmentCard, { ApartmentType } from "@/components/ApartmentCard";

export const metadata: Metadata = {
  title: "Appartements F4 - DINAGUI SARL",
  description:
    "Découvrez nos appartements F4 à la Cité Plaza Platinium, Kipé, Conakry. 3 chambres, espaces lumineux, design adapté au climat tropical.",
};

const apartments: ApartmentType[] = [
  {
    type: "Type B1",
    surface: "106,34 m²",
    config: "3 chambres, 2 salons, 2 toilettes",
    features: [
      "Une claire division de fonctionnement",
      "Toutes les chambres sont conçues pour le rayon du soleil et la ventilation naturelle",
      "La conception de la cuisine et du salon rend les espaces publics plus spacieux et lumineux",
      "Favorise la dissipation de la chaleur intérieure, adapté au climat tropical",
      "Installation d'un balcon-cuisine pour répondre aux besoins quotidiens",
      "Deuxième balcon disponible pour le salon",
    ],
    price: "À partir de 9,7 millions GNF mensuels",
    image: "/images/apartments/f4-b1-plan.jpg",
  },
  {
    type: "Type B1-1",
    surface: "107,08 m²",
    config: "3 chambres, 2 salons, 2 toilettes",
    features: [
      "Une claire division de fonctionnement",
      "Toutes les chambres sont conçues pour le rayon du soleil et la ventilation naturelle",
      "La conception de la cuisine et du salon rend les espaces publics plus spacieux et lumineux",
      "Favorise la dissipation de la chaleur intérieure, adapté au climat tropical",
      "Installation d'un balcon-cuisine pour répondre aux besoins quotidiens",
      "Deuxième balcon disponible pour le salon",
    ],
    price: "À partir de 9,8 millions GNF mensuels",
    image: "/images/apartments/f4-b1-1-plan.jpg",
  },
  {
    type: "Type B2",
    surface: "95,06 m²",
    config: "3 chambres, 2 salons, 2 toilettes",
    features: [
      "Une claire division de fonctionnement",
      "Toutes les chambres sont conçues pour le rayon du soleil et la ventilation naturelle",
      "La conception de la cuisine et du salon rend les espaces publics plus spacieux et lumineux",
      "Favorise la dissipation de la chaleur intérieure, adapté au climat tropical",
      "Installation d'un balcon-cuisine pour répondre aux besoins quotidiens",
      "Deuxième balcon disponible pour le salon",
    ],
    price: "À partir de 8,56 millions GNF mensuels",
    image: "/images/apartments/f4-b2-plan.jpg",
  },
  {
    type: "Type B2-1",
    surface: "98,21 m²",
    config: "3 chambres, 2 salons, 2 toilettes",
    features: [
      "Une claire division de fonctionnement",
      "Toutes les chambres sont conçues pour le rayon du soleil et la ventilation naturelle",
      "La conception de la cuisine et du salon rend les espaces publics plus spacieux et lumineux",
      "Favorise la dissipation de la chaleur intérieure, adapté au climat tropical",
      "Installation d'un balcon-cuisine pour répondre aux besoins quotidiens",
      "Deuxième balcon disponible pour le salon",
    ],
    price: "À partir de 8,84 millions GNF mensuels",
    image: "/images/apartments/f4-b2-1-plan.jpg",
  },
];

export default function AppartementsF4Page() {
  return (
    <>
      <PageHero
        title="Appartements F4"
        subtitle="3 chambres pour un confort optimal au quotidien"
      />

      {/* Apartments */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="space-y-10">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.type} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-8 text-center font-[Roboto_Condensed] uppercase">
            Localisation
          </h2>
          <div className="bg-[#faf5f0] rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#F88732]/10 flex items-center justify-center mx-auto mb-4">
              <FiMapPin className="text-[#F88732] text-2xl" />
            </div>
            <p className="text-xl font-bold text-[#1f2d3d] mb-2 font-[Roboto_Condensed]">
              Cité Plaza Platinium
            </p>
            <p className="text-[#6b7280] text-lg font-[Roboto]">
              Kipé, C/Ratoma Centre émetteur, Conakry
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-[#1f2d3d]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide font-[Roboto_Condensed]">
            Intéressé par un appartement F4 ?
          </h2>
          <p className="text-white/80 mb-4 text-lg font-[Roboto]">
            Contactez-nous pour plus d&apos;informations ou pour planifier une visite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-white/90">
            <a
              href="tel:+224613500404"
              className="flex items-center gap-2 hover:text-[#F88732] transition-colors font-[Roboto]"
            >
              <FiPhone className="text-lg" />
              +224 613 50 04 04
            </a>
            <a
              href="mailto:dinagui.sarlu@gmail.com"
              className="flex items-center gap-2 hover:text-[#F88732] transition-colors font-[Roboto]"
            >
              <FiMail className="text-lg" />
              dinagui.sarlu@gmail.com
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#F88732] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-[#e0752a] hover:shadow-lg hover:shadow-[#F88732]/25 transition-all duration-300 font-[Roboto]"
          >
            Demandez un devis
          </Link>
        </div>
      </section>
    </>
  );
}
