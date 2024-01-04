import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";
function CancelSession({ handleCancelSession }) {
  return (
    <div className="buttons">
      <button
        className="cancelSession btn-dark"
        onClick={async () => {
          await handleCancelSession();
          window.location.reload();
        }}
      >
        Cancel Session
      </button>
    </div>
  );
}

export default CancelSession;
