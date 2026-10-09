import { useContext, useEffect, useRef, useState } from 'react'
import { SongContext } from '../song.context'
import { useSong } from '../hooks/useSong'
import './Player.scss'

const PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5, 2]

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00'

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}

const Player = () => {
    const audioRef = useRef(null)
    const { song } = useSong()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playbackRate, setPlaybackRate] = useState(1)
    const [volume, setVolume] = useState(1)
    const previousVolumeRef = useRef(1)
    const [error, setError] = useState('')

    useEffect(() => {
      const audio = audioRef.current
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
      setIsPlaying(false)
      setCurrentTime(0)
      setDuration(0)
      setError('')
    }, [song?.url])

    const seekBy = (seconds) => {
        const audio = audioRef.current
        if (!audio || !Number.isFinite(audio.duration)) return

        audio.currentTime = Math.min(
            audio.duration,
            Math.max(0, audio.currentTime + seconds),
        )
        setCurrentTime(audio.currentTime)
    }

    const togglePlayback = async () => {
        const audio = audioRef.current
        if (!audio) return

        setError('')
        if (audio.paused) {
            try {
                await audio.play()
            } catch {
                setError('Playback could not be started. Please try again.')
            }
        } else {
            audio.pause()
        }
    }

    const handleRateChange = (event) => {
        const rate = Number(event.target.value)
        setPlaybackRate(rate)
        if (audioRef.current) audioRef.current.playbackRate = rate
    }

    const handleVolumeChange = (event) => {
        const nextVolume = Number(event.target.value)
        setVolume(nextVolume)
        if (nextVolume > 0) previousVolumeRef.current = nextVolume
        if (audioRef.current) audioRef.current.volume = nextVolume
    }

    const toggleMute = () => {
        const nextVolume = volume > 0 ? 0 : previousVolumeRef.current || 1
        if (volume > 0) previousVolumeRef.current = volume
        setVolume(nextVolume)
        if (audioRef.current) audioRef.current.volume = nextVolume
    }

    return (
        <section className="player" aria-label="Audio player">
            <audio
                ref={audioRef}
                src={song?.url}
                preload="metadata"
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                onDurationChange={(event) => setDuration(event.currentTarget.duration)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onError={() => {
                    setIsPlaying(false)
                    setError('This track could not be loaded.')
                }}
            />

            <div className="player__track">
                {song?.posterUrl ? (
                    <img className="player__cover" src={song.posterUrl} alt="" />
                ) : (
                    <div className="player__cover player__cover--placeholder" aria-hidden="true">
                        ♪
                    </div>
                )}
                <div className="player__details">
                    <h2 className="player__title">{song?.title || 'Choose a track'}</h2>
                    <p className="player__mood">{song?.mood || 'Ready to play'}</p>
                </div>
            </div>

            <div className="player__main">
                <div className="player__controls" aria-label="Playback controls">
                    <button
                        className="player__skip"
                        type="button"
                        onClick={() => seekBy(-5)}
                        aria-label="Back 5 seconds"
                        title="Back 5 seconds"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 11a9 9 0 1 1 2.6 6.4M3 4v7h7" />
                            <path d="M12 8v8m0-8-2 2m2-2 2 2" />
                        </svg>
                        <span>5</span>
                    </button>
                    <button
                        className="player__play"
                        type="button"
                        onClick={togglePlayback}
                        disabled={!song?.url}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        title={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9 6v12m6-12v12" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="m9 6 10 6-10 6z" />
                            </svg>
                        )}
                    </button>
                    <button
                        className="player__skip"
                        type="button"
                        onClick={() => seekBy(5)}
                        aria-label="Forward 5 seconds"
                        title="Forward 5 seconds"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M21 11a9 9 0 1 0-2.6 6.4M21 4v7h-7" />
                            <path d="M12 8v8m0-8-2 2m2-2 2 2" />
                        </svg>
                        <span>5</span>
                    </button>
                </div>

                <div className="player__timeline">
                    <span className="player__time">{formatTime(currentTime)}</span>
                    <input
                        className="player__seek"
                        type="range"
                        min="0"
                        max={duration || 0}
                        step="0.1"
                        value={Math.min(currentTime, duration || 0)}
                        onChange={(event) => {
                            const time = Number(event.target.value)
                            if (audioRef.current) audioRef.current.currentTime = time
                            setCurrentTime(time)
                        }}
                        aria-label="Seek through track"
                        style={{ '--progress': `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        disabled={!duration}
                    />
                    <span className="player__time">{formatTime(duration)}</span>
                </div>
            </div>

            <div className="player__options">
                <label className="player__speed">
                    <span>Speed</span>
                    <select value={playbackRate} onChange={handleRateChange} aria-label="Playback speed">
                        {PLAYBACK_RATES.map((rate) => (
                            <option key={rate} value={rate}>
                                {rate}x
                            </option>
                        ))}
                    </select>
                </label>
                <div className="player__volume">
                    <button
                        className="player__volume-button"
                        type="button"
                        onClick={toggleMute}
                        aria-label={volume === 0 ? 'Unmute' : 'Mute'}
                        title={volume === 0 ? 'Unmute' : 'Mute'}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            {volume === 0 ? (
                                <>
                                    <path d="M11 5 6 9H3v6h3l5 4z" />
                                    <path d="m16 9 5 6m0-6-5 6" />
                                </>
                            ) : (
                                <>
                                    <path d="M11 5 6 9H3v6h3l5 4z" />
                                    {volume < 0.5 ? (
                                        <path d="M15 9a5 5 0 0 1 0 6" />
                                    ) : (
                                        <>
                                            <path d="M15 9a5 5 0 0 1 0 6" />
                                            <path d="M18 6a9 9 0 0 1 0 12" />
                                        </>
                                    )}
                                </>
                            )}
                        </svg>
                    </button>
                    <input
                        className="player__volume-slider"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        aria-label="Volume"
                        style={{ '--volume': `${volume * 100}%` }}
                    />
                </div>
            </div>

            {error && <p className="player__error" role="status">{error}</p>}
        </section>
    )
}

export default Player
