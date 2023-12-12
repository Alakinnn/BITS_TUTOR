import {
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBCardText,
} from "mdb-react-ui-kit";

function TutorPersonalDetail() {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                            Johnatan Smith
                        </MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                            example@example.com
                        </MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>About Me</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                            LAKN IWNM WIOD WN IOWND WOID KDOIB DOIW KWODB KWJODW
                            IW KJ WD
                        </MDBCardText>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TutorPersonalDetail;
