import { MDBNavbarBrand } from "mdb-react-ui-kit";
import logo from "/images/mam_logo.png";
// import logo from "/images/mam_logo_words.svg";
function Logo() {
    return (
        <MDBNavbarBrand
            style={{
                width: "70px",
                height: "60px",
            }}
            href="/"
        >
            <img
                style={{
                    width: "100%",
                    marginLeft: "10px",
                }}
                src={logo}
                alt="logo"
            />
        </MDBNavbarBrand>
    );
}

export default Logo;
