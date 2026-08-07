import React, { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const App = () => {

  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify : false,
    cli : false
  })

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github && <Github windowName="github" setwindowsState={setwindowsState} />}
      {windowsState.note && <Note windowName="note" setwindowsState={setwindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setwindowsState={setwindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setwindowsState={setwindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setwindowsState={setwindowsState} />}
    </main>
  )
}

export default App
