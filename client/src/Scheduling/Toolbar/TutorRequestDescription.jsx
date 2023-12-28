import React, { useState, useEffect } from "react";
import "../../css/Scheduling/Toolbar/RequestDescription.css";
import { getRequests } from "../TutorScheduling";
import { ApproveRequest } from "./RequestFunctions/ApproveRequest";
import { DenyRequest } from "./RequestFunctions/DenyRequest";
import { useAuth } from "../../contexts/AuthContext";
import { extractDate, formatDate } from "./RequestFunctions/DateTimeFormat";
import { Link } from "react-router-dom";

function TutorRequestDescription({
  selectedRequest,
  setSelectedRequest,
  role,
  submitCounter,
  setSubmitCounter,
}) {
  const { user } = useAuth();
  const [renderObject, setRenderObject] = useState(null);
  useEffect(() => {
    // prevent student username for null and/or undefine
    const studentUsername = selectedRequest?.student?.username;
    console.log("Selected request: ", selectedRequest);

    if (studentUsername) {
      console.log(studentUsername);
    } else {
      console.log("Student username is not available.");
    }
    console.log("Selected request: ", selectedRequest);
    if (selectedRequest.title == null || selectedRequest == {}) {
      setRenderObject(null);
      return;
    }
    setRenderObject(
      <div className="toolbar-description">
        <div className="description-user-profile">
          <Link to={`/student/${selectedRequest.student._id}`}>
            <img
              className="picture-user"
              src={selectedRequest.student.profilePicUrl}
              alt="circle"
            />
          </Link>

          <div className="student-info">
            <div className="subject">{selectedRequest.title}</div>
            <div className="status">
              <div className="user-name">{studentUsername}</div>
            </div>
          </div>
        </div>

        {/* description time */}
        <div className="description-time">
          <div className="request-date">
            {extractDate(selectedRequest.startTime)}
          </div>

          <div className="time">
            <div className="from">
              <p>From:</p>
              <p className="text">{formatDate(selectedRequest.startTime)}</p>
            </div>

            <div className="to">
              <p>To:</p>
              <p className="text">{formatDate(selectedRequest.endTime)}</p>
            </div>
          </div>
        </div>
        {/* content */}
        <input
          className="input-content"
          type="text"
          placeholder={selectedRequest.description}
          disabled
        />
        {/* buttons */}
        <div className="buttons toolbar-buttons">
          <button
            className="approve"
            onClick={async () => {
              await ApproveRequest({ requestId: selectedRequest?._id });
              setSubmitCounter(submitCounter + 1);
              setSelectedRequest({});
              // console.log("New request list: ", requests);
            }}
          >
            Approve
          </button>
          <button
            className="decline"
            onClick={async () => {
              await DenyRequest({ requestId: selectedRequest?._id });
              setSubmitCounter(submitCounter + 1);
              setSelectedRequest({});
            }}
          >
            Decline
          </button>
        </div>
      </div>
    );
  }, [selectedRequest]);
  return <>{renderObject}</>;
}

export default TutorRequestDescription;
