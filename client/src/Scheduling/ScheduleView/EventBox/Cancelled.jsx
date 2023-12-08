import React from 'react'
import '../../../css/Scheduling/ScheduleView/EventBox/Cancelled.css'

function Canceled() {
  return (
    <>
          <div className='cancelled-event-content'>
              <div class = "cancelled-vertical"></div>
              <div className='cancelled-event-description'>
                  <b><h5>Introduction to BGC</h5></b>
                  <h5>Binh Nguyen</h5>
                  <h6>10:00 - 11:00</h6>
              </div>
          </div>
    </>
  )
}

export default Canceled