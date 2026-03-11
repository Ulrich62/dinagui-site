import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Logistique et transport en Guinée - DINAGUI SARL",
  description:
    "Les clés d\u2019une chaîne logistique performante en Guinée : transport terrestre, maritime, suivi en temps réel et formalités d\u2019import-export.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Logistique et transport en Guinée : les clés d\u2019une chaîne performante",
  description: "Les clés d\u2019une chaîne logistique performante en Guinée : transport terrestre, maritime, suivi en temps réel et formalités d\u2019import-export.",
  image: "https://dinagui-site.vercel.app/images/services/logistique-transport.jpg",
  author: { "@type": "Organization", name: "DINAGUI SARL" },
  publisher: {
    "@type": "Organization",
    name: "DINAGUI SARL",
    logo: { "@type": "ImageObject", url: "https://dinagui-site.vercel.app/images/logo-dinagui.avif" },
  },
  mainEntityOfPage: "https://dinagui-site.vercel.app/blog/logistique-et-transport-en-guinee-les-cles-dune-chaine-performante",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://dinagui-site.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://dinagui-site.vercel.app/blog" },
    { "@type": "ListItem", position: 3, name: "Logistique et transport en Guinée" },
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
      <PageHero title="Logistique et transport en Guinée : les clés d&apos;une chaîne performante" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#6b7280] mb-10 flex items-center gap-1 font-[Roboto]">
            <Link href="/" className="hover:text-[#F88732] transition-colors duration-200">Accueil</Link>
            <FiChevronRight className="text-xs" />
            <Link href="/blog" className="hover:text-[#F88732] transition-colors duration-200">Blog</Link>
            <FiChevronRight className="text-xs" />
            <span className="text-[#1f2d3d] font-medium">Logistique et transport en Guinée</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article>
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/logistique-transport.jpg"
                  alt="Logistique et transport en Guinée : les clés d'une chaîne performante"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-6 font-[Roboto]">
                <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                  Logistique
                </span>
                <span className="italic">
                  par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                </span>
                <span>|</span>
                <span>DINAGUI SARL</span>
              </div>

              <div className="prose prose-lg max-w-none text-[#1f2d3d]">
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  En Guinée, la logistique et le transport jouent un rôle central dans le développement économique du pays. Que vous soyez une entreprise importatrice, un industriel ou un commerçant, la performance de votre chaîne logistique détermine directement votre compétitivité sur le marché. Comprendre les enjeux locaux et s&apos;entourer des bons partenaires est essentiel pour réussir.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    1. Les défis logistiques en Guinée
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Le réseau routier guinéen, bien qu&apos;en constante amélioration, présente encore des défis majeurs pour le transport de marchandises. Les axes reliant Conakry aux régions intérieures souffrent parfois de dégradations, surtout en saison des pluies. À cela s&apos;ajoutent les contraintes liées aux infrastructures portuaires et aux délais administratifs qui peuvent ralentir les opérations. Une bonne anticipation de ces obstacles permet de sécuriser les délais de livraison et de réduire les coûts imprévus.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    2. Choisir le bon partenaire logistique
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Le choix d&apos;un partenaire logistique fiable est déterminant pour la réussite de vos opérations. Il est important de privilégier une entreprise disposant d&apos;une flotte adaptée, d&apos;une connaissance approfondie du terrain guinéen et d&apos;un réseau de contacts solide auprès des autorités locales. La réactivité, la transparence tarifaire et la capacité à gérer les imprévus sont des critères essentiels à évaluer avant de s&apos;engager dans un partenariat durable.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    3. Transport de marchandises : terrestre et maritime
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Le transport terrestre reste le mode principal pour la distribution intérieure en Guinée, avec des camions desservant les grandes villes et les zones minières. Le transport maritime, quant à lui, est incontournable pour les échanges internationaux via le port autonome de Conakry. Chaque mode présente ses avantages : le terrestre offre flexibilité et accès direct aux zones reculées, tandis que le maritime permet d&apos;acheminer de gros volumes à des coûts compétitifs sur de longues distances.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    4. L&apos;importance du suivi en temps réel
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  La traçabilité des marchandises est devenue un impératif pour toute chaîne logistique moderne. Le suivi en temps réel permet aux expéditeurs et aux destinataires de connaître la position exacte de leurs cargaisons à chaque étape du transport. Cette transparence réduit les risques de perte, facilite la gestion des stocks et renforce la confiance entre les partenaires commerciaux. Les outils de tracking GPS et les plateformes numériques sont de plus en plus adoptés par les entreprises logistiques en Guinée.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    5. Import-export : simplifier les opérations
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Les formalités douanières et les procédures de transit représentent souvent un casse-tête pour les entreprises. Une bonne maîtrise de la réglementation guinéenne, des documents requis et des circuits administratifs permet de fluidifier les opérations d&apos;import-export. Faire appel à un transitaire expérimenté garantit le respect des délais de dédouanement, l&apos;optimisation des droits et taxes, et la conformité avec les exigences des autorités portuaires et douanières.
                </p>

                {/* Callout box with left orange border */}
                <div className="bg-[#faf5f0] rounded-xl p-8 mt-10 border-l-4 border-[#F88732]">
                  <h2 className="text-2xl font-bold text-[#1f2d3d] mb-4 font-[Roboto_Condensed] uppercase">
                    Optimisez votre logistique avec DINAGUI SARL
                  </h2>
                  <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">DINAGUI SARL</strong> vous accompagne dans la gestion complète de votre chaîne logistique en Guinée. Grâce à nos services de <strong className="text-[#1f2d3d]">logistique et transport</strong>, de <strong className="text-[#1f2d3d]">transit et douane</strong>, nous assurons l&apos;acheminement sécurisé de vos marchandises sur tout le territoire et à l&apos;international.
                  </p>
                  <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">Contactez-nous</strong> dès aujourd&apos;hui pour une étude personnalisée de vos besoins logistiques et un devis adapté.
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
