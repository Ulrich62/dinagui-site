import type { CollectionConfig } from 'payload'
import { isAuthenticated } from './access'
import { featureIconOptions, DEFAULT_FEATURE_ICON } from '../lib/featureIcons'

const slugify = (v: string) =>
  v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// Maps the offer type to its (French, SEO) public URL base.
const urlBase = (offer: string) =>
  offer === 'sale'
    ? '/nos-offres/vente-dappartements'
    : '/nos-offres/location-dappartements'

const revalidate = async (
  doc: { offer?: string; slug?: string },
  previousDoc?: { offer?: string; slug?: string },
) => {
  try {
    const { revalidatePath } = await import('next/cache')
    const base = urlBase(doc.offer ?? 'rent')
    revalidatePath(base)
    if (doc.slug) revalidatePath(`${base}/${doc.slug}`)
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      revalidatePath(`${urlBase(previousDoc.offer ?? 'rent')}/${previousDoc.slug}`)
    }
  } catch {
    /* outside a Next context (e.g. migration script): ignore */
  }
}

export const Listings: CollectionConfig = {
  slug: 'listings',
  labels: { singular: 'Annonce', plural: 'Annonces' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'offer', 'type', 'bedrooms', 'available', '_status'],
    group: 'Contenu',
    hideAPIURL: true,
    // Bouton « Prévisualiser » : ouvre la page de l'annonce en mode brouillon
    // (permet de voir le rendu avant publication).
    preview: (doc) =>
      doc?.slug ? `/next/preview?slug=${encodeURIComponent(String(doc.slug))}` : null,
  },
  versions: { drafts: true }, // draft / published
  access: {
    // Public → published only (also over the raw REST/GraphQL API);
    // authenticated (admin/editor) → everything, drafts included.
    read: ({ req }) => (req.user ? true : { _status: { equals: 'published' } }),
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc, req }) => {
        if (req.context?.skipRevalidation) return
        void revalidate(doc, previousDoc)
      },
    ],
    afterDelete: [({ doc }) => void revalidate(doc)],
  },
  fields: [
    // ---- Sidebar (publishing & ordering) ----
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Généré depuis le titre si laissé vide. Fait partie de l’URL.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => value || (data?.title ? slugify(data.title) : value),
        ],
      },
    },
    {
      name: 'offer',
      type: 'select',
      required: true,
      defaultValue: 'rent',
      label: 'Offre',
      options: [
        { label: 'Location', value: 'rent' },
        { label: 'Vente', value: 'sale' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'available',
      type: 'checkbox',
      defaultValue: true,
      label: 'Disponible',
      admin: { position: 'sidebar', description: 'Décocher pour retirer l’annonce du site.' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre',
      admin: { position: 'sidebar', description: 'Tri croissant sur la page.' },
    },
    // ---- Main content (tabs) ----
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Informations',
          description: 'Le titre, la localisation et les caractéristiques de l’appartement.',
          fields: [
            { name: 'title', type: 'text', required: true, label: 'Titre' },
            {
              name: 'shortTitle',
              type: 'text',
              label: 'Titre court (cartes / listes)',
              admin: { description: 'Ex. : « Luxueux meublé · 2 ch »' },
            },
            {
              name: 'type',
              type: 'select',
              required: true,
              label: 'Type',
              options: [
                { label: 'Meublé', value: 'furnished' },
                { label: 'Non meublé', value: 'unfurnished' },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'bedrooms', type: 'number', required: true, min: 0, label: 'Chambres', admin: { width: '50%' } },
                { name: 'bathrooms', type: 'number', required: true, min: 0, label: 'Salles de bain', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'location',
                  type: 'text',
                  label: 'Localisation',
                  admin: { width: '50%', description: 'Ex. : Plaza Platinium, Kipé' },
                },
                {
                  name: 'landmark',
                  type: 'text',
                  label: 'Point de repère (optionnel)',
                  admin: { width: '50%', description: 'Ex. : proximité Radisson Blu' },
                },
              ],
            },
            {
              name: 'summary',
              type: 'textarea',
              label: 'Résumé (affiché sur la carte)',
              maxLength: 300,
            },
            {
              name: 'features',
              type: 'array',
              label: 'Caractéristiques',
              labels: { singular: 'Caractéristique', plural: 'Caractéristiques' },
              admin: {
                description:
                  'Ajoutez une caractéristique et choisissez une icône pour chacune (icône neutre par défaut).',
                initCollapsed: false,
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'label', type: 'text', required: true, label: 'Texte', admin: { width: '55%' } },
                    {
                      name: 'icon',
                      type: 'select',
                      required: true,
                      defaultValue: DEFAULT_FEATURE_ICON,
                      label: 'Icône',
                      options: featureIconOptions,
                      admin: {
                        width: '45%',
                        components: { Field: '/components/payload/IconPicker#IconPicker' },
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description (page de l’annonce)',
              admin: {
                description: 'Texte affiché dans la section « Description » de la page de l’annonce.',
              },
            },
          ],
        },
        {
          label: 'Photos & vidéo',
          description: 'La galerie de photos et la vidéo de présentation.',
          fields: [
            { name: 'gallery', type: 'upload', relationTo: 'media', hasMany: true, label: 'Galerie photos' },
            { name: 'video', type: 'upload', relationTo: 'videos', label: 'Vidéo (optionnel)' },
          ],
        },
      ],
    },
  ],
}
