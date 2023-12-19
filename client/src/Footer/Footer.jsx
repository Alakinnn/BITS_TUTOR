export default function Footer() {
  return (
    <footer id="footer">
      <div className="containerContentFooter">
        <div className="headerTextFooter">
          <h2>Best services</h2>
        </div>
        <div className="rightContentFooter">
          <ul className="homeFooter">
            <li className="homeTextFooter">Home</li>
            <li className="findTutorFooter">Find tutor</li>
            <li className="servicesFooter">Services</li>
            <li className="becomeTutortutorFooter">Become tutortutor</li>
          </ul>
          <ul className="promoFooter">
            <li className="promoTextFooter">Promo</li>
            <li className="offTutorFooter">50% off</li>
            <li className="freeTrialFooter">Free trial</li>
            <li className="freeSourceFooter">Free source</li>
          </ul>
          <ul className="aboutUsFooter">
            <li className="aboutUsTextFooter">About us</li>
            <li className="aboutFooter">About</li>
            <li className="contactFooter">Contact</li>
            <li className="carrerFooter">Career</li>
          </ul>
        </div>
      </div>

      <div className="iconFooter">
        <div className="linkInFooter">
          <img src={"src/assets/footer/linkIn.svg"} alt="linkIn" />
        </div>
        <div className="facebookFooter">
          <img src={"src/assets/footer/facebook.svg"} alt="facebook" />
        </div>
        <div className="instaFooter">
          <img src={"src/assets/footer/insta.svg"} alt="insta" />
        </div>
      </div>

      <span className="copyRight">Copyright © 2023</span>
    </footer>
  );
}
