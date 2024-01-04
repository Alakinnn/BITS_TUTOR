import { useContext, useState } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";
import TagList from "../TagList";

function TutorUserCardMyProfile({ tutor }) {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
                <MDBCardImage
                    src={tutor.profilePicUrl}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                />
                <p className="text-muted mb-3">{tutor.username}</p>
                <p className="text-muted mb-3">{tutor.role}</p>

                <TagList tags={tutor.tags} />

                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn className="bg-secondary">Edit Profile</MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TutorUserCardMyProfile;
