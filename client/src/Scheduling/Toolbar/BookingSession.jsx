import React from "react";
import "../../css/Scheduling/Toolbar/RequestDescription.css";
import user from "/src/assets/footer/circle-user.svg";
import { CreateRequest } from "./RequestFunctions/CreateRequest";
import { checkTimeAhead } from "./RequestFunctions/DateTimeFormat";
const BookingSession = ({
  request,
  setRequest,
  defaultRequest,
  submitCounter,
  setSubmitCounter,
}) => {
  return (
    <>
      <button
        className="bookingSession"
        onClick={() => {
          if (!checkTimeAhead(request.startTime, request.endTime, 30)) {
            window.alert("Please book at least 30 minutes");
          } else {
            CreateRequest({ newRequest: request, setRequest, defaultRequest });
            setSubmitCounter(submitCounter + 1);
          }
        }}
      >
        Book a Session
      </button>
      {/* <button className='bookingSession'>Book a Session</button> */}
    </>
  );
};

export default BookingSession;
