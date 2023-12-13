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
import TutorPersonalDetail from "../components/TutorPersonalDetail";
import TutorCV from "../components/TutorCV";
import TutorBenefits from "../components/TutorBenefits";
import TutorUserCardMyProfile from "../components/TutorUserCardMyProfile";

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
                            <MDBCol md="6">
                                {/* Tutor CV */}
                                <TutorCV />
                            </MDBCol>
                            <MDBCol md="6">
                                {/* Tutor benefits */}
                                <TutorBenefits />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
