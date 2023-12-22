import React from "react";
import StudentWelcomeBack from "./components/StudentWelcomeBack";
import TutorWelcomeBack from "./components/TutorWelcomeBack";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function HomePage() {
    return (
        <MDBContainer breakpoint="fluid">
            <StudentWelcomeBack />
        </MDBContainer>
    );
}

export default HomePage;
