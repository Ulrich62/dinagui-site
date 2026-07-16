import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page introuvable — DINAGUI SARL",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "linear-gradient(160deg, #0f1c2d 0%, #1f2d3d 60%, #2b3d52 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Decorative blurred circles */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248,135,50,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248,135,50,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <Link href="/" style={{ marginBottom: 40, display: "inline-block" }}>
        <Image
          src="/images/logo-dinagui-small.avif"
          alt="DINAGUI SARL"
          width={64}
          height={64}
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </Link>

      {/* 404 number */}
      <p
        style={{
          fontSize: "clamp(96px, 20vw, 180px)",
          fontWeight: 900,
          lineHeight: 1,
          margin: 0,
          fontFamily: "'Roboto Condensed', sans-serif",
          background: "linear-gradient(135deg, #F88732 0%, #ffb570 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-4px",
          userSelect: "none",
        }}
      >
        404
      </p>

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{
          width: 64,
          height: 3,
          background: "linear-gradient(90deg, #F88732, transparent)",
          borderRadius: 99,
          margin: "24px 0",
        }}
      />

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(22px, 4vw, 32px)",
          fontWeight: 700,
          color: "#fff",
          margin: "0 0 12px",
          textAlign: "center",
          fontFamily: "'Roboto Condensed', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        Page introuvable
      </h1>

      {/* Subtitle */}
      <p
        style={{
          color: "rgba(255,255,255,0.60)",
          fontSize: 16,
          maxWidth: 420,
          textAlign: "center",
          margin: "0 0 40px",
          lineHeight: 1.6,
        }}
      >
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Revenez à l&apos;accueil ou explorez nos rubriques.
      </p>

      {/* CTA principal */}
      <Link
        href="/"
        id="not-found-home-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "linear-gradient(135deg, #F88732 0%, #e0752a 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: 15,
          padding: "14px 32px",
          borderRadius: 999,
          textDecoration: "none",
          boxShadow: "0 4px 24px rgba(248,135,50,0.35)",
          letterSpacing: "0.02em",
          transition: "transform 0.2s, box-shadow 0.2s",
          marginBottom: 32,
        }}
      >
        ← Retour à l&apos;accueil
      </Link>

      {/* Secondary links */}
      <nav
        aria-label="Pages suggérées"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px 24px",
        }}
      >
        {[
          { href: "/a-propos", label: "À propos" },
          { href: "/nos-offres/location-dappartements", label: "Nos locations" },
          { href: "/services/service-btp", label: "Services BTP" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              color: "rgba(255,255,255,0.50)",
              fontSize: 13,
              textDecoration: "none",
              transition: "color 0.2s",
              padding: "4px 0",
              borderBottom: "1px solid rgba(248,135,50,0)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#F88732";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.50)";
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
