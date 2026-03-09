import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Gardiennage statique",
    description:
      "Présence permanente d'agents de sécurité qualifiés sur vos sites : contrôle des accès, surveillance des entrées et sorties, gestion des visiteurs.",
  },
  {
    title: "Sécurité d'entreprise",
    description:
      "Protection complète de vos locaux professionnels : bureaux, entrepôts, usines. Mise en place de protocoles de sécurité adaptés à votre activité.",
  },
  {
    title: "Protection résidentielle",
    description:
      "Sécurisation de résidences privées, villas et immeubles : gardiennage, contrôle d'accès et veille sécuritaire 24h/24.",
  },
  {
    title: "Prévention incendie",
    description:
      "Agents formés à la prévention et à la lutte contre les incendies. Vérification des équipements, plans d'évacuation et interventions d'urgence.",
  },
  {
    title: "Sécurité événementielle",
    description:
      "Dispositifs de sécurité sur mesure pour vos événements : conférences, cérémonies, festivals. Gestion des flux, contrôle des accès et intervention rapide.",
  },
  {
    title: "Installation de systèmes de sécurité",
    description:
      "Mise en place de caméras de vidéosurveillance, alarmes, détecteurs de mouvement et systèmes de contrôle d'accès électroniques.",
  },
  {
    title: "Rondes de surveillance",
    description:
      "Patrouilles régulières diurnes et nocturnes pour assurer une couverture sécuritaire continue de vos installations et prévenir toute intrusion.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.avif" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.avif" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.avif" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function GardiennageConciergiePage() {
  return (
    <ServicePageLayout
      heroTitle="SERVICE DE GARDIENNAGE & CONCIERGERIE"
      introTitle="Sécurité et conciergerie professionnelle"
      introText="DINAGUI SARL assure la protection de vos biens, de vos locaux et de vos personnes grâce à des agents de sécurité formés et expérimentés. Nous proposons des solutions de gardiennage et de conciergerie adaptées à tous types d'environnements."
      introImage="/images/services/gardiennage.avif"
      sectionTitle="Nos prestations de gardiennage"
      services={services}
      otherServices={otherServices}
      ctaTitle="Sécurisez vos espaces avec nos professionnels"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/gardiennage.avif"
    >
      {/* Values Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-dark text-center mb-10">
          Nos valeurs
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Discrétion",
              description: "Interventions discrètes et respectueuses de votre environnement",
            },
            {
              title: "Réactivité",
              description: "Capacité d'intervention rapide en toute circonstance",
            },
            {
              title: "Professionnalisme",
              description: "Agents formés aux normes de sécurité les plus exigeantes",
            },
            {
              title: "Adaptabilité",
              description: "Solutions sur mesure adaptées à chaque situation",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-light"
            >
              <h3 className="text-lg font-bold text-orange mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  );
}
