import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from "mdb-react-ui-kit";
import "./styles/Header.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function TutorHeader({tutor}) {
    const {removeAuth} = useAuth()
    const navigate = useNavigate();

    const [openBasic, setOpenBasic] = useState(false);
    const handleSignOut = () => {
        removeAuth();
        navigate("/login")
    }

    return (
        <header>
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer fluid>
                    <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

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
                                <MDBNavbarLink href="/scheduleInterface">
                                    Schedules
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <div className="d-flex input-group w-auto">

                            <a href="/me">
                                <img
                                    className="rounded-circle profilePicture "
                                    src={tutor.profilePicUrl}
                                    alt="pfp"
                                />
                            </a>
                        <MDBBtn onClick={handleSignOut} style={{padding: "15px"}} className="btn btn-white text-nowrap border rounded">Sign Out</MDBBtn>
                        </div>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}
