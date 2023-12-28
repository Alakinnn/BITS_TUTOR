import React from "react";
import Upcoming from "./EventBox/Upcoming";
import Completed from "./EventBox/Completed";
import Cancelled from "./EventBox/Cancelled";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function CheckTypeToRender(arg) {
  if (
    arg.event.extendedProps.type === "inactive" ||
    arg.event.extendedProps.type === "active"
  ) {
    return (
      <>
        {arg.event.extendedProps.role == "tutor" ? (
          <Link to={`/tutorSession/${arg.event.extendedProps.sessionId}`}>
            {<Upcoming event={arg} />}
          </Link>
        ) : (
          <Link to={`/studentSession/${arg.event.extendedProps.sessionId}`}>
            {<Upcoming event={arg} />}
          </Link>
        )}
      </>
    );
  } else if (arg.event.extendedProps.type === "completed") {
    return (
      <>
        <Link to={`/tutorSession/${arg.event.extendedProps.sessionId}`}>
          {<Completed event={arg} />}
        </Link>
      </>
    );
  } else if (arg.event.extendedProps.type === "cancelled") {
    return (
      <>
        <Link to={`/tutorSession/${arg.event.extendedProps.sessionId}`}>
          {<Cancelled event={arg} />}
        </Link>
      </>
    );
  }
}

export default CheckTypeToRender;
