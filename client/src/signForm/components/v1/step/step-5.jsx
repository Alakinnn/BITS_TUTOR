import React from "react";

class StepFive extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 5</span>
                                <div className="step-progress float-right">
                                    <span>5 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Complete Final Step</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                <div className="step-content-field">
                                    <div className="date-picker date datepicker">
                                        <input type="text" name="date" className="form-control" />
                                            <div className="input-group-append"><span>ADD TIME</span></div>
										</div>
                                        <div className="plan-area">
                                            <div className="plan-icon-text text-center active">
                                                <div className="plan-icon">
                                                    <i className="fas fa-chess-queen"></i>
                                                </div>
                                                <div className="plan-text">
                                                    <h3>Unlimited Plan</h3>
                                                    <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
                                                    <input type="radio" name="your_plan" value="Unlimited Plan" defaultChecked />
                                                </div>
                                            </div>
                                            <div className="plan-icon-text text-center">
                                                <div className="plan-icon">
                                                    <i className="fas fa-cubes"></i>
                                                </div>
                                                <div className="plan-text">
                                                    <h3>Limited Plan</h3>
                                                    <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
                                                    <input type="radio" name="your_plan" value="Unlimited Plan" />
												</div>
                                                </div>
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
                                                <textarea name="extra-message" placeholder="Some Note"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="actions">
                                <ul>
                                    <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                                    <li><button type="submit" title="NEXT">SUBMIT <i className="fa fa-arrow-right"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default StepFive;