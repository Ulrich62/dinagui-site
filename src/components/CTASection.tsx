"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section
      className="relative py-28 px-6"
      style={{
        backgroundImage: "url('/images/apartments/f3-appartement.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#1a2332]/80" />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-[#F88732]" />
          <div className="w-8 h-px bg-white/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[Roboto_Condensed] uppercase leading-tight"
        >
          Investissez avec confiance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/75 text-base md:text-lg mb-10 leading-relaxed font-[Roboto]"
        >
          Confiez votre projet à un partenaire stratégique capable de développer, structurer et valoriser vos biens immobiliers avec rigueur et transparence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-4 rounded transition-all duration-300 text-base font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
          >
            Parlons de votre investissement
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
