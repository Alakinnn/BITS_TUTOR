import React from 'react'
import '../../../css/Scheduling/ScheduleView/EventBox/Completed.css'

function Completed() {
    return (
        <>
          <div className='completed-event-content'>
              <div class = "completed-vertical"></div>
              <div className='completed-event-description'>
                  <b><h5>Introduction to BGC</h5></b>
                  <h5>Binh Nguyen</h5>
                  <h6>10:00 - 11:00</h6>
              </div>
          </div>
        </>
      )
}

export default Completed