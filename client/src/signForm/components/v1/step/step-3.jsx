import React from "react";

class StepThree extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 3</span>
                                <div className="step-progress float-right">
                                    <span>3 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>What kind of services You Need</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                <div className="services-select-option">
                                    <ul>
                                        <li className="bg-white active"><label>Web Design <input type="radio" name="web_service" value="Web Design" defaultChecked /></label></li>
                                        <li className="bg-white"><label>Web Development <input type="radio" name="web_service" value="Web Development" /></label></li>
                                        <li className="bg-white"><label>Graphics Design <input type="radio" name="web_service" value="Graphics Design" /></label></li>
                                        <li className="bg-white"><label>SEO <input type="radio" name="web_service" value="SEO" /></label></li>
                                    </ul>
                                </div>
                                <div className="language-select">
                                    <p>I want to browse projects in the following languages: </p>
                                    <select name="languages">
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                                <div className="comment-box">
                                    <p><i className="fas fa-comments"></i> Write Somthing note</p>
                                    <textarea name="full_comments" placeholder="Write here"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                            <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepThree;