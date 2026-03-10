"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      {/* Decorative element */}
      <div className="flex justify-center items-center gap-3 mb-5">
        <div className={`w-8 h-px ${light ? "bg-white/30" : "bg-[#d1d5db]"}`} />
        <div className="w-2 h-2 rounded-full bg-[#F88732]" />
        <div className={`w-8 h-px ${light ? "bg-white/30" : "bg-[#d1d5db]"}`} />
      </div>

      <h2 className={`text-3xl md:text-4xl font-bold font-[Roboto_Condensed] uppercase ${light ? "text-white" : "text-[#1f2d3d]"}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 max-w-[600px] mx-auto text-[15px] leading-relaxed font-[Roboto] ${light ? "text-white/70" : "text-[#6b7280]"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
