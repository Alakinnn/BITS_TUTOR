import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import welcomeBackImg from "/images/welcome-back.png";

const user = {
    username: "John Doe",
};

const getFirstName = (name) => {
    return name.split(" ")[0];
};

function WelcomeBack() {
    return (
        <MDBRow className="d-flex flex-column flex-lg-row screen-height gap-5">
            <MDBCol className="d-flex flex-column align-items-center">
                <img className="w-75" src={welcomeBackImg} alt="welcome back" />
            </MDBCol>
            <MDBCol className="d-flex gap-2 flex-column align-items-center justify-content-center">
                <h1 className="mb-4 text-nowrap">
                    Welcome back, {getFirstName(user.username)}!
                </h1>
                <h3 className="mb-5">What will you learn today?</h3>
                <MDBBtn className="btn btn-dark text-nowraptext" href="/search">
                    <h4>Find a Tutor</h4>
                </MDBBtn>
            </MDBCol>
        </MDBRow>
    );
}

export default WelcomeBack;
