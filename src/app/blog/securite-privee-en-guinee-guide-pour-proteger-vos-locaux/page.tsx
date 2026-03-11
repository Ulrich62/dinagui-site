import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sécurité privée en Guinée : protéger vos locaux - DINAGUI SARL",
  description:
    "Guide complet sur la sécurité privée en Guinée : gardiennage, rondes, vidéosurveillance et sécurité événementielle pour protéger vos locaux à Conakry.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sécurité privée en Guinée : guide pour protéger vos locaux",
  description: "Guide complet sur la sécurité privée en Guinée : gardiennage, rondes, vidéosurveillance et sécurité événementielle pour protéger vos locaux à Conakry.",
  image: "https://dinagui-site.vercel.app/images/services/gardiennage.jpg",
  author: { "@type": "Organization", name: "DINAGUI SARL" },
  publisher: {
    "@type": "Organization",
    name: "DINAGUI SARL",
    logo: { "@type": "ImageObject", url: "https://dinagui-site.vercel.app/images/logo-dinagui.avif" },
  },
  mainEntityOfPage: "https://dinagui-site.vercel.app/blog/securite-privee-en-guinee-guide-pour-proteger-vos-locaux",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://dinagui-site.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://dinagui-site.vercel.app/blog" },
    { "@type": "ListItem", position: 3, name: "Sécurité privée en Guinée : guide pour protéger vos locaux" },
  ],
};

export default function BlogSecuritePriveePage() {
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
      <PageHero title="Sécurité privée en Guinée : guide pour protéger vos locaux" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#6b7280] mb-10 flex items-center gap-1 font-[Roboto]">
            <Link href="/" className="hover:text-[#F88732] transition-colors duration-200">Accueil</Link>
            <FiChevronRight className="text-xs" />
            <Link href="/blog" className="hover:text-[#F88732] transition-colors duration-200">Blog</Link>
            <FiChevronRight className="text-xs" />
            <span className="text-[#1f2d3d] font-medium">Sécurité privée en Guinée : guide pour protéger vos locaux</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article>
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/gardiennage.jpg"
                  alt="Sécurité privée en Guinée : guide pour protéger vos locaux"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-6 font-[Roboto]">
                <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                  Sécurité
                </span>
                <span className="italic">
                  par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                </span>
                <span>|</span>
                <span>DINAGUI SARL</span>
              </div>

              <div className="prose prose-lg max-w-none text-[#1f2d3d]">
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  La sécurité des biens et des personnes est une préoccupation majeure pour les entreprises, les résidences et les institutions en Guinée. Face à la croissance urbaine rapide de Conakry et à l&apos;augmentation des risques liés aux intrusions, aux vols et aux actes de vandalisme, le recours à des services de sécurité privée est devenu une nécessité. Ce guide vous présente les solutions disponibles pour protéger efficacement vos locaux.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    1. Pourquoi investir dans la sécurité privée ?
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  En Guinée, les forces de sécurité publiques ne peuvent pas couvrir l&apos;ensemble des besoins de protection des entreprises et des particuliers. Les bureaux, entrepôts, chantiers de construction, résidences haut de gamme et commerces sont des cibles potentielles pour les cambrioleurs et les vandales. Investir dans la sécurité privée permet de mettre en place une protection sur mesure, adaptée à la nature de vos activités et à la configuration de vos locaux. C&apos;est aussi un signal fort envoyé à vos collaborateurs, clients et partenaires : vous prenez leur sécurité au sérieux.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    2. Le gardiennage statique : une présence dissuasive
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Le gardiennage statique constitue la première ligne de défense pour protéger vos locaux. Des agents de sécurité formés et équipés sont postés à des points stratégiques — entrées principales, parkings, zones de stockage — pour contrôler les accès et dissuader toute tentative d&apos;intrusion. Un agent de gardiennage ne se contente pas de surveiller : il accueille les visiteurs, vérifie les identités, enregistre les entrées et sorties, et intervient en cas d&apos;incident. À Conakry, où de nombreux sites fonctionnent 24 heures sur 24, le gardiennage en rotation permet d&apos;assurer une couverture continue, de jour comme de nuit.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    3. Les rondes de sécurité : prévenir les incidents
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Complémentaires au gardiennage statique, les rondes de sécurité permettent de couvrir des périmètres étendus et de détecter rapidement toute anomalie. Les agents effectuent des passages réguliers selon un itinéraire planifié, vérifiant les portes, fenêtres, clôtures et équipements sensibles. Ces rondes, réalisées à des horaires variables pour ne pas être prévisibles, constituent un moyen efficace de prévenir les intrusions, les départs de feu et les actes de malveillance. Chaque ronde fait l&apos;objet d&apos;un rapport détaillé qui est transmis au client, garantissant une traçabilité complète des opérations de surveillance.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    4. La vidéosurveillance : un complément indispensable
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  La technologie est devenue un allié incontournable de la sécurité physique. L&apos;installation de caméras de surveillance, couplée à des systèmes d&apos;alarme et de détection de mouvement, renforce considérablement le dispositif de protection. Les images enregistrées servent à la fois de moyen de dissuasion et de preuve en cas d&apos;incident. Un centre de monitoring peut surveiller les flux vidéo en temps réel et alerter les agents de terrain dès qu&apos;une situation suspecte est détectée. À Conakry, l&apos;association de la surveillance humaine et de la vidéosurveillance offre un niveau de sécurité optimal pour les sites sensibles.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    5. Sécurité événementielle : protéger vos rassemblements
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Les événements professionnels, culturels ou sportifs rassemblent un grand nombre de personnes et présentent des défis de sécurité spécifiques. La gestion des flux de foule, le contrôle des accès, la prévention des bousculades et la coordination avec les services de secours nécessitent un savoir-faire particulier. Une équipe de sécurité événementielle expérimentée planifie le dispositif en amont, identifie les points de vulnérabilité et déploie les agents nécessaires pour garantir le bon déroulement de votre événement. Que ce soit pour une conférence, un salon ou une cérémonie, la sécurité événementielle est un investissement essentiel pour la réussite de vos manifestations.
                </p>

                {/* Callout box with left orange border */}
                <div className="bg-[#faf5f0] rounded-xl p-8 mt-10 border-l-4 border-[#F88732]">
                  <h2 className="text-2xl font-bold text-[#1f2d3d] mb-4 font-[Roboto_Condensed] uppercase">
                    Protégez vos espaces avec DINAGUI SARL
                  </h2>
                  <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">DINAGUI SARL</strong> met à votre disposition des agents de sécurité qualifiés et des solutions de gardiennage adaptées à vos besoins. Que vous cherchiez à sécuriser un chantier, un immeuble résidentiel, des bureaux ou un événement, nous concevons un dispositif sur mesure qui allie vigilance humaine et moyens techniques modernes.
                  </p>
                  <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">Contactez-nous</strong> dès aujourd&apos;hui pour évaluer vos besoins en sécurité et recevoir une proposition personnalisée.
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
