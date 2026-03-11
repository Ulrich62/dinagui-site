import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "./PageHero";

interface ServiceItem {
  title: string;
  description: string;
}

interface OtherService {
  name: string;
  href: string;
  image?: string;
}

interface ServicePageLayoutProps {
  heroTitle: string;
  heroSubtitle?: string;
  introTitle: string;
  introText: string;
  introImage?: string;
  introCtaText?: string;
  introCtaLink?: string;
  sectionTitle?: string;
  services: ServiceItem[];
  otherServices: OtherService[];
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
  darkSectionTitle?: string;
  darkSectionText?: string;
  bottomBarText?: string;
  columns?: 2 | 3;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export default function ServicePageLayout({
  heroTitle,
  introTitle,
  introText,
  introImage,
  introCtaText = "Contactez-nous",
  introCtaLink = "/contact",
  sectionTitle,
  services,
  otherServices,
  ctaTitle = "Contactez-nous pour en savoir plus",
  ctaText = "Bénéficiez de l'expertise de nos professionnels pour concrétiser vos projets.",
  ctaButtonText = "Parlons de votre projet maintenant",
  darkSectionTitle = "Donnez vie à vos projets dès aujourd'hui",
  darkSectionText = "Avec l'expertise de nos professionnels expérimentés, nous vous accompagnons dans la réalisation de vos projets. Ne laissez pas vos idées sur papier, transformez-les en réalité avec DINAGUI SARL.",
  bottomBarText = "Votre projet, notre expertise. Construisons ensemble",
  columns = 3,
  backgroundImage,
  children,
}: ServicePageLayoutProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://dinagui-site.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://dinagui-site.vercel.app/#services" },
      { "@type": "ListItem", position: 3, name: heroTitle },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: heroTitle,
    description: introText,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://dinagui-site.vercel.app/#organization",
      name: "DINAGUI SARL",
    },
    areaServed: { "@type": "Country", name: "Guinée" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: sectionTitle || heroTitle,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        title={heroTitle}
        backgroundImage={backgroundImage}
        bordered
      />

      {/* Intro Section — image + texte */}
      <section className="py-20 px-6 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {introImage && (
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={introImage}
                alt={introTitle}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Coin décoratif orange */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-[#F88732] border-l-[60px] border-l-transparent" />
              </div>
            </div>
          )}
          <div className={!introImage ? "lg:col-span-2 text-center max-w-3xl mx-auto" : ""}>
            {/* Tag element */}
            <div className={`flex items-center gap-3 mb-4 ${!introImage ? "justify-center" : ""}`}>
              <div className="w-10 h-px bg-[#F88732]" />
              <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
                À propos
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase">
              {introTitle}
            </h2>
            <p className="text-[#6b7280] leading-relaxed font-[Roboto] mb-8">
              {introText}
            </p>
            <Link
              href={introCtaLink}
              className="inline-block border-2 border-[#1f2d3d] text-[#1f2d3d] font-semibold px-8 py-3 hover:bg-[#1f2d3d] hover:text-white transition-colors duration-300 font-[Roboto] text-sm uppercase tracking-wide"
            >
              {introCtaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      {services.length > 0 && (
        <section className="pb-20 px-6 max-w-[1340px] mx-auto">
          {sectionTitle && (
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] text-center mb-12 font-[Roboto_Condensed] uppercase">
              {sectionTitle}
            </h2>
          )}
          <div className={`grid ${gridCols} gap-8`}>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-7 hover:shadow-lg hover:border-[#F88732]/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Left orange accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F88732] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                {/* Icône numérotée */}
                <div className="w-10 h-10 rounded bg-[#F88732]/10 flex items-center justify-center mb-5 group-hover:bg-[#F88732]/20 transition-colors">
                  <span className="text-[#F88732] font-bold text-sm font-[Roboto_Condensed]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1f2d3d] mb-3 font-[Roboto_Condensed] uppercase">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed font-[Roboto]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Optional extra content */}
      {children}

      {/* CTA Banner orange */}
      <section className="bg-[#F88732] py-16">
        <div className="max-w-[900px] mx-auto text-center px-6">
          {/* Decorative dot+lines element */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="w-12 h-px bg-white/60" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[Roboto_Condensed] uppercase">
            {ctaTitle}
          </h3>
          <p className="text-white/85 mb-8 font-[Roboto]">
            {ctaText}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#F88732] font-semibold py-3 px-10 rounded hover:bg-gray-100 transition-all duration-300 font-[Roboto] hover:shadow-lg"
          >
            {ctaButtonText}
          </Link>
        </div>
      </section>

      {/* Section "Donnez vie à vos projets" */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px]">
            <Image
              src={backgroundImage || "/images/parallax-bg.jpg"}
              alt="Projets DINAGUI"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-[#1f2d3d] flex items-center px-10 md:px-16 py-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-[Roboto_Condensed] uppercase leading-tight">
                {darkSectionTitle}
              </h3>
              <p className="text-white/75 leading-relaxed font-[Roboto] mb-8">
                {darkSectionText}
              </p>
              <div className="w-16 h-1 bg-[#F88732] mb-8" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 font-[Roboto] hover:shadow-lg hover:shadow-[#F88732]/25"
              >
                Contactez-nous
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autres Services avec images */}
      <section className="py-20 px-6 max-w-[1340px] mx-auto">
        <h2 className="text-3xl font-bold text-[#1f2d3d] text-center mb-12 font-[Roboto_Condensed] uppercase">
          Autres services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1f2d3d] to-[#F88732]/80" />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <h4 className="text-center text-[#1f2d3d] font-bold text-sm font-[Roboto_Condensed] uppercase group-hover:text-[#F88732] transition-colors">
                {service.name}
              </h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA bar */}
      <section className="bg-[#F88732] py-8">
        <div className="max-w-[1340px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white font-[Roboto_Condensed] uppercase">
            {bottomBarText}
          </h3>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded hover:bg-white hover:text-[#F88732] transition-colors duration-300 font-[Roboto] text-sm whitespace-nowrap"
          >
            Contactez-nous maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
