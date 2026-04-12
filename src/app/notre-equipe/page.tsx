"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

const teamMembers = [
  {
    name: "Dine Diallo",
    role: "Directeur Général",
    photo: "/images/team/dine-diallo.jpg",
  },
  {
    name: "Fatoumata Binta Bah",
    role: "Directrice Adjointe",
    photo: "/images/team/fatoumata-binta-bah.jpg",
  },
  {
    name: "Mohamed Saifon Toure",
    role: "Gestionnaire Administratif et Financier",
    photo: "/images/team/mohamed-saifon-toure.jpg",
  },
  {
    name: "Mamadu Diao Bah",
    role: "Gestionnaire de site",
    photo: "/images/team/mamadou-diao-bah.jpg",
  },
  {
    name: "Zeinab Soumah",
    role: "Secrétaire",
    photo: "/images/team/zeinab-soumah.jpg",
  },
  {
    name: "Aboubacar Yattara",
    role: "Gestionnaire de site adjoint",
    photo: "/images/team/aboubacar-yattara.jpg",
  },
  {
    name: "Alpha Abdoulaye Balde",
    role: "Gestionnaire de site adjoint",
    photo: "/images/team/alpha-abdoulaye-balde.jpg",
  },
  {
    name: "Kelefa Conde",
    role: "Responsable salle de vidéosurveillance et sécurité",
    photo: "/images/team/kelefa-conde.jpg",
  },
];

export default function NotreEquipePage() {
  return (
    <>
      <PageHero title="Notre équipe" />

      {/* Intro paragraph */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#F88732]" />
            <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
              Notre force
            </span>
            <div className="w-10 h-px bg-[#F88732]" />
          </div>
          <p className="text-[#6b7280] leading-relaxed text-lg font-[Roboto]">
            Chez DINAGUI SARL, notre équipe est composée de professionnels passionnés et expérimentés, engagés à offrir un service d&apos;excellence. Chaque membre apporte son expertise unique pour garantir la réussite de vos projets.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-default"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  {/* Orange top bar on hover */}
                  <div className="h-1 bg-transparent group-hover:bg-[#F88732] transition-colors duration-300" />
                  <div className="relative w-full h-[360px] overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover overlay with name/role */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-lg font-bold text-white font-[Roboto_Condensed] uppercase">
                        {member.name}
                      </h3>
                      <p className="text-[#F88732] text-sm font-[Roboto]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  {/* Name/role below (visible by default, fades on hover) */}
                  <div className="p-6 text-center group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">{member.name}</h3>
                    <p className="text-[#6b7280] mt-1 text-[15px] font-[Roboto]">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F88732] py-16">
        <div className="max-w-[900px] mx-auto text-center px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="w-12 h-px bg-white/60" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[Roboto_Condensed] uppercase">
            Envie de rejoindre notre équipe ?
          </h2>
          <p className="text-white/85 mb-8 font-[Roboto]">
            Nous sommes toujours à la recherche de talents passionnés. Contactez-nous pour découvrir les opportunités disponibles.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#F88732] font-semibold px-10 py-3.5 rounded hover:bg-gray-100 transition-all duration-300 font-[Roboto] hover:shadow-lg"
          >
            Contactez-nous
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
