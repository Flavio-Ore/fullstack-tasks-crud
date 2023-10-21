import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return {
    user: context.user,
    isAuthenticated: context.isAuthenticated,
    signup: context.signup,
    errors: context.errors
  }
}