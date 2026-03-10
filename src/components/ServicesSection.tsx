"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FiArrowRight } from "react-icons/fi";

interface ServiceCard {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    img: "/images/services/btp-workers.jpg",
    title: "BTP",
    desc: "De la conception à la réalisation, nous bâtissons des infrastructures résidentielles, commerciales, industrielles et publiques, en intégrant des solutions modernes et durables.",
    link: "/services/service-btp",
  },
  {
    img: "/images/services/gestion-immobiliere.jpg",
    title: "GESTION IMMOBILIÈRE",
    desc: "Nous rénovons et modernisons les bâtiments existants en réparant ou en remplaçant les structures vieillissantes, garantissant durabilité et confort.",
    link: "/services/gestion-immobiliere",
  },
  {
    img: "/images/services/placement-personnel.jpg",
    title: "PLACEMENT DE PERSONNELS",
    desc: "Nous mettons à disposition des entreprises et particuliers des candidats qualifiés, fiables et opérationnels pour des missions ponctuelles ou longues.",
    link: "/services/placements-de-personnels",
  },
  {
    img: "/images/services/gardiennage.jpg",
    title: "GARDIENNAGE & CONCIERGERIE",
    desc: "Nous protégeons vos sites avec un service de sécurité privée et de conciergerie haut de gamme, fiable et discret.",
    link: "/services/service-de-gardiennage-de-conciergerie",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-[#faf5f0]">
      <div className="max-w-[1340px] mx-auto">
        <SectionTitle
          title="Nos domaines d'expertise"
          subtitle="Une expertise complète pour développer, gérer et valoriser vos projets immobiliers avec performance et durabilité."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.link} className="group block">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  {/* Image with overlay on hover */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Arrow icon on hover */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#F88732] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <FiArrowRight className="text-white text-lg" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold uppercase text-[#1f2d3d] mb-3 font-[Roboto_Condensed] group-hover:text-[#F88732] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed font-[Roboto]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
