import React from "react";
import "../../css/Scheduling/Toolbar/RequestDescription.css";
import user from "/src/assets/footer/circle-user.svg";
import { CreateRequest } from "./RequestFunctions/CreateRequest";
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
          CreateRequest({ newRequest: request, setRequest, defaultRequest });
          setSubmitCounter(submitCounter + 1);
          // console.log(submitCounter);
        }}
      >
        Book a Session
      </button>
      {/* <button className='bookingSession'>Book a Session</button> */}
    </>
  );
};

export default BookingSession;
