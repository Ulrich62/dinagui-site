import ServicePageLayout from "@/components/ServicePageLayout";

const services = [
  {
    title: "Nettoyage résidentiel",
    description:
      "Entretien complet de maisons, appartements et résidences : nettoyage des sols, vitres, sanitaires, cuisines et espaces de vie.",
  },
  {
    title: "Nettoyage de bureaux",
    description:
      "Propreté irréprochable de vos espaces professionnels : bureaux, salles de réunion, espaces communs et sanitaires d'entreprise.",
  },
  {
    title: "Nettoyage post-chantier",
    description:
      "Remise en état complète après travaux de construction ou de rénovation : dépoussiérage, nettoyage des surfaces, évacuation des déchets.",
  },
  {
    title: "Désinfection & dératisation",
    description:
      "Traitement professionnel contre les nuisibles et désinfection des locaux selon les normes sanitaires en vigueur.",
  },
  {
    title: "Entretien d'espaces verts",
    description:
      "Tonte, taille, élagage, désherbage et aménagement paysager pour maintenir vos espaces extérieurs impeccables toute l'année.",
  },
  {
    title: "Fourniture de produits d'entretien",
    description:
      "Approvisionnement en produits de nettoyage professionnels, consommables sanitaires et équipements d'entretien de qualité.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.avif" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.avif" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.avif" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.avif" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport" },
  { name: "Commerce Général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function ServiceDeNettoyagePage() {
  return (
    <ServicePageLayout
      heroTitle="SERVICE DE NETTOYAGE"
      introTitle="Service de nettoyage professionnel"
      introText="DINAGUI SARL vous garantit des espaces propres, sains et agréables grâce à nos équipes de nettoyage professionnelles. Nous intervenons dans les secteurs résidentiel, commercial et industriel avec des méthodes éprouvées et des produits respectueux de l'environnement."
      sectionTitle="Nos prestations de nettoyage"
      services={services}
      otherServices={otherServices}
      ctaTitle="Offrez à vos espaces la propreté qu'ils méritent"
      ctaText="Parlons de votre projet maintenant"
      backgroundImage="/images/services/btp-hero.avif"
    >
      {/* Commitments Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-dark text-center mb-10">
          Nos engagements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Qualité",
              description: "Standards élevés à chaque intervention",
            },
            {
              title: "Personnel formé",
              description: "Équipes qualifiées et encadrées",
            },
            {
              title: "Flexibilité",
              description: "Horaires et fréquences adaptés à vos besoins",
            },
            {
              title: "Produits biodégradables",
              description: "Respect de l'environnement et de votre santé",
            },
            {
              title: "Intervention 24h",
              description: "Disponibilité permanente en cas d'urgence",
            },
          ].map((commitment, index) => (
            <div
              key={index}
              className="text-center p-5 bg-white rounded-lg shadow-sm border border-gray-light"
            >
              <h3 className="text-lg font-bold text-orange mb-2">
                {commitment.title}
              </h3>
              <p className="text-sm text-gray">{commitment.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  );
}
