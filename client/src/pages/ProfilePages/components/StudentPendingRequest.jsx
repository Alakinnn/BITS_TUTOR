import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBProgressBar,
  MDBProgress,
  MDBListGroupItem,
  MDBIcon,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

function StudentPendingRequest() {
  return (
    <MDBCard className="mb-4 mb-md-0 card-session">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Student</span> Pending
          Request
        </MDBCardText>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <MDBIcon fas icon="chalkboard-teacher" size="lg" />
          <MDBCardText className="card-text">
            <span className="text-primary font-italic me-1 style-title">
              {" "}
              Website Markup
            </span>{" "}
            <MDBCardText className="small-text">
              Your request sent 5 minutes ago
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Pending
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
            <MDBCardText className="small-text">
              Your request sent 5 minutes ago
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Pending
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
            <MDBCardText className="small-text">
              Your request sent 5 minutes ago
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Pending
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
            <MDBCardText className="small-text">
              Your request sent 5 minutes ago
            </MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <MDBBtn size="sm" className="button-session bg-secondary  ">
              Pending
            </MDBBtn>
          </MDBCardText>
        </MDBListGroupItem>
      </MDBCardBody>
    </MDBCard>
  );
}

export default StudentPendingRequest;
