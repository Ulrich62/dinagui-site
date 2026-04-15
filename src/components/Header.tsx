"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const services = [
  { name: "Service BTP", href: "/services/service-btp" },
  { name: "Gestion immobilière", href: "/services/gestion-immobiliere" },
  { name: "Placements de personnels", href: "/services/placements-de-personnels" },
  { name: "Service de gardiennage & de conciergerie", href: "/services/service-de-gardiennage-de-conciergerie" },
  { name: "Service de nettoyage", href: "/services/service-de-nettoyage" },
  { name: "Fourniture de bureau et équipement", href: "/services/fourniture-de-bureau-et-equipement" },
  { name: "Logistique et transport", href: "/services/logistique-et-transport" },
  { name: "Commerce général", href: "/services/commerce-general" },
  { name: "Transit et douane", href: "/services/transit-et-douane" },
  { name: "Consulting", href: "/services/consulting" },
];

const offres: { name: string; href: string; divider?: boolean }[] = [
  { name: "Vente et location d'appartements", href: "/nos-offres/vente-et-location-dappartements" },
  { name: "Standard de livraison", href: "/nos-offres/standard-de-livraison" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [offresOpen, setOffresOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1340px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-dinagui.avif"
            alt="DINAGUI SARL"
            width={70}
            height={91}
            className="h-[70px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center text-[15px] font-normal text-[#1f2d3d]">
          <Link href="/" className="hover:text-[#F88732] transition-colors px-6">
            Accueil
          </Link>
          <span className="text-gray-300">|</span>

          {/* À-propos → lien direct vers Notre équipe */}
          <Link href="/a-propos" className="hover:text-[#F88732] transition-colors px-6">
            À-propos
          </Link>
          <span className="text-gray-300">|</span>

          {/* Services */}
          <div
            className="relative px-6"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="hover:text-[#F88732] transition-colors cursor-pointer">
              Services
            </span>
            <div
              className={`absolute top-full left-0 mt-4 bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 ease-in-out ${
                activeDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
              style={{ minWidth: "340px" }}
            >
              <div className="py-3 px-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 px-3 text-[14px] text-[#1f2d3d] hover:text-[#F88732] hover:bg-gray-50 rounded transition-colors whitespace-nowrap"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <span className="text-gray-300">|</span>

          {/* Nos offres */}
          <div
            className="relative px-6"
            onMouseEnter={() => setActiveDropdown("offres")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href="/nos-offres" className="hover:text-[#F88732] transition-colors">
              Nos offres
            </Link>
            <div
              className={`absolute top-full left-0 mt-4 bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 ease-in-out ${
                activeDropdown === "offres" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
              style={{ minWidth: "300px" }}
            >
              <div className="py-3 px-4">
                {offres.map((o, i) =>
                  o.divider ? (
                    <div key={`div-${i}`} className="my-2 border-t border-gray-100" />
                  ) : (
                    <Link
                      key={o.href}
                      href={o.href}
                      className="block py-2 px-3 text-[14px] text-[#1f2d3d] hover:text-[#F88732] hover:bg-gray-50 rounded transition-colors whitespace-nowrap"
                    >
                      {o.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <span className="text-gray-300">|</span>

          <Link href="/blog" className="hover:text-[#F88732] transition-colors px-6">
            Blog
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="hover:text-[#F88732] transition-colors px-6">
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-[#F88732] text-white px-8 py-3 rounded-full hover:bg-[#e0752a] transition-colors font-medium ml-6 text-[15px]"
          >
            Demandez un devis
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-[#1f2d3d]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            <Link href="/" className="py-3 border-b border-gray-50 hover:text-[#F88732]" onClick={() => setMobileOpen(false)}>
              Accueil
            </Link>
            <Link href="/a-propos" className="py-3 border-b border-gray-50 hover:text-[#F88732]" onClick={() => setMobileOpen(false)}>
              À-propos
            </Link>
            <Link href="/notre-equipe" className="py-3 pl-4 border-b border-gray-50 hover:text-[#F88732] text-sm" onClick={() => setMobileOpen(false)}>
              Notre équipe
            </Link>

            {/* Services mobile */}
            <button
              className="py-3 border-b border-gray-50 hover:text-[#F88732] flex items-center justify-between"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <FiChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col pl-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="py-2 text-sm hover:text-[#F88732] border-b border-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Offres mobile */}
            <div className="flex items-center border-b border-gray-50">
              <Link
                href="/nos-offres"
                className="flex-1 py-3 hover:text-[#F88732]"
                onClick={() => setMobileOpen(false)}
              >
                Nos offres
              </Link>
              <button
                className="p-3 hover:text-[#F88732]"
                onClick={() => setOffresOpen(!offresOpen)}
                aria-label="Ouvrir le sous-menu Nos offres"
              >
                <FiChevronDown className={`transition-transform ${offresOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {offresOpen && (
              <div className="flex flex-col pl-4">
                {offres.map((o, i) =>
                  o.divider ? (
                    <div key={`mdiv-${i}`} className="my-1 border-t border-gray-100" />
                  ) : (
                    <Link
                      key={o.href}
                      href={o.href}
                      className="py-2 text-sm hover:text-[#F88732] border-b border-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {o.name}
                    </Link>
                  )
                )}
              </div>
            )}

            <Link href="/blog" className="py-3 border-b border-gray-50 hover:text-[#F88732]" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="py-3 border-b border-gray-50 hover:text-[#F88732]" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#F88732] text-white text-center py-3 rounded-full mt-3 hover:bg-[#e0752a]"
              onClick={() => setMobileOpen(false)}
            >
              Demandez un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
