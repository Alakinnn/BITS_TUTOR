import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  // List of URLs
  const HOME_URL = "/ ";
  const SEARCH_URL = "/login";
  const SCHEDULE_URL = "/schedule/me";
  const TUTOR_REGISTER_URL = "/register/tutor";
  const ABOUT_URL = "/FooterTest";
  const CONTACT_URL = "/FooterTest";
  const SOCIAL_URL = "/FooterTest";

  return (
    <footer id="footer">
      <div className="containerContentFooter">
        <Link to={HOME_URL} className="footerLink">
          <div className="headerTextFooter titleFont">
            <img src={"/images/weblogo.png"} alt="logo" />
            <h2>Meet a Mentor</h2>
          </div>
        </Link>
        <div className="rightContentFooter titleFont">
          <ul className="homeFooter">
            <Link to={HOME_URL} className="footerLink">
              <li className="homeTextFooter">Home</li>
            </Link>
            <Link to={SEARCH_URL} className="footerLink">
              <li className="findTutorFooter">Find tutor</li>
            </Link>
            <Link to={SCHEDULE_URL} className="footerLink">
              <li className="servicesFooter">Schedule</li>
            </Link>
            <Link to={TUTOR_REGISTER_URL} className="footerLink">
              <li className="becomeATutorFooter">Become a tutor</li>
            </Link>
          </ul>
          {/* <ul className="promoFooter">
            <li className="promoTextFooter">Promo</li>
            <li className="offTutorFooter">50% off</li>
            <li className="freeTrialFooter">Free trial</li>
            <li className="freeSourceFooter">Free source</li>
          </ul> */}
          <ul className="aboutUsFooter">
            <Link to={ABOUT_URL} className="footerLink">
              <li className="aboutUsTextFooter">About us</li>
            </Link>
            <Link to={ABOUT_URL} className="footerLink">
              <li className="aboutFooter">About</li>
            </Link>
            <Link to={CONTACT_URL} className="footerLink">
              <li>Contact</li>
            </Link>
            {/* <li className="carrerFooter">Career</li> */}
          </ul>
        </div>
      </div>

      <span className="copyRight contentFont">Copyright © 2023</span>
    </footer>
  );
}
