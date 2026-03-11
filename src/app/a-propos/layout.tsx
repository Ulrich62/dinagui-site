import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - DINAGUI SARL",
  description:
    "Découvrez DINAGUI SARL, entreprise guinéenne spécialisée en BTP, gestion immobilière et services depuis 2012 à Conakry.",
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return children;
}
