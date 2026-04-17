"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FiArrowRight } from "react-icons/fi";

const highlights = [
  "Logements modernes de qualité à Kipé, Conakry",
  "Appartements de F3 à F4 (83 à 119 m²)",
  "6 typologies d'appartements (C1, C2, C3 et variantes symétriques)",
  "Commodités premium : jardin 10 000 m², piscine, sécurité 24h/24",
  "Ascenseurs, fibre optique, groupes électrogènes 1000 kW",
  "Plan de financement accessible via nos partenaires bancaires",
  "Proximité aéroport, centre-ville, écoles et hôpitaux",
];

export default function ProjectsSection() {
  return (
    <section className="relative">
      <div className="pt-16 pb-6 px-6">
        <SectionTitle title="Nos projets immobiliers" />
      </div>

      <div className="relative py-20 px-6 overflow-hidden">
        <Image
          src="/images/plaza-platinium/brochure-06.jpg"
          alt="Cité Plaza Platinium — Immeuble 5"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2332]/92" />

        <div className="relative z-10 max-w-[1340px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#F88732]" />
            <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
              Projet phare
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-white text-2xl md:text-3xl font-bold mb-4 font-[Roboto_Condensed] uppercase">
                Cité Plaza Platinium
              </h4>
              <p className="text-[#F88732] font-medium text-sm mb-8 font-[Roboto] tracking-wide uppercase">
                Immeuble 5 · Kipé, Conakry
              </p>
              <ul className="space-y-3 mb-10">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed font-[Roboto]">
                    <span className="text-[#F88732] mt-1 flex-shrink-0">&#10003;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/nos-offres/vente-dappartements"
                className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-[#F88732] hover:text-[#F88732] px-6 py-3 rounded transition-all duration-300 font-[Roboto] text-sm"
              >
                Découvrir le projet
                <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-lg p-4 shadow-2xl max-w-[450px]">
                <Image
                  src="/images/plaza-platinium/brochure-02.jpg"
                  alt="Vue aérienne Cité Plaza Platinium"
                  width={450}
                  height={350}
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="rounded object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
