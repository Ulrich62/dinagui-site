import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Stratégie & Organisation",
    description:
      "Nous accompagnons les dirigeants et équipes dans la définition de leur vision, la structuration de leur organisation et la mise en œuvre de stratégies performantes, adaptées aux réalités du marché guinéen et international. Diagnostic, plan d'action, structuration interne.",
  },
  {
    title: "Gestion des Ressources Humaines",
    description:
      "Nous accompagnons les organisations dans la gestion stratégique et opérationnelle de leurs ressources humaines, afin de renforcer la performance, la motivation et la conformité sociale. Recrutement, formation, évaluation, politique RH.",
  },
  {
    title: "Finance & Comptabilité",
    description:
      "Nous accompagnons les organisations dans la gestion financière et comptable, en assurant la conformité réglementaire, la fiabilité des données et l'optimisation des performances économiques. Élaboration de budgets, optimisation fiscale, audit.",
  },
  {
    title: "Marketing & Communication",
    description:
      "Nous élaborons des stratégies de positionnement, de branding et de campagnes digitales pour accroître votre visibilité, renforcer votre image de marque et atteindre vos objectifs commerciaux sur le marché guinéen et international.",
  },
  {
    title: "Digitalisation & IT",
    description:
      "Nous accompagnons les organisations dans leur transformation digitale, en intégrant des solutions technologiques sur mesure pour optimiser leurs processus, améliorer leur productivité et renforcer leur compétitivité.",
  },
  {
    title: "Développement de projets",
    description:
      "Études de faisabilité, montage de projets, recherche de financement. Nous accompagnons les porteurs de projets de l'idée à la réalisation, avec une méthodologie éprouvée et un réseau de partenaires solide.",
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
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
];

export default function ConsultingPage() {
  return (
    <ServicePageLayout
      heroTitle="CONSULTING"
      heroSubtitle="Des solutions concrètes pour vos ambitions"
      introTitle="Conseil et accompagnement stratégique"
      introText="Nous accompagnons les entreprises, institutions et porteurs de projets dans leur développement, leur structuration et leur performance, à travers des prestations de conseil sur mesure et des services opérationnels."
      sectionTitle="Nos domaines d'expertise"
      services={services}
      otherServices={otherServices}
      ctaTitle="Transformez vos ambitions en résultats concrets"
      ctaText="Parlons de votre projet maintenant"
      introImage="/images/services/consulting.jpg"
      backgroundImage="/images/services/consulting.jpg"
    >
      {/* Atouts Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-dark text-center mb-10">
          Nos atouts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Expertise multidisciplinaire",
              description:
                "Une équipe aux compétences variées couvrant tous les domaines clés de l'entreprise",
            },
            {
              title: "Solutions personnalisées",
              description:
                "Des recommandations sur mesure adaptées à votre contexte et vos objectifs spécifiques",
            },
            {
              title: "Accompagnement de bout en bout",
              description:
                "Du diagnostic initial à la mise en œuvre, nous restons à vos côtés à chaque étape",
            },
            {
              title: "Résultats mesurables",
              description:
                "Des indicateurs de performance clairs pour évaluer l'impact de nos interventions",
            },
          ].map((atout, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-light"
            >
              <h3 className="text-lg font-bold text-orange mb-2">
                {atout.title}
              </h3>
              <p className="text-sm text-gray">{atout.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  );
}
