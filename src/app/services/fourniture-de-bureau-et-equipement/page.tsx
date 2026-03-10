import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Fournitures de bureau",
    description:
      "Nous mettons à votre disposition une gamme complète de fournitures de bureau de qualité, sélectionnées pour leur efficacité et leur durabilité. Stylos, papiers, classeurs, enveloppes, cartouches, accessoires informatiques.",
  },
  {
    title: "Mobilier de bureau",
    description:
      "Nous proposons un choix complet de mobilier de bureau ergonomique et durable, conçu pour optimiser le confort et la productivité des équipes. Bureaux, fauteuils ergonomiques, armoires, tables de réunion, comptoirs.",
  },
  {
    title: "Équipements informatiques",
    description:
      "Nous fournissons et installons des solutions informatiques complètes, adaptées à vos besoins professionnels ou personnels, pour garantir performance, sécurité et productivité. Imprimantes, scanners, onduleurs, accessoires multimédias.",
  },
  {
    title: "Décoration & confort",
    description:
      "Nous aménageons et décorons vos espaces professionnels pour allier esthétique, confort et fonctionnalité, afin de créer un environnement motivant, accueillant et propice à la performance. Plantes artificielles, luminaires, stores, tapis.",
  },
  {
    title: "Mobilier d'accueil",
    description:
      "Nous concevons et fournissons des solutions de mobilier d'accueil qui allient design, confort et fonctionnalité, pour offrir à vos visiteurs une expérience positive dès leur arrivée. Canapés, chaises visiteurs, présentoirs.",
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
      introTitle="Optimisez vos espaces, inspirez vos équipes"
      introText="Fournir aux entreprises, institutions et particuliers des équipements de bureau et du mobilier fonctionnel et esthétique, tout en assurant la livraison, l'installation et le service après-vente."
      sectionTitle="Nos gammes de produits"
      services={services}
      otherServices={otherServices}
      ctaTitle="Équipez vos bureaux avec nos solutions"
      ctaText="Parlons de votre projet maintenant"
      introImage="/images/services/fourniture-bureau.jpg"
      backgroundImage="/images/services/fourniture-bureau.jpg"
    />
  );
}
