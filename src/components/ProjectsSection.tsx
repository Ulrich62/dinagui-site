"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const features = [
  { text: "Surface de construction", bold: "88.04 m2", italic: true },
  { text: "Deux (02) chambres, Deux (02) salons, Deux (02) toilettes" },
  { text: "Une claire division de fonctionnement" },
  { text: "Toutes les chambres sont entièrement conçues pour répondre aux besoins de rayon du soleil et de ventilation naturelle." },
  { text: "La conception de la cuisine et du salon fait les espaces publics plus spacieux et lumineux" },
  { text: "La conception Favorise la dissipation de la chaleur intérieure, s\u2019adapte au climat tropical et améliore le confort de vie;" },
  { text: "Selon les habitudes de vie locale, installation d\u2019un balcon-cuisine pour réponde à ses besoins quotidiens." },
  { text: "Deuxième balcon disponible pour le salon." },
  { text: "Mensualité à partir de", bold: "8,04 millions GNF" },
];

export default function ProjectsSection() {
  return (
    <section className="relative">
      {/* Title above dark section */}
      <div className="pt-10 px-4">
        <SectionTitle title="Nos projets immobiliers" />
      </div>

      {/* Dark section with 3D building background */}
      <div
        className="relative py-16 px-4 min-h-[600px]"
        style={{
          backgroundImage: "url('/images/apartments/f3-appartement.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a2332]/92" />

        <div className="relative z-10 max-w-[1340px] mx-auto">
          {/* Header bar */}
          <div className="flex items-center justify-between mb-10 border-b border-white/20 pb-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider font-[Roboto_Condensed]">
              Construction
            </h3>
            <span className="text-white/60 text-2xl cursor-pointer hover:text-white transition-colors">&times;</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-white text-2xl font-bold mb-6 font-[Roboto_Condensed] uppercase">
                Appartement F3&quot;
              </h4>
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed font-[Roboto]">
                    <span className="text-white/60 mt-1">•</span>
                    <span>
                      {f.italic ? (
                        <>
                          <em className="text-white">{f.text}</em> : <strong>{f.bold}</strong>
                        </>
                      ) : f.bold ? (
                        <>
                          {f.text} <strong className="text-white">{f.bold}</strong>
                        </>
                      ) : (
                        f.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/appartements-f3"
                className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span className="text-2xl">&rarr;</span>
              </Link>
            </motion.div>

            {/* Right: Floor plan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-xl p-4 shadow-2xl max-w-[450px]">
                <Image
                  src="/images/apartments/f3-plan.jpg"
                  alt="Plan appartement F3"
                  width={450}
                  height={350}
                  className="rounded-lg object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
