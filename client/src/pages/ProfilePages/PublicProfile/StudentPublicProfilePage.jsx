import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCardText,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon,
    MDBProgress,
    MDBProgressBar,
} from "mdb-react-ui-kit";
import SocialLinks from "../components/SocialLinks";
import StudentPublicUserCard from "../components/StudentPublicUserCard";

function StudentPublicProfilePage() {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        {/* student public Card */}
                        <StudentPublicUserCard/>

                            {/* Social Links */}
                            <SocialLinks/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default StudentPublicProfilePage;
