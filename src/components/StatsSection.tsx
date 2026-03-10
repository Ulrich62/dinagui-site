"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 90,
    suffix: "+",
    label: "Projets immobiliers livrés dans les délais",
  },
  {
    value: 85,
    suffix: "+",
    label: "Clients et investisseurs satisfaits",
  },
  {
    value: 100,
    suffix: "%",
    label: "Biens développés et gérés avec succès",
  },
  {
    value: 100,
    suffix: "%",
    label: "Engagement qualité & valorisation durable",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <div className="text-center">
      <div className="relative inline-block mb-4">
        <span className="text-5xl md:text-6xl font-bold text-white font-[Roboto_Condensed]">
          {current}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-[#F88732] ml-1">
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <Image
        src="/images/parallax-bg.jpg"
        alt="Arrière-plan statistiques"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1a2332]/90" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1340px] mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 relative"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              {/* Separator line */}
              <div className="w-10 h-0.5 bg-[#F88732]/50 rounded" />
              <p className="text-white/70 text-sm leading-relaxed text-center max-w-[200px] font-[Roboto]">
                {stat.label}
              </p>
              {/* Vertical divider between items (hidden on last) */}
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
