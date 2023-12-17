import SocialLinks from "../components/SocialLinks";
import TutorPersonalDetail from "../components/tutor/TutorPersonalDetail";
import TutorCV from "../components/tutor/TutorCV";
import TutorBenefits from "../components/tutor/TutorBenefits";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import TutorPublicUserCard from "../components/tutor/TutorPublicUserCard";
import { UserContext } from "../../../App";
import { useContext, useEffect, useState  } from "react";
import getTutor from '../services/tutor';

export default function TutorPublicProfilePage() {
    const tutorID = "657f20c25877dc352dc7d18b"
    const [tutor, setTutor] = useState({});
    useEffect(() => {    
        // Fetch the tutor data
        const fetchData = async () => {
            const tutorResponse = await getTutor(tutorID);
            setTutor(tutorResponse.data);
        };
        fetchData();
    }, [tutor]);
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* tutor public card */}
                        <TutorPublicUserCard tutor={tutor}/>

                        {/* Social links */}
                        <SocialLinks />
                    </MDBCol>
                    <MDBCol lg="8">
                        {/* Tutor Personal Detail */}
                        <TutorPersonalDetail tutor={tutor}/>

                        <MDBRow>
                            <MDBCol md="6">
                                {/* Tutor CV */}
                                <TutorCV tutor={tutor}/>
                            </MDBCol>
                            <MDBCol md="6">
                                {/* Tutor benefits */}
                                <TutorBenefits tutor={tutor}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
