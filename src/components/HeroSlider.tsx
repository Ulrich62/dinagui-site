"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/apartments/f3-appartement.jpg",
  },
  {
    image: "/images/services/btp-workers.avif",
  },
  {
    image: "/images/services/gestion-immobiliere.avif",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slides[current].image}')` }}
        />
      </AnimatePresence>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Vertical line element (left side) */}
      <div className="absolute left-20 top-1/2 z-10 hidden md:flex flex-col items-center gap-2" style={{ transform: "translateY(-50%)" }}>
        <div className="w-px h-16 bg-white/80" />
        <div className="w-0.5 h-10 bg-white" />
        <div className="w-px h-16 bg-white/80" />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-[800px]">
        {/* Subtitle */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            loaded ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-white font-bold text-sm md:text-base tracking-[0.2em] mb-4 uppercase">
            Un choix sûr et durable
          </p>
        </div>

        {/* Title with border box */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-white/15 backdrop-blur-[2px] border-2 border-white/70 px-8 py-6 md:px-12 md:py-8 inline-block mb-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] font-[Roboto_Condensed]">
              DINAGUI SARL
            </h1>
          </div>
        </div>

        {/* Mosaic thumbnail grid */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-[3px] w-[280px] md:w-[360px] h-[180px] md:h-[220px] border-2 border-white/50 p-[3px]">
            {/* Top-left: 2 small thumbnails side by side */}
            <div className="grid grid-cols-2 gap-[3px]">
              <button
                onClick={() => setCurrent(0)}
                className={`overflow-hidden transition-opacity ${
                  0 === current ? "opacity-100" : "opacity-60"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${slides[0].image}')` }}
                />
              </button>
              <button
                onClick={() => setCurrent(1)}
                className={`overflow-hidden transition-opacity ${
                  1 === current ? "opacity-100" : "opacity-60"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${slides[1].image}')` }}
                />
              </button>
            </div>
            {/* Top-right: larger thumbnail */}
            <button
              onClick={() => setCurrent(2)}
              className={`overflow-hidden transition-opacity ${
                2 === current ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slides[2].image}')` }}
              />
            </button>
            {/* Bottom-left: larger thumbnail */}
            <button
              onClick={() => setCurrent(1)}
              className={`overflow-hidden transition-opacity ${
                1 === current ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slides[1].image}')` }}
              />
            </button>
            {/* Bottom-right: larger thumbnail */}
            <button
              onClick={() => setCurrent(0)}
              className={`overflow-hidden transition-opacity ${
                0 === current ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slides[0].image}')` }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
