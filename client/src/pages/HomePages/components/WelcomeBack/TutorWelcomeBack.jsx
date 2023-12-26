import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import welcomeBackImg from "/images/welcome-back.png";

const getFirstName = (name) => {
    return name.split(" ")[0];
};

function TutorWelcomeBack({ tutor }) {
    return (
        <MDBRow className="d-flex flex-column flex-lg-row screen-height gap-5">
            <MDBCol className="d-flex flex-column align-items-center">
                <img className="w-75" src={welcomeBackImg} alt="welcome back" />
            </MDBCol>
            <MDBCol className="d-flex gap-2 flex-column align-items-center justify-content-center">
                <h1 className="fs-1 mb-2 text-nowrap">
                    Welcome back, {getFirstName(tutor.username)}!
                </h1>
                <p className="fs-3 mb-4">What will you teach today?</p>
                <MDBBtn className="btn btn-dark text-nowraptext" href="/search">
                    <h4 className="fs-4">Go To Schedules</h4>
                </MDBBtn>
            </MDBCol>
        </MDBRow>
    );
}

export default TutorWelcomeBack;
