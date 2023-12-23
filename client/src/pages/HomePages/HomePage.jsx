import React from "react";
import StudentWelcomeBack from "./components/WelcomeBack/StudentWelcomeBack";
import TutorWelcomeBack from "./components/WelcomeBack/TutorWelcomeBack";
import CoreValues from "./components/CoreValues";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
function HomePage() {
    return (
        <>
            <MDBContainer breakpoint="fluid">
                <StudentWelcomeBack />
                <CoreValues />
            </MDBContainer>
        </>
    );
}

export default HomePage;
