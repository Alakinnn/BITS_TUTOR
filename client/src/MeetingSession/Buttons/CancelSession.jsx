import React from "react";

function CancelSession({ handleCancelSession }) {
  return (
    <div className="buttons">
      <button
        className="cancelSession"
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
