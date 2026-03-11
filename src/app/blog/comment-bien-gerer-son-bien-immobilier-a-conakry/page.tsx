import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bien gérer son bien immobilier à Conakry - DINAGUI SARL",
  description:
    "Conseils pratiques pour gérer efficacement votre bien immobilier à Conakry : gestion locative, entretien, obligations légales et accompagnement diaspora.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment bien gérer son bien immobilier à Conakry ?",
  description: "Conseils pratiques pour gérer efficacement votre bien immobilier à Conakry : gestion locative, entretien, obligations légales et accompagnement diaspora.",
  image: "https://dinagui-site.vercel.app/images/services/gestion-immobiliere.jpg",
  author: { "@type": "Organization", name: "DINAGUI SARL" },
  publisher: {
    "@type": "Organization",
    name: "DINAGUI SARL",
    logo: { "@type": "ImageObject", url: "https://dinagui-site.vercel.app/images/logo-dinagui.avif" },
  },
  mainEntityOfPage: "https://dinagui-site.vercel.app/blog/comment-bien-gerer-son-bien-immobilier-a-conakry",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://dinagui-site.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://dinagui-site.vercel.app/blog" },
    { "@type": "ListItem", position: 3, name: "Comment bien gérer son bien immobilier à Conakry" },
  ],
};

export default function BlogGestionImmobilierePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero title="Comment bien gérer son bien immobilier à Conakry ?" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#6b7280] mb-10 flex items-center gap-1 font-[Roboto]">
            <Link href="/" className="hover:text-[#F88732] transition-colors duration-200">Accueil</Link>
            <FiChevronRight className="text-xs" />
            <Link href="/blog" className="hover:text-[#F88732] transition-colors duration-200">Blog</Link>
            <FiChevronRight className="text-xs" />
            <span className="text-[#1f2d3d] font-medium">Comment bien gérer son bien immobilier à Conakry</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article>
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/gestion-immobiliere.jpg"
                  alt="Comment bien gérer son bien immobilier à Conakry ?"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-6 font-[Roboto]">
                <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                  Immobilier
                </span>
                <span className="italic">
                  par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                </span>
                <span>|</span>
                <span>DINAGUI SARL</span>
              </div>

              <div className="prose prose-lg max-w-none text-[#1f2d3d]">
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Posséder un bien immobilier à Conakry représente un investissement important, mais sa rentabilité dépend largement de la qualité de sa gestion. Entre la recherche de locataires fiables, l&apos;entretien régulier du bâtiment et le respect des obligations légales, la gestion immobilière demande du temps, des compétences et une présence sur le terrain. Voici les clés pour optimiser la gestion de votre patrimoine immobilier en Guinée.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    1. Confier la gestion à un professionnel
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  La gestion locative est un métier à part entière qui exige une connaissance approfondie du marché immobilier local. Un gestionnaire professionnel prend en charge la recherche et la sélection des locataires, la rédaction des baux, les états des lieux et la gestion des éventuels litiges. En déléguant ces responsabilités, vous bénéficiez d&apos;un gain de temps considérable tout en réduisant les risques d&apos;impayés et de dégradations. À Conakry, où le marché locatif est dynamique mais exigeant, s&apos;appuyer sur un professionnel local permet de sécuriser votre investissement et de maximiser votre taux d&apos;occupation.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    2. Sécuriser vos revenus locatifs
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  L&apos;encaissement régulier des loyers est le nerf de la guerre pour tout propriétaire bailleur. Une gestion rigoureuse implique un suivi mensuel des paiements, l&apos;envoi de rappels en cas de retard et, si nécessaire, l&apos;engagement de procédures de recouvrement adaptées au contexte juridique guinéen. Il est également essentiel de fixer un loyer cohérent avec le marché local pour attirer des locataires solvables tout en garantissant une rentabilité satisfaisante. Un bon gestionnaire analyse les prix pratiqués dans votre quartier et ajuste le montant du loyer en conséquence, en tenant compte de la qualité du bien, de son emplacement et des équipements proposés.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    3. Entretenir et valoriser votre patrimoine
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Un bien immobilier bien entretenu conserve sa valeur et attire des locataires de qualité. L&apos;entretien préventif — vérification de la toiture, contrôle de la plomberie, maintenance des installations électriques — permet d&apos;éviter des réparations coûteuses à long terme. Au-delà de la maintenance courante, des travaux de rénovation ciblés (peinture des façades, modernisation des sanitaires, aménagement des espaces extérieurs) contribuent à valoriser votre patrimoine. À Conakry, où le climat tropical soumet les bâtiments à rude épreuve, un programme d&apos;entretien régulier est indispensable pour préserver la durabilité de votre investissement.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    4. Connaître vos obligations légales
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  En Guinée, la relation entre bailleur et locataire est encadrée par des dispositions légales qu&apos;il convient de respecter scrupuleusement. Le contrat de bail doit être rédigé par écrit et préciser les droits et obligations de chaque partie : durée du bail, montant du loyer, conditions de résiliation et modalités de restitution du dépôt de garantie. Le propriétaire est tenu de fournir un logement décent et d&apos;effectuer les réparations qui lui incombent. Se conformer à ces exigences protège le bailleur en cas de litige et renforce la confiance avec le locataire, gage d&apos;une relation durable et sereine.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    5. Accompagner les investisseurs de la diaspora
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  De nombreux Guinéens de la diaspora investissent dans l&apos;immobilier à Conakry sans pouvoir être présents sur place pour gérer leurs biens. La distance rend la gestion particulièrement complexe : il faut pouvoir compter sur un partenaire de confiance qui rend des comptes réguliers, envoie des rapports détaillés et intervient rapidement en cas de problème. Un gestionnaire immobilier local devient alors les yeux et les mains du propriétaire, assurant le suivi quotidien du bien, la coordination des travaux d&apos;entretien et la relation avec les locataires. C&apos;est un service essentiel pour investir sereinement depuis l&apos;étranger.
                </p>

                {/* Callout box with left orange border */}
                <div className="bg-[#faf5f0] rounded-xl p-8 mt-10 border-l-4 border-[#F88732]">
                  <h2 className="text-2xl font-bold text-[#1f2d3d] mb-4 font-[Roboto_Condensed] uppercase">
                    Confiez votre bien à DINAGUI SARL
                  </h2>
                  <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">DINAGUI SARL</strong> propose un service complet de gestion immobilière à Conakry. De la recherche de locataires à l&apos;encaissement des loyers, en passant par l&apos;entretien et le suivi technique de votre bien, notre équipe vous accompagne à chaque étape. Que vous résidiez à Conakry ou à l&apos;étranger, nous assurons la gestion de votre patrimoine avec rigueur et transparence.
                  </p>
                  <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">Contactez-nous</strong> dès aujourd&apos;hui pour découvrir notre offre de gestion immobilière et obtenir un devis personnalisé.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-6 py-3 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25 text-sm"
                  >
                    Contactez-nous
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="bg-[#faf5f0] rounded-xl p-6 sticky top-[120px]">
                <h3 className="text-lg font-bold text-[#1f2d3d] mb-5 font-[Roboto_Condensed] uppercase border-b-2 border-[#F88732] pb-3">
                  Articles récents
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F88732] mt-2 flex-shrink-0" />
                    <Link
                      href="/blog/pourquoi-faire-appel-a-une-entreprise-generale-de-construction-pour-vos-projets"
                      className="text-sm text-[#6b7280] hover:text-[#F88732] transition-colors leading-snug block font-[Roboto]"
                    >
                      Pourquoi faire appel à une entreprise générale de construction pour vos projets ?
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F88732] mt-2 flex-shrink-0" />
                    <Link
                      href="/blog/comment-bien-gerer-son-bien-immobilier-a-conakry"
                      className="text-sm text-[#6b7280] hover:text-[#F88732] transition-colors leading-snug block font-[Roboto]"
                    >
                      Comment bien gérer son bien immobilier à Conakry ?
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F88732] mt-2 flex-shrink-0" />
                    <Link
                      href="/blog/securite-privee-en-guinee-guide-pour-proteger-vos-locaux"
                      className="text-sm text-[#6b7280] hover:text-[#F88732] transition-colors leading-snug block font-[Roboto]"
                    >
                      Sécurité privée en Guinée : guide pour protéger vos locaux
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F88732] mt-2 flex-shrink-0" />
                    <Link
                      href="/blog/logistique-et-transport-en-guinee-les-cles-dune-chaine-performante"
                      className="text-sm text-[#6b7280] hover:text-[#F88732] transition-colors leading-snug block font-[Roboto]"
                    >
                      Logistique et transport en Guinée : les clés d&apos;une chaîne performante
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F88732] mt-2 flex-shrink-0" />
                    <Link
                      href="/blog/investir-dans-limmobilier-a-conakry-guide-complet"
                      className="text-sm text-[#6b7280] hover:text-[#F88732] transition-colors leading-snug block font-[Roboto]"
                    >
                      Investir dans l&apos;immobilier à Conakry : guide complet
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
