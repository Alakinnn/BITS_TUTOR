import React from "react";
import {
    MDBListGroupItem,
    MDBIcon,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";

function StudentPendingRequestCard({ request }) {
    return (
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
            <MDBIcon fas icon="chalkboard-teacher" size="lg" />
            <MDBCardText className="card-text">
                <span className="text-primary font-italic me-1 style-title">
                    {" "}
                    {request.title}
                </span>{" "}
                <MDBCardText className="small-text">
                    Your request sent 5 minutes ago
                </MDBCardText>
            </MDBCardText>
            <MDBCardText>
                <MDBBtn size="sm" className="button-session bg-secondary  ">
                    {request.status}
                </MDBBtn>
            </MDBCardText>
        </MDBListGroupItem>
    );
}

export default StudentPendingRequestCard;
