"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "./SectionTitle";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  title: string;
  quote: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    title: "DES PROJETS AMBITIEUX ET RÉUSSIS.",
    quote:
      "DINAGUI SARL a transformé notre vision en réalité. La qualité de construction et le respect des délais ont dépassé toutes nos attentes. Une entreprise de confiance.",
    name: "MAMADOU S.",
  },
  {
    title: "LIVRÉS AVEC RIGUEUR.",
    quote:
      "Une entreprise fiable qui respecte ses engagements. Mon projet a été livré dans les délais avec une excellente qualité de finition.",
    name: "IBRAHIMA D.",
  },
  {
    title: "UN ACCOMPAGNEMENT SÉRIEUX ET STRUCTURÉ.",
    quote:
      "DINAGUI SARL nous a accompagnés de l\u2019étude à la livraison de notre projet immobilier. Les délais ont été respectés et la qualité est au rendez-vous. Une équipe professionnelle et transparente.",
    name: "ALAIN B.",
  },
  {
    title: "UN INVESTISSEMENT SÉCURISÉ.",
    quote:
      "Grâce à leur analyse et leurs conseils, j\u2019ai pu réaliser un investissement locatif rentable et bien structuré. Leur expertise du marché immobilier est un véritable atout.",
    name: "AMINATA S.",
  },
  {
    title: "UN PARTENAIRE DE CONFIANCE.",
    quote:
      "Ce qui m\u2019a marqué, c\u2019est leur transparence et leur professionnalisme. Chaque étape du projet était claire et bien expliquée.",
    name: "AISSATOU T.",
  },
  {
    title: "VISION STRATÉGIQUE ET RÉSULTATS CONCRETS.",
    quote:
      "DINAGUI SARL ne se contente pas de construire, elle apporte une vraie stratégie d\u2019investissement. Mon patrimoine est aujourd\u2019hui mieux valorisé grâce à leur accompagnement.",
    name: "M. PATRICK",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6">
        <SectionTitle
          title="Ils nous font confiance"
          subtitle="Chez DINAGUI SARL, nous plaçons la satisfaction et la confiance de nos clients au cœur de notre démarche."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-14"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-[10px] p-7 h-full flex flex-col min-h-[280px] relative group hover:border-[#F88732]/30 transition-colors duration-300">
                {/* Guillemet décoratif */}
                <span className="text-[#F88732]/15 text-6xl font-serif leading-none absolute top-4 right-5 select-none">
                  &ldquo;
                </span>
                <h4 className="text-[#1f2d3d] font-bold text-[15px] mb-4 font-[Roboto_Condensed] uppercase leading-tight pr-8">
                  {t.title}
                </h4>
                <p className="text-[#6b7280] text-sm leading-relaxed flex-1 mb-6 font-[Roboto]">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#F88732]/10 flex items-center justify-center text-[#F88732] font-bold text-xs font-[Roboto_Condensed]">
                    {t.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-[#F88732] text-sm font-[Roboto]">
                    {t.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
