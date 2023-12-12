import React from 'react'

import {
    MDBCard, 
    MDBCardBody,
    MDBCardImage,
    
} from "mdb-react-ui-kit";
const StudentPublicUserCard = () => {
  return (
    <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: "150px" }}
                                    fluid
                                />
                                <p className="text-muted mb-3">PHUNG QUOC CHIEN(STUDENT)</p>
        

                                <div className="d-flex justify-content-center mb-2">
                                    
                                </div>
                            </MDBCardBody>
                        </MDBCard> 
  )
}

export default StudentPublicUserCard