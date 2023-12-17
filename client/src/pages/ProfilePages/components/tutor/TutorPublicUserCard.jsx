import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,

    // MDBListGroupItem,
} from "mdb-react-ui-kit";

const TutorPublicUserCard = () => {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                />
                <p className="text-muted mb-3">NGUYEN THI NGOAN(TUTOR)</p>
                <p className="text-muted mb-3">#Python</p>
                <p className="text-muted mb-3">#C++</p>

                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn className="bg-secondary">Book A Session</MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
};

export default TutorPublicUserCard;
