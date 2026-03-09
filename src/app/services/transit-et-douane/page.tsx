import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Dédouanement de marchandises",
    description:
      "Prise en charge complète des formalités douanières pour l'importation et l'exportation de vos marchandises, avec rapidité et conformité réglementaire.",
  },
  {
    title: "Transit maritime",
    description:
      "Organisation et suivi du transport maritime de vos marchandises : conteneurs complets ou groupage, du port d'origine au port de destination.",
  },
  {
    title: "Transit aérien",
    description:
      "Gestion du fret aérien pour vos envois urgents ou de valeur : réservation, documentation, suivi et livraison porte à porte.",
  },
  {
    title: "Conseil réglementaire",
    description:
      "Accompagnement sur les réglementations douanières guinéennes et internationales : classification tarifaire, régimes douaniers et optimisation fiscale.",
  },
  {
    title: "Gestion documentaire",
    description:
      "Préparation et traitement de l'ensemble des documents requis : déclarations en douane, certificats d'origine, licences d'importation et factures.",
  },
  {
    title: "Entreposage sous douane",
    description:
      "Stockage temporaire de vos marchandises en zone sous douane avec gestion administrative et sécurisation de vos biens.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.avif" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.avif" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.avif" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.avif" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function TransitDouanePage() {
  return (
    <ServicePageLayout
      heroTitle="TRANSIT ET DOUANE"
      introTitle="Transit et opérations douanières"
      introText="DINAGUI SARL facilite vos opérations de transit et de dédouanement grâce à notre connaissance approfondie des procédures douanières guinéennes et internationales. Nous assurons un traitement rapide et conforme de vos marchandises à chaque étape."
      sectionTitle="Nos services de transit"
      services={services}
      otherServices={otherServices}
      ctaTitle="Simplifiez vos opérations douanières avec DINAGUI"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/btp-hero.avif"
    />
  );
}
