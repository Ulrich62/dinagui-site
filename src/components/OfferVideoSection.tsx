import { FiPlay } from "react-icons/fi";

interface OfferVideoSectionProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
  background?: "white" | "beige" | "dark";
  poster?: string;
}

const bgClasses = {
  white: "bg-white",
  beige: "bg-[#faf5f0]",
  dark: "bg-[#1f2d3d]",
} as const;

export default function OfferVideoSection({
  videoSrc,
  title,
  subtitle,
  background = "beige",
  poster,
}: OfferVideoSectionProps) {
  const isDark = background === "dark";
  const webmSrc = videoSrc.replace(/\.mp4$/i, ".webm");
  return (
    <section className={`py-20 ${bgClasses[background]}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className={`w-8 h-px ${isDark ? "bg-white/30" : "bg-gray-300"}`} />
            <div className="w-2 h-2 rounded-full bg-[#F88732]" />
            <div className={`w-8 h-px ${isDark ? "bg-white/30" : "bg-gray-300"}`} />
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold font-[Roboto_Condensed] uppercase ${
              isDark ? "text-white" : "text-[#1f2d3d]"
            }`}
          >
            <span className="inline-flex items-center gap-3">
              <FiPlay className="text-[#F88732]" />
              {title}
            </span>
          </h2>
          {subtitle && (
            <p
              className={`mt-4 max-w-[640px] mx-auto text-[15px] leading-relaxed font-[Roboto] ${
                isDark ? "text-white/75" : "text-[#6b7280]"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl bg-[#1f2d3d] aspect-[4/3] lg:aspect-video">
          {/* Blurred ambient background */}
          <video
            className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            poster={poster}
          >
            <source src={webmSrc} type="video/webm" />
            <source src={videoSrc} type="video/mp4" />
          </video>
          <video
            className="relative z-10 w-full h-full object-contain"
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={webmSrc} type="video/webm" />
            <source src={videoSrc} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>
      </div>
    </section>
  );
}
