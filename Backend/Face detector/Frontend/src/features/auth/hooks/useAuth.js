import {login, register, getMe, logout} from '../services/auth.api'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../auth.context'



export const useAuth = () => {
    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading} = context

    async function handleRegister({username, email, password}) {
        setLoading(true)
        const data = await register({username, email, password})
        setUser(data.user)
        setLoading(false)
    }

    async function handleLogin({username, email, password}) {
        setLoading(true)
        const data = await login({username, email, password})
        setUser(data.user)
        setLoading(false)
    }

    async function handleGetMe() {
        setLoading(true)
        try {
            const data = await getMe()
            setUser(data.user)
        } catch (error) {
            if (error.response?.status === 401) {
                setUser(null)
                return
            }

            throw error
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        setLoading(true)
        const data = await logout()
        setUser(null)
        setLoading(false)
    }

    useEffect(() => {
        handleGetMe().catch((error) => {
            console.error("Failed to check the current user", error)
        })
    }, [])

    return({
        user, loading, handleRegister, handleLogin, handleLogout, handleGetMe
    })
}