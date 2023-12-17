import { useContext, useState } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";
import { UserContext } from "../../../../App";
import Tag from "../Tag";
import TagList from "../TagList";

function TutorUserCardMyProfile() {
    const user = useContext(UserContext);

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
                <p className="text-muted mb-3">{user.username}</p>
                <p className="text-muted mb-3">{user.role}</p>

                <TagList tags={user.tags} />

                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn className="bg-secondary">Edit Profile</MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TutorUserCardMyProfile;
