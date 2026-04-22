export type RentalOffer = {
  slug: string;
  title: string;
  shortTitle: string;
  furnished: boolean;
  bedrooms: number;
  bathrooms: number;
  location: string;
  landmark?: string;
  summary: string;
  features: string[];
  photos: string[];
  video?: string;
};

const SHARED_FEATURES = [
  "Accès sécurisé",
  "Parking disponible",
  "Électricité 24h/24 (groupe électrogène + EDG)",
  "Deux ascenseurs rapides et fiables",
];

const COMMON_LOCATION = "Plaza Platinium, Kipé";
const COMMON_LANDMARK = "proximité Radisson Blu";

const photosLuxueuxA = Array.from(
  { length: 15 },
  (_, i) =>
    `/images/rentals/luxueux-meuble-2ch-a/photo-${String(i + 1).padStart(2, "0")}.jpg`,
);
const photosNonMeubleA = Array.from(
  { length: 10 },
  (_, i) =>
    `/images/rentals/non-meuble-2ch-a/photo-${String(i + 1).padStart(2, "0")}.jpg`,
);

export const rentalOffers: RentalOffer[] = [
  {
    slug: "luxueux-meuble-2ch-a",
    title: "Appartement luxueux meublé — 2 chambres",
    shortTitle: "Luxueux meublé · 2 ch",
    furnished: true,
    bedrooms: 2,
    bathrooms: 1,
    location: COMMON_LOCATION,
    landmark: COMMON_LANDMARK,
    summary:
      "Appartement luxueux entièrement meublé avec cuisine équipée et machine à laver.",
    features: [
      "2 chambres spacieuses",
      "Salle de bain avec eau chaude",
      "Cuisine entièrement équipée avec frigo",
      "Machine à laver",
      ...SHARED_FEATURES,
    ],
    photos: photosLuxueuxA,
  },
  {
    slug: "luxueux-meuble-2ch-b",
    title: "Appartement luxueux meublé — 2 chambres (2 SDB)",
    shortTitle: "Luxueux meublé · 2 ch · 2 SDB",
    furnished: true,
    bedrooms: 2,
    bathrooms: 2,
    location: COMMON_LOCATION,
    landmark: COMMON_LANDMARK,
    summary:
      "Variante avec deux salles de bain privatives, idéale pour colocation ou famille.",
    features: [
      "2 chambres spacieuses",
      "2 salles de bain avec eau chaude",
      "Cuisine entièrement équipée avec frigo",
      "Machine à laver",
      ...SHARED_FEATURES,
    ],
    photos: [],
    video: "/images/rentals/luxueux-meuble-2ch-b/video.mp4",
  },
  {
    slug: "non-meuble-2ch-a",
    title: "Appartement non meublé — 2 chambres",
    shortTitle: "Non meublé · 2 ch",
    furnished: false,
    bedrooms: 2,
    bathrooms: 2,
    location: COMMON_LOCATION,
    landmark: COMMON_LANDMARK,
    summary:
      "Appartement spacieux non meublé, prêt à accueillir votre propre mobilier.",
    features: [
      "2 chambres",
      "2 salles de bain avec eau chaude",
      ...SHARED_FEATURES,
    ],
    photos: photosNonMeubleA,
  },
  {
    slug: "non-meuble-2ch-b",
    title: "Appartement non meublé — 2 chambres (variante)",
    shortTitle: "Non meublé · 2 ch · variante",
    furnished: false,
    bedrooms: 2,
    bathrooms: 2,
    location: COMMON_LOCATION,
    landmark: COMMON_LANDMARK,
    summary:
      "Seconde variante d'appartement non meublé de 2 chambres, prêt à personnaliser.",
    features: [
      "2 chambres",
      "2 salles de bain avec eau chaude",
      ...SHARED_FEATURES,
    ],
    photos: [],
    video: "/images/rentals/non-meuble-2ch-b/video.mp4",
  },
  {
    slug: "non-meuble-3ch",
    title: "Appartement non meublé — 3 chambres",
    shortTitle: "Non meublé · 3 ch",
    furnished: false,
    bedrooms: 3,
    bathrooms: 2,
    location: COMMON_LOCATION,
    landmark: COMMON_LANDMARK,
    summary:
      "Grand format non meublé — parfait pour les familles recherchant de l'espace.",
    features: [
      "3 chambres",
      "2 salles de bain avec eau chaude",
      ...SHARED_FEATURES,
    ],
    photos: [],
    video: "/images/rentals/non-meuble-3ch/video.mp4",
  },
  {
    slug: "meuble-3ch",
    title: "Appartement meublé — 3 chambres",
    shortTitle: "Meublé · 3 ch",
    furnished: true,
    bedrooms: 3,
    bathrooms: 2,
    location: COMMON_LOCATION,
    landmark: COMMON_LANDMARK,
    summary:
      "Appartement familial meublé, clé en main, idéal pour séjours prolongés.",
    features: [
      "3 chambres meublées",
      "2 salles de bain avec eau chaude",
      ...SHARED_FEATURES,
    ],
    photos: [],
    video: "/images/rentals/meuble-3ch/video.mp4",
  },
];

export function getRentalBySlug(slug: string): RentalOffer | undefined {
  return rentalOffers.find((o) => o.slug === slug);
}

export function getRentalCover(offer: RentalOffer): string | undefined {
  return offer.photos[0];
}
