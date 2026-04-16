const SITE_URL = "https://dinagui-site.vercel.app";

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

type ApartmentTypology = { type: string; surface: string; price: string };

export function apartmentListing(opts: {
  name: string;
  description: string;
  path: string;
  image: string;
  numberOfRooms: number;
  floorSize: { min: number; max: number };
  typologies: ApartmentTypology[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    image: `${SITE_URL}${opts.image}`,
    numberOfRooms: opts.numberOfRooms,
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: opts.floorSize.min,
      maxValue: opts.floorSize.max,
      unitCode: "MTK",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cité Plaza Platinium, Immeuble 5",
      addressLocality: "Conakry",
      addressRegion: "Kipé",
      addressCountry: "GN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.5655,
      longitude: -13.6285,
    },
    offers: opts.typologies.map((t) => ({
      "@type": "Offer",
      name: `${opts.name} — ${t.type}`,
      description: `Surface ${t.surface}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "DINAGUI SARL",
        url: SITE_URL,
      },
    })),
  };
}

export function realEstateListingProduct(opts: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    image: `${SITE_URL}${opts.image}`,
    brand: {
      "@type": "Organization",
      name: "DINAGUI SARL",
    },
  };
}
