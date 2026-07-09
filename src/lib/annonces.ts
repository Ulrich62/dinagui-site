import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Annonce, Media, Video } from "@/payload-types";
import type { Offer } from "@/lib/offer";
import { EQUIPEMENT_ICONE_DEFAUT } from "@/lib/equipementIcons";

type Offre = "location" | "vente";

/** Résout l'URL d'un média (photo/vidéo) qu'il soit peuplé (depth>=1) ou non. */
function mediaUrl(m: number | Media | Video | null | undefined): string | undefined {
  if (!m || typeof m === "number") return undefined;
  return m.url ?? undefined;
}

/** Mappe un document Payload « annonce » vers la forme Offer consommée par le front. */
function toOffer(a: Annonce): Offer {
  const photos = Array.isArray(a.galerie)
    ? a.galerie.map(mediaUrl).filter((u): u is string => Boolean(u))
    : [];

  const equipements = Array.isArray(a.equipements)
    ? a.equipements
        .filter((e) => e && e.label)
        .map((e) => ({ label: e.label as string, icone: e.icone ?? EQUIPEMENT_ICONE_DEFAUT }))
    : [];

  return {
    slug: a.slug ?? "",
    title: a.titre,
    shortTitle: a.titreCourt ?? a.titre,
    furnished: a.type === "meuble",
    bedrooms: a.chambres,
    bathrooms: a.sallesDeBain,
    location: a.localisation ?? "",
    landmark: a.repere ?? undefined,
    summary: a.resume ?? "",
    description: a.description ?? undefined,
    equipements,
    photos,
    video: mediaUrl(a.video),
  };
}

/** Toutes les annonces publiées et disponibles d'une offre, triées par `ordre`. */
export async function getOffers(offre: Offre): Promise<Offer[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "annonces",
    draft: false,
    where: {
      and: [
        { offre: { equals: offre } },
        { disponible: { equals: true } },
        { _status: { equals: "published" } },
      ],
    },
    sort: "ordre",
    depth: 1,
    limit: 100,
  });
  return docs.map(toOffer);
}

/** Slugs des annonces publiées d'une offre — pour generateStaticParams. */
export async function getOfferSlugs(offre: Offre): Promise<string[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "annonces",
    draft: false,
    where: {
      and: [{ offre: { equals: offre } }, { _status: { equals: "published" } }],
    },
    depth: 0,
    limit: 200,
  });
  return docs.map((d) => d.slug).filter((s): s is string => Boolean(s));
}

/** Une annonce publiée par slug, ou undefined. */
export async function getOfferBySlug(
  offre: Offre,
  slug: string,
): Promise<Offer | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "annonces",
    draft: false,
    where: {
      and: [
        { offre: { equals: offre } },
        { slug: { equals: slug } },
        { _status: { equals: "published" } },
      ],
    },
    depth: 1,
    limit: 1,
  });
  return docs[0] ? toOffer(docs[0]) : undefined;
}
