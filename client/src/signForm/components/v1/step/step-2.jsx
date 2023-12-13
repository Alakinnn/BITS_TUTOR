import React from "react";

class StepTwo extends React.Component {
    render() {
        return (
                <div className="multisteps-form__panel" data-animation="slideHorz">
                    {/* div 2 */}
                    <div className="wizard-forms">
                        <div className="inner pb-100 clearfix">
                            <div className="form-content pera-content">
                                <div className="step-inner-content">
                                    <span className="step-no bottom-line">Step 2</span>
                                    <div className="step-progress float-right">
                                        <span>2 of 5 completed</span>
                                        <div className="step-progress-bar">
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>What kind of services you are quiz?</h2>
                                    <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>

                                    <div className="form-inner-area">
                                        <input type="text" name="full_name" className="form-control required" minLength="2" placeholder="First and last name *" required />
                                        <input type="email" name="email" className="form-control required" placeholder="Email Address *" required />
                                        <input type="text" name="phone" placeholder="Phone" />
                                    </div>
                                    <div className="gender-selection">
                                        <h3>Gender:</h3>
                                        <label>
                                            <input type="radio" name="gender" value="Male" />
                                            <span className="checkmark"></span>Male
										</label>
                                        <label>
                                            <input type="radio" name="gender" value="Female" />
                                            <span className="checkmark"></span>Female
										</label>
                                    </div>
                                    <div className="upload-documents">
                                        <h3>Upload Documents:</h3>
                                        <div className="upload-araa bg-white">
                                            <input type="hidden" value="" name="fileContent" id="fileContent" />
                                            <input type="hidden" value="" name="filename" id="filename" />
                                            <div className="upload-icon float-left">
                                                <i className="fas fa-cloud-upload-alt"></i>
                                            </div>
                                            <div className="upload-text">
                                                <span>( File accepted: pdf. doc/ docx -
												Max file size : 150kb for demo limit )</span>
                                            </div>
                                            <div className="upload-option text-center">
                                                <label htmlFor="attach">Upload The Documents</label>
                                                <input id="attach" style={{display : 'none'}} type="file" />
											</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/*<!-- /.inner -->*/}
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

export default StepTwo;