"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiPlay } from "react-icons/fi";

export interface Offer {
  title: string;
  kicker: string;
  surface?: string;
  description: string;
  highlights: string[];
  href: string;
  poster: string;
  video: string;
}

export default function OfferCard({ offer }: { offer: Offer }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.then(() => setIsPlaying(true)).catch(() => {});
    } else {
      setIsPlaying(true);
    }
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <Link
      href={offer.href}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      className="group block bg-white rounded-[10px] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F88732]"
    >
      <div className="relative aspect-video overflow-hidden bg-[#1f2d3d]">
        <Image
          src={offer.poster}
          alt={offer.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className={`object-cover transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100 group-hover:scale-105"
          }`}
        />
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src={offer.video.replace(/\.mp4$/i, ".webm")} type="video/webm" />
          <source src={offer.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/70 via-transparent to-transparent pointer-events-none" />

        {/* Kicker badge */}
        <div className="absolute top-4 left-4 bg-[#F88732] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded font-[Roboto_Condensed] z-10">
          {offer.kicker}
        </div>

        {/* Surface badge */}
        {offer.surface && (
          <div className="absolute top-4 right-4 bg-white/95 text-[#1f2d3d] text-[12px] font-bold px-3 py-1.5 rounded font-[Roboto_Condensed] z-10">
            {offer.surface}
          </div>
        )}

        {/* Play indicator (disappears while playing) */}
        <div
          className={`absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-300 z-10 ${
            isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100 group-hover:scale-110"
          }`}
          aria-hidden="true"
        >
          <FiPlay className="text-[#F88732] translate-x-0.5" />
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-3 group-hover:text-[#F88732] transition-colors">
          {offer.title}
        </h3>
        <p className="text-[#6b7280] text-[14px] leading-relaxed font-[Roboto] mb-4">
          {offer.description}
        </p>
        <ul className="space-y-2 mb-5">
          {offer.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[#6b7280] text-[13.5px] font-[Roboto]">
              <FiCheck className="text-[#F88732] mt-0.5 flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-2 text-[#F88732] font-semibold text-sm font-[Roboto] group-hover:gap-3 transition-all">
          Voir l&apos;offre <FiArrowRight />
        </span>
      </div>
    </Link>
  );
}
