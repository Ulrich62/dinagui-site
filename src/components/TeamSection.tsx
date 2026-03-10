"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const members: TeamMember[] = [
  {
    name: "Zeinab Souma",
    role: "Secrétaire",
    photo: "/images/team/portrait-team.png",
  },
  {
    name: "Mamadou Diao Bah",
    role: "Gestionnaire de site",
    photo: "/images/team/portrait-team.png",
  },
  {
    name: "Fatoumata Binta Bah",
    role: "Directrice Générale Adjointe",
    photo: "/images/team/portrait-team.png",
  },
  {
    name: "Dine DIALLO",
    role: "Directeur Général",
    photo: "/images/team/portrait-team.png",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1340px] mx-auto">
        <SectionTitle
          title="Notre équipe"
          subtitle="Des professionnels engagés au service de vos projets"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1100px] mx-auto mb-12">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-default"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Name/role on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white font-[Roboto_Condensed] uppercase">
                    {member.name}
                  </h3>
                  <p className="text-[#F88732] text-sm font-[Roboto]">
                    {member.role}
                  </p>
                </div>
              </div>
              {/* Name/role below (visible by default, hidden on hover) */}
              <div className="pt-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                  {member.name}
                </h3>
                <p className="text-[#6b7280] text-sm font-[Roboto]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notre-equipe"
            className="inline-block bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
          >
            Découvrez toute l&apos;équipe
          </Link>
        </div>
      </div>
    </section>
  );
}
