import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";
export default function EndSession({joinSessionFunction, endSessionFunction}) {
  return (
    <div className="buttons">
    <button className="joinMeeting blueButton btn-dark" onClick={joinSessionFunction}>Join Meeting</button>
    <button className="endSession" onClick={endSessionFunction}>End Session</button>
  </div>
  )
}
