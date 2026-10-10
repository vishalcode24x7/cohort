import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:3000" : undefined),
    withCredentials: true
})


export async function getSongs({ mood } = {}) {
    const params = mood ? { mood } : undefined
    const response = await api.get("/api/songs", { params })
    return response.data
}