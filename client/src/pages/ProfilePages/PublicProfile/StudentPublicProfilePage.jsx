import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SocialLinks from "../components/SocialLinks";
import StudentPublicUserCard from "../components/student/StudentPublicUserCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentPersonalDetail from "../components/student/StudentPersonalDetail";

function StudentPublicProfilePage() {
    const { studentId } = useParams();
    const [student, setStudent] = useState({
        username: "Default",
        email: "Default",
    });
    useEffect(() => {
        console.log(studentId);
    }, [studentId]);
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* student public Card */}
                        <StudentPublicUserCard />

                        {/* Social Links */}
                        <SocialLinks />
                    </MDBCol>

                    <MDBCol lg="8">
                        {/* student public Card */}
                        <StudentPersonalDetail student={student} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default StudentPublicProfilePage;
