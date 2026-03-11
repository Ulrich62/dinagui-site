import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Investir dans l\u2019immobilier à Conakry - DINAGUI SARL",
  description:
    "Guide complet pour investir dans l\u2019immobilier à Conakry : types de biens rentables, financement, étapes clés et le projet Cité Plaza Platinium.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Investir dans l\u2019immobilier à Conakry : guide complet",
  description: "Guide complet pour investir dans l\u2019immobilier à Conakry : types de biens rentables, financement, étapes clés et le projet Cité Plaza Platinium.",
  image: "https://dinagui-site.vercel.app/images/apartments/f3-appartement.jpg",
  author: { "@type": "Organization", name: "DINAGUI SARL" },
  publisher: {
    "@type": "Organization",
    name: "DINAGUI SARL",
    logo: { "@type": "ImageObject", url: "https://dinagui-site.vercel.app/images/logo-dinagui.avif" },
  },
  mainEntityOfPage: "https://dinagui-site.vercel.app/blog/investir-dans-limmobilier-a-conakry-guide-complet",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://dinagui-site.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://dinagui-site.vercel.app/blog" },
    { "@type": "ListItem", position: 3, name: "Investir dans l\u2019immobilier à Conakry" },
  ],
};

export default function BlogDetailPage() {
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
      <PageHero title="Investir dans l&apos;immobilier à Conakry : guide complet" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#6b7280] mb-10 flex items-center gap-1 font-[Roboto]">
            <Link href="/" className="hover:text-[#F88732] transition-colors duration-200">Accueil</Link>
            <FiChevronRight className="text-xs" />
            <Link href="/blog" className="hover:text-[#F88732] transition-colors duration-200">Blog</Link>
            <FiChevronRight className="text-xs" />
            <span className="text-[#1f2d3d] font-medium">Investir dans l&apos;immobilier à Conakry</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article>
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/apartments/f3-appartement.jpg"
                  alt="Investir dans l'immobilier à Conakry : guide complet"
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
                  Conakry, capitale de la Guinée, connaît une croissance urbaine sans précédent. La demande en logements de qualité ne cesse d&apos;augmenter, portée par une classe moyenne en plein essor et un afflux continu de professionnels et de familles. Investir dans l&apos;immobilier à Conakry représente aujourd&apos;hui une opportunité concrète de valoriser son patrimoine tout en répondant à un besoin réel du marché.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    1. Pourquoi Conakry attire les investisseurs
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  La croissance démographique de Conakry, combinée à l&apos;urbanisation rapide de quartiers comme Kipé, Ratoma et Lambanyi, crée une demande soutenue en logements neufs et de qualité. Les infrastructures routières et les services publics s&apos;améliorent progressivement, rendant certains quartiers particulièrement attractifs pour les investisseurs. Le rendement locatif à Conakry reste parmi les plus intéressants de la sous-région ouest-africaine, avec une rentabilité brute pouvant atteindre 8 à 12 % par an selon l&apos;emplacement et le type de bien.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    2. Les types de biens les plus rentables
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Les appartements de type F3 et F4 sont les plus recherchés par les locataires, offrant un bon équilibre entre espace de vie et loyer accessible. Les F5, plus spacieux, attirent les familles aisées et les expatriés prêts à payer un loyer premium. Les résidences sécurisées avec parking, gardiennage et espaces communs entretenus sont particulièrement prisées. Investir dans un programme immobilier structuré permet de bénéficier de garanties sur la qualité de construction et d&apos;une gestion locative professionnelle.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    3. Financer son projet immobilier en Guinée
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Plusieurs options s&apos;offrent aux investisseurs souhaitant financer un projet immobilier à Conakry. L&apos;achat comptant reste la méthode la plus courante, mais des facilités de paiement en mensualités sont proposées par certains promoteurs, permettant d&apos;étaler l&apos;investissement sur plusieurs mois. Les banques locales développent progressivement des offres de crédit immobilier, bien que les taux restent encore élevés. Il est conseillé de comparer les offres et de négocier les conditions pour optimiser le coût total de l&apos;acquisition.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    4. Les étapes clés d&apos;un investissement réussi
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Un investissement immobilier réussi commence par une étude approfondie du marché : localisation, demande locative, prix au mètre carré et potentiel de valorisation. Vient ensuite la phase d&apos;achat, qui nécessite de vérifier les titres fonciers, de sécuriser le contrat et de s&apos;assurer de la conformité juridique du bien. Enfin, la gestion locative est une étape cruciale : confier son bien à un gestionnaire professionnel garantit un taux d&apos;occupation optimal, un entretien régulier et une relation sereine avec les locataires.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    5. Cité Plaza Platinium : un exemple de réussite
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Située à Kipé dans la commune de Ratoma, la <strong className="text-[#1f2d3d]">Cité Plaza Platinium</strong> est un projet phare développé par DINAGUI SARL. Cette résidence moderne propose des appartements F3, F4 et F5 conçus selon les standards de construction les plus exigeants. Avec son emplacement stratégique, à proximité des commodités et des axes routiers principaux, la Cité Plaza Platinium illustre parfaitement le type d&apos;investissement immobilier rentable et pérenne que l&apos;on peut réaliser à Conakry.
                </p>

                {/* Callout box with left orange border */}
                <div className="bg-[#faf5f0] rounded-xl p-8 mt-10 border-l-4 border-[#F88732]">
                  <h2 className="text-2xl font-bold text-[#1f2d3d] mb-4 font-[Roboto_Condensed] uppercase">
                    Investissez avec DINAGUI SARL
                  </h2>
                  <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">DINAGUI SARL</strong> vous propose des appartements <strong className="text-[#1f2d3d]">F3, F4 et F5</strong> au sein de la <strong className="text-[#1f2d3d]">Cité Plaza Platinium à Kipé</strong>, Conakry. Que vous cherchiez un investissement locatif ou une résidence principale, nos logements allient confort moderne, sécurité et cadre de vie agréable.
                  </p>
                  <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">Contactez-nous</strong> dès aujourd&apos;hui pour découvrir nos offres, visiter nos appartements et réserver votre bien.
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
