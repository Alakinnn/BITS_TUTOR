import React from "react";

class StepFour extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 4</span>
                                <div className="step-progress float-right">
                                    <span>4 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width:'70%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>What kind of services You Need</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                <div className="step-content-area">
                                    <div className="budget-area">
                                        <p><i className="fas fa-dollar-sign"></i> Budget</p>
                                        <select name="budget">
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                        </select>
                                    </div>
                                    <div className="budget-area">
                                        <p><i className="fas fa-comments"></i> Required Support</p>
                                        <select name="support_period">
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                        </select>
                                    </div>
                                    <div className="budget-area">
                                        <p>Optimization and Accessibility</p>
                                        <div className="opti-list">
                                            <ul className="d-md-flex">
                                                <li className="bg-white active"><input type="checkbox" name="code_opti1" value="Semantic coding" defaultChecked />Semantic coding</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti2" value="Mobile APP" />Mobile APP</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti3" value="Mobile Design" />Mobile Design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <p><i className="fas fa-comments"></i> Write Somthing note</p>
                                        <textarea name="comments-note" placeholder="Your Content Here"></textarea>
                                    </div>
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

export default StepFour;