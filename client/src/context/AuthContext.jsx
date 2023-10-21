import { createContext, useState } from 'react'
import { registerRequest } from '../api/auth'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])

  const signup = async user => {
    try {
      const res = await registerRequest(user)
      console.log(res.data)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error)
      setErrors(error.response.data)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signup,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
