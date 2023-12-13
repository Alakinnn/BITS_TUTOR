import React from 'react'
import '../../../css/Scheduling/ScheduleView/EventBox/Cancelled.css'

function Canceled({event}) {
  return (
    <>
          <div className='cancelled-event-content'>
              <div class = "cancelled-vertical"></div>
              <div className='cancelled-event-description'>
                  <b><h5>{event.event._def.title}</h5></b>
                  <h5>{event.event._def.extendedProps.tutor}</h5>
                  <h6>{event.timeText}</h6>
              </div>
          </div>
    </>
  )
}

export default Canceled