import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})


export async function getSongs({ mood } = {}) {
    const params = mood ? { mood } : undefined
    const response = await api.get("/api/songs", { params })
    return response.data
}