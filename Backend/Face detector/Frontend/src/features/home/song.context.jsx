import { createContext, useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState({

        "url": "https://ik.imagekit.io/vishallx/cohort2/moodify/songs/Khaamiyan_oUL20iLRC.mp3",
        "posterUrl": "https://ik.imagekit.io/vishallx/cohort2/moodify/posters/Khaamiyan_3pUPQFBfV.jpeg",
        "title": "Khaamiyan",
        "mood": "happy",
    })

    const[loading, setLoading] = useState(false)

    return(
        <SongContext.Provider value = {{loading, setLoading, song, setSong}}>
            {children}
        </SongContext.Provider>
    )

}