"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FiArrowRight } from "react-icons/fi";

const features = [
  { text: "Surface de construction", bold: "118,71 m²", italic: true },
  { text: "Trois (03) chambres, Trois (03) toilettes privatives" },
  { text: "Salon + salle à manger de 36,36 m²" },
  { text: "Toutes les chambres sont conçues pour le rayon du soleil et la ventilation naturelle" },
  { text: "Cuisine de 10,46 m² et balcon de 5,56 m²" },
  { text: "La conception favorise la dissipation de la chaleur intérieure, adaptée au climat tropical" },
  { text: "Variante symétrique C1\u2019 disponible" },
];

export default function ProjectsSection() {
  return (
    <section className="relative">
      <div className="pt-16 pb-6 px-6">
        <SectionTitle title="Nos projets immobiliers" />
      </div>

      <div className="relative py-20 px-6 overflow-hidden">
        <Image
          src="/images/apartments/f3-appartement.jpg"
          alt="Projet appartement F3"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2332]/92" />

        <div className="relative z-10 max-w-[1340px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#F88732]" />
            <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
              Construction
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-white text-2xl md:text-3xl font-bold mb-8 font-[Roboto_Condensed] uppercase">
                Appartement Type C1
              </h4>
              <ul className="space-y-3 mb-10">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed font-[Roboto]">
                    <span className="text-[#F88732] mt-1 flex-shrink-0">&#10003;</span>
                    <span>
                      {f.italic ? (
                        <>
                          <em className="text-white">{f.text}</em> : <strong className="text-[#F88732]">{f.bold}</strong>
                        </>
                      ) : f.bold ? (
                        <>
                          {f.text} <strong className="text-[#F88732]">{f.bold}</strong>
                        </>
                      ) : (
                        f.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/appartements-c1"
                className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-[#F88732] hover:text-[#F88732] px-6 py-3 rounded transition-all duration-300 font-[Roboto] text-sm"
              >
                Voir les détails
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
                  src="/images/apartments/f3-a1-plan.jpg"
                  alt="Plan appartement F3"
                  width={450}
                  height={350}
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="rounded object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
