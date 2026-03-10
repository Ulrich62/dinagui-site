import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Fournitures de bureau",
    description:
      "Papeterie, classeurs, stylos, cartouches d'encre, papier d'impression et tout le nécessaire pour le fonctionnement quotidien de vos bureaux.",
  },
  {
    title: "Mobilier de bureau",
    description:
      "Bureaux, chaises ergonomiques, armoires de rangement, tables de réunion et aménagement complet de vos espaces de travail.",
  },
  {
    title: "Équipements informatiques",
    description:
      "Ordinateurs, imprimantes, scanners, vidéoprojecteurs et accessoires informatiques pour équiper vos équipes.",
  },
  {
    title: "Consommables et accessoires",
    description:
      "Toners, cartouches, câbles, supports et tous les consommables nécessaires au bon fonctionnement de vos équipements.",
  },
  {
    title: "Équipements spécialisés",
    description:
      "Matériel technique et équipements spécialisés selon votre secteur d'activité : médical, industriel, éducatif.",
  },
  {
    title: "Service de livraison",
    description:
      "Livraison rapide et fiable de vos commandes directement dans vos locaux, avec possibilité d'approvisionnement régulier.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function FournitureDeBureauPage() {
  return (
    <ServicePageLayout
      heroTitle="FOURNITURE DE BUREAU ET ÉQUIPEMENT"
      introTitle="Fourniture de bureau et équipement"
      introText="DINAGUI SARL fournit aux entreprises et institutions tout le matériel de bureau et les équipements nécessaires à leur bon fonctionnement. De la papeterie aux équipements informatiques, nous vous proposons des produits de qualité à des prix compétitifs avec un service de livraison fiable."
      sectionTitle="Nos gammes de produits"
      services={services}
      otherServices={otherServices}
      ctaTitle="Équipez vos bureaux avec nos solutions"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/btp-hero.jpg"
    />
  );
}
