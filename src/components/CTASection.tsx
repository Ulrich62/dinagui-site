"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="relative py-28 px-4"
      style={{
        backgroundImage: "url('/images/apartments/f3-appartement.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White semi-transparent overlay box */}
      <div className="relative z-10 max-w-[1000px] mx-auto">
        <div className="bg-white/85 backdrop-blur-sm py-16 px-8 md:px-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f2d3d] mb-5 font-[Roboto_Condensed] uppercase"
          >
            Investissez avec confiance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#1f2d3d]/80 text-base mb-8 max-w-[800px] mx-auto leading-relaxed font-[Roboto]"
          >
            Confiez votre projet à un partenaire stratégique capable de développer, structurer et valoriser vos biens immobiliers avec rigueur et transparence. De l&apos;étude à la gestion, nous vous accompagnons à chaque étape pour sécuriser votre investissement et en optimiser la rentabilité.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-4 rounded transition-colors duration-300 text-base font-[Roboto]"
            >
              Parlons de votre investissement dès maintenant
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
