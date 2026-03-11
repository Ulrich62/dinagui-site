import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 bg-[#faf5f0]">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-[#F88732] font-[Roboto_Condensed]">404</p>
        <h1 className="text-3xl font-bold text-[#1f2d3d] mt-4 mb-4 font-[Roboto_Condensed] uppercase">
          Page introuvable
        </h1>
        <p className="text-[#6b7280] mb-8 font-[Roboto]">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#F88732] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e0752a] transition-all duration-300 font-[Roboto]"
        >
          Retour à l&apos;accueil
        </Link>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/a-propos" className="text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto] text-sm">À propos</Link>
          <Link href="/services/service-btp" className="text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto] text-sm">Services</Link>
          <Link href="/appartements-f3" className="text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto] text-sm">Nos offres</Link>
          <Link href="/contact" className="text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto] text-sm">Contact</Link>
        </div>
      </div>
    </section>
  );
}
