import React from 'react'

export default function EndSession({joinSessionFunction, endSessionFunction}) {
  return (
    <div className="buttons">
    <button className="joinMeeting blueButton" onClick={joinSessionFunction}>Join Meeting</button>
    <button className="endSession" onClick={endSessionFunction}>End Session</button>
  </div>
  )
}
