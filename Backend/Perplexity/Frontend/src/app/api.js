import axios from 'axios'

export const API_URL = import.meta.env.VITE_API_URL || (
    import.meta.env.DEV ? 'http://localhost:3000' : window.location.origin
)

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

export default api
