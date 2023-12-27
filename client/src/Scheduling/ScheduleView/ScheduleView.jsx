import React from "react";
import "../../css/Scheduling/ScheduleView/ScheduleView.css";
import CalendarSummary from "./CalendarSummary";
import CalendarTimeline from "./CalendarTimeline";

function ScheduleView({ sessionList, role }) {
  const [filterCriteria, setFilterCriteria] = React.useState([
    "active",
    "inactive",
    "completed",
    "cancelled",
  ]);
  return (
    <div className="schedule-view">
      <CalendarSummary
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
      />
      <CalendarTimeline
        sessionList={sessionList}
        role={role}
        filterCriteria={filterCriteria}
      />
    </div>
  );
}

export default ScheduleView;
