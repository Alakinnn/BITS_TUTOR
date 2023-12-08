import React from 'react'

function CalendarSummary() {
  return (
    
    
    <div className="calendar-summary">

      {/* Upper info */}
      <div className="upper-info">

        {/* Summart title */}
        <div id="summary-title">
          <h1></h1>
          <p></p>
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
        {/* Summary details */}
        <div id="summary-details"></div>
      </div>
   </div>
  
  )
}

export default CalendarSummary