import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";

const TutorCV = ({ tutor }) => {
  return (
    <MDBCard className="mb-4 mb-md-0 h-100">
      <MDBCardBody className="h-100">
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Tutor</span>{" "}
          <a
            href="#"
            data-mdb-tooltip-init
            title="Hold Ctrl + MB3 or Click Here to view CV!"
            style={{ textDecoration: "none" }}
          >
            CV
          </a>
        </MDBCardText>
        <MDBContainer className="h-100">
          <embed height={"80%"} width={"100%"} src={tutor.cvUrl}></embed>
        </MDBContainer>
        {/* <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
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
        </MDBProgress> */}
      </MDBCardBody>
    </MDBCard>
  );
};

export default TutorCV;
