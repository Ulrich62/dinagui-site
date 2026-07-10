import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import RentalMedia from "@/components/RentalMedia";
import RentalGridCard from "@/components/RentalGridCard";
import { featureIcon } from "@/lib/featureIcons";
import { getOfferCover } from "@/lib/offer";
import { getListings, getListingBySlug, getListingSlugs } from "@/lib/listings";
import { breadcrumbList, jsonLdScript } from "@/lib/schema";

// ISR : régénéré à chaque publication (hooks Payload) + filet de sécurité horaire.
export const revalidate = 3600;

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getListingSlugs("rent");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offer = await getListingBySlug("rent", slug);
  if (!offer) return {};

  const cover =
    getOfferCover(offer) ?? "/images/plaza-platinium/vue-aerienne.jpg";
  const locationLine = [offer.location, offer.landmark]
    .filter(Boolean)
    .join(" — ");
  const description = `${offer.title} à ${locationLine}. ${offer.summary}`;

  return {
    title: `${offer.title} — Location DINAGUI`,
    description,
    alternates: {
      canonical: `/nos-offres/location-dappartements/${offer.slug}`,
    },
    openGraph: {
      title: `${offer.title} — Location DINAGUI`,
      description,
      url: `/nos-offres/location-dappartements/${offer.slug}`,
      locale: "fr_GN",
      type: "website",
      images: [{ url: cover, width: 1200, height: 630, alt: offer.title }],
    },
  };
}

export default async function RentalDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const offer = await getListingBySlug("rent", slug);
  if (!offer) notFound();

  const others = (await getListings("rent"))
    .filter((o) => o.slug !== offer.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbList([
            { name: "Accueil", path: "/" },
            { name: "Nos offres", path: "/nos-offres" },
            {
              name: "Location d'appartements",
              path: "/nos-offres/location-dappartements",
            },
            {
              name: offer.shortTitle,
              path: `/nos-offres/location-dappartements/${offer.slug}`,
            },
          ]),
        )}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1340px] mx-auto px-6 py-4 text-sm text-[#6b7280] font-[Roboto]">
          <Link href="/" className="hover:text-[#F88732]">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/nos-offres" className="hover:text-[#F88732]">
            Nos offres
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/nos-offres/location-dappartements"
            className="hover:text-[#F88732]"
          >
            Location d&apos;appartements
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1f2d3d]">{offer.shortTitle}</span>
        </div>
      </div>

      {/* Header + media (photo-first) */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <Link
            href="/nos-offres/location-dappartements"
            className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#F88732] text-sm font-[Roboto] mb-6 transition-colors"
          >
            <FiArrowLeft /> Retour aux offres
          </Link>

          <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-3">
                {offer.title}
              </h1>
              <div className="flex items-center gap-2 text-[#6b7280] text-[15px] font-[Roboto]">
                <FiMapPin className="text-[#F88732] flex-shrink-0" />
                <span>
                  {offer.location}
                  {offer.landmark && (
                    <span className="text-[#6b7280]/80">
                      {" "}
                      — {offer.landmark}
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center leading-none bg-[#F88732] text-white text-xs font-bold uppercase tracking-wider px-3 h-8 rounded font-[Roboto_Condensed]">
                {offer.furnished ? "Meublé" : "Non meublé"}
              </span>
              <span className="inline-flex items-center leading-none bg-[#FCEEE5] text-[#1f2d3d] text-sm font-semibold px-3 h-8 rounded font-[Roboto]">
                {offer.bedrooms} chambre{offer.bedrooms > 1 ? "s" : ""}
              </span>
              <span className="inline-flex items-center leading-none bg-[#FCEEE5] text-[#1f2d3d] text-sm font-semibold px-3 h-8 rounded font-[Roboto]">
                {offer.bathrooms} SDB
              </span>
            </div>
          </div>

          <RentalMedia
            photos={offer.photos}
            video={offer.video}
            title={offer.title}
          />
        </div>
      </section>

      {/* Description + sidebar */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-10 lg:gap-14 items-start">
            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-4">
                Description
              </h2>
              <p className="text-[#6b7280] text-[15px] md:text-base font-[Roboto] leading-relaxed mb-10 whitespace-pre-line">
                {offer.description || offer.summary}
              </p>

              {offer.features.length > 0 && (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase mb-5">
                    Caractéristiques
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-10">
                    {offer.features.map((e, i) => {
                      const Icon = featureIcon(e.icon);
                      return (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[#1f2d3d] text-[15px] font-[Roboto] bg-[#faf5f0] rounded-lg px-4 py-3"
                        >
                          <span className="w-9 h-9 flex items-center justify-center rounded-md bg-white text-[#F88732] flex-shrink-0 shadow-sm">
                            <Icon
                              className="w-[18px] h-[18px]"
                              strokeWidth={1.75}
                            />
                          </span>
                          <span className="leading-snug">{e.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}

              <div className="bg-[#faf5f0] rounded-[14px] p-6 flex items-start gap-3">
                <FiMapPin className="text-[#F88732] text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#6b7280] font-[Roboto] font-semibold mb-1">
                    Localisation
                  </p>
                  <p className="text-[#1f2d3d] font-[Roboto_Condensed] font-bold">
                    {offer.location}
                  </p>
                  {offer.landmark && (
                    <p className="text-[#6b7280] text-sm font-[Roboto]">
                      {offer.landmark}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar contact */}
            <aside className="lg:sticky lg:top-24">
              <div className="bg-[#1f2d3d] rounded-[14px] p-8 text-white">
                <p className="text-xs uppercase tracking-wider text-[#F88732] font-[Roboto_Condensed] font-bold mb-3">
                  Intéressé par cette offre ?
                </p>
                <h3 className="text-2xl font-bold font-[Roboto_Condensed] uppercase leading-tight mb-5">
                  Planifions une visite
                </h3>
                <p className="text-white/75 text-sm font-[Roboto] leading-relaxed mb-6">
                  Contactez notre équipe pour obtenir les tarifs, organiser une
                  visite ou demander plus d&apos;informations.
                </p>

                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+224613500404"
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    <FiPhone className="text-[#F88732] text-lg flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 font-[Roboto]">
                        Téléphone
                      </p>
                      <p className="text-white font-[Roboto_Condensed] font-bold">
                        +224 613 50 04 04
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@dinagui.com"
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    <FiMail className="text-[#F88732] text-lg flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 font-[Roboto]">
                        E-mail
                      </p>
                      <p className="text-white text-sm font-[Roboto]">
                        contact@dinagui.com
                      </p>
                    </div>
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-6 py-3.5 rounded transition-all duration-300 font-[Roboto]"
                >
                  Demander un devis <FiArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Autres offres */}
      {others.length > 0 && (
        <section className="py-20 bg-[#faf5f0]">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase">
                  Autres offres disponibles
                </h2>
                <p className="text-[#6b7280] text-[15px] font-[Roboto] mt-2">
                  Découvrez nos autres appartements en location.
                </p>
              </div>
              <Link
                href="/nos-offres/location-dappartements"
                className="inline-flex items-center gap-2 text-[#F88732] font-semibold text-[15px] font-[Roboto] hover:gap-3 transition-all"
              >
                Voir tout le catalogue <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {others.map((o) => (
                <RentalGridCard key={o.slug} offer={o} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
