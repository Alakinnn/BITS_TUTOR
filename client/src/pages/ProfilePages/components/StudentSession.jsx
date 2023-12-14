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
import Sessions from "./Sessions";

function StudentSession() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Student</span>{" "}
          Sessions
        </MDBCardText>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
          <MDBCardText className="mb-4">
            <MDBBtn className="bg-secondary">Go to the Session</MDBBtn>
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>
        <hr />
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
          <MDBCardText className="mb-4">
            <MDBBtn className="bg-secondary">Go to the Session</MDBBtn>
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>
        <hr />
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
          <MDBCardText className="mb-4">
            <MDBBtn className="bg-secondary">Go to the Session</MDBBtn>
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>
        <hr />
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
          <MDBCardText className="mb-4">
            <MDBBtn className="bg-secondary">Go to the Session</MDBBtn>
            <MDBCardText>mdbootstrap</MDBCardText>
          </MDBCardText>
        </MDBListGroupItem>
      </MDBCardBody>
    </MDBCard>
  );
}

export default StudentSession;
