"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExpertiseCard {
  icon: string;
  title: string;
  desc: string;
}

const cards: ExpertiseCard[] = [
  {
    icon: "/images/icons/casquette-de-graduation.webp",
    title: "EXPERTISE DEPUIS 2012",
    desc: "Une solide expérience en immobilier résidentiel et commercial.",
  },
  {
    icon: "/images/icons/responsabilite.webp",
    title: "MAÎTRISE DU MARCHÉ IMMOBILIER",
    desc: "Une parfaite connaissance du terrain pour guider vos meilleures décisions.",
  },
  {
    icon: "/images/icons/good-feedback.avif",
    title: "SOLUTIONS SUR MESURE",
    desc: "Des stratégies personnalisées adaptées à vos objectifs et à votre budget.",
  },
  {
    icon: "/images/icons/certificat-de-garantie.webp",
    title: "ENGAGEMENT & FIABILITÉ",
    desc: "Des délais respectés, des budgets maîtrisés et un suivi transparent.",
  },
];

export default function ExpertiseCards() {
  return (
    <section className="relative -mt-16 z-20 px-6 pb-8">
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Orange top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F88732] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F88732] transition-colors duration-300">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <h3 className="text-[15px] font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight">
                {card.title}
              </h3>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed font-[Roboto]">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
