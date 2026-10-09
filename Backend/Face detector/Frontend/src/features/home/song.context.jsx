import { createContext, useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState(null)
    const [songs, setSongs] = useState([])
    const [mood, setMood] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    return(
        <SongContext.Provider value={{
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
        }}>
            {children}
        </SongContext.Provider>
    )

}