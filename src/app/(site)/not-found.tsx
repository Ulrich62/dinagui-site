import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page introuvable — DINAGUI SARL",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

const links = [
  { href: "/a-propos", label: "À propos" },
  { href: "/nos-offres/location-dappartements", label: "Nos locations" },
  { href: "/services/service-btp", label: "Services BTP" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden bg-[#1f2d3d]">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,135,50,0.18) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,135,50,0.10) 0%, transparent 70%)" }}
      />

      {/* Logo */}
      <Link href="/" className="mb-10 relative z-10">
        <Image
          src="/images/logo-dinagui-small.avif"
          alt="DINAGUI SARL"
          width={64}
          height={64}
          className="object-contain brightness-0 invert"
        />
      </Link>

      {/* 404 */}
      <p
        aria-hidden="true"
        className="relative z-10 select-none leading-none font-[Roboto_Condensed] font-black tracking-tighter"
        style={{
          fontSize: "clamp(96px, 20vw, 180px)",
          background: "linear-gradient(135deg, #F88732 0%, #ffb570 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </p>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="relative z-10 my-6 h-[3px] w-16 rounded-full"
        style={{ background: "linear-gradient(90deg, #F88732, transparent)" }}
      />

      {/* Title */}
      <h1 className="relative z-10 text-white text-center font-[Roboto_Condensed] font-bold uppercase tracking-wide text-3xl mb-3">
        Page introuvable
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-white/60 text-center text-base max-w-sm mb-10 leading-relaxed">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Revenez à l&apos;accueil ou explorez nos rubriques.
      </p>

      {/* CTA */}
      <Link
        href="/"
        id="not-found-home-link"
        className="relative z-10 mb-8 inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_24px_rgba(248,135,50,0.35)] hover:shadow-[0_8px_32px_rgba(248,135,50,0.45)] hover:-translate-y-0.5"
      >
        ← Retour à l&apos;accueil
      </Link>

      {/* Secondary nav */}
      <nav aria-label="Pages suggérées" className="relative z-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white/50 hover:text-[#F88732] text-sm transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
