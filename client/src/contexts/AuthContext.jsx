import { createContext } from 'react'
import { useAuthReducer } from '../hooks/useAuthReducer'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const {
    user,
    isAuthenticated,
    signin,
    signup,
    logout,
    errors,
    clearErrors,
    loading
  } = useAuthReducer()

  console.log('user :>> ', user)

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signup,
        signin,
        logout,
        errors,
        clearErrors,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
