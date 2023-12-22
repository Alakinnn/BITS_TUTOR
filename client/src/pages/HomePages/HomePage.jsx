import React from "react";
import WelcomeBack from "./components/WelcomeBack";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function HomePage() {
    return (
        <MDBContainer breakpoint="fluid">
            <WelcomeBack />
        </MDBContainer>
    );
}

export default HomePage;
