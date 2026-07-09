import type { CollectionConfig } from 'payload'
import { estConnecte, lecturePublique } from './acces'

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: { singular: 'Vidéo', plural: 'Vidéos' },
  admin: {
    group: 'Médias',
    description:
      'Compresser les vidéos avant upload (idéalement < 40 Mo) : le poids = coût de diffusion + temps de chargement pour les visiteurs.',
  },
  access: {
    read: lecturePublique,
    create: estConnecte,
    update: estConnecte,
    delete: estConnecte,
  },
  upload: { mimeTypes: ['video/mp4', 'video/webm'] },
  fields: [
    { name: 'legende', type: 'text', label: 'Légende (optionnel)' },
  ],
}
