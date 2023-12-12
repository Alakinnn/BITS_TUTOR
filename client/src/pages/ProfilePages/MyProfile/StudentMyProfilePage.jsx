import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBProgress,
    MDBProgressBar,
} from "mdb-react-ui-kit";
import UserCardMyProfile from "../components/UserCardMyProfile";
import SocialLinks from "../components/SocialLinks";
import StudentPersonalDetail from "../components/StudentPersonalDetail";

export default function StudentMyProfilePage() {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <UserCardMyProfile />

                        <SocialLinks />
                    </MDBCol>
                    <MDBCol lg="8">
                        <StudentPersonalDetail />

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4">
                                            <span className="text-primary font-italic me-1">
                                                assigment
                                            </span>{" "}
                                            Project Status
                                        </MDBCardText>
                                        <MDBCardText
                                            className="mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Web Design
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={80}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Website Markup
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={72}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            One Page
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={89}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Mobile Template
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={55}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Backend API
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={66}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4">
                                            <span className="text-primary font-italic me-1">
                                                assigment
                                            </span>{" "}
                                            Project Status
                                        </MDBCardText>
                                        <MDBCardText
                                            className="mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Web Design
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={80}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Website Markup
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={72}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            One Page
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={89}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Mobile Template
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={55}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>

                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Backend API
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width={66}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
