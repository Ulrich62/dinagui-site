import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service de Nettoyage - DINAGUI SARL",
  description:
    "Nettoyage professionnel résidentiel, de bureaux et après chantier à Conakry. Entretien régulier et ponctuel par DINAGUI SARL en Guinée.",
};

const services = [
  {
    title: "Nettoyage résidentiel",
    description:
      "Nous assurons l'entretien complet de vos espaces de vie, pour un environnement sain, agréable et accueillant, grâce à des agents qualifiés, des produits adaptés et un suivi rigoureux. Villas, appartements, immeubles collectifs.",
  },
  {
    title: "Nettoyage de bureaux",
    description:
      "Nous assurons l'entretien complet de vos espaces de travail pour offrir à vos collaborateurs et visiteurs un environnement propre, sain et accueillant, tout en valorisant l'image de votre entreprise.",
  },
  {
    title: "Nettoyage après chantier",
    description:
      "Nous intervenons après vos travaux de construction ou de rénovation pour rendre vos locaux propres, sains et prêts à l'usage, grâce à une équipe formée, un matériel adapté et des méthodes efficaces.",
  },
  {
    title: "Désinfection & désinsectisation",
    description:
      "Nous éliminons efficacement les micro-organismes pathogènes et les nuisibles pour garantir un environnement sain, sûr et agréable, que ce soit dans les habitations, bureaux, commerces ou sites industriels.",
  },
  {
    title: "Entretien d'espaces verts",
    description:
      "Tonte, taille, ramassage, arrosage. Nous assurons l'entretien de vos espaces verts pour maintenir un cadre extérieur agréable et bien entretenu toute l'année.",
  },
  {
    title: "Fourniture de produits",
    description:
      "Nous fournissons une gamme complète de produits d'entretien et de nettoyage, sélectionnés pour leur efficacité, leur sécurité et leur respect de l'environnement, afin de garantir des résultats professionnels.",
  },
];

const otherServices = [
  { name: "Ingénieur BTP", href: "/services/service-btp", image: "/images/services/btp-hero.jpg" },
  { name: "Gestion Immobilière", href: "/services/gestion-immobiliere", image: "/images/services/gestion-immobiliere.jpg" },
  { name: "Placement de Personnels", href: "/services/placements-de-personnels", image: "/images/services/placement-personnel.jpg" },
  { name: "Gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie", image: "/images/services/gardiennage.jpg" },
  { name: "Fourniture de Bureau", href: "/services/fourniture-de-bureau-et-equipement", image: "/images/services/fourniture-bureau.jpg" },
  { name: "Logistique & Transport", href: "/services/logistique-et-transport", image: "/images/services/logistique-transport.jpg" },
  { name: "Commerce Général", href: "/services/commerce-general", image: "/images/services/commerce-general.jpg" },
  { name: "Transit et Douane", href: "/services/transit-et-douane", image: "/images/services/transit-douane.jpg" },
  { name: "Consulting", href: "/services/consulting", image: "/images/services/consulting.jpg" },
];

export default function ServiceDeNettoyagePage() {
  return (
    <ServicePageLayout
      heroTitle="SERVICE DE NETTOYAGE"
      introTitle="Propreté garantie, sérénité assurée"
      introText="Nous offrons aux particuliers, entreprises, institutions et chantiers un service de nettoyage rapide, efficace et respectueux des normes d'hygiène, avec du personnel formé et des équipements adaptés."
      sectionTitle="Nos prestations de nettoyage"
      services={services}
      otherServices={otherServices}
      ctaTitle="Offrez à vos espaces la propreté qu'ils méritent"
      ctaText="Des espaces propres et sains grâce à nos équipes formées et nos équipements professionnels."
      ctaButtonText="Parlons de votre projet maintenant"
      darkSectionTitle="Des espaces impeccables au quotidien"
      darkSectionText="Notre équipe de nettoyage intervient avec professionnalisme pour garantir la propreté et l'hygiène de vos locaux. Faites confiance à DINAGUI SARL."
      bottomBarText="Propreté garantie, sérénité assurée"
      introImage="/images/services/nettoyage.jpg"
      backgroundImage="/images/services/nettoyage.jpg"
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
