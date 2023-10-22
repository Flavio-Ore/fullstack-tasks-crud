import { createContext, useState } from 'react'
import { loginRequest, registerRequest } from '../api/auth'

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

      // could be an array of errors or a single error
      return Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data.errors])
    }
  }

  const signin = async user => {
    try {
      const res = await loginRequest(user)
      console.log(res)
    } catch (error) {
      console.log(error)
      // could be an array of errors or a single error
      return Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data.errors])
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signup,
        signin,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
