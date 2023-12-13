import React from "react";
import "../../../css/Profile/StudentSession.css";
import {
  MDBCard,
  MDBCardBody,
  // MDBProgressBar,
  // MDBProgress,
  MDBCardText,
} from "mdb-react-ui-kit";
import Sessions from "./Sessions";

function StudentSession() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Student</span>{" "}
          Sessions
        </MDBCardText>
        <Sessions/>
        <Sessions/>
        <Sessions/>
        <Sessions/> 
      </MDBCardBody>
    </MDBCard>
  );
}

export default StudentSession;
