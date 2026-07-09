import type { Access } from 'payload'

export const estConnecte: Access = ({ req }) => Boolean(req.user)
export const estAdmin: Access = ({ req }) => req.user?.role === 'admin'
export const adminOuSoiMeme: Access = ({ req, id }) =>
  req.user?.role === 'admin' || (Boolean(id) && req.user?.id === id)
export const lecturePublique: Access = () => true
