import React from "react";
import "../../css/Scheduling/ScheduleView/CalendarSummary.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { handleCheck } from "./Function/FilterCheck";

function CalendarSummary({ filterCriteria, setFilterCriteria }) {
  return (
    <div className="calendar-summary">
      {/* Upper info */}
      <div className="upper-info">
        {/* Summart title */}
        <div id="summary-title">
          <div className="title">Calendar</div>
        </div>

        {/* Summary filters */}
        <div id="summary-filters">
          {/* Filter checkboxs */}
          <div className="summary-filter-checker">
            <p></p>
            <input
              type="checkbox"
              id="checker"
              className="completed"
              name="completed"
              data-label="completed"
              onChange={(event) => handleCheck({ event, setFilterCriteria })}
              checked={filterCriteria.includes("completed")}
            />
            <label htmlFor="completed">Completed</label>
          </div>

          <div className="summary-filter-checker">
            <p></p>
            <input
              type="checkbox"
              id="checker"
              className="cancelled"
              name="enrolled"
              data-label="cancelled"
              onChange={(event) => handleCheck({ event, setFilterCriteria })}
              checked={filterCriteria.includes("cancelled")}
            />
            <label htmlFor="enrolled">Cancelled</label>
          </div>

          <div className="summary-filter-checker">
            <p></p>
            <input
              type="checkbox"
              id="checker"
              className="upcoming"
              name="upcoming"
              data-label="upcoming"
              onChange={(event) => handleCheck({ event, setFilterCriteria })}
              checked={filterCriteria.includes("active" || "inactive")}
            />
            <label htmlFor="upcomming">Upcoming</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSummary;
