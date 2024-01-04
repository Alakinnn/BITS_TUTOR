import { MDBContainer } from "mdb-react-ui-kit";
import TutorWelcomeBack from "./components/WelcomeBack/TutorWelcomeBack";
import TutorSelection from "./components/TutorSelection";
import CoreValues from "./components/CoreValues";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function TutorHomePage({ tutor }) {
    return (
        <>
            <Header />
            <MDBContainer
                breakpoint="fluid"
                className=" d-flex flex-column"
                style={{ minHeight: "100vh", gap: "7rem" }}
            >
                <TutorWelcomeBack tutor={tutor} />
                <TutorSelection />
                <CoreValues />
            </MDBContainer>
            <Footer />
        </>
    );
}

export default TutorHomePage;
