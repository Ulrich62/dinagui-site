import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistique & Transport - DINAGUI SARL",
  description:
    "Transport de marchandises, logistique et livraison en Guinée. Location d'engins et déménagement à Conakry par DINAGUI SARL.",
};

const services = [
  {
    title: "Transport de marchandises",
    description:
      "Nous assurons le transport de vos marchandises sur tout le territoire national et dans la sous-région, avec des solutions adaptées à chaque type de cargaison, pour garantir un acheminement sûr, ponctuel et conforme à vos exigences.",
  },
  {
    title: "Transport du personnel",
    description:
      "Nous assurons le déplacement quotidien de vos équipes avec des véhicules adaptés, des chauffeurs expérimentés et une organisation optimisée, pour garantir ponctualité, sécurité et confort.",
  },
  {
    title: "Location d'engins lourds",
    description:
      "Nous mettons à votre disposition une flotte d'engins lourds modernes et entretenus, avec ou sans chauffeur, pour répondre à vos besoins en travaux publics, construction, manutention ou exploitation minière.",
  },
  {
    title: "Logistique événementielle",
    description:
      "Gestion du matériel, montage/démontage, transport pour salons et conférences. Organisation complète de la logistique pour vos événements professionnels et institutionnels.",
  },
  {
    title: "Import-export",
    description:
      "Nous facilitons vos opérations d'importation et d'exportation avec des solutions logistiques complètes, conformes aux normes douanières et adaptées aux réalités du marché guinéen et sous-régional.",
  },
  {
    title: "Livraisons urbaines",
    description:
      "Nous assurons la livraison rapide et sécurisée de vos colis, documents et marchandises au sein des zones urbaines, grâce à une organisation optimisée et des moyens adaptés au dernier kilomètre.",
  },
  {
    title: "Gestion d'entrepôts",
    description:
      "Nous assurons la gestion complète de vos entrepôts et espaces de stockage, pour optimiser vos flux logistiques, sécuriser vos marchandises et réduire vos coûts opérationnels.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function LogistiqueTransportPage() {
  return (
    <ServicePageLayout
      heroTitle="SOLUTIONS DE LOGISTIQUE & TRANSPORT FIABLES"
      introTitle="Nous bougeons pour vous, partout en Guinée et dans la sous-région"
      introText="DINAGUI SARL vous propose des solutions de logistique et de transport sur mesure, fiables et sécurisées, pour accompagner les entreprises, les chantiers, les institutions et les particuliers dans leurs opérations quotidiennes ou stratégiques."
      sectionTitle="Nos domaines d'expertise"
      services={services}
      otherServices={otherServices}
      ctaTitle="Optimisez votre chaîne logistique avec DINAGUI"
      ctaText="Des solutions logistiques fiables et sécurisées pour accompagner vos opérations partout en Guinée et dans la sous-région."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Une logistique à la hauteur de vos ambitions"
      darkSectionText="Notre flotte et nos équipes expérimentées assurent le transport et la livraison de vos marchandises en toute sécurité. Faites confiance à DINAGUI SARL."
      bottomBarText="Vos marchandises, notre responsabilité"
      introImage="/images/services/logistique-transport.jpg"
      backgroundImage="/images/services/logistique-transport.jpg"
    />
  );
}
