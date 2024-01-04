import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
const StudentPublicUserCard = ({ student }) => {
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
                <p className="text-muted mb-3">student</p>

                <div className="d-flex justify-content-center mb-2"></div>
            </MDBCardBody>
        </MDBCard>
    );
};

export default StudentPublicUserCard;
