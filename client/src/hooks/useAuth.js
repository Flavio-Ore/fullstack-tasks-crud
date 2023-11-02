import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const useAuth = () => {
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return {
    clearErrors: authContext.clearErrors,
    errors: authContext.errors,
    user: authContext.user,
    isAuthenticated: authContext.isAuthenticated,
    signup: authContext.signup,
    signin: authContext.signin,
    logout: authContext.logout,
    profile: authContext.profile,
    loading: authContext.loading
  }
}
