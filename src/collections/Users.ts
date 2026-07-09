import type { CollectionConfig } from 'payload'
import { estAdmin, estConnecte, adminOuSoiMeme } from './acces'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: { singular: 'Utilisateur', plural: 'Utilisateurs' },
  admin: { useAsTitle: 'email', group: 'Administration' },
  access: {
    read: estConnecte,
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
