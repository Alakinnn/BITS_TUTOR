import { MDBContainer } from "mdb-react-ui-kit";
import StudentWelcomeBack from "./components/WelcomeBack/StudentWelcomeBack";
import CoreValues from "./components/CoreValues";
import TutorSelection from "./components/TutorSelection";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function StudentHomePage({ student }) {
    return (
        <>
            <Header />
            <MDBContainer
                breakpoint="fluid"
                className=" d-flex flex-column"
                style={{ minHeight: "100vh", gap: "7rem" }}
            >
                <StudentWelcomeBack student={student} />
                <TutorSelection />
                <CoreValues />
            </MDBContainer>
            <Footer />
        </>
    );
}

export default StudentHomePage;
