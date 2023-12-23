import React from "react";
import StudentWelcomeBack from "./components/WelcomeBack/StudentWelcomeBack";
import TutorWelcomeBack from "./components/WelcomeBack/TutorWelcomeBack";
import CoreValues from "./components/CoreValues";
import TutorSelection from "./components/TutorSelection";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
function HomePage() {
    return (
        <>
            <MDBContainer
                breakpoint="fluid"
                className=" d-flex flex-column"
                style={{ minHeight: "100vh", gap: "7rem" }}
            >
                <StudentWelcomeBack />
                <TutorSelection />
                <CoreValues />
            </MDBContainer>
        </>
    );
}

export default HomePage;