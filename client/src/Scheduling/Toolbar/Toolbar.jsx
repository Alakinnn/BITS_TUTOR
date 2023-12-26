import React, { useState } from "react";
import "../../css/Scheduling/Toolbar/Toolbar.css";
import TutorRequestDescription from "./TutorRequestDescription";
import StudentCreateRequest from "./StudentCreateRequest";
import UpperToolbar from "./UpperToolbar";
function Toolbar({
  role,
  tutorId,
  studentId,
  requestList,
  setSubmitCounter,
  submitCounter,
}) {
  const [selectedRequest, setSelectedRequest] = React.useState({});
  // console.log(selectedRequest)
  const renderComponentInside = () => {
    switch (role) {
      case "tutor":
        return (
          <>
            <UpperToolbar
              setSelectedRequest={setSelectedRequest}
              role={role}
              requestList={requestList}
            />
            <TutorRequestDescription
              selectedRequest={selectedRequest}
              role={role}
              submitCounter={submitCounter}
              setSubmitCounter={setSubmitCounter}
            />
          </>
        );
      case "student":
        return (
          <>
            <UpperToolbar role={role} requestList={requestList} />
            <StudentCreateRequest
              studentId={studentId}
              tutorId={tutorId}
              submitCounter={submitCounter}
              setSubmitCounter={setSubmitCounter}
            />
          </>
        );

      default:
        return null;
    }
  };
  return <div className="toolbar">{renderComponentInside()}</div>;
}

export default Toolbar;
