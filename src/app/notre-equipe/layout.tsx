import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe - DINAGUI SARL",
  description:
    "Rencontrez l'équipe de DINAGUI SARL : des professionnels dévoués en BTP, gestion immobilière et services à Conakry, Guinée.",
};

export default function NotreEquipeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
