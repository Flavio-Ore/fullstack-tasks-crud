import axios from 'axios'

const PORT = 2999
const API = `http://localhost:${PORT}/api`

export const registerRequest = user => axios.post(`${API}/register`, user)

export const loginRequest = user => axios.post(`${API}/login`, user)
