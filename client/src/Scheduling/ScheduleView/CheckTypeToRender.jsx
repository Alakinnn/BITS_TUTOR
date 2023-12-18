import React from "react";
import Upcoming from "./EventBox/Upcoming";
import Completed from "./EventBox/Completed";
import Cancelled from "./EventBox/Cancelled";
import { Link } from "react-router-dom";

const role = "tutor";

function CheckTypeToRender(arg) {
  if (arg.event.extendedProps.type === "inactive") {
    return (
      <>
        {role == "tutor" ? (
          <Link
            to={`/tutorMeetingSession/${arg.event.extendedProps.sessionId}`}
          >
            {<Upcoming event={arg} />}
          </Link>
        ) : (
          <Link
            to={`/studentMeetingSession/${arg.event.extendedProps.sessionId}`}
          >
            {<Upcoming event={arg} />}
          </Link>
        )}
      </>
    );
  } else if (arg.event.extendedProps.type === "completed") {
    return <>{<Completed event={arg} />}</>;
  } else if (arg.event.extendedProps.type === "cancelled") {
    return <>{<Cancelled event={arg} />}</>;
  }
}

export default CheckTypeToRender;
