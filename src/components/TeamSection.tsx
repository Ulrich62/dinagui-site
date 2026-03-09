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
    <section className="py-20 px-4">
      <div className="max-w-[1340px] mx-auto">
        <SectionTitle
          title="Notre équipe"
          subtitle="Des professionnels engagés au service de vos projets"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-default"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[4px]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                  {member.name}
                </h3>
                <p className="text-[#6b7280] text-sm italic font-[Roboto]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notre-equipe"
            className="inline-block bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-4 rounded transition-colors duration-300 font-[Roboto]"
          >
            Découvrez toute l&apos;équipe
          </Link>
        </div>
      </div>
    </section>
  );
}
