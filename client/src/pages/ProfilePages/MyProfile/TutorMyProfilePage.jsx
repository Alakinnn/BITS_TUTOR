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
import TutorPersonalDetail from "../components/tutor/TutorPersonalDetail";
import TutorCV from "../components/tutor/TutorCV";
import TutorBenefits from "../components/tutor/TutorBenefits";
import TutorUserCardMyProfile from "../components/tutor/TutorUserCardMyProfile";

export default function TutorMyProfilePage() {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* User card profile */}
                        <TutorUserCardMyProfile />

                        {/* Social links */}
                        <SocialLinks />
                    </MDBCol>
                    <MDBCol lg="8">
                        {/* Tutor Personal Detail */}
                        <TutorPersonalDetail />

                        <MDBRow>
                            <MDBCol md="4">
                                {/* Tutor benefits */}
                                <TutorBenefits />
                            </MDBCol>
                            <MDBCol md="8">
                                {/* Tutor CV */}
                                <TutorCV />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
