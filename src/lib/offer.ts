/** Forme d'une annonce côté front (mappée depuis Payload par src/lib/annonces.ts). */
export type Equipement = { label: string; icone: string };

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
  equipements: Equipement[];
  photos: string[];
  video?: string;
};

export function getOfferCover(o: Offer): string | undefined {
  return o.photos[0];
}
