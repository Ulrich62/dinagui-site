import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement de Personnels - DINAGUI SARL",
  description:
    "Mise à disposition de personnel qualifié en BTP, sécurité, nettoyage et logistique à Conakry. Recrutement et placement par DINAGUI SARL.",
};

const services = [
  {
    title: "Structurer votre offre",
    description:
      "Nous mettons à disposition du personnel qualifié et encadré pour les secteurs du BTP, de la sécurité, du nettoyage, de la logistique et de l'administration. Chaque mission est encadrée par un processus rigoureux, garantissant efficacité, conformité et satisfaction client.",
  },
  {
    title: "Créer des fiches de poste",
    description:
      "Nous garantissons des profils fiables, une gestion transparente et un encadrement terrain adapté à chaque mission. Notre objectif : professionnaliser le travail temporaire en Guinée.",
  },
  {
    title: "Suivi des missions",
    description:
      "Assurer la traçabilité des affectations et des rotations avec suivi de présence, de performance et des incidents, tout en produisant des rapports clairs pour les clients et le pilotage interne afin d'optimiser la gestion RH et anticiper les besoins.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function PlacementDePersonnelsPage() {
  return (
    <ServicePageLayout
      heroTitle="PLACEMENT DE PERSONNELS"
      introTitle="Placement de personnels qualifiés"
      introText="Nous mettons à disposition des entreprises, chantiers, institutions et particuliers en besoins en main-d'œuvre qualifiés, fiables et opérationnels, des candidats compétents pour des missions ponctuelles ou longues durées, tout en assurant la gestion administrative, le suivi terrain et la formation continue."
      introImage="/images/services/placement-personnel.jpg"
      sectionTitle="Nos solutions de placement"
      services={services}
      otherServices={otherServices}
      columns={3}
      ctaTitle="Trouvez les talents dont vous avez besoin"
      ctaText="Trouvez les talents dont vous avez besoin grâce à notre expertise en recrutement et placement de personnel qualifié."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Des talents adaptés à vos besoins"
      darkSectionText="Nous sélectionnons, formons et mettons à votre disposition des professionnels qualifiés pour répondre à vos exigences. Gagnez en efficacité avec DINAGUI SARL."
      bottomBarText="Vos besoins en personnel, notre spécialité"
      backgroundImage="/images/services/placement-personnel.jpg"
    />
  );
}
