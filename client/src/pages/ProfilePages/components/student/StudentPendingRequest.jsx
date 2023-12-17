import {
    MDBCard,
    MDBCardBody,
    MDBListGroupItem,
    MDBIcon,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";

import StudentPendingRequestCard from "./StudentPendingRequestCard";

const MAX_REQUESTS = 5;

function StudentPendingRequest({ requests }) {
    return (
        <MDBCard className="mb-4 mb-md-0 card-session">
            <MDBCardBody>
                <MDBCardText className="mb-4">
                    <span className="text-primary font-italic me-1">
                        Student
                    </span>{" "}
                    Pending Request
                </MDBCardText>
                {requests.map((request, index) => {
                    if (index + 1 > MAX_REQUESTS) return null;
                    return (
                        <>
                            <StudentPendingRequestCard
                                request={request}
                                key={index}
                            />
                            {index + 1 !== MAX_REQUESTS ? <hr /> : null}
                        </>
                    );
                })}
            </MDBCardBody>
        </MDBCard>
    );
}

export default StudentPendingRequest;
