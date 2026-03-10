"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/images/apartments/f3-appartement.jpg",
    subtitle: "Construction & Immobilier",
    title: "DINAGUI SARL",
    desc: "Votre partenaire de confiance pour des projets immobiliers durables et rentables.",
  },
  {
    image: "/images/services/btp-workers.jpg",
    subtitle: "Expertise BTP",
    title: "BÂTIR L'AVENIR",
    desc: "Des infrastructures modernes conçues avec rigueur, qualité et respect des délais.",
  },
  {
    image: "/images/services/gestion-immobiliere.jpg",
    subtitle: "Gestion immobilière",
    title: "INVESTIR EN CONFIANCE",
    desc: "Valorisez votre patrimoine avec un accompagnement stratégique sur mesure.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 98px)" }}
    >
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slides[current].image}')` }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/85 via-[#1a2332]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/60 via-transparent to-transparent" />

      {/* Decorative vertical line */}
      <div className="absolute left-12 lg:left-20 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-white/30" />
        <div className="w-1 h-1 rounded-full bg-[#F88732]" />
        <div className="w-px h-16 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-28 max-w-[850px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-10 h-px bg-[#F88732]" />
              <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
                {slides[current].subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] font-[Roboto_Condensed] uppercase mb-6"
            >
              {slides[current].title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-[550px] mb-8 font-[Roboto]"
            >
              {slides[current].desc}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 font-[Roboto] text-[15px] hover:shadow-lg hover:shadow-[#F88732]/25"
              >
                Demandez un devis
              </Link>
              <Link
                href="/a-propos"
                className="border border-white/40 hover:border-white text-white font-medium px-8 py-3.5 rounded transition-all duration-300 font-[Roboto] text-[15px] hover:bg-white/10"
              >
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-28 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-10 h-1.5 bg-[#F88732]"
                : "w-6 h-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
        <span className="text-white/50 text-xs ml-3 font-[Roboto]">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
