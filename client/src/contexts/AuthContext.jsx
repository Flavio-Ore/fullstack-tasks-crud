import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react'
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signRequest = async request => {
    try {
      const res = await request
      setUser(res.data)
      setIsAuthenticated(true)
      setErrors([])
    } catch (error) {
      console.log('[error.response.data.errors] :>> ', [
        error.response.data.errors
      ])
      const errors = error.response.data.errors
      // could be an array of errors or a single
      return Array.isArray(errors) ? setErrors(errors) : setErrors([errors])
    }
  }

  const signup = user => {
    signRequest(registerRequest(user))
  }

  const signin = user => {
    signRequest(loginRequest(user))
  }
  const checkLogin = async () => {
    const cookies = Cookies.get()

    if (!cookies.token) {
      setIsAuthenticated(false)
      setLoading(false)
      return setUser(null)
    }

    try {
      const res = await verifyTokenRequest(cookies.token)
      if (!res.data) {
        setLoading(false)
        setIsAuthenticated(false)
        return
      }

      setIsAuthenticated(true)
      setUser(res.data)
    } catch (error) {
      console.log('error :>> ', error)
      setIsAuthenticated(false)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signup,
        signin,
        errors,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
