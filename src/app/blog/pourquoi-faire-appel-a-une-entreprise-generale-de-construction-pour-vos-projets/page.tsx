import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function BlogDetailPage() {
  return (
    <>
      <PageHero title="Pourquoi faire appel à une entreprise générale de construction pour vos projets ?" />

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray mb-8">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-orange transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-dark">Pourquoi faire appel à une entreprise générale de construction</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article>
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/blog/construction-maisons.avif"
                  alt="Pourquoi faire appel à une entreprise générale de construction pour vos projets ?"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-sm text-gray mb-6 italic">
                par <span className="text-orange font-medium">Dinagui Admin</span> | BTP | octobre 1, 2025
              </div>

              <div className="prose prose-lg max-w-none text-[#1f2d3d]">
                <p className="text-gray leading-relaxed mb-6">
                  Construire, rénover ou aménager un espace est un projet qui nécessite une expertise technique, une planification rigoureuse et une exécution parfaite. Faire appel à une entreprise générale de construction offre de nombreux avantages qui simplifient chaque étape du processus.
                </p>

                <h2 className="text-2xl font-bold text-dark mt-10 mb-4 font-[Roboto_Condensed] uppercase">
                  1. Un interlocuteur unique pour tout votre projet
                </h2>
                <p className="text-gray leading-relaxed mb-6">
                  L&apos;un des principaux avantages de confier votre projet à une entreprise générale est la gestion centralisée. Un seul interlocuteur coordonne l&apos;ensemble des corps de métier : maçonnerie, plomberie, électricité, menuiserie, peinture, etc. Cela évite les malentendus et assure une communication fluide tout au long du chantier.
                </p>

                <h2 className="text-2xl font-bold text-dark mt-10 mb-4 font-[Roboto_Condensed] uppercase">
                  2. Une expertise technique complète
                </h2>
                <p className="text-gray leading-relaxed mb-6">
                  Une entreprise générale de construction regroupe des professionnels qualifiés dans divers domaines. Elle dispose de l&apos;expérience nécessaire pour gérer des projets complexes et garantir un résultat conforme aux normes en vigueur. Que ce soit pour une construction neuve, une rénovation ou un aménagement intérieur, elle maîtrise chaque aspect du bâtiment.
                </p>

                <h2 className="text-2xl font-bold text-dark mt-10 mb-4 font-[Roboto_Condensed] uppercase">
                  3. Respect des délais et du budget
                </h2>
                <p className="text-gray leading-relaxed mb-6">
                  Grâce à une planification rigoureuse et une gestion efficace des ressources, une entreprise générale s&apos;engage à respecter les délais convenus et à optimiser les coûts. Elle anticipe les imprévus et propose des solutions adaptées pour éviter tout dépassement budgétaire.
                </p>

                <h2 className="text-2xl font-bold text-dark mt-10 mb-4 font-[Roboto_Condensed] uppercase">
                  4. Qualité et conformité garanties
                </h2>
                <p className="text-gray leading-relaxed mb-6">
                  Faire appel à une entreprise générale, c&apos;est l&apos;assurance d&apos;un travail de qualité. Elle s&apos;assure que chaque étape respecte les standards de construction et les réglementations locales. De plus, elle effectue des contrôles réguliers pour garantir la durabilité et la sécurité de votre ouvrage.
                </p>

                <h2 className="text-2xl font-bold text-dark mt-10 mb-4 font-[Roboto_Condensed] uppercase">
                  5. Gain de temps et tranquillité d&apos;esprit
                </h2>
                <p className="text-gray leading-relaxed mb-6">
                  En confiant votre projet à des experts, vous gagnez un temps précieux. Vous n&apos;avez pas à rechercher et coordonner individuellement chaque artisan. L&apos;entreprise générale prend en charge l&apos;intégralité du chantier, vous permettant de vous concentrer sur d&apos;autres priorités.
                </p>

                <div className="bg-beige rounded-xl p-8 mt-10">
                  <h2 className="text-2xl font-bold text-dark mb-4 font-[Roboto_Condensed] uppercase">
                    Pourquoi choisir DINAGUI SARLU ?
                  </h2>
                  <p className="text-gray leading-relaxed mb-4">
                    Chez <strong>DINAGUI SARLU</strong>, nous mettons notre savoir-faire et notre engagement au service de vos projets. Nous intervenons dans la construction, la rénovation, la finition, et bien plus encore. Avec une équipe de professionnels passionnés et un souci constant de la qualité, nous transformons vos idées en réalisations concrètes.
                  </p>
                  <p className="text-gray leading-relaxed">
                    <strong>Contactez-nous</strong> dès aujourd&apos;hui pour discuter de votre projet et obtenir un devis personnalisé.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="bg-beige rounded-xl p-6 sticky top-[120px]">
                <h3 className="text-lg font-bold text-dark mb-4 font-[Roboto_Condensed] uppercase border-b-2 border-orange pb-3">
                  Articles récents
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blog/pourquoi-faire-appel-a-une-entreprise-generale-de-construction-pour-vos-projets"
                      className="text-sm text-gray hover:text-orange transition-colors leading-snug block"
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
