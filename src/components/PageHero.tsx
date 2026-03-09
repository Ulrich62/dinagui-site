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
  backgroundImage = "/images/parallax-bg.avif",
  ctaText,
  ctaLink = "/contact",
  bordered = false,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {bordered ? (
          <div className="inline-block border-2 border-white/70 px-10 py-6 md:px-16 md:py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-[Roboto_Condensed] uppercase">
              {title}
            </h1>
          </div>
        ) : (
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight font-[Roboto_Condensed] uppercase">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 font-[Roboto]">{subtitle}</p>
        )}
        {ctaText && (
          <Link
            href={ctaLink}
            className="inline-block mt-6 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-10 py-4 rounded transition-colors duration-300 font-[Roboto]"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
