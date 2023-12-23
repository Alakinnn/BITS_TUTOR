import tutorSelectionImg from "/images/tutor-selection.png";
import { MDBRow } from "mdb-react-ui-kit";
import { MDBCol } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

function TutorSelection() {
    return (
        <>
            <MDBRow className="d-flex flex-lg-row flex-column my-5 px-5 align-items-center justify-content-between gap-5 gap-lg-0">
                <MDBCol className="col-lg-7 col-12 pe-0 pe-lg-5">
                    <img
                        src={tutorSelectionImg}
                        alt="Tutor Selection Image"
                        className="img-fluid"
                    />
                </MDBCol>
                <MDBCol className="col-lg-5 col-12 d-flex flex-column align-items-center justify-content-center text-center ps-0 ps-lg-5">
                    <h1 className="text-nowrap fs-1 titleFont">
                        Our Tutors Selection
                    </h1>
                    <p className="fs-5 contentFont">
                        Meet verified experts in thousands of subjects from
                        around the world
                    </p>
                    <MDBBtn
                        className="btn-outline-black btn-dark text-nowraptext fs-6 titleFont"
                        href="/search"
                    >
                        <strong>See More</strong>
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </>
    );
}

export default TutorSelection;
