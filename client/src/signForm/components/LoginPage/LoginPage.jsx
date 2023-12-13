import Step1 from "../v1/step/step-1";
import Step2 from "../v1/step/step-2";
import Step3 from "../v1/step/step-3";
import Step4 from "../v1/step/step-4";
import Step5 from "../v1/step/step-5";
import './../../assets/v1/scss/style.css';

// import "../../assets/v1/js/main.js";

export default function LoginPage() {
  return (
    <div>
      <div className="wrapper">
        {/* for rtl */}
        {/* <div className="wrapper" dir='rtl'> */}

        <div className="steps-area steps-area-fixed">
          <div className="image-holder">
            <img src={"./src/assets/v1/img/side-img.jpg"} alt="" />
          </div>
          <div className="steps clearfix">
            <ul className="tablist multisteps-form__progress">
              <li className="multisteps-form__progress-btn js-active current">
                <span>1</span>
              </li>
              <li className="multisteps-form__progress-btn">
                <span>2</span>
              </li>
              <li className="multisteps-form__progress-btn">
                <span>3</span>
              </li>
              <li className="multisteps-form__progress-btn">
                <span>4</span>
              </li>
              <li className="multisteps-form__progress-btn last">
                <span>5</span>
              </li>
            </ul>
          </div>
        </div>
        <form
          className="multisteps-form__form"
          action="#"
          id="wizard"
          method="POST"
        >
          <div className="form-area position-relative">
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
          </div>
        </form>
      </div>
    </div>
  );
}
