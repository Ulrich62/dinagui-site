import type { CollectionConfig } from 'payload'
import { isAuthenticated, publicRead } from './access'

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: { singular: 'Vidéo', plural: 'Vidéos' },
  admin: {
    group: 'Médias',
    hideAPIURL: true,
    hidden: ({ user }) => (user as { role?: string } | undefined)?.role !== 'admin',
    description:
      'Compresser les vidéos avant upload (idéalement < 40 Mo) : le poids = coût de diffusion + temps de chargement pour les visiteurs.',
  },
  access: {
    read: publicRead,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  upload: { mimeTypes: ['video/mp4', 'video/webm'] },
  fields: [
    { name: 'caption', type: 'text', label: 'Légende (optionnel)' },
  ],
}
