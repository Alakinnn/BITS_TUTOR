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
import SocialLinks from "../components/SocialLinks";
import TutorPersonalDetail from "../components/tutor/TutorPersonalDetail";
import TutorCV from "../components/tutor/TutorCV";
import TutorBenefits from "../components/tutor/TutorBenefits";
import TutorUserCardMyProfile from "../components/tutor/TutorUserCardMyProfile";
import { useAuth } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../App";
export default function TutorMyProfilePage() {
  const { user } = useAuth();

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            {/* User card profile */}
            <TutorUserCardMyProfile tutor={user} />

            {/* Social links */}
            <SocialLinks user={user} />
          </MDBCol>
          <MDBCol lg="8">
            {/* Tutor Personal Detail */}
            <TutorPersonalDetail tutor={user} />

            <MDBRow>
              <MDBCol md="4">
                {/* Tutor benefits */}
                <TutorBenefits tutor={user} />
              </MDBCol>
              <MDBCol md="8">
                {/* Tutor CV */}
                <TutorCV tutor={user} />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
