/**
 * 404 racine — capturée par Next.js pour toutes les routes inconnues
 * hors groupes (site) et (payload).
 * Utilise des styles inline pour être indépendante du layout.
 */
import Link from "next/link";

export const metadata = {
  title: "Page introuvable — DINAGUI SARL",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:wght@700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        .nf-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          background: linear-gradient(160deg, #0f1c2d 0%, #1f2d3d 60%, #2b3d52 100%);
          font-family: 'Roboto', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .nf-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .nf-blob-1 {
          top: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(248,135,50,0.18) 0%, transparent 70%);
        }
        .nf-blob-2 {
          bottom: -100px; left: -100px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(248,135,50,0.10) 0%, transparent 70%);
        }
        .nf-logo {
          margin-bottom: 40px;
          display: block;
          width: 64px; height: 64px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .nf-number {
          font-size: clamp(96px, 20vw, 180px);
          font-weight: 900;
          line-height: 1;
          font-family: 'Roboto Condensed', sans-serif;
          background: linear-gradient(135deg, #F88732 0%, #ffb570 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -4px;
          user-select: none;
        }
        .nf-divider {
          width: 64px; height: 3px;
          background: linear-gradient(90deg, #F88732, transparent);
          border-radius: 99px;
          margin: 24px 0;
        }
        .nf-title {
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          text-align: center;
          font-family: 'Roboto Condensed', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .nf-subtitle {
          color: rgba(255,255,255,0.60);
          font-size: 16px;
          max-width: 420px;
          text-align: center;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .nf-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #F88732 0%, #e0752a 100%);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(248,135,50,0.35);
          letter-spacing: 0.02em;
          margin-bottom: 32px;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Roboto', sans-serif;
        }
        .nf-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(248,135,50,0.45);
        }
        .nf-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 24px;
          list-style: none;
        }
        .nf-nav a {
          color: rgba(255,255,255,0.50);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
          padding: 4px 0;
          font-family: 'Roboto', sans-serif;
        }
        .nf-nav a:hover { color: #F88732; }
      `}</style>

      <main className="nf-root">
        <div className="nf-blob nf-blob-1" aria-hidden="true" />
        <div className="nf-blob nf-blob-2" aria-hidden="true" />

        <Link href="/" aria-label="Retour à l'accueil DINAGUI">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-dinagui-small.avif"
            alt="DINAGUI SARL"
            className="nf-logo"
            width={64}
            height={64}
          />
        </Link>

        <p className="nf-number" aria-hidden="true">404</p>

        <div className="nf-divider" aria-hidden="true" />

        <h1 className="nf-title">Page introuvable</h1>

        <p className="nf-subtitle">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Revenez à l&apos;accueil ou explorez nos rubriques.
        </p>

        <Link href="/" className="nf-cta" id="not-found-home-link">
          ← Retour à l&apos;accueil
        </Link>

        <nav aria-label="Pages suggérées">
          <ul className="nf-nav">
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/nos-offres/location-dappartements">Nos locations</Link></li>
            <li><Link href="/services/service-btp">Services BTP</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </main>
    </>
  );
}
