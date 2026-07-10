/** Front-facing shape of a listing (mapped from Payload by src/lib/listings.ts). */
export type Feature = { label: string; icon: string };

export type Offer = {
  slug: string;
  title: string;
  shortTitle: string;
  furnished: boolean;
  bedrooms: number;
  bathrooms: number;
  location: string;
  landmark?: string;
  summary: string;
  description?: string;
  features: Feature[];
  photos: string[];
  video?: string;
};

export function getOfferCover(o: Offer): string | undefined {
  return o.photos[0];
}
