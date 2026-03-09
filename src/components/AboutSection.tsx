"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
            </strong>
            .
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 font-[Roboto]"
          >
            Contactez-nous
            <FiPhone className="text-lg" />
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
        >
          <Image
            src="/images/apartments/f3-appartement.jpg"
            alt="Projet immobilier DINAGUI"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
