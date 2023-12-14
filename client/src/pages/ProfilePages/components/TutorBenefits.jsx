import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBProgressBar,
    MDBProgress,

    MDBCardText,
} from "mdb-react-ui-kit";

function TutorBenefits() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Tutor</span>{" "}
          Benefits
        </MDBCardText>
        <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
          Web Design
        </MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
          Website Markup
        </MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={72} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
          One Page
        </MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={89} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
          Mobile Template
        </MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
          Backend API
        </MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={66} valuemin={0} valuemax={100} />
        </MDBProgress>
      </MDBCardBody>
    </MDBCard>
    
  );
}

export default TutorBenefits;