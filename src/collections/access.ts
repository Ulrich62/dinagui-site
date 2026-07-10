import type { Access } from 'payload'

export const isAuthenticated: Access = ({ req }) => Boolean(req.user)
export const isAdmin: Access = ({ req }) => req.user?.role === 'admin'
export const adminOrSelf: Access = ({ req, id }) =>
  req.user?.role === 'admin' || (Boolean(id) && req.user?.id === id)
export const publicRead: Access = () => true
