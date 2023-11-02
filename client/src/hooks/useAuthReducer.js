import Cookies from 'js-cookie'
import { useEffect, useReducer } from 'react'
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'
import {
  AUTH_ACTIONS,
  authReducer,
  initialAuthState
} from '../reducers/authReducer'

export function useAuthReducer () {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)

  const clearErrors = () => dispatch({ type: AUTH_ACTIONS.CLEAR_ERRORS })

  const signRequest = async (request, signStatus) => {
    try {
      const res = await request
      return dispatch({
        type: signStatus,
        payload: {
          user: res.data,
          isAuthenticated: true,
          errors: []
        }
      })
    } catch (error) {
      console.log('[error.response.data.errors] :>> ', [
        error.response.data.errors
      ])
      console.log('error signRequest :>> ', error)
      const errors = error.response.data.errors || error.response.data
      // could be an array of errors or a single
      return dispatch({
        type: AUTH_ACTIONS.SET_ERRORS,
        payload: {
          errors: Array.isArray(errors) ? errors : [errors]
        }
      })
    }
  }

  const signup = user => {
    signRequest(registerRequest(user), AUTH_ACTIONS.SIGNUP)
  }

  const signin = user => {
    signRequest(loginRequest(user), AUTH_ACTIONS.SIGNIN)
  }
  const checkLogin = async () => {
    const cookies = Cookies.get()

    if (!cookies.token) {
      dispatch({
        type: AUTH_ACTIONS.TOOGLE_LOADING,
        payload: { loading: false }
      })
      return dispatch({
        type: AUTH_ACTIONS.CHECK_LOGIN,
        payload: {
          user: null,
          isAuthenticated: false
        }
      })
    }

    try {
      const res = await verifyTokenRequest(cookies.token)
      if (!res.data) {
        dispatch({
          type: AUTH_ACTIONS.TOOGLE_LOADING,
          payload: { loading: false }
        })
        dispatch({
          type: AUTH_ACTIONS.CHECK_LOGIN,
          payload: {
            user: null,
            isAuthenticated: false
          }
        })
        return
      }

      return dispatch({
        type: AUTH_ACTIONS.CHECK_LOGIN,
        payload: {
          user: res.data,
          isAuthenticated: true
        }
      })
    } catch (error) {
      console.log('error :>> ', error)
      dispatch({
        type: AUTH_ACTIONS.CHECK_LOGIN,
        payload: {
          user: null,
          isAuthenticated: false
        }
      })
    } finally {
      dispatch({
        type: AUTH_ACTIONS.TOOGLE_LOADING,
        payload: {
          loading: false
        }
      })
    }
  }
  const logout = () => {
    Cookies.remove('token')
    dispatch({
      type: AUTH_ACTIONS.LOGOUT
    })
  }
  useEffect(() => {
    checkLogin()
  }, [])

  return {
    user: authState.user,
    isAuthenticated: authState.isAuthenticated,
    errors: authState.errors,
    loading: authState.loading,
    signin,
    signup,
    logout,
    clearErrors
  }
}
