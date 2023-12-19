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

const user = {
  profilePicUrl:
    "https://assets.fxnetworks.com/cms-next/production/950c40a9-c758-426a-a2f9-be192d3fc395.jpg",
};

export default function StudentHeader() {
  const [openBasic, setOpenBasic] = useState(false);

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
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="/search">Find Tutors</MDBNavbarLink>
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
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  className="rounded-circle ratio ratio-1x1 object-fit-cover"
                  src={user.profilePicUrl}
                  alt="pfp"
                />
              </a>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
