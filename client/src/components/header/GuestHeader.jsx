import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from "./Logo";

export default function GuestHeader() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <header>
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer fluid>
                    <Logo />

                    <MDBNavbarToggler
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setOpenBasic(!openBasic)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar open={openBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href="/search">
                                    Find Tutors
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <div className="d-flex input-group w-auto">
                            <MDBBtn
                                href="/login"
                                className="btn btn-dark me-2 rounded text-nowrap"
                            >
                                Log in
                            </MDBBtn>
                            <MDBBtn
                                href="/register/student"
                                className="btn btn-light b-1px rounded border text-nowrap"
                            >
                                Sign Up
                            </MDBBtn>
                        </div>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}
