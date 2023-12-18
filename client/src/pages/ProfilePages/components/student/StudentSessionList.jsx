import "../../../../css/Profile/StudentSession.css";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import StudentSessionCard from "./StudentSessionCard";

const MAX_SESSIONS = 4;

function StudentSessionList({ sessions }) {
    return (
        <MDBCard className="mb-4 mb-md-0 card-session">
            <MDBCardBody>
                <MDBCardText className="mb-4">
                    <span className="text-primary font-italic me-1">
                        Student
                    </span>{" "}
                    Sessions
                </MDBCardText>

                {sessions.map((session, index) => {
                    if (index + 1 > MAX_SESSIONS) return null;
                    return (
                        <>
                            <StudentSessionCard session={session} key={index} />
                            {index + 1 !== MAX_SESSIONS ? <hr /> : null}
                        </>
                    );
                })}
            </MDBCardBody>
        </MDBCard>
    );
}

export default StudentSessionList;
