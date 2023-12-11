import React from 'react'
import '../../../css/Scheduling/ScheduleView/EventBox/Completed.css'

function Completed({event}) {
    return (
        <>
          <div className='completed-event-content'>
              <div class = "completed-vertical"></div>
              <div className='completed-event-description'>
                  <b><h5>{event.event._def.title}</h5></b>
                  <h5>{event.event._def.extendedProps.tutor}</h5>
                  <h6>{event.timeText}</h6>
              </div>
          </div>
        </>
      )
}

export default Completed