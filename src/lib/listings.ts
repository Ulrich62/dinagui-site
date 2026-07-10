import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Listing, Media, Video } from "@/payload-types";
import type { Offer } from "@/lib/offer";
import { DEFAULT_FEATURE_ICON } from "@/lib/featureIcons";

type OfferType = "rent" | "sale";

/** Resolves a media (photo/video) URL whether it is populated (depth>=1) or not. */
function mediaUrl(m: number | Media | Video | null | undefined): string | undefined {
  if (!m || typeof m === "number") return undefined;
  return m.url ?? undefined;
}

/** Maps a Payload `listing` document to the front-facing Offer shape. */
function toOffer(a: Listing): Offer {
  const photos = Array.isArray(a.gallery)
    ? a.gallery.map(mediaUrl).filter((u): u is string => Boolean(u))
    : [];

  const features = Array.isArray(a.features)
    ? a.features
        .filter((f) => f && f.label)
        .map((f) => ({ label: f.label as string, icon: f.icon ?? DEFAULT_FEATURE_ICON }))
    : [];

  return {
    slug: a.slug ?? "",
    title: a.title,
    shortTitle: a.shortTitle ?? a.title,
    furnished: a.type === "furnished",
    bedrooms: a.bedrooms,
    bathrooms: a.bathrooms,
    location: a.location ?? "",
    landmark: a.landmark ?? undefined,
    summary: a.summary ?? "",
    description: a.description ?? undefined,
    features,
    photos,
    video: mediaUrl(a.video),
  };
}

/** All published & available listings for an offer type, sorted by `order`. */
export async function getListings(offer: OfferType): Promise<Offer[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "listings",
    draft: false,
    where: {
      and: [
        { offer: { equals: offer } },
        { available: { equals: true } },
        { _status: { equals: "published" } },
      ],
    },
    sort: "order",
    depth: 1,
    limit: 100,
  });
  return docs.map(toOffer);
}

/** Slugs of published listings for an offer type — for generateStaticParams. */
export async function getListingSlugs(offer: OfferType): Promise<string[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "listings",
    draft: false,
    where: {
      and: [{ offer: { equals: offer } }, { _status: { equals: "published" } }],
    },
    depth: 0,
    limit: 200,
  });
  return docs.map((d) => d.slug).filter((s): s is string => Boolean(s));
}

/** A single published listing by slug, or undefined. */
export async function getListingBySlug(
  offer: OfferType,
  slug: string,
): Promise<Offer | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "listings",
    draft: false,
    where: {
      and: [
        { offer: { equals: offer } },
        { slug: { equals: slug } },
        { _status: { equals: "published" } },
      ],
    },
    depth: 1,
    limit: 1,
  });
  return docs[0] ? toOffer(docs[0]) : undefined;
}

/**
 * A single listing by slug for the admin PREVIEW (draft mode) — returns the
 * latest version (draft or published), regardless of status/availability.
 */
export async function getListingForPreview(
  slug: string,
): Promise<Offer | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "listings",
    draft: true,
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ? toOffer(docs[0]) : undefined;
}
