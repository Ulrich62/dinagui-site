import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Mise en location rapide et ciblée",
    description:
      "Nous assurons une mise en location rapide et ciblée de vos biens, grâce à une stratégie de diffusion efficace, une sélection rigoureuse des locataires et une parfaite connaissance du marché immobilier local.",
  },
  {
    title: "Rédaction de contrats de bail",
    description:
      "Nous rédigeons des contrats de bail clairs, équilibrés et conformes à la législation guinéenne, afin de sécuriser les relations entre propriétaires et locataires tout en garantissant leurs droits et obligations.",
  },
  {
    title: "Encaissement des loyers et suivi des paiements",
    description:
      "Nous garantissons un encaissement sécurisé des loyers et un suivi rigoureux des paiements, avec des rapports mensuels clairs, des relances automatisées et une transparence totale pour les propriétaires.",
  },
  {
    title: "Gestion des relations avec les locataires",
    description:
      "Nous veillons à une gestion proactive et équilibrée des relations avec les locataires, en respectant les engagements contractuels, en résolvant rapidement les litiges et en favorisant une communication fluide au quotidien.",
  },
  {
    title: "Gestion des immeubles collectifs",
    description:
      "Nous assurons l'administration complète des immeubles collectifs, incluant la gestion des parties communes, le suivi des prestataires, la tenue des assemblées de copropriétaires et la transparence des charges.",
  },
  {
    title: "Accompagnement à la vente ou à l'achat",
    description:
      "Nos clients bénéficient de notre assistance tout au long du processus de vente ou d'achat immobilier, de l'estimation à la signature, incluant la négociation, la vérification juridique et le conseil stratégique.",
  },
  {
    title: "Harmonisation et valorisation des biens",
    description:
      "Nous assurons la mise aux normes techniques et réglementaires de vos biens immobiliers, tout en les valorisant par des travaux ciblés, afin d'en optimiser la sécurité, le confort et l'attractivité.",
  },
  {
    title: "Assistance aux investisseurs",
    description:
      "Nous accompagnons les investisseurs locaux et ceux de la diaspora dans toutes les étapes de leurs projets immobiliers : identification des opportunités, analyse de rentabilité, sécurisation juridique et suivi technique.",
  },
  {
    title: "Gestion personnalisée de votre portefeuille",
    description:
      "Nous assurons un suivi personnalisé de chaque bien immobilier confié, avec des rapports réguliers, des indicateurs de performance locative et une gestion proactive des interventions.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function GestionImmobilierePage() {
  return (
    <ServicePageLayout
      heroTitle="GESTION IMMOBILIÈRE"
      heroSubtitle="Un accompagnement complet et sur mesure"
      introTitle="Votre partenaire en gestion immobilière"
      introText="Nous proposons une gamme complète de services immobiliers adaptés aux réalités du marché. Notre objectif est de simplifier la vie des propriétaires, d'accompagner les investisseurs et offrir aux locataires des logements sûrs et bien gérés."
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
