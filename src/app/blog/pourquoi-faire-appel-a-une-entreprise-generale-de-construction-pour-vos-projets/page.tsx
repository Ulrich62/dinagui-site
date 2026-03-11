import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pourquoi faire appel à une entreprise de construction - DINAGUI SARL",
  description:
    "Découvrez les avantages de confier vos projets de construction à une entreprise générale comme DINAGUI SARL à Conakry.",
};

export default function BlogDetailPage() {
  return (
    <>
      <PageHero title="Pourquoi faire appel à une entreprise générale de construction pour vos projets ?" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#6b7280] mb-10 flex items-center gap-1 font-[Roboto]">
            <Link href="/" className="hover:text-[#F88732] transition-colors duration-200">Accueil</Link>
            <FiChevronRight className="text-xs" />
            <Link href="/blog" className="hover:text-[#F88732] transition-colors duration-200">Blog</Link>
            <FiChevronRight className="text-xs" />
            <span className="text-[#1f2d3d] font-medium">Pourquoi faire appel à une entreprise générale de construction</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article>
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/blog/construction-maisons.jpg"
                  alt="Pourquoi faire appel à une entreprise générale de construction pour vos projets ?"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-sm text-[#6b7280] mb-6 font-[Roboto]">
                <span className="inline-block bg-[#F88732]/10 text-[#F88732] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wide">
                  BTP
                </span>
                <span className="italic">
                  par <span className="text-[#F88732] font-medium">Dinagui Admin</span>
                </span>
                <span>|</span>
                <span>DINAGUI SARL</span>
              </div>

              <div className="prose prose-lg max-w-none text-[#1f2d3d]">
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Construire, rénover ou aménager un espace est un projet qui nécessite une expertise technique, une planification rigoureuse et une exécution parfaite. Faire appel à une entreprise générale de construction offre de nombreux avantages qui simplifient chaque étape du processus.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    1. Un interlocuteur unique pour tout votre projet
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  L&apos;un des principaux avantages de confier votre projet à une entreprise générale est la gestion centralisée. Un seul interlocuteur coordonne l&apos;ensemble des corps de métier : maçonnerie, plomberie, électricité, menuiserie, peinture, etc. Cela évite les malentendus et assure une communication fluide tout au long du chantier.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    2. Une expertise technique complète
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Une entreprise générale de construction regroupe des professionnels qualifiés dans divers domaines. Elle dispose de l&apos;expérience nécessaire pour gérer des projets complexes et garantir un résultat conforme aux normes en vigueur. Que ce soit pour une construction neuve, une rénovation ou un aménagement intérieur, elle maîtrise chaque aspect du bâtiment.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    3. Respect des délais et du budget
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Grâce à une planification rigoureuse et une gestion efficace des ressources, une entreprise générale s&apos;engage à respecter les délais convenus et à optimiser les coûts. Elle anticipe les imprévus et propose des solutions adaptées pour éviter tout dépassement budgétaire.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    4. Qualité et conformité garanties
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  Faire appel à une entreprise générale, c&apos;est l&apos;assurance d&apos;un travail de qualité. Elle s&apos;assure que chaque étape respecte les standards de construction et les réglementations locales. De plus, elle effectue des contrôles réguliers pour garantir la durabilité et la sécurité de votre ouvrage.
                </p>

                <div className="flex items-center gap-3 mt-10 mb-4">
                  <div className="w-8 h-px bg-[#F88732]" />
                  <h2 className="text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                    5. Gain de temps et tranquillité d&apos;esprit
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                  En confiant votre projet à des experts, vous gagnez un temps précieux. Vous n&apos;avez pas à rechercher et coordonner individuellement chaque artisan. L&apos;entreprise générale prend en charge l&apos;intégralité du chantier, vous permettant de vous concentrer sur d&apos;autres priorités.
                </p>

                {/* Callout box with left orange border */}
                <div className="bg-[#faf5f0] rounded-xl p-8 mt-10 border-l-4 border-[#F88732]">
                  <h2 className="text-2xl font-bold text-[#1f2d3d] mb-4 font-[Roboto_Condensed] uppercase">
                    Pourquoi choisir DINAGUI SARLU ?
                  </h2>
                  <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
                    Chez <strong className="text-[#1f2d3d]">DINAGUI SARLU</strong>, nous mettons notre savoir-faire et notre engagement au service de vos projets. Nous intervenons dans la construction, la rénovation, la finition, et bien plus encore. Avec une équipe de professionnels passionnés et un souci constant de la qualité, nous transformons vos idées en réalisations concrètes.
                  </p>
                  <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
                    <strong className="text-[#1f2d3d]">Contactez-nous</strong> dès aujourd&apos;hui pour discuter de votre projet et obtenir un devis personnalisé.
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
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
