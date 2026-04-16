import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Qui sommes-nous", href: "/a-propos" },
  { name: "Services", href: "/services/service-btp" },
  { name: "Réalisations", href: "/appartements-c1" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Conception et planification en BTP", href: "/services/service-btp" },
  { name: "Gestion immobilière", href: "/services/gestion-immobiliere" },
  { name: "Placement de personnels", href: "/services/placements-de-personnels" },
  { name: "Service de gardiennage & Conciergerie", href: "/services/service-de-gardiennage-de-conciergerie" },
  { name: "Service de nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Logistique et transport", href: "/services/logistique-et-transport" },
  { name: "Fourniture de bureau et équipement", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Commerce général", href: "/services/commerce-general" },
  { name: "Transit et Douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/parallax-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#111827]/95" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-dinagui-small.avif"
                alt="DINAGUI SARL"
                width={90}
                height={117}
                className="mb-5"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              <strong className="text-white">DINAGUI SARL</strong>, votre partenaire de confiance pour l&apos;exécution de projet de construction et d&apos;aménagement en macro-lots, en tous corps d&apos;état ou en clé en main.
            </p>
            <div className="w-12 h-0.5 bg-[#F88732]/50 rounded" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase font-[Roboto_Condensed] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F88732] transition-colors text-sm font-[Roboto] flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#F88732] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase font-[Roboto_Condensed] tracking-wide">
              Nos services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F88732] transition-colors text-sm font-[Roboto] flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#F88732] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase font-[Roboto_Condensed] tracking-wide">
              Nous joindre
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiPhone className="text-[#F88732] text-sm" />
                </div>
                <a href="tel:+224613500404" className="text-gray-400 hover:text-[#F88732] transition-colors text-sm font-[Roboto]">
                  (+224) 613 50 04 04
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="text-[#F88732] text-sm" />
                </div>
                <span className="text-gray-400 text-sm font-[Roboto]">
                  Conakry / Kipé C/Ratoma Centre émetteur Cité Plaza Platinium
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMail className="text-[#F88732] text-sm" />
                </div>
                <a href="mailto:contact@dinagui.com" className="text-gray-400 hover:text-[#F88732] transition-colors text-sm font-[Roboto]">
                  contact@dinagui.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1340px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-sm font-[Roboto]">
            &copy; {new Date().getFullYear()} DINAGUI Sarl. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs font-[Roboto]">
            Un choix sûr et durable
          </p>
        </div>
      </div>
    </footer>
  );
}
