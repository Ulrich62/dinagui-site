import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Gardiennage statique",
    description:
      "Nous assurons une présence humaine permanente sur vos sites sensibles (résidences, bureaux, chantiers, entrepôts), avec des agents formés à la surveillance, au contrôle d'accès et à la gestion des incidents.",
  },
  {
    title: "Gardiennage résidentiel",
    description:
      "Nous assurons la surveillance continue des résidences privées, immeubles collectifs et villas, avec des agents dissuasifs, discrets et formés, pour garantir la sécurité des biens et des occupants, de jour comme de nuit.",
  },
  {
    title: "Sécurité d'entreprise",
    description:
      "Nous protégeons vos locaux, vos équipes et vos actifs grâce à une présence humaine qualifiée, des procédures rigoureuses et un suivi permanent, afin de garantir la continuité de vos activités en toute sérénité.",
  },
  {
    title: "Rondes de sécurité",
    description:
      "Nos agents effectuent des rondes régulières et planifiées sur les sites confiés, de jour comme de nuit, afin de prévenir les intrusions, détecter les anomalies et garantir une présence dissuasive.",
  },
  {
    title: "Sécurité événementielle",
    description:
      "Nous assurons la sécurité complète de vos événements culturels, sportifs, institutionnels ou privés, en combinant présence humaine qualifiée, contrôle d'accès rigoureux et gestion proactive des risques.",
  },
  {
    title: "Protection incendie",
    description:
      "Nous assurons la prévention et la gestion des risques incendie sur vos sites, grâce à des agents formés, des procédures rigoureuses et un suivi permanent, pour protéger vos biens et vos occupants.",
  },
  {
    title: "Installation de systèmes",
    description:
      "Mise en place de caméras de vidéosurveillance, alarmes et systèmes de contrôle d'accès électroniques pour renforcer la sécurité de vos installations.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Service de Nettoyage", href: "/services/service-de-nettoyage", image: "/images/services/nettoyage.jpg" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function GardiennageConciergiePage() {
  return (
    <ServicePageLayout
      heroTitle="SERVICE DE GARDIENNAGE & CONCIERGERIE"
      introTitle="Votre tranquillité, notre priorité"
      introText="Nous assurons la protection des sites avec un service de sécurité privée et de conciergerie, haut de gamme, fiable, discret et efficace, des biens et des personnes par une présence humaine qualifiée, des rondes régulières et une coordination rigoureuse, adaptée aux besoins des entreprises, résidences, chantiers et institutions."
      introImage="/images/services/gardiennage.jpg"
      sectionTitle="Nos prestations de gardiennage"
      services={services}
      otherServices={otherServices}
      ctaTitle="Sécurisez vos espaces avec nos professionnels"
      ctaText="Protégez vos locaux et vos biens avec nos solutions de gardiennage et de conciergerie professionnelles."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Votre sécurité, notre engagement"
      darkSectionText="Nos agents de sécurité formés et expérimentés assurent la protection de vos espaces 24h/24. Confiez votre tranquillité à DINAGUI SARL."
      bottomBarText="Votre tranquillité, notre priorité"
      backgroundImage="/images/services/gardiennage.jpg"
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
