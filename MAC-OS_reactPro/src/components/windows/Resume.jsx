import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName, setwindowsState}) => {
  return (
    <MacWindow windowName="resume" setwindowsState={setwindowsState}>
        <div className="resume-window">
            <iframe src="./resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
