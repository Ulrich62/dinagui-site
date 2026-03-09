"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      {/* Vertical line above */}
      <div className="flex justify-center mb-6">
        <div className="w-px h-14 bg-[#d1d5db]" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[#6b7280] mt-3 italic font-[Roboto]">
          {subtitle}
        </p>
      )}

      {/* Vertical line below */}
      <div className="flex justify-center mt-6">
        <div className="w-px h-14 bg-[#d1d5db]" />
      </div>
    </motion.div>
  );
}
