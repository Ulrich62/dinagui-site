import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Approvisionnement en gros",
    description:
      "Fourniture en gros de produits alimentaires, matériaux de construction, équipements industriels et biens de consommation courante.",
  },
  {
    title: "Distribution",
    description:
      "Réseau de distribution fiable pour acheminer vos produits vers les points de vente, entreprises et institutions à travers la Guinée.",
  },
  {
    title: "Négoce international",
    description:
      "Importation et exportation de marchandises variées avec gestion complète des formalités commerciales et douanières.",
  },
  {
    title: "Produits de consommation",
    description:
      "Large gamme de produits de consommation courante : alimentaire, hygiène, entretien, fournitures diverses pour particuliers et professionnels.",
  },
  {
    title: "Matériaux de construction",
    description:
      "Vente de matériaux de construction : ciment, fer, bois, quincaillerie, revêtements et tous matériaux nécessaires à vos chantiers.",
  },
  {
    title: "Conseil commercial",
    description:
      "Accompagnement dans vos projets commerciaux : étude de marché, sourcing de produits, négociation fournisseurs et optimisation des coûts.",
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
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function CommerceGeneralPage() {
  return (
    <ServicePageLayout
      heroTitle="COMMERCE GÉNÉRAL"
      introTitle="Commerce général et distribution"
      introText="DINAGUI SARL intervient dans le commerce général en proposant une large gamme de produits et services commerciaux. De l'approvisionnement à la distribution, nous accompagnons entreprises et institutions dans leurs besoins en biens et marchandises de qualité."
      sectionTitle="Nos activités commerciales"
      services={services}
      otherServices={otherServices}
      ctaTitle="Faites confiance à DINAGUI pour vos besoins commerciaux"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/btp-hero.avif"
    />
  );
}
