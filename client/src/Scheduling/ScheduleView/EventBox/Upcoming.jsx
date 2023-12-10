import React from 'react'
import '../../../css/Scheduling/ScheduleView/EventBox/Upcoming.css'

function Upcoming(event) {
    return (
        <>
          <div className='upcoming-event-content'>
              <div class = "upcoming-vertical"></div>
              <div className='upcoming-event-description'>
                  <b><h5>{event.event.event._def.title}</h5></b>
                  <h5>Binh Nguyen</h5>
                  <h6>{event.event.timeText}</h6>
              </div>
          </div>
        </>
      )
}

export default Upcoming