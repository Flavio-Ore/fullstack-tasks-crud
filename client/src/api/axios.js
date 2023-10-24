import axios from 'axios'

const BACKEND_PORT = '3001'
const API = `http://localhost:${BACKEND_PORT}/api`

const instance = axios.create({
  baseURL: API,
  withCredentials: true
})

export default instance
