"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image with decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-famille.avif"
              alt="Projet immobilier DINAGUI"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Decorative orange corner */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#F88732] rounded-br-lg hidden lg:block" />
          {/* Experience badge */}
          <div className="absolute -bottom-6 -left-3 lg:-left-6 bg-[#F88732] text-white px-6 py-4 rounded-lg shadow-lg">
            <span className="text-3xl font-bold font-[Roboto_Condensed]">+12</span>
            <span className="text-sm block font-[Roboto]">ans d&apos;expérience</span>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#F88732]" />
            <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
              Qui sommes-nous
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-6 leading-tight font-[Roboto_Condensed] uppercase">
            Bâtisseur de projets immobiliers durables, rentables et modernes
          </h2>
          <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
            Depuis plus d&apos;une décennie, <strong className="text-[#1f2d3d]">DINAGUI SARL</strong> met son expertise au service de projets immobiliers ambitieux. Construction, gestion de patrimoine, investissement stratégique : nous accompagnons les particuliers, les entreprises et les investisseurs dans la concrétisation de projets solides et performants.
          </p>
          <p className="text-[#6b7280] leading-relaxed mb-8 font-[Roboto]">
            Nous concevons des espaces de vie fonctionnels, des infrastructures modernes et des solutions immobilières conçues pour{" "}
            <strong className="text-[#1f2d3d]">
              créer de la valeur aujourd&apos;hui et sécuriser votre avenir demain
            </strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
            >
              Contactez-nous
              <FiArrowRight />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 border-2 border-[#1f2d3d] text-[#1f2d3d] font-semibold px-8 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:bg-[#1f2d3d] hover:text-white"
            >
              En savoir plus
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
