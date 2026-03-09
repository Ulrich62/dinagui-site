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
    desc: "Des délais respectés, des budgets maîtrisés et un suivi transparent tout au long de votre projet.",
  },
];

export default function ExpertiseCards() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#faf5f0" }}>
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[#F88732] rounded-[10px] p-6 transition-all duration-300 hover:-translate-y-[6px] cursor-default"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={56}
                  height={56}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-bold text-white font-[Roboto_Condensed] uppercase leading-tight">
                {card.title}
              </h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed font-[Roboto]">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
