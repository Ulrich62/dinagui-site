import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - DINAGUI SARL",
  description:
    "Contactez DINAGUI SARL à Conakry pour vos projets BTP, immobilier et services. Téléphone, email et formulaire de devis disponibles.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
