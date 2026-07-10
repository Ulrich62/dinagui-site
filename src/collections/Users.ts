import type { CollectionConfig } from 'payload'
import { estAdmin, adminOuSoiMeme } from './acces'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: { singular: 'Utilisateur', plural: 'Utilisateurs' },
  admin: {
    useAsTitle: 'email',
    group: 'Administration',
    hideAPIURL: true,
    hidden: ({ user }) => (user as { role?: string } | undefined)?.role !== 'admin',
  },
  access: {
    // Admin : voit tous les comptes. Éditeur : ne voit que le sien
    // (évite qu'un éditeur énumère les emails/rôles des administrateurs).
    read: ({ req }) => {
      if (!req.user) return false
      if (req.user.role === 'admin') return true
      return { id: { equals: req.user.id } }
    },
    create: estAdmin,
    update: adminOuSoiMeme, // l'éditeur peut changer son mot de passe, pas son rôle
    delete: estAdmin,
  },
  hooks: {
    beforeChange: [
      async ({ req, operation, data }) => {
        // Le tout premier utilisateur (création initiale) est forcé admin,
        // sinon personne ne pourrait ensuite créer d'utilisateurs (create = admin only).
        if (operation === 'create') {
          const { totalDocs } = await req.payload.count({ collection: 'users' })
          if (totalDocs === 0) data.role = 'admin'
        }
        return data
      },
    ],
  },
  fields: [
    { name: 'nom', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editeur',
      options: [
        { label: 'Administrateur', value: 'admin' },
        { label: 'Éditeur', value: 'editeur' },
      ],
      access: { update: ({ req }) => req.user?.role === 'admin' },
      saveToJWT: true,
    },
  ],
}
