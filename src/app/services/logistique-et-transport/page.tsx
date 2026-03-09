import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Transport de marchandises",
    description:
      "Acheminement sécurisé de vos marchandises sur l'ensemble du territoire guinéen et à l'international. Flotte de véhicules adaptés à tous types de cargaisons.",
  },
  {
    title: "Transport de personnel",
    description:
      "Mise à disposition de véhicules avec chauffeur pour le transport de vos équipes : navettes, déplacements professionnels et transferts.",
  },
  {
    title: "Location d'engins lourds",
    description:
      "Location de grues, pelleteuses, bulldozers, camions-bennes et autres engins de chantier avec opérateurs qualifiés.",
  },
  {
    title: "Livraisons urbaines",
    description:
      "Service de livraison rapide en milieu urbain pour vos colis, documents et marchandises avec suivi en temps réel.",
  },
  {
    title: "Logistique événementielle",
    description:
      "Organisation du transport et de la logistique pour vos événements : montage, démontage, acheminement de matériel et gestion des flux.",
  },
  {
    title: "Import-export",
    description:
      "Accompagnement dans vos opérations d'importation et d'exportation : fret maritime, aérien et terrestre avec gestion documentaire complète.",
  },
  {
    title: "Gestion d'entrepôts",
    description:
      "Stockage sécurisé de vos marchandises dans nos entrepôts : réception, inventaire, préparation de commandes et expédition.",
  },
  {
    title: "Autres services logistiques",
    description:
      "Solutions logistiques sur mesure : déménagement, manutention, conditionnement et tout service lié à la chaîne d'approvisionnement.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.avif" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.avif" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.avif" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.avif" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function LogistiqueTransportPage() {
  return (
    <ServicePageLayout
      heroTitle="SOLUTIONS DE LOGISTIQUE & TRANSPORT FIABLES"
      introTitle="Solutions logistiques et transport"
      introText="DINAGUI SARL propose des solutions complètes de logistique et de transport pour accompagner vos activités commerciales et industrielles. Notre flotte de véhicules et notre expertise logistique garantissent la fiabilité et la ponctualité de chaque opération."
      sectionTitle="Nos services logistiques"
      services={services}
      otherServices={otherServices}
      ctaTitle="Optimisez votre chaîne logistique avec DINAGUI"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/btp-hero.avif"
    />
  );
}
