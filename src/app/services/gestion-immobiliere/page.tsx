import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Mise en location rapide",
    description:
      "Recherche de locataires fiables, diffusion d'annonces ciblées et organisation des visites pour une mise en location efficace de vos biens.",
  },
  {
    title: "Rédaction de contrats de bail",
    description:
      "Élaboration de contrats de bail conformes à la législation en vigueur, protégeant les intérêts du propriétaire et du locataire.",
  },
  {
    title: "Gestion des relations locataires",
    description:
      "Prise en charge complète de la communication avec les locataires, gestion des requêtes, réclamations et résolution des litiges.",
  },
  {
    title: "Encaissement des loyers",
    description:
      "Suivi rigoureux des paiements, relances en cas de retard et versement ponctuel des revenus locatifs aux propriétaires.",
  },
  {
    title: "Harmonisation et valorisation",
    description:
      "Conseils et travaux d'amélioration pour optimiser la valeur de vos biens immobiliers et maximiser leur rentabilité.",
  },
  {
    title: "Accompagnement vente/achat",
    description:
      "Assistance complète dans vos transactions immobilières : évaluation, négociation, accompagnement juridique et administratif.",
  },
  {
    title: "Gestion d'immeubles collectifs",
    description:
      "Administration globale de copropriétés et résidences : entretien des parties communes, gestion des charges et suivi technique.",
  },
  {
    title: "Assistance aux investisseurs",
    description:
      "Conseil stratégique pour les investisseurs immobiliers : identification d'opportunités, analyse de rentabilité et montage de projets.",
  },
  {
    title: "Gestion de portefeuille immobilier",
    description:
      "Pilotage et optimisation de votre patrimoine immobilier avec des rapports détaillés et un suivi personnalisé de chaque bien.",
  },
  {
    title: "Services supplémentaires",
    description:
      "États des lieux, diagnostics techniques, assurance loyers impayés et tout autre service pour sécuriser votre investissement.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function GestionImmobilierePage() {
  return (
    <ServicePageLayout
      heroTitle="GESTION IMMOBILIÈRE"
      heroSubtitle="Un accompagnement complet et sur mesure"
      introTitle="Votre partenaire en gestion immobilière"
      introText="DINAGUI SARL met à votre disposition une gamme complète de services de gestion immobilière, adaptée aux réalités du marché guinéen. Que vous soyez propriétaire, investisseur ou locataire, nous vous offrons un accompagnement personnalisé pour valoriser et sécuriser votre patrimoine immobilier."
      introImage="/images/services/gestion-immobiliere.jpg"
      sectionTitle="Nos services de gestion immobilière"
      services={services}
      otherServices={otherServices}
      ctaTitle="VOTRE IMMOBILIER, NOTRE PRIORITÉ !"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/gestion-immobiliere.jpg"
    />
  );
}
