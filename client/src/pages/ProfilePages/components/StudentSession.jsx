import React from "react";
import "../../../css/Profile/StudentSession.css";
import {
  MDBCard,
  MDBCardBody,
  // MDBProgressBar,
  // MDBProgress,
  MDBCardText,
  MDBListGroupItem,
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
// import Sessions from "./Sessions";

function StudentSession() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Student</span>{" "}
          Sessions
        </MDBCardText>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBRow>
            <MDBCol sm="3">
              <MDBIcon fas icon="chalkboard-teacher" size="lg" />
            </MDBCol>
            <MDBCol sm="9">
              <span className="text-primary font-italic me-1">
                {" "}
                Website Markup
              </span>{" "}
              <MDBCardText className="text-style">Start on: 9:00pm</MDBCardText>
            </MDBCol>
          </MDBRow>
          <MDBCardText className="mb-4 button-style">
            <MDBBtn size="sm" className="bg-secondary ">
              Go to the Session
            </MDBBtn>
            <MDBCardText className="small-text">16/12/2023</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>

        <hr />

        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBRow>
            <MDBCol sm="3">
              <MDBIcon fas icon="chalkboard-teacher" size="lg" />
            </MDBCol>
            <MDBCol sm="9">
              <span className="text-primary font-italic me-1">
                {" "}
                Website Markup
              </span>{" "}
              <MDBCardText className="text-style">Start on: 9:00pm</MDBCardText>
            </MDBCol>
          </MDBRow>
          <MDBCardText className="mb-4 button-style">
          <MDBBtn size="sm" className="bg-secondary ">
              Go to the Session
            </MDBBtn>
            <MDBCardText className="small-text">16/12/2023</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>

        <hr />
        
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBIcon fas icon="chalkboard-teacher" size="lg" />
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText className="small-text">mdbootstrap</MDBCardText>
          </MDBCardText>
          <MDBCardText className="mb-4">
            <MDBBtn size="sm" className="bg-secondary ">
              Go to the Session
            </MDBBtn>
            <MDBCardText className="small-text">mdbootstrap</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>
      </MDBCardBody>
    </MDBCard>
  );
}

export default StudentSession;
