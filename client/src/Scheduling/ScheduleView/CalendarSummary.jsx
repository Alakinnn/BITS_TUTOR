import React from 'react'
import '../../css/Scheduling/ScheduleView/CalendarSummary.css'

function CalendarSummary() {
  return (
    
    
    <div className="calendar-summary">
      {/* Upper info */}
      <div className="upper-info">

        {/* Summart title */}
        <div id="summary-title">
          <div className="title">Calendar</div>
          <p className="content">12 Total Enrolled in January</p>
        </div>

        {/* Summary filters */}
        <div id="summary-filters">

            {/* Filter checkboxs */}
            <div className="summary-filter-checker">
                <p></p>
                <input type="checkbox" id="checker" name="completed" checked />
                <label for="completed">Completed</label>
            </div>

            <div className="summary-filter-checker">
                <p></p>
                <input type="checkbox" id="checker" name="enrolled" checked />
                <label for="enrolled">Enroll</label>
            </div>

            <div className="summary-filter-checker">
                <p></p>
                <input type="checkbox" id="checker" name="upcomming" checked />
                <label for="upcomming">Upcomming</label>
            </div>
        </div>
      </div>
      {/* Summary details */}
      <div id="summary-details">
          <p className="h">18 - 24 December, 2023</p>
      </div>
   </div>
  
  )
}

export default CalendarSummary