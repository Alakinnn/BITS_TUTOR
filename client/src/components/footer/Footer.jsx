import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  // List of URLs
  const HOME_URL = "/FooterTest";
  const SEARCH_URL = "/FooterTest";
  const SCHEDULE_URL = "/FooterTest";
  const TUTOR_REGISTER_URL = "/FooterTest";
  const ABOUT_URL = "/FooterTest";
  const CONTACT_URL = "/FooterTest";
  const SOCIAL_URL = "/FooterTest";

  return (
    <footer id="footer">
      <div className="containerContentFooter">
        <div className="headerTextFooter titleFont">
          <img src={"/"} alt="logo" />
          <h2>Meet a Mentor</h2>
        </div>
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

      <div className="iconFooter">
        <div className="linkInFooter">
          <Link to={SOCIAL_URL} className="footerLink">
            <img src={"/src/assets/footer/linkIn.svg"} alt="linkIn" />
          </Link>
        </div>
        <div className="facebookFooter">
          <Link to={SOCIAL_URL} className="footerLink">
            <img src={"/src/assets/footer/facebook.svg"} alt="facebook" />
          </Link>
        </div>
        <div className="instaFooter">
          <Link to={SOCIAL_URL} className="footerLink">
            <img src={"/src/assets/footer/insta.svg"} alt="insta" />
          </Link>
        </div>
      </div>

      <span className="copyRight contentFont">Copyright © 2023</span>
    </footer>
  );
}
