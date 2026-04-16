import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinagui-site.vercel.app"),
  title: "DINAGUI SARL - Un choix sûr et durable",
  description:
    "DINAGUI SARL, votre partenaire de confiance pour l'exécution de projet de construction et d'aménagement en Guinée. BTP, Gestion immobilière, Services pluridisciplinaires.",
  keywords: "DINAGUI, BTP, construction, immobilier, Guinée, Conakry",
  openGraph: {
    title: "DINAGUI SARL - Un choix sûr et durable",
    description:
      "DINAGUI SARL, votre partenaire de confiance pour l'exécution de projet de construction et d'aménagement en Guinée. BTP, Gestion immobilière, Services pluridisciplinaires.",
    url: "https://dinagui-site.vercel.app",
    siteName: "DINAGUI SARL",
    locale: "fr_GN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DINAGUI SARL - Un choix sûr et durable",
    description:
      "DINAGUI SARL, votre partenaire de confiance pour l'exécution de projet de construction et d'aménagement en Guinée. BTP, Gestion immobilière, Services pluridisciplinaires.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://dinagui-site.vercel.app/#organization",
              name: "DINAGUI SARL",
              alternateName: "DINAGUI",
              description:
                "Entreprise guinéenne spécialisée en BTP, gestion immobilière et services pluridisciplinaires",
              url: "https://dinagui-site.vercel.app",
              logo: "https://dinagui-site.vercel.app/images/logo-dinagui.avif",
              image: "https://dinagui-site.vercel.app/opengraph-image.png",
              telephone: "+224613500404",
              email: "contact@dinagui.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Kipé, C/Ratoma Centre émetteur, Cité Plaza Platinium",
                addressLocality: "Conakry",
                addressCountry: "GN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 9.5655,
                longitude: -13.6285,
              },
              foundingDate: "2012",
              founder: {
                "@type": "Person",
                name: "Dine DIALLO",
              },
              slogan: "Un choix sûr et durable",
              knowsLanguage: ["fr"],
              areaServed: {
                "@type": "Country",
                name: "Guinée",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services DINAGUI SARL",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "BTP & Construction",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Finition" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation" } },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Gestion Immobilière",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestion locative" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accompagnement investisseurs" } },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Placement de personnels" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gardiennage & Conciergerie" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logistique & Transport" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commerce général" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transit & Douane" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consulting" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fourniture de bureau" } },
                    ],
                  },
                ],
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
