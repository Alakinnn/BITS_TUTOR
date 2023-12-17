import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";

function StudentUserCardMyProfile({ student }) {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
                <MDBCardImage
                    src={student.profilePicUrl}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                />
                <p className="text-muted mb-3">{student.username}</p>
                <p className="text-muted mb-3">{student.role}</p>
                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn className="bg-secondary">Edit Profile</MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default StudentUserCardMyProfile;
