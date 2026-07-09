import type { CollectionConfig } from 'payload'
import { estConnecte, lecturePublique } from './acces'

const slugifier = (v: string) =>
  v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const cheminBase = (offre: string) =>
  offre === 'vente'
    ? '/nos-offres/vente-dappartements'
    : '/nos-offres/location-dappartements'

const revalider = async (
  doc: { offre?: string; slug?: string },
  previousDoc?: { offre?: string; slug?: string },
) => {
  try {
    const { revalidatePath } = await import('next/cache')
    const base = cheminBase(doc.offre ?? 'location')
    revalidatePath(base)
    if (doc.slug) revalidatePath(`${base}/${doc.slug}`)
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      revalidatePath(`${cheminBase(previousDoc.offre ?? 'location')}/${previousDoc.slug}`)
    }
  } catch {
    /* hors contexte Next (ex. script de migration) : ignorer */
  }
}

export const Annonces: CollectionConfig = {
  slug: 'annonces',
  labels: { singular: 'Annonce', plural: 'Annonces' },
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'offre', 'type', 'chambres', 'disponible', '_status'],
    group: 'Contenu',
  },
  versions: { drafts: true }, // brouillon / publié
  access: {
    read: lecturePublique, // seules les versions publiées sortent pour un visiteur anonyme
    create: estConnecte,
    update: estConnecte,
    delete: estConnecte,
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc, req }) => {
        if (req.context?.skipRevalidation) return
        void revalider(doc, previousDoc)
      },
    ],
    afterDelete: [({ doc }) => void revalider(doc)],
  },
  fields: [
    { name: 'titre', type: 'text', required: true },
    {
      name: 'titreCourt',
      type: 'text',
      label: 'Titre court (cartes / listes)',
      admin: { description: 'Ex. : « Luxueux meublé · 2 ch »' },
    },
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
          ({ value, data }) => value || (data?.titre ? slugifier(data.titre) : value),
        ],
      },
    },
    {
      name: 'offre',
      type: 'select',
      required: true,
      defaultValue: 'location',
      options: [
        { label: 'Location', value: 'location' },
        { label: 'Vente', value: 'vente' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Meublé', value: 'meuble' },
        { label: 'Non meublé', value: 'non-meuble' },
      ],
    },
    {
      name: 'localisation',
      type: 'text',
      admin: { description: 'Ex. : Plaza Platinium, Kipé' },
    },
    {
      name: 'repere',
      type: 'text',
      label: 'Point de repère (optionnel)',
      admin: { description: 'Ex. : proximité Radisson Blu' },
    },
    { name: 'chambres', type: 'number', required: true, min: 0 },
    { name: 'sallesDeBain', type: 'number', required: true, min: 0, label: 'Salles de bain' },
    {
      name: 'resume',
      type: 'textarea',
      label: 'Résumé (affiché sur la carte)',
      maxLength: 300,
    },
    {
      name: 'equipements',
      type: 'text',
      hasMany: true,
      label: 'Équipements / caractéristiques',
      admin: { description: 'Un élément par ligne (ex. « Cuisine équipée », « Ascenseur »).' },
    },
    { name: 'description', type: 'richText', label: 'Description détaillée (optionnel)' },
    {
      name: 'galerie',
      type: 'upload',
      relationTo: 'medias',
      hasMany: true,
      label: 'Galerie photos',
    },
    { name: 'video', type: 'upload', relationTo: 'videos', label: 'Vidéo (optionnel)' },
    { name: 'prixAffiche', type: 'text', label: 'Prix affiché (optionnel)' },
    {
      name: 'disponible',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'ordre',
      type: 'number',
      admin: { position: 'sidebar', description: 'Tri croissant sur la page.' },
    },
  ],
}
