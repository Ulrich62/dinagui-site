"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";
import { Keyboard, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Grid2x2, Play, X } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

type MediaItem =
  | { kind: "photo"; src: string }
  | { kind: "video"; src: string };

type Props = {
  photos: string[];
  video?: string;
  title: string;
};

export default function RentalMedia({ photos, video, title }: Props) {
  const items: MediaItem[] = [
    ...photos.map((src) => ({ kind: "photo" as const, src })),
    ...(video ? [{ kind: "video" as const, src: video }] : []),
  ];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile: full-width swiper */}
      <MobileSwiper items={items} title={title} onOpen={openLightbox} />

      {/* Desktop: mosaic or full video */}
      <div className="hidden md:block">
        {photos.length === 0 && video ? (
          <VideoHero video={video} onOpen={() => openLightbox(0)} />
        ) : (
          <DesktopMosaic
            items={items}
            photos={photos}
            title={title}
            onOpen={openLightbox}
          />
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          initialIndex={lightboxIndex}
          title={title}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}

/* -------------------------------------------------------------------- */
/* Mobile Swiper                                                         */
/* -------------------------------------------------------------------- */

function MobileSwiper({
  items,
  title,
  onOpen,
}: {
  items: MediaItem[];
  title: string;
  onOpen: (i: number) => void;
}) {
  return (
    <div className="md:hidden relative aspect-[4/3] bg-[#1f2d3d] rounded-[14px] overflow-hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={items.length > 1}
        className="h-full rental-swiper"
      >
        {items.map((item, i) => (
          <SwiperSlide key={`${item.kind}-${i}`} className="relative">
            <button
              type="button"
              onClick={() => onOpen(i)}
              className="absolute inset-0 w-full h-full"
              aria-label={`Ouvrir le média ${i + 1}`}
            >
              {item.kind === "photo" ? (
                <Image
                  src={item.src}
                  alt={`${title} — ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 pointer-events-none"
                  />
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="relative z-10 w-full h-full object-contain"
                  />
                </>
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        onClick={() => onOpen(0)}
        className="absolute bottom-3 right-3 z-20 bg-white/95 hover:bg-white text-[#1f2d3d] text-xs font-semibold px-3 py-2 rounded-md shadow-md flex items-center gap-2 font-[Roboto]"
      >
        <Grid2x2 className="w-4 h-4" strokeWidth={1.75} /> Voir tout ({items.length})
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Desktop Mosaic (Airbnb-style 1+4)                                     */
/* -------------------------------------------------------------------- */

function DesktopMosaic({
  items,
  photos,
  title,
  onOpen,
}: {
  items: MediaItem[];
  photos: string[];
  title: string;
  onOpen: (i: number) => void;
}) {
  const cells = photos.slice(0, 5);
  const hasOverflow = items.length > 5;

  return (
    <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[560px] rounded-[16px] overflow-hidden">
      {cells.map((src, i) => {
        const isHero = i === 0;
        const overlay = i === 4 && hasOverflow;
        return (
          <button
            key={src}
            type="button"
            onClick={() => onOpen(i)}
            className={`relative group ${
              isHero ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
            aria-label={`Photo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} — ${i + 1}`}
              fill
              sizes={isHero ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              className="object-cover group-hover:brightness-90 transition-all duration-300"
              priority={isHero}
            />
            {overlay && (
              <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                <span className="text-white text-3xl font-bold font-[Roboto_Condensed]">
                  +{items.length - 5}
                </span>
              </div>
            )}
          </button>
        );
      })}

      {/* Fill empty cells (if photos < 5) with muted placeholder */}
      {Array.from({ length: Math.max(0, 5 - cells.length) }).map((_, i) => (
        <div
          key={`filler-${i}`}
          className={`${i === 0 && cells.length === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} bg-[#faf5f0]`}
        />
      ))}

      <button
        type="button"
        onClick={() => onOpen(0)}
        className="absolute bottom-4 right-4 z-10 bg-white hover:bg-gray-50 text-[#1f2d3d] text-sm font-semibold px-4 py-2.5 rounded-md shadow-lg flex items-center gap-2 font-[Roboto] border border-gray-200"
      >
        <Grid2x2 className="w-4 h-4" strokeWidth={1.75} /> Afficher toutes les photos
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Video Hero (for video-only offers)                                    */
/* -------------------------------------------------------------------- */

function VideoHero({ video, onOpen }: { video: string; onOpen: () => void }) {
  return (
    <div className="relative bg-[#1f2d3d] rounded-[16px] overflow-hidden aspect-[16/9]">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 pointer-events-none"
      />
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="relative z-10 w-full h-full object-contain"
      />
      <button
        type="button"
        onClick={onOpen}
        className="absolute bottom-4 right-4 z-20 bg-white hover:bg-gray-50 text-[#1f2d3d] text-sm font-semibold px-4 py-2.5 rounded-md shadow-lg flex items-center gap-2 font-[Roboto] border border-gray-200"
      >
        <Play className="w-4 h-4" strokeWidth={1.75} /> Lire la visite vidéo
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Lightbox                                                              */
/* -------------------------------------------------------------------- */

function Lightbox({
  items,
  initialIndex,
  title,
  onClose,
}: {
  items: MediaItem[];
  initialIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 text-white">
        <div className="text-sm font-[Roboto] tabular-nums">
          {activeIndex + 1} / {items.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 px-0 md:px-8 pb-6 md:pb-10">
        <Swiper
          modules={[Pagination, Keyboard]}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          initialSlide={initialIndex}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          loop={items.length > 1}
          className="h-full lightbox-swiper"
        >
          {items.map((item, i) => (
            <SwiperSlide key={`${item.kind}-${i}`} className="flex items-center justify-center">
              {item.kind === "photo" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={`${title} — ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={i === initialIndex}
                  />
                </div>
              ) : (
                <video
                  src={item.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Précédent"
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#F88732] text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Suivant"
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#F88732] text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
