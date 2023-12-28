import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SocialLinks from "../components/SocialLinks";
import StudentPublicUserCard from "../components/student/StudentPublicUserCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentPersonalDetail from "../components/student/StudentPersonalDetail";
import { getStudent } from "../services/user";
import Header from "/src/components/header/Header";
import Footer from "/src/components/footer/Footer";

function StudentPublicProfilePage() {
    // const studentId = "6580286701da228ba974527b";
    const { studentId } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        // Fetch the student data
        const fetchData = async () => {
            const studentResponse = await getStudent(studentId);
            setStudent(studentResponse.data);
        };
        fetchData();
    }, [studentId]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* student public Card */}
                        <StudentPublicUserCard student={student} />

                        {/* Social Links */}
                        <SocialLinks user={student} />
                    </MDBCol>

                    <MDBCol lg="8">
                        {/* student public Card */}
                        <StudentPersonalDetail student={student} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
            <Footer />
        </>
    );
}

export default StudentPublicProfilePage;
