import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transit & Douane - DINAGUI SARL",
  description:
    "Transit maritime, terrestre et aérien, dédouanement et formalités import-export à Conakry. Services douaniers par DINAGUI SARL en Guinée.",
};

const services = [
  {
    title: "Transit maritime, terrestre et aérien",
    description:
      "Nous assurons la gestion complète de vos opérations de transit, qu'elles soient maritimes, terrestres ou aériennes, avec un suivi rigoureux, une conformité douanière garantie et une optimisation des délais et coûts.",
  },
  {
    title: "Dédouanement",
    description:
      "Nous prenons en charge l'ensemble des formalités douanières pour vos marchandises, afin de garantir un passage fluide aux frontières et une mise en circulation rapide, tout en respectant les réglementations en vigueur.",
  },
  {
    title: "Commissionnaire agréé en douane",
    description:
      "Représentation officielle auprès des services douaniers. Nous prenons en charge l'ensemble des formalités douanières pour vos marchandises, avec une expertise reconnue et un réseau solide.",
  },
  {
    title: "Transport & livraison",
    description:
      "Nous assurons le transport et la livraison de vos marchandises, depuis les ports, aéroports et frontières jusqu'à leur destination finale, avec un suivi rigoureux et une parfaite maîtrise des procédures douanières.",
  },
  {
    title: "Assistance documentaire",
    description:
      "Nous vous accompagnons dans la préparation, la vérification et la gestion de tous les documents nécessaires à vos opérations douanières et de transit : factures, certificats, bordereaux, licences d'import/export.",
  },
  {
    title: "Suivi en temps réel",
    description:
      "Notifications, tracking GPS, rapports d'étape. Nous garantissons la traçabilité complète de vos marchandises à chaque étape du processus de transit et de dédouanement.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function TransitDouanePage() {
  return (
    <ServicePageLayout
      heroTitle="TRANSIT ET DOUANE"
      introTitle="Transit et opérations douanières"
      introText="Nous accompagnons les importateurs, exportateurs et entreprises dans toutes les opérations de transit, de dédouanement et de logistique, en garantissant la conformité, la rapidité et la sécurité. Nous gérons pour vous l'ensemble des formalités douanières et des opérations de transit, afin de garantir un acheminement rapide, sécurisé et conforme de vos marchandises, en import comme en export."
      sectionTitle="Nos services de transit"
      services={services}
      otherServices={otherServices}
      ctaTitle="Simplifiez vos opérations douanières avec DINAGUI"
      ctaText="Simplifiez vos opérations d'import-export avec notre expertise en transit et dédouanement."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Vos marchandises entre de bonnes mains"
      darkSectionText="Nous gérons l'ensemble de vos formalités douanières et opérations de transit pour un acheminement rapide, sécurisé et conforme. Faites confiance à DINAGUI SARL."
      bottomBarText="Vos opérations douanières, notre expertise"
      introImage="/images/services/transit-douane.jpg"
      backgroundImage="/images/services/transit-douane.jpg"
    />
  );
}
