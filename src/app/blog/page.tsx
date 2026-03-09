import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" />

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray mb-10">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-dark">Blog</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Articles */}
            <div>
              <article className="border-b border-gray-200 pb-10 mb-10">
                <div className="relative w-full h-[300px] mb-6 overflow-hidden">
                  <Image
                    src="/images/blog/construction-maisons.avif"
                    alt="Pourquoi faire appel à une entreprise générale de construction pour vos projets ?"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="text-sm text-gray mb-3 italic">
                  par <span className="text-orange font-medium">Dinagui Admin</span> | BTP | octobre 1, 2025
                </div>

                <h2 className="text-xl font-bold text-dark mb-3 leading-snug">
                  <Link
                    href="/blog/pourquoi-faire-appel-a-une-entreprise-generale-de-construction-pour-vos-projets"
                    className="hover:text-orange transition-colors"
                  >
                    Pourquoi faire appel à une entreprise générale de construction pour vos projets ?
                  </Link>
                </h2>

                <p className="text-gray text-[15px] leading-relaxed mb-4">
                  Construire, rénover ou aménager un espace est un projet qui
                  nécessite une expertise technique, une planification rigoureuse
                  et une exécution parfaite...
                </p>

                <Link
                  href="/blog/pourquoi-faire-appel-a-une-entreprise-generale-de-construction-pour-vos-projets"
                  className="text-orange font-medium hover:text-orange-dark transition-colors inline-flex items-center gap-2"
                >
                  Lire la suite →
                </Link>
              </article>
            </div>

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
