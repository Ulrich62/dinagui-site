import type { CollectionConfig } from 'payload'
import { isAdmin, adminOrSelf } from './access'

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
    // Admin: reads all accounts. Editor: only their own
    // (prevents an editor from enumerating admin emails/roles).
    read: ({ req }) => {
      if (!req.user) return false
      if (req.user.role === 'admin') return true
      return { id: { equals: req.user.id } }
    },
    create: isAdmin,
    update: adminOrSelf, // an editor can change their password, not their role
    delete: isAdmin,
  },
  hooks: {
    beforeChange: [
      async ({ req, operation, data }) => {
        // The very first user (initial creation) is forced to admin, otherwise
        // nobody could create further users afterwards (create = admin only).
        if (operation === 'create') {
          const { totalDocs } = await req.payload.count({ collection: 'users' })
          if (totalDocs === 0) data.role = 'admin'
        }
        return data
      },
    ],
  },
  fields: [
    { name: 'name', type: 'text', label: 'Nom' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      label: 'Rôle',
      options: [
        { label: 'Administrateur', value: 'admin' },
        { label: 'Éditeur', value: 'editor' },
      ],
      access: { update: ({ req }) => req.user?.role === 'admin' },
      saveToJWT: true,
    },
  ],
}
