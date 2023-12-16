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
} from "mdb-react-ui-kit";


function StudentSession() {
  return (
    <MDBCard className="mb-4 mb-md-0 card-session">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Student</span>{" "}
          Sessions
        </MDBCardText>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <MDBIcon fas icon="chalkboard-teacher" size="lg" />
          <MDBCardText className="card-text">
            <span className="text-primary font-italic me-1 style-title">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText className="small-text">Start On: 9:00pm</MDBCardText>
            <MDBCardText className="small-text">
              Start Date: 16/12/2023
            </MDBCardText>
            <MDBCardText className="small-text">
              End Date: 18/12/2023
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Go to the Session
            </MDBBtn>
          </MDBCardText>
        </MDBListGroupItem>
        <hr />

        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <MDBIcon fas icon="chalkboard-teacher" size="lg" />
          <MDBCardText className="card-text">
            <span className="text-primary font-italic me-1 style-title">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText className="small-text">Start On: 9:00pm</MDBCardText>
            <MDBCardText className="small-text">
              Start Date: 16/12/2023
            </MDBCardText>
            <MDBCardText className="small-text">
              End Date: 18/12/2023
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Go to the Session
            </MDBBtn>
          </MDBCardText>
        </MDBListGroupItem>

        <hr />

        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <MDBIcon fas icon="chalkboard-teacher" size="lg" />
          <MDBCardText className="card-text">
            <span className="text-primary font-italic me-1 style-title">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText className="small-text">Start On: 9:00pm</MDBCardText>
            <MDBCardText className="small-text">
              Start Date: 16/12/2023
            </MDBCardText>
            <MDBCardText className="small-text">
              End Date: 18/12/2023
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Go to the Session
            </MDBBtn>
          </MDBCardText>
        </MDBListGroupItem>
      </MDBCardBody>
    </MDBCard>
  );
}

export default StudentSession;
