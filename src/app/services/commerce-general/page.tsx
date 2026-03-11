import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commerce Général - DINAGUI SARL",
  description:
    "Vente de produits, équipements de bureau, articles d'entretien et accessoires divers à Conakry. Commerce général par DINAGUI SARL.",
};

const services = [
  {
    title: "Équipements de bureau",
    description:
      "Nous fournissons et installons des équipements de bureau modernes et fiables, conçus pour optimiser la productivité, le confort et l'image professionnelle de nos clients. Fournitures, mobilier, informatique, imprimantes.",
  },
  {
    title: "Produits d'entretien",
    description:
      "Nous proposons une gamme complète de produits de nettoyage et d'entretien professionnels : détergents, balais, gants, désinfectants et équipements adaptés aux besoins des entreprises et des particuliers.",
  },
  {
    title: "Accessoires électroniques",
    description:
      "Nous proposons une large gamme d'accessoires électroniques modernes et fiables, conçus pour améliorer l'utilisation de vos appareils, prolonger leur durée de vie et optimiser votre confort technologique.",
  },
  {
    title: "Articles scolaires",
    description:
      "Nous proposons une gamme complète d'articles scolaires de qualité, adaptés à tous les niveaux d'enseignement, pour accompagner les élèves tout au long de leur parcours éducatif. Cahiers, stylos, sacs, calculatrices.",
  },
  {
    title: "Produits alimentaires",
    description:
      "Nous proposons une large gamme de produits alimentaires, frais, secs ou transformés, sélectionnés pour leur qualité, leur sécurité et leur conformité aux normes, afin de répondre aux besoins des ménages, commerces et institutions.",
  },
  {
    title: "Vêtements & textiles",
    description:
      "Nous proposons une large gamme de vêtements et textiles, alliant qualité, confort et tendance, pour répondre aux besoins quotidiens, professionnels et événementiels de nos clients. Tenues professionnelles, uniformes, linge de maison.",
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
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function CommerceGeneralPage() {
  return (
    <ServicePageLayout
      heroTitle="COMMERCE GÉNÉRAL"
      introTitle="Tout ce dont vous avez besoin, en un seul endroit"
      introText="DINAGUI est une entreprise polyvalente qui combine vente de produits divers et services professionnels, pour répondre aux besoins des particuliers, des entreprises et des institutions dans un environnement urbain dynamique."
      sectionTitle="Nos catégories de produits et services"
      services={services}
      otherServices={otherServices}
      ctaTitle="Faites confiance à DINAGUI pour vos besoins commerciaux"
      ctaText="Produits de qualité, service fiable et prix compétitifs pour répondre à tous vos besoins quotidiens et professionnels."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Tout ce dont vous avez besoin, en un seul endroit"
      darkSectionText="DINAGUI SARL vous propose une large gamme de produits et services pour les particuliers, entreprises et institutions. Qualité, disponibilité et service client sont notre engagement."
      bottomBarText="Vos besoins, notre engagement. Servons ensemble"
      introImage="/images/services/commerce-general.jpg"
      backgroundImage="/images/services/commerce-general.jpg"
    />
  );
}
