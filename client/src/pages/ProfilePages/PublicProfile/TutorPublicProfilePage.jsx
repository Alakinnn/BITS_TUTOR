import SocialLinks from "../components/SocialLinks";
import TutorPersonalDetail from "../components/tutor/TutorPersonalDetail";
import TutorCV from "../components/tutor/TutorCV";
import TutorBenefits from "../components/tutor/TutorBenefits";
import "/src/css/Profile/TutorPublicProfile.css"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import TutorPublicUserCard from "../components/tutor/TutorPublicUserCard";
import { UserContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { getTutor } from "../services/user";
import { useParams } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";


export default function TutorPublicProfilePage() {
    // const tutorId = "657f20c25877dc352dc7d18b"
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState(null);
    useEffect(() => {
        // Fetch the tutor data
        const fetchData = async () => {
            const tutorResponse = await getTutor(tutorId);
            setTutor(tutorResponse.data);
        };
        fetchData();
    }, [tutorId]);

    if (!tutor) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* tutor public card */}
                        <TutorPublicUserCard tutor={tutor} />

                        {/* Social links */}
                        <SocialLinks user={tutor} />
                    </MDBCol>
                    <MDBCol lg="8">
                        {/* Tutor Personal Detail */}
                        <TutorPersonalDetail tutor={tutor} />

                        <MDBRow>
                            <MDBCol md="6">
                                {/* Tutor CV */}
                                <TutorCV tutor={tutor} />
                            </MDBCol>
                            <MDBCol md="6">
                                {/* Tutor benefits */}
                                <TutorBenefits tutor={tutor} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
        <Footer />
        </>
    );
}
