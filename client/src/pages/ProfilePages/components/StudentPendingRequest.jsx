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
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Student</span> Pending
          Request
        </MDBCardText>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="user-circle" size="lg" />
          <MDBCardText>Nguyen Ngoan</MDBCardText>
          <MDBBtn className="bg-secondary">Pending Request</MDBBtn>
        </MDBListGroupItem>
        <hr />
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="user-circle" size="lg" />
          <MDBCardText>Nguyen Ngoan</MDBCardText>
          <MDBBtn className="bg-secondary">Pending Request</MDBBtn>
        </MDBListGroupItem>
        <hr />
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="user-circle" size="lg" />
        <MDBCardText>Nguyen Ngoan</MDBCardText>
          <MDBBtn className="bg-secondary">Pending Request</MDBBtn>
        </MDBListGroupItem>
        <hr />
        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
          <MDBIcon fas icon="user-circle" size="lg" />
          <MDBCardText>Nguyen Ngoan</MDBCardText>
          
          <MDBBtn className="bg-secondary">Pending Request</MDBBtn>
        </MDBListGroupItem>
      </MDBCardBody>
    </MDBCard>
  );
}

export default StudentPendingRequest;
