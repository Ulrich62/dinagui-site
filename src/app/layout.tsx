import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
              name: "DINAGUI SARL",
              description:
                "Entreprise guinéenne spécialisée en BTP, gestion immobilière et services pluridisciplinaires",
              url: "https://dinagui-site.vercel.app",
              telephone: "+224613500404",
              email: "dinagui.sarlu@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Kipé, C/Ratoma Centre émetteur, Cité Plaza Platinium",
                addressLocality: "Conakry",
                addressCountry: "GN",
              },
              foundingDate: "2012",
              founder: {
                "@type": "Person",
                name: "Dine DIALLO",
              },
              sameAs: [],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
