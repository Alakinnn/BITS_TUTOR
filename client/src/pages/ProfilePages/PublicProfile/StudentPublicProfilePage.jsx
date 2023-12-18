import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SocialLinks from "../components/SocialLinks";
import StudentPublicUserCard from "../components/student/StudentPublicUserCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentPersonalDetail from "../components/student/StudentPersonalDetail";
import { getStudent } from "../services/user";

function StudentPublicProfilePage() {
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
    );
}

export default StudentPublicProfilePage;
