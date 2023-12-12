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
import UserCardMyProfile from "../components/UserCardMyProfile";
import SocialLinks from "../components/SocialLinks";
import StudentPersonalDetail from "../components/StudentPersonalDetail";
import StudentSession from "../components/StudentSession";
import StudentPendingRequest from "../components/StudentPendingRequest";

export default function StudentMyProfilePage() {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* User card profile */}
                        <UserCardMyProfile />

                        {/* Social Links */}
                        <SocialLinks />
                    </MDBCol>
                    <MDBCol lg="8">
                        {/* Student Details */}
                        <StudentPersonalDetail />

                        <MDBRow>
                            <MDBCol md="6">
                                {/* Student Session */}
                                <StudentSession/>
                                
                            </MDBCol>

                            <MDBCol md="6">
                                {/* Student Pending Request */}
                                <StudentPendingRequest/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
