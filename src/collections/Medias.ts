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
  fields: [
    { name: 'alt', type: 'text', required: true, label: 'Texte alternatif' },
  ],
}
