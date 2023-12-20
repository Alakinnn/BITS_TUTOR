import { MDBNavbarBrand } from "mdb-react-ui-kit";
import logo from "/images/mam_logo.png";
// import logo from "/images/mam_logo_words.svg";
function Logo() {
    return (
        <MDBNavbarBrand href="/">
            <img
                style={{
                    width: "30px",
                    // height: "40px",
                    marginLeft: "10px",
                }}
                src={logo}
                alt="logo"
            />
        </MDBNavbarBrand>
    );
}

export default Logo;
