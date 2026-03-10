import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  bordered?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = "/images/parallax-bg.jpg",
  ctaText,
  ctaLink = "/contact",
  bordered = false,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/80 via-[#1a2332]/60 to-[#1a2332]/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Decorative element */}
        <div className="flex justify-center items-center gap-3 mb-5">
          <div className="w-8 h-px bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-[#F88732]" />
          <div className="w-8 h-px bg-white/30" />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Roboto_Condensed] uppercase">
          {title}
        </h1>

        {bordered && (
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-[#F88732] rounded" />
          </div>
        )}

        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/80 font-[Roboto] max-w-[600px] mx-auto leading-relaxed">{subtitle}</p>
        )}

        {ctaText && (
          <Link
            href={ctaLink}
            className="inline-block mt-7 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
