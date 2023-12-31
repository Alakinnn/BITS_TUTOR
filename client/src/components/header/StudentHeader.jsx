import { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./styles/Header.css";
import SignOutButton from "./SignOutButton";
import ProfilePicture from "./ProfilePicture";
import Logo from "./Logo";

export default function StudentHeader({ student }) {
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
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="/search">Find Tutors</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="/schedule/me">Schedules</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className="d-flex input-group w-auto">
              <ProfilePicture profilePicUrl={student.profilePicUrl} />
              <SignOutButton />
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
