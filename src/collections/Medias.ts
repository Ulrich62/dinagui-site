import type { CollectionConfig } from 'payload'
import { estConnecte, lecturePublique } from './acces'

export const Medias: CollectionConfig = {
  slug: 'medias',
  labels: { singular: 'Photo', plural: 'Photos' },
  admin: { group: 'Médias' },
  access: {
    read: lecturePublique,
    create: estConnecte,
    update: estConnecte,
    delete: estConnecte,
  },
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'carte', width: 800 },
      { name: 'hero', width: 1920 },
    ],
  },
  hooks: {
    // L'upload ne doit jamais être bloqué : si aucun texte alternatif n'est
    // saisi, on le dérive du nom de fichier (accessibilité minimale garantie).
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
