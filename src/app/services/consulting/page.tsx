import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Stratégie & Organisation",
    description:
      "Élaboration de plans stratégiques, restructuration organisationnelle, optimisation des processus et accompagnement au changement pour renforcer votre compétitivité.",
  },
  {
    title: "Gestion des Ressources Humaines",
    description:
      "Audit RH, mise en place de politiques de recrutement, plans de formation, gestion des talents et développement des compétences de vos équipes.",
  },
  {
    title: "Finance & Comptabilité",
    description:
      "Conseil financier, mise en place de systèmes comptables, analyse de rentabilité, montage financier de projets et optimisation de la gestion de trésorerie.",
  },
  {
    title: "Marketing & Communication",
    description:
      "Stratégie de marque, plans de communication, marketing digital, études de marché et positionnement pour accroître votre visibilité et votre impact.",
  },
  {
    title: "Digitalisation & IT",
    description:
      "Transformation numérique de votre entreprise : choix de solutions technologiques, déploiement d'outils digitaux, formation et accompagnement au changement.",
  },
  {
    title: "Développement de projets",
    description:
      "Accompagnement de bout en bout dans le montage et le pilotage de vos projets : études de faisabilité, business plans, recherche de financements et suivi opérationnel.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
];

export default function ConsultingPage() {
  return (
    <ServicePageLayout
      heroTitle="CONSULTING"
      heroSubtitle="Des solutions concrètes pour vos ambitions"
      introTitle="Conseil et accompagnement stratégique"
      introText="DINAGUI SARL met à votre disposition une équipe de consultants expérimentés pour accompagner votre entreprise dans ses défis stratégiques et opérationnels. Notre approche pragmatique et personnalisée garantit des résultats concrets et mesurables."
      sectionTitle="Nos domaines de conseil"
      services={services}
      otherServices={otherServices}
      ctaTitle="Transformez vos ambitions en résultats concrets"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/btp-hero.jpg"
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
