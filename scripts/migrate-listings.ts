/**
 * One-shot migration: imports the static listings from `src/lib/rentals.ts`
 * (+ photos and videos from `public/images/rentals/`) into Payload.
 *
 * Local: `DATABASE_URL=... PAYLOAD_SECRET=... npx tsx scripts/migrate-listings.ts`
 * Prod : same variables pointing at Neon + BLOB_READ_WRITE_TOKEN, once.
 *
 * Idempotent: a listing whose slug already exists is skipped (safe to re-run).
 */
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { rentalOffers } from '../src/lib/rentals'
import { guessIconKey } from '../src/lib/featureIcons'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(dirname, '../public')
const toFilePath = (webPath: string) => path.join(publicDir, webPath)

const run = async () => {
  const payload = await getPayload({ config })

  for (const a of rentalOffers) {
    const existing = await payload.find({
      collection: 'listings',
      where: { slug: { equals: a.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`↷ ${a.slug} — already present, skipped`)
      continue
    }

    const gallery: number[] = []
    for (const photo of a.photos) {
      const media = await payload.create({
        collection: 'media',
        filePath: toFilePath(photo),
        data: { alt: a.title },
      })
      gallery.push(media.id as number)
    }

    let video: number | undefined
    if (a.video) {
      const v = await payload.create({
        collection: 'videos',
        filePath: toFilePath(a.video),
        data: { caption: a.title },
      })
      video = v.id as number
    }

    await payload.create({
      collection: 'listings',
      context: { skipRevalidation: true },
      data: {
        title: a.title,
        shortTitle: a.shortTitle,
        slug: a.slug,
        offer: 'rent',
        type: a.furnished ? 'furnished' : 'unfurnished',
        location: a.location,
        landmark: a.landmark,
        bedrooms: a.bedrooms,
        bathrooms: a.bathrooms,
        summary: a.summary,
        features: a.features.map((f) => ({ label: f, icon: guessIconKey(f) })),
        gallery,
        video,
        available: true,
        _status: 'published',
      },
    })
    console.log(`✔ ${a.slug} — ${gallery.length} photo(s)${video ? ' + video' : ''}`)
  }

  console.log('Migration complete.')
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
