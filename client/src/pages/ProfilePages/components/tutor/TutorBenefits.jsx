import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBProgressBar,
    MDBProgress,

    MDBCardText,
    MDBContainer,
} from "mdb-react-ui-kit";

function TutorBenefits() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Tutor</span>{" "}
          Benefits
        </MDBCardText>
        
        
          <div >
            <div className="row justify-content-center">
              <div className="col-md-100 col-lg-100 col-xl-100">
                <div className="card text-black">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title">$10.50/Hr</h5>
                      <p className="text-muted mb-4">You will get these experience:</p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <span>Java</span><span></span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Imps</span><span>Imps</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Imps</span><span>Imps</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
      </MDBCardBody>
    </MDBCard>
    
  );
}

export default TutorBenefits;
