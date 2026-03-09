"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface ServiceCard {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    img: "/images/services/btp-workers.avif",
    title: "BTP",
    desc: "De la conception à la réalisation, nous bâtissons des infrastructures résidentielles, commerciales, industrielles et publiques, en intégrant des solutions modernes et durables. Chaque projet est conçu sur mesure pour répondre aux besoins spécifiques de nos clients, avec un engagement constant en matière de qualité, de sécurité et de respect des délais.",
    link: "/services/service-btp",
  },
  {
    img: "/images/services/gestion-immobiliere.avif",
    title: "GESTION IMMOBILIÈRE",
    desc: "Nous rénovons et modernisons les bâtiments existants en réparant ou en remplaçant les structures vieillissantes. Nos équipes améliorent également l\u2019isolation et l\u2019efficacité énergétique, garantissant que chaque rénovation offre durabilité et confort.",
    link: "/services/gestion-immobiliere",
  },
  {
    img: "/images/services/placement-personnel.avif",
    title: "PLACEMENT DE PERSONNELS",
    desc: "Nous mettons à disposition des entreprises, chantiers, institutions et particuliers des candidats qualifiés, fiables et opérationnels pour des missions ponctuelles ou longues, en assurant gestion administrative, suivi terrain et formation continue.",
    link: "/services/placements-de-personnels",
  },
  {
    img: "/images/services/gardiennage.avif",
    title: "SERVICE DE GARDIENNAGE & DE CONCIERGERIE",
    desc: "Nous protégeons vos sites avec un service de sécurité privée et de conciergerie haut de gamme, fiable et discret, grâce à une présence qualifiée, des rondes régulières et une coordination rigoureuse, adaptée aux entreprises, résidences, chantiers et institutions.",
    link: "/services/service-de-gardiennage-de-conciergerie",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1340px] mx-auto">
        <SectionTitle
          title="Nos domaines d'expertise"
          subtitle="Une expertise complète pour développer, gérer et valoriser vos projets immobiliers avec performance et durabilité."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[10px] overflow-hidden"
              style={{ backgroundColor: "#faf5f0" }}
            >
              <div className="relative w-full aspect-[16/10] rounded-t-[10px] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase text-[#1f2d3d] mb-3 font-[Roboto_Condensed]">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5 font-[Roboto]">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="inline-block bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold text-sm px-8 py-3 rounded transition-colors duration-300 font-[Roboto]"
                >
                  Savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
