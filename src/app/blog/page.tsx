import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog - DINAGUI SARL",
  description:
    "Conseils et actualités sur la construction, l'immobilier et les services en Guinée par DINAGUI SARL, votre partenaire de confiance.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#6b7280] mb-10 flex items-center gap-1 font-[Roboto]">
            <Link href="/" className="hover:text-[#F88732] transition-colors duration-200">Accueil</Link>
            <FiChevronRight className="text-xs" />
            <span className="text-[#1f2d3d] font-medium">Blog</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Articles */}
            <div>
              <article className="border-l-4 border-[#F88732] pl-0 mb-10">
                <div className="pl-6">
                  <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-lg group">
                    <Image
                      src="/images/blog/construction-maisons.jpg"
                      alt="Pourquoi faire appel à une entreprise générale de construction pour vos projets ?"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-3 font-[Roboto]">
                    <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                      BTP
                    </span>
                    <span className="italic">
                      par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                    </span>
                    <span>|</span>
                    <span>DINAGUI SARL</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1f2d3d] mb-3 leading-snug font-[Roboto_Condensed]">
                    <Link
                      href="/blog/pourquoi-faire-appel-a-une-entreprise-generale-de-construction-pour-vos-projets"
                      className="hover:text-[#F88732] transition-colors"
                    >
                      Pourquoi faire appel à une entreprise générale de construction pour vos projets ?
                    </Link>
                  </h2>

                  <p className="text-[#6b7280] text-[15px] leading-relaxed mb-5 font-[Roboto]">
                    Construire, rénover ou aménager un espace est un projet qui
                    nécessite une expertise technique, une planification rigoureuse
                    et une exécution parfaite...
                  </p>

                  <Link
                    href="/blog/pourquoi-faire-appel-a-une-entreprise-generale-de-construction-pour-vos-projets"
                    className="text-[#F88732] font-medium hover:text-[#e0752a] transition-colors inline-flex items-center gap-2 font-[Roboto]"
                  >
                    Lire la suite
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>

              <article className="border-l-4 border-[#F88732] pl-0 mb-10">
                <div className="pl-6">
                  <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-lg group">
                    <Image
                      src="/images/services/gestion-immobiliere.jpg"
                      alt="Comment bien gérer son bien immobilier à Conakry ?"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-3 font-[Roboto]">
                    <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                      Immobilier
                    </span>
                    <span className="italic">
                      par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                    </span>
                    <span>|</span>
                    <span>DINAGUI SARL</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1f2d3d] mb-3 leading-snug font-[Roboto_Condensed]">
                    <Link
                      href="/blog/comment-bien-gerer-son-bien-immobilier-a-conakry"
                      className="hover:text-[#F88732] transition-colors"
                    >
                      Comment bien gérer son bien immobilier à Conakry ?
                    </Link>
                  </h2>

                  <p className="text-[#6b7280] text-[15px] leading-relaxed mb-5 font-[Roboto]">
                    Posséder un bien immobilier à Conakry représente un investissement
                    important, mais sa rentabilité dépend largement de la qualité
                    de sa gestion...
                  </p>

                  <Link
                    href="/blog/comment-bien-gerer-son-bien-immobilier-a-conakry"
                    className="text-[#F88732] font-medium hover:text-[#e0752a] transition-colors inline-flex items-center gap-2 font-[Roboto]"
                  >
                    Lire la suite
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>

              <article className="border-l-4 border-[#F88732] pl-0 mb-10">
                <div className="pl-6">
                  <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-lg group">
                    <Image
                      src="/images/services/gardiennage.jpg"
                      alt="Sécurité privée en Guinée : guide pour protéger vos locaux"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-3 font-[Roboto]">
                    <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                      Sécurité
                    </span>
                    <span className="italic">
                      par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                    </span>
                    <span>|</span>
                    <span>DINAGUI SARL</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1f2d3d] mb-3 leading-snug font-[Roboto_Condensed]">
                    <Link
                      href="/blog/securite-privee-en-guinee-guide-pour-proteger-vos-locaux"
                      className="hover:text-[#F88732] transition-colors"
                    >
                      Sécurité privée en Guinée : guide pour protéger vos locaux
                    </Link>
                  </h2>

                  <p className="text-[#6b7280] text-[15px] leading-relaxed mb-5 font-[Roboto]">
                    La sécurité des biens et des personnes est une préoccupation
                    majeure pour les entreprises, les résidences et les institutions
                    en Guinée...
                  </p>

                  <Link
                    href="/blog/securite-privee-en-guinee-guide-pour-proteger-vos-locaux"
                    className="text-[#F88732] font-medium hover:text-[#e0752a] transition-colors inline-flex items-center gap-2 font-[Roboto]"
                  >
                    Lire la suite
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>

              <article className="border-l-4 border-[#F88732] pl-0 mb-10">
                <div className="pl-6">
                  <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-lg group">
                    <Image
                      src="/images/services/logistique-transport.jpg"
                      alt="Logistique et transport en Guinée : les clés d'une chaîne performante"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-3 font-[Roboto]">
                    <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                      Logistique
                    </span>
                    <span className="italic">
                      par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                    </span>
                    <span>|</span>
                    <span>DINAGUI SARL</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1f2d3d] mb-3 leading-snug font-[Roboto_Condensed]">
                    <Link
                      href="/blog/logistique-et-transport-en-guinee-les-cles-dune-chaine-performante"
                      className="hover:text-[#F88732] transition-colors"
                    >
                      Logistique et transport en Guinée : les clés d&apos;une chaîne performante
                    </Link>
                  </h2>

                  <p className="text-[#6b7280] text-[15px] leading-relaxed mb-5 font-[Roboto]">
                    En Guinée, la logistique et le transport représentent des enjeux
                    majeurs pour les entreprises. Infrastructure, suivi, partenaires
                    fiables : les clés pour optimiser votre chaîne...
                  </p>

                  <Link
                    href="/blog/logistique-et-transport-en-guinee-les-cles-dune-chaine-performante"
                    className="text-[#F88732] font-medium hover:text-[#e0752a] transition-colors inline-flex items-center gap-2 font-[Roboto]"
                  >
                    Lire la suite
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>

              <article className="border-l-4 border-[#F88732] pl-0 mb-10">
                <div className="pl-6">
                  <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-lg group">
                    <Image
                      src="/images/apartments/f3-appartement.jpg"
                      alt="Investir dans l'immobilier à Conakry : guide complet"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-3 font-[Roboto]">
                    <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                      Immobilier
                    </span>
                    <span className="italic">
                      par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                    </span>
                    <span>|</span>
                    <span>DINAGUI SARL</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1f2d3d] mb-3 leading-snug font-[Roboto_Condensed]">
                    <Link
                      href="/blog/investir-dans-limmobilier-a-conakry-guide-complet"
                      className="hover:text-[#F88732] transition-colors"
                    >
                      Investir dans l&apos;immobilier à Conakry : guide complet
                    </Link>
                  </h2>

                  <p className="text-[#6b7280] text-[15px] leading-relaxed mb-5 font-[Roboto]">
                    Conakry attire de plus en plus d&apos;investisseurs immobiliers.
                    Croissance urbaine, forte demande locative et projets modernes
                    comme la Cité Plaza Platinium font de la capitale un choix stratégique...
                  </p>

                  <Link
                    href="/blog/investir-dans-limmobilier-a-conakry-guide-complet"
                    className="text-[#F88732] font-medium hover:text-[#e0752a] transition-colors inline-flex items-center gap-2 font-[Roboto]"
                  >
                    Lire la suite
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </div>

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
