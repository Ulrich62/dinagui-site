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
  title: "DINAGUI SARL - Un choix sûr et durable",
  description:
    "DINAGUI SARL, votre partenaire de confiance pour l'exécution de projet de construction et d'aménagement en Guinée. BTP, Gestion immobilière, Services pluridisciplinaires.",
  keywords: "DINAGUI, BTP, construction, immobilier, Guinée, Conakry",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
