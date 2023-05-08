import axios from 'axios'
import { BASE_URL } from './api-paths'

const instance = axios.create({ baseURL: BASE_URL })

instance.interceptors.request.use(
  (config) => {
    if (config.url) {
      const token = window.localStorage.getItem('authToken')
      if (token) {
        const header = config.headers
        header.Authorization = `Bearer ${JSON.parse(token)}`
        header.Accept = 'application/json'
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
      console.log('error', error);
      
      // window.localStorage.removeItem('authToken')
      // window.location.reload()
    }
    return Promise.reject(error)
  }
)

export { instance as api }
