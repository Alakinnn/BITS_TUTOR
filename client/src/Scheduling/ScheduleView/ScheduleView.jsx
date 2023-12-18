import React from "react";
import "../../css/Scheduling/ScheduleView/ScheduleView.css";
import CalendarSummary from "./CalendarSummary";
import CalendarTimeline from "./CalendarTimeline";

function ScheduleView({ sessionList, role }) {
  return (
    <div className="schedule-view">
      <CalendarSummary />
      <CalendarTimeline 
        sessionList={sessionList}
        role={role}  
      />
    </div>
  );
}

export default ScheduleView;
