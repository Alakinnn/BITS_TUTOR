import {
    MDBCol,
    MDBContainer,
    MDBRow,
    // MDBCard,
    // MDBCardText,
    // MDBCardBody,
    // MDBProgress,
    // MDBProgressBar,
} from "mdb-react-ui-kit";
import StudentUserCardMyProfile from "../components/student/StudentUserCardMyProfile";
import SocialLinks from "../components/SocialLinks";
import StudentPersonalDetail from "../components/student/StudentPersonalDetail";
import StudentSessionList from "../components/student/StudentSessionList";
import StudentPendingRequest from "../components/student/StudentPendingRequest";
import { UserContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { getStudentSessions } from "../services/sessions";
import { getStudentRequests } from "../services/requests";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

export default function StudentMyProfilePage() {
    const student = useAuth().user;
    const [sessions, setSessions] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);

    useEffect(() => {
        try {
            // Fetch the student's sessions
            const fetchData = async () => {
                const sessionResponse = await getStudentSessions(student._id);
                setSessions(sessionResponse.data);

                const requestResponse = await getStudentRequests(student._id);
                // Filter out the requests that are not pending
                const pendingRequests = requestResponse.data.filter(
                    (request) => {
                        return request.status === "pending";
                    }
                );
                setPendingRequests(pendingRequests);
            };

            fetchData();
        } catch (error) {
            console.log.error("Error fetching data:", error);
        }
    }, [student]);

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* User card profile */}
                        <StudentUserCardMyProfile student={student} />

                        {/* Social Links */}
                        <SocialLinks user={student} />
                    </MDBCol>
                    <MDBCol lg="8">
                        {/* Student Details */}
                        <StudentPersonalDetail student={student} />

                        <MDBRow>
                            <MDBCol md="6">
                                {/* Student Session */}
                                <StudentSessionList sessions={sessions} />
                            </MDBCol>

                            <MDBCol md="6">
                                {/* Student Pending Request */}
                                <StudentPendingRequest
                                    requests={pendingRequests}
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
