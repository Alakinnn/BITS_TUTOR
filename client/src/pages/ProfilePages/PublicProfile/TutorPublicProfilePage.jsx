import SocialLinks from "../components/SocialLinks";
import TutorPersonalDetail from "../components/TutorPersonalDetail";
import TutorCV from "../components/TutorCV";
import TutorBenefits from "../components/TutorBenefits";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import TutorPublicUserCard from "../components/TutorPublicUserCard";

export default function TutorPublicProfilePage() {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* tutor public card */}
                        <TutorPublicUserCard/>
        

                        {/* Social links */}
                        <SocialLinks/>
            
                    </MDBCol>
                    <MDBCol lg="8">
                        {/* Tutor Personal Detail */}
                        <TutorPersonalDetail />

                        <MDBRow>
                            <MDBCol md="6">
                                {/* Tutor CV */}
                                <TutorCV/>
                        
                            </MDBCol>
                            <MDBCol md="6">
                                {/* Tutor benefits */}
                                <TutorBenefits/>
                                
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
