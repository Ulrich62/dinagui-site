import React from 'react'

/** Logo DINAGUI sur l'écran de connexion de l'admin. */
export function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-dinagui.avif"
      alt="DINAGUI SARL"
      style={{ height: 56, width: 'auto', maxWidth: '100%' }}
    />
  )
}
