import React from 'react'
import '../css/TestInterface.css'

function TestInterface() {
  return (
    <div className='meetingSession'>
      <div className='meetingInfo'>
        <div className='line title'>
          <img id='meetingInfoIcon' src='.../public/images/address.png'></img>
          <h3>Meeting 1232</h3>
        </div>
        <div className='line time'>
          <img id='meetingInfoIcon' src='.../public/images/address.png'></img>
          <h3>12:00 pm 12/12/2023</h3>
        </div>
        <div className='line description'>
          <img id='meetingInfoIcon' src='.../public/images/address.png'></img>
          <h3>Learn React</h3>
        </div>
        <div className='line accessToURLs'>
          <img id='meetingInfoIcon' src='.../public/images/address.png'></img>
          <div className='buttons'>
            <input
                type="url"
                placeholder="Live Share URL"
            />
            <button id='blueButton'>Start Session</button>
          </div>
        </div>
      </div>
      <div className='meetingParticipants'>
        <h3>Participants:</h3>
        <div className='participant'>
          <img id='meetingInfoIcon' src='.../public/images/address.png'></img>
          <h3>Participant 1</h3>
        </div>
      </div>
    </div>
  )
}

export default TestInterface