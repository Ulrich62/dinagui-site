import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Qui somme-nous", href: "/a-propos" },
  { name: "Services", href: "/services/service-btp" },
  { name: "Réalisations", href: "/appartements-f3" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Conception et planification en BTP", href: "/services/service-btp" },
  { name: "Gestion immobilière", href: "/services/gestion-immobiliere" },
  { name: "Placement de prosonnels", href: "/services/placements-de-personnels" },
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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/parallax-bg.avif')" }}
      />
      <div className="absolute inset-0 bg-[#1a2332]/92" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-dinagui-small.avif"
                alt="DINAGUI SARL"
                width={100}
                height={130}
                className="mb-5"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">DINAGUI SARL</strong> Votre partenaire de confiance pour l&apos;exécution de projet de construction et d&apos;aménagement en macro-lots, en tous corps d&apos;état ou en clé en main.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white uppercase font-[Roboto_Condensed]">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-3">
                  <span className="text-gray-500">&mdash;</span>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F88732] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white uppercase font-[Roboto_Condensed]">Nos services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-3">
                  <span className="text-gray-500">&mdash;</span>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F88732] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white uppercase font-[Roboto_Condensed]">Nous joindre</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#F88732] mt-1 flex-shrink-0" />
                <a href="tel:+224613500404" className="text-gray-400 hover:text-[#F88732] transition-colors text-sm">
                  (+224) 613 50 04 04
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#F88732] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Conakry / Kipé C/Ratoma Centre émetteur Cité Plaza Platinium
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-[#F88732] mt-1 flex-shrink-0" />
                <a href="mailto:dinagui.sarlu@gmail.com" className="text-gray-400 hover:text-[#F88732] transition-colors text-sm">
                  dinagui.sarlu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="max-w-[1340px] mx-auto px-6 py-5 text-center text-gray-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} DINAGUI Sarl. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
