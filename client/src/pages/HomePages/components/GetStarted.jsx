import React from 'react'
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { MDBCol } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

const GetStarted = () => {
  return (
    <>
      <MDBRow className='d-flex flex-lg-row flex-column my-5 px-5 align-items-center justify-content-between gap-lg-0 ml-lg-5'> 
        <MDBCol className="col-lg-4 col-3 col-12 pe-0 pe-lg-5">
          <h2 className='text-uppercase'>online tutor for private lessons</h2>
          <h6 className='badge badge-dark'>
            <p></p>
          </h6>
          <p>Looking for a private tutor? Contact Us!</p>
          <div>
            <MDBBtn className='btn-outline-dark btn-light btn-lg mb-3'>Get Started</MDBBtn>
          </div>
          
          <h6 className='badge badge-dark'>
            <p></p>
          </h6>
          <hr className="hr hr-blurry" />
          <hr className="hr" />
        </MDBCol>
        
      </MDBRow>
      
    </>
  )
}

export default GetStarted
