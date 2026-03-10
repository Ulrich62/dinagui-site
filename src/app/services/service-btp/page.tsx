import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Finition",
    description:
      "Depuis sa création, DINAGUI SARL s'est forgé une solide réputation en tant qu'expert dans les travaux de construction et de finition des bâtiments. Grâce à notre vaste expertise, nous sommes en mesure de gérer tous les aspects des travaux de finition et d'offrir des solutions sur mesure pour chaque projet.",
  },
  {
    title: "Reprise d'œuvre",
    description:
      "Notre entreprise se spécialise dans la transformation d'espaces bruts en environnements fonctionnels, esthétiques et adaptés aux besoins spécifiques de nos clients. Nous mettons en œuvre des techniques de pointe et des matériaux de haute qualité pour garantir des résultats exceptionnels.",
  },
  {
    title: "Rénovation",
    description:
      "Avec notre engagement envers l'excellence et la satisfaction de nos clients, nous transformons votre vision en réalité. Notre large proposition de création d'espaces fonctionnels, de la conception à la planification, le choix du mobilier, l'optimisation de l'espace, l'éclairage.",
  },
  {
    title: "Études et expertises",
    description:
      "Nous accompagnons les maîtres d'ouvrage, promoteurs et entreprises dans la conception technique, la validation des plans et le contrôle de qualité des ouvrages, pour garantir des réalisations solides, conformes et durables.",
  },
  {
    title: "Construction",
    description:
      "Notre équipe expérimentée vous accompagne de la conception à la réalisation, en garantissant une qualité supérieure à chaque étape du processus.",
  },
];

const otherServices = [
  { name: "Gestion immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Service de gardiennage & de conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Fourniture de bureau et équipement", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Logistique et transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
  { name: "Transit et douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
];

export default function ServiceBTPPage() {
  return (
    <ServicePageLayout
      heroTitle="INGÉNIEUR BTP"
      introTitle="Votre partenaire de confiance en BTP"
      introText="DINAGUI SARL est votre partenaire de confiance pour l'exécution de projet de construction et d'aménagement en macro-lots, en tous corps d'état ou en clé en main. Nous mettons l'accent sur la satisfaction de nos clients. Nous travaillons en étroite collaboration avec vous tout au long du processus, en vous fournissant des conseils d'experts, des rendus 3D et des échantillons de matériaux pour vous aider à visualiser le résultat final. Un service complet et intégré pour les particuliers, les entreprises, les collectivités et les projets publics, en garantissant qualité, sécurité et respect des délais."
      introImage="/images/services/btp-workers.jpg"
      introCtaText="Contactez-nous"
      sectionTitle="Nos domaines d'expertise en BTP"
      services={services}
      otherServices={otherServices}
      ctaTitle="Lancez votre projet de construction avec nos spécialistes"
      ctaText="Bénéficiez de l'expertise de nos architectes, ingénieurs et artisans pour concrétiser vos projets de construction, du concept à la réalisation."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Donnez vie à vos projets dès aujourd'hui"
      darkSectionText="Avec l'expertise de nos architectes, ingénieurs et artisans expérimentés, nous bâtissons des ouvrages solides, esthétiques et durables. Ne laissez pas vos idées sur papier, transformez-les en réalité avec DINAGUI SARL."
      bottomBarText="Votre projet, notre expertise. Construisons ensemble"
      backgroundImage="/images/services/btp-hero.jpg"
    />
  );
}
