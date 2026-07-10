import type { CollectionConfig } from 'payload'
import { isAuthenticated, publicRead } from './access'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Photo', plural: 'Photos' },
  admin: {
    group: 'Médias',
    hideAPIURL: true,
    // Hidden from the nav for editors (they add photos from the listing).
    hidden: ({ user }) => (user as { role?: string } | undefined)?.role !== 'admin',
  },
  access: {
    read: publicRead,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'card', width: 800 },
      { name: 'hero', width: 1920 },
    ],
  },
  hooks: {
    // An upload must never be blocked: if no alt text is provided, derive it
    // from the filename (guarantees minimal accessibility).
    beforeChange: [
      ({ data }) => {
        if (data && !data.alt) {
          const base = typeof data.filename === 'string'
            ? data.filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim()
            : ''
          data.alt = base || 'Photo DINAGUI'
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texte alternatif',
      admin: {
        description:
          'Description de l’image (accessibilité/SEO). Rempli automatiquement depuis le nom du fichier si laissé vide.',
      },
    },
  ],
}
