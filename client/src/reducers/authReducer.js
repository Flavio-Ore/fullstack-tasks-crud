export const initialAuthState = {
  user: null,
  isAuthenticated: false,
  errors: [],
  loading: true
}
export const AUTH_ACTIONS = {
  CLEAR_ERRORS: 'CLEAR_ERRORS',
  SET_ERRORS: 'SET_ERRORS',
  SIGNUP: 'SIGNUP',
  SIGNIN: 'SIGNIN',
  CHECK_LOGIN: 'CHECK_LOGIN',
  LOGOUT: 'LOGOUT',
  TOOGLE_LOADING: 'TOOGLE_LOADING'
}
export function authReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action

  if (actionType === AUTH_ACTIONS.CLEAR_ERRORS) {
    return {
      ...state,
      errors: []
    }
  }

  if (actionType === AUTH_ACTIONS.SET_ERRORS) {
    console.log('actionPayload :>> ', actionPayload)
    const { errors } = actionPayload
    return {
      ...state,
      errors
    }
  }

  if (actionType === AUTH_ACTIONS.TOOGLE_LOADING) {
    const { loading } = actionPayload
    return {
      ...state,
      loading
    }
  }

  if (
    actionType === AUTH_ACTIONS.SIGNUP ||
    actionType === AUTH_ACTIONS.SIGNIN
  ) {
    const { user, isAuthenticated, errors } = actionPayload

    return {
      ...state,
      user,
      isAuthenticated,
      errors
    }
  }

  if (actionType === AUTH_ACTIONS.CHECK_LOGIN) {
    const { user, isAuthenticated } = actionPayload
    return {
      ...state,
      user,
      isAuthenticated
    }
  }
  if (actionType === AUTH_ACTIONS.LOGOUT) {
    return {
      ...state,
      user: null,
      isAuthenticated: false,
      errors: []
    }
  }
  return state
}
