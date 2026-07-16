import React from 'react'
import Link from 'next/link'

/** Bannière d'accueil du tableau de bord admin, avec CTA « Nouvelle annonce ». */
export function BeforeDashboard() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #1f2d3d 0%, #2b3d52 100%)',
        color: '#fff',
        borderRadius: 12,
        padding: '28px 32px',
        marginBottom: 32,
      }}
    >
      <div style={{ minWidth: 240 }}>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#F88732',
            fontWeight: 700,
          }}
        >
          Espace de gestion DINAGUI
        </p>
        <h2 style={{ margin: '6px 0 4px', fontSize: 24, lineHeight: 1.2, color: '#fff' }}>
          Gérez vos annonces d’appartements
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>
          Création, photos &amp; vidéos, disponibilité et publication — en quelques clics.
        </p>
      </div>
      <Link
        href="/admin/collections/listings/create"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#F88732',
          color: '#fff',
          fontWeight: 600,
          fontSize: 15,
          padding: '12px 22px',
          borderRadius: 999,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        + Nouvelle annonce
      </Link>
    </div>
  )
}
