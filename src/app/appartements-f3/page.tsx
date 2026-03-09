import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ApartmentCard, { ApartmentType } from "@/components/ApartmentCard";

export const metadata: Metadata = {
  title: "Appartements F3 - DINAGUI SARL",
  description:
    "Découvrez nos appartements F3 à la Cité Plaza Platinium, Kipé, Conakry. 2 chambres, espaces lumineux, design adapté au climat tropical.",
};

const apartments: ApartmentType[] = [
  {
    type: "Type A1",
    surface: "88,04 m²",
    config: "2 chambres, 2 salons, 2 toilettes",
    features: [
      "Claire division de fonctionnement",
      "Excellente exposition au soleil",
      "Ventilation naturelle optimisée",
      "Cuisine-balcon et deuxième balcon pour le salon",
      "Design favorisant la dissipation thermique adapté au climat tropical",
    ],
    price: "À partir de 8,04 millions GNF mensuels",
    image: "/images/apartments/f3-plan.jpg",
  },
  {
    type: "Type A2",
    surface: "76,56 m²",
    config: "2 chambres, 2 salons, 1 toilette",
    features: [
      "Claire division de fonctionnement",
      "Excellente exposition au soleil",
      "Ventilation naturelle optimisée",
      "Espaces publics spacieux et lumineux",
      "Design favorisant la dissipation thermique adapté au climat tropical",
    ],
    price: "À partir de 6,9 millions GNF mensuels",
    image: "/images/apartments/f3-appartement.jpg",
  },
];

export default function AppartementsF3Page() {
  return (
    <>
      <PageHero
        title="Appartements F3"
        subtitle="2 chambres spacieuses dans un cadre moderne et confortable"
      />

      {/* Apartments */}
      <section className="py-20 bg-beige">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="space-y-10">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.type} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
            Localisation
          </h2>
          <div className="bg-beige rounded-2xl p-8 md:p-12 text-center">
            <div className="text-orange text-4xl mb-4">&#9906;</div>
            <p className="text-xl font-bold text-dark mb-2">
              Cité Plaza Platinium
            </p>
            <p className="text-gray text-lg">
              Kipé, C/Ratoma Centre émetteur, Conakry
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-dark">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide">
            Intéressé par un appartement F3 ?
          </h2>
          <p className="text-white/80 mb-4 text-lg">
            Contactez-nous pour plus d&apos;informations ou pour planifier une visite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-white/90">
            <a
              href="tel:+224622000000"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +224 622 00 00 00
            </a>
            <a
              href="mailto:contact@dinagui.com"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@dinagui.com
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-orange-dark transition-colors"
          >
            Demandez un devis
          </Link>
        </div>
      </section>
    </>
  );
}
