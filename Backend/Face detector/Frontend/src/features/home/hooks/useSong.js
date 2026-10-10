import { useCallback, useContext } from "react"
import { getSongs } from "../service/song.api"
import { SongContext } from "../song.context"


export const useSong = () => {
    const context = useContext(SongContext)

    const {
        loading,
        setLoading,
        song,
        setSong,
        songs,
        setSongs,
        mood,
        setMood,
        error,
        setError,
    } = context

    async function handleGetSong({ mood: detectedMood }) {
        const requestedMood = detectedMood?.trim().toLowerCase()
        if (!requestedMood) {
            setError("No expression was detected. Please try again.")
            return
        }

        setLoading(true)
        setMood(requestedMood)
        setError("")
        try {
            const data = await getSongs({ mood: requestedMood })
            const matchingSongs = Array.isArray(data.songs) ? data.songs : []
            setSongs(matchingSongs)
            setSong(matchingSongs[0] ?? null)
        } catch {
            setSongs([])
            setSong(null)
            setError("Could not load songs for this mood. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleGetAllSongs = useCallback(async () => {
        setLoading(true)
        setMood("")
        setError("")
        try {
            const data = await getSongs()
            const allSongs = Array.isArray(data.songs) ? data.songs : []
            setSongs(allSongs)
            setSong(allSongs[0] ?? null)
        } catch {
            setSongs([])
            setSong(null)
            setError("Could not load songs. Please try again.")
        } finally {
            setLoading(false)
        }
    }, [setError, setLoading, setMood, setSong, setSongs])

    return {
        loading,
        song,
        songs,
        mood,
        error,
        selectSong: setSong,
        handleGetSong,
        handleGetAllSongs,
    }
}