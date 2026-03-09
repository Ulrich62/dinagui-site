"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 90,
    suffix: "",
    label: "PROJETS IMMOBILIERS LIVRÉS DANS LES DÉLAIS",
  },
  {
    value: 85,
    suffix: "",
    label: "CLIENTS ET INVESTISSEURS SATISFAITS",
  },
  {
    value: 100,
    suffix: "%",
    label: "BIENS DÉVELOPPÉS ET GÉRÉS AVEC SUCCÈS",
  },
  {
    value: 100,
    suffix: "%",
    label: "ENGAGEMENT QUALITÉ & VALORISATION DURABLE",
  },
];

function AnimatedCircle({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [current, setCurrent] = useState(0);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (current / 100) * circumference;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCurrent(start);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <div className="relative w-[200px] h-[200px] mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? strokeDashoffset : circumference}
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl md:text-6xl font-bold text-white font-[Roboto]">
          {current}{suffix}
        </span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="relative py-24 px-4"
      style={{
        backgroundImage: "url('/images/parallax-bg.avif')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1f2d3d]/85" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <AnimatedCircle value={stat.value} suffix={stat.suffix} inView={inView} />
            <p className="text-white/80 text-sm leading-relaxed max-w-[220px] font-[Roboto] uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
