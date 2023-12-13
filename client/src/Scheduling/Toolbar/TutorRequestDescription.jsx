import React, { useState, useEffect } from "react";
import user from "/src/assets/footer/circle-user.svg";
import "../../css/Scheduling/Toolbar/RequestDescription.css";
import { useDispatch } from "react-redux";
import { renderRequestList } from "../../slices/requestListSlice";
import { getRequests } from "../TutorScheduling";
import { ApproveRequest } from "./RequestFunctions/ApproveRequest";
import { DenyRequest } from "./RequestFunctions/DenyRequest";

function TutorRequestDescription({ selectedRequest }) {
  // const renderDescription = (requestList) => {
  //     return requestList.map
  // }
  const dispatch = useDispatch();
  const [renderObject, setRenderObject] = useState(null);
  useEffect(() => {
    // prevent student username for null and/or undefine
    const studentUsername = selectedRequest?.student?.username;
    console.log("Selected request: ", selectedRequest);

    if (studentUsername) {
    console.log(studentUsername);
    } else {
    console.log('Student username is not available.');
    }


    setRenderObject(
        <div className="toolbar-description">
          <div className="description-user-profile">
            <img className="picture-user" src={user} alt="circle" />
            <div className="student-info">
              <div className="subject">{selectedRequest.title}</div>
              <div className="status">
                <div className="user-name">{studentUsername}</div>
                <div className="current-time">2 minutes ago</div>
              </div>
            </div>
          </div>

          {/* description time */}
          <div className="description-time">
            <div className="request-date">Wednesday, December 6th</div>

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
            <button onClick={async () => {
              await ApproveRequest(selectedRequest?._id)
              // remove the request from the list
              dispatch(renderRequestList(await getRequests(
                role, 
                role === "tutor" ? tutorId : studentId
                )));
              console.log("After approve")
            }} className="approve">Approve</button>
            <button className="decline" onClick={async () => {
              await DenyRequest(selectedRequest?._id)
              // remove the request from the list
              dispatch(renderRequestList(await getRequests(role, role === "tutor" ? tutorId : studentId)));
            }}>Decline</button>
          </div>
        </div>
    );

  }, [selectedRequest]);
  return ( 
    <>
        {renderObject}
    </>
     );
}
const formatDate = (dateString) => {
  // Convert the date string into a Date object
  let dateObj = new Date(dateString);
  // Get the time portion of the Date object
  const timeString = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return timeString;
};

export default TutorRequestDescription;
