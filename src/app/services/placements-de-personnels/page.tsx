import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Offre structurée",
    description:
      "Mise à disposition de personnel qualifié dans les domaines du BTP (ouvriers, techniciens, ingénieurs), de la Sécurité (agents de surveillance, gardiens), du Nettoyage (agents d'entretien, techniciens de surface), de la Logistique (manutentionnaires, chauffeurs) et de l'Administration (secrétaires, comptables, assistants).",
  },
  {
    title: "Profils sur mesure",
    description:
      "Nous sélectionnons des profils adaptés à vos besoins spécifiques. Chaque candidat est évalué sur ses compétences techniques, son expérience et son savoir-être pour garantir une intégration réussie au sein de votre équipe.",
  },
  {
    title: "Suivi rigoureux",
    description:
      "Un accompagnement continu après le placement : évaluations régulières, gestion des remplacements, formation complémentaire si nécessaire. Nous restons votre interlocuteur unique tout au long de la mission.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.avif" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.avif" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.avif" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function PlacementDePersonnelsPage() {
  return (
    <ServicePageLayout
      heroTitle="PLACEMENT DE PERSONNELS"
      introTitle="Placement de personnels qualifiés"
      introText="DINAGUI SARL vous fournit une main-d'œuvre qualifiée et fiable, adaptée à vos exigences opérationnelles. Notre processus de recrutement rigoureux garantit des profils compétents, motivés et immédiatement opérationnels pour renforcer vos équipes."
      introImage="/images/services/placement-personnel.avif"
      sectionTitle="Nos solutions de placement"
      services={services}
      otherServices={otherServices}
      columns={3}
      ctaTitle="Trouvez les talents dont vous avez besoin"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/placement-personnel.avif"
    />
  );
}
