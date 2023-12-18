import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";

function StudentPersonalDetail({ student }) {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                            {student.username}
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
                            {student.email}
                        </MDBCardText>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default StudentPersonalDetail;
