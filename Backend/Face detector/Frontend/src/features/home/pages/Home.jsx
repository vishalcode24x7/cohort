import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import './Home.scss'

const Home = () => {
  const { loading, songs, mood, error, handleGetSong, selectSong, song } = useSong()

  return (
    <main className="home">
      <FaceExpression onClick={(expression) => handleGetSong({ mood: expression })} />
      <section className="song-list" aria-labelledby="song-list-title">
        <div className="song-list__heading">
          <div>
            <span className="song-list__eyebrow">YOUR MOOD, YOUR MUSIC</span>
            <h2 id="song-list-title">
              {mood ? `Songs for ${mood}` : 'Your playlist'}
            </h2>
          </div>
          {songs.length > 0 && (
            <span className="song-list__count">
              {songs.length} {songs.length === 1 ? 'song' : 'songs'}
            </span>
          )}
        </div>

        {loading ? (
          <p className="song-list__message" role="status">Finding songs for your mood…</p>
        ) : error ? (
          <p className="song-list__message song-list__message--error" role="alert">{error}</p>
        ) : songs.length > 0 ? (
          <div className="song-list__grid">
            {songs.map((matchingSong) => {
              const isSelected = song?._id === matchingSong._id
              return (
                <button
                  className={`song-list__item${isSelected ? ' song-list__item--selected' : ''}`}
                  key={matchingSong._id || matchingSong.url}
                  type="button"
                  onClick={() => selectSong(matchingSong)}
                  aria-pressed={isSelected}
                >
                  <img className="song-list__artwork" src={matchingSong.posterUrl} alt="" />
                  <span className="song-list__details">
                    <span className="song-list__title">{matchingSong.title}</span>
                    <span className="song-list__mood">{matchingSong.mood}</span>
                  </span>
                  <span className="song-list__play" aria-hidden="true">
                    {isSelected ? '♪' : '▶'}
                  </span>
                </button>
              )
            })}
          </div>
        ) : mood ? (
          <p className="song-list__message">No songs found for this mood yet.</p>
        ) : (
          <p className="song-list__message">Detect your expression to find matching songs.</p>
        )}
      </section>
      <Player />
    </main>
  )
}

export default Home
