/**
 * Migration one-shot : importe les annonces statiques de `src/lib/rentals.ts`
 * (+ photos et vidéos de `public/images/rentals/`) dans Payload.
 *
 * Local  : `DATABASE_URL=... PAYLOAD_SECRET=... npx payload run scripts/migrer-annonces.ts`
 * Prod   : mêmes variables pointant vers Neon + BLOB_READ_WRITE_TOKEN, une seule fois.
 *
 * Idempotence : on saute une annonce dont le slug existe déjà (relançable sans doublon).
 */
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { rentalOffers } from '../src/lib/rentals'
import { devinerIconeKey } from '../src/lib/equipementIcons'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(dirname, '../public')
const toFilePath = (webPath: string) => path.join(publicDir, webPath)

const run = async () => {
  const payload = await getPayload({ config })

  for (const a of rentalOffers) {
    const existant = await payload.find({
      collection: 'annonces',
      where: { slug: { equals: a.slug } },
      limit: 1,
    })
    if (existant.docs.length > 0) {
      console.log(`↷ ${a.slug} — déjà présent, ignoré`)
      continue
    }

    const galerie: number[] = []
    for (const photo of a.photos) {
      const media = await payload.create({
        collection: 'medias',
        filePath: toFilePath(photo),
        data: { alt: a.title },
      })
      galerie.push(media.id as number)
    }

    let video: number | undefined
    if (a.video) {
      const v = await payload.create({
        collection: 'videos',
        filePath: toFilePath(a.video),
        data: { legende: a.title },
      })
      video = v.id as number
    }

    await payload.create({
      collection: 'annonces',
      context: { skipRevalidation: true },
      data: {
        titre: a.title,
        titreCourt: a.shortTitle,
        slug: a.slug,
        offre: 'location',
        type: a.furnished ? 'meuble' : 'non-meuble',
        localisation: a.location,
        repere: a.landmark,
        chambres: a.bedrooms,
        sallesDeBain: a.bathrooms,
        resume: a.summary,
        equipements: a.features.map((f) => ({ label: f, icone: devinerIconeKey(f) })),
        galerie,
        video,
        disponible: true,
        _status: 'published',
      },
    })
    console.log(`✔ ${a.slug} — ${galerie.length} photo(s)${video ? ' + vidéo' : ''}`)
  }

  console.log('Migration terminée.')
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
