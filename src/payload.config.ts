import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { fr } from '@payloadcms/translations/languages/fr'
import { en } from '@payloadcms/translations/languages/en'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Videos } from './collections/Videos'
import { Listings } from './collections/Listings'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.dinagui.com',
  admin: {
    user: Users.slug,
    theme: 'light',
    meta: {
      titleSuffix: ' — DINAGUI',
      icons: [{ url: '/images/logo-dinagui-small.avif' }],
    },
    importMap: { baseDir: dirname },
    components: {
      graphics: {
        Logo: '/components/payload/Logo#Logo',
        Icon: '/components/payload/Icon#Icon',
      },
      beforeDashboard: ['/components/payload/BeforeDashboard#BeforeDashboard'],
    },
  },
  i18n: { supportedLanguages: { fr, en }, fallbackLanguage: 'fr' },
  editor: lexicalEditor(),
  collections: [Listings, Media, Videos, Users],
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL || process.env.POSTGRES_URL || '',
    },
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  sharp,
  upload: { limits: { fileSize: 100_000_000 } }, // 100 Mo côté Payload ; la limite serveur Vercel (4,5 Mo) est contournée par clientUploads
  plugins: [
    // Vercel Blob activé uniquement si le token est présent (= prod / preview Vercel).
    // En local sans token : stockage disque Payload par défaut, pour pouvoir développer sans Blob.
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: { media: true, videos: true },
            token: process.env.BLOB_READ_WRITE_TOKEN,
            // Sur Vercel, un upload passant par le serveur est plafonné à 4,5 Mo ;
            // clientUploads envoie le fichier directement du navigateur vers Blob.
            clientUploads: true,
          }),
        ]
      : []),
  ],
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
})
