import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

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
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
