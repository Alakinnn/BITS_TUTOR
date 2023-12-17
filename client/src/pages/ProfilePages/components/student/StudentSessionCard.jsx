import {
    MDBCardText,
    MDBBtn,
    MDBIcon,
    MDBListGroupItem,
} from "mdb-react-ui-kit";

import { formatDate, formatTime } from "../../../../utils/dateUtils";
import { Link } from "react-router-dom";

function StudentSessionCard({ session }) {
    return (
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
            <MDBIcon fas icon="chalkboard-teacher" size="lg" />
            <MDBCardText className="card-text">
                <span className="text-primary font-italic me-1 style-title">
                    {" "}
                    {session.title}
                </span>{" "}
                <MDBCardText className="small-text">
                    Start Time: {formatTime(session.startTime)}
                </MDBCardText>
                <MDBCardText className="small-text">
                    End Time: {formatTime(session.endTime)}
                </MDBCardText>
                <MDBCardText className="small-text">
                    Date: {formatDate(session.startTime)}
                </MDBCardText>
            </MDBCardText>
            <MDBCardText>
                <Link to={`/studentSession/${session._id}`}>
                    <MDBBtn size="sm" className="button-session bg-secondary  ">
                        Go to Session
                    </MDBBtn>
                </Link>
            </MDBCardText>
        </MDBListGroupItem>
    );
}
export default StudentSessionCard;
