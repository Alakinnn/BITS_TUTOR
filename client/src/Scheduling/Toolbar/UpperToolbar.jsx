import React, { useEffect } from "react";
import { useState } from "react";
import "../../css/Scheduling/Toolbar/UpperToolbar.css";
import request from "/images/request.png";
import user from "/src/assets/footer/circle.svg";
import { useSelector } from "react-redux";
import { selectRequestList } from "../../slices/requestListSlice";

const UpperToolbar = ({ setSelectedRequest, role }) => {
  // console.log(requestList)
  // const [showRequests, setShowRequests] = useState(true);
  // const hideRequests = () => {
  //   setShowRequests(!showRequests);
  // const [showRequests, setShowRequests] = useState(false);

  // Select the requestList from the store
  const requestList = useSelector(selectRequestList);
  // console.log("Request list: ",requestList);

  // Return the request by id from the requestList
  const getRequestByKey = (key) => {
    let selectedRequest = requestList.find((request) => request._id === key);
    setSelectedRequest(selectedRequest);
  };

  const renderRequestList = (requestList) => {
    // Map over the filtered list and render the components
    return requestList.map((request) => (
      <li
        className="dropdown_item"
        onClick={() => getRequestByKey(request._id)}
      >
        <span className="dropdown_text">
          <div className="left_column">
            <img src={user} alt=""></img>
          </div>
          <div className="right_column">
            <div className="student_name">{request?.student?.username}</div>
            <div className="course_name">{request.title}</div>
            <div className="meet_duration">
              {formatDate(request.startTime)} to {formatDate(request.endTime)}
            </div>
          </div>
        </span>
      </li>
    ));
  };

  const renderRequestListByStatus = (requestList, status) => {
    // Filter the requestList by status
    let newRequestList = requestList.filter((request) => {
      return request.status === status;
    });
    // Map over the filtered list and render the components
    return newRequestList.map((request) => (
      <li
        className="dropdown_item"
        onClick={() => getRequestByKey(request._id)}
      >
        <span className="dropdown_text">
          <div className="left_column">
            <img src={user} alt=""></img>
          </div>
          <div className="right_column">
            <div className="student_name">{request?.student?.username}</div>
            <div className="course_name">{request.title}</div>
            <div className="meet_duration">
              {formatDate(request.startTime)} to {formatDate(request.endTime)}
            </div>
          </div>
        </span>
      </li>
    ));
  };
  switch (role) {
    case "tutor":
      return (
        <div className="toolbar-menu">
          {/* toolbar request */}
          <div className="toolbar-requests">
            {/* <!-- view request --> */}
            <div className="toolbar-dropdown">
              <div className="dropdown_select">
                <span className="dropdown_selected">
                  <button className="view-request">
                    <img
                      className="icon"
                      src={request}
                      alt="View Requests Icon"
                    ></img>
                    View Request
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                  </button>
                </span>
              </div>
            </div>
            <div className="toolbar-requests-dropdown">
              {/* <!-- Request notification --> */}
              <ul className="dropdown_list">
                {renderRequestList(requestList)}
              </ul>
            </div>
          </div>
        </div>
      );

    case "student":
      return (
        <div className="toolbar-menu">
          {/* toolbar request */}
          <div className="toolbar-requests">
            {/* <!-- Pending Requests --> */}
            <div className="dropdown">
              <div className="dropdown_select">
                <span className="dropdown_selected">
                  <button className="view-request">
                    <img
                      className="icon"
                      src={request}
                      alt="View Requests Icon"
                    ></img>
                    Pending Requests
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                  </button>
                </span>
              </div>
            </div>
            <div className="toolbar-requests-dropdown">
              {/* <!-- Request notification --> */}
              <ul className="dropdown_list pending">
                {renderRequestListByStatus(requestList, "pending")}
              </ul>
            </div>
            {/* <!-- Accepted Requests --> */}
            <div className="dropdown">
              <div className="dropdown_select">
                <span className="dropdown_selected">
                  <button className="view-request">
                    <img
                      className="icon"
                      src={request}
                      alt="View Requests Icon"
                    ></img>
                    Accepted Requests
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                  </button>
                </span>
              </div>
            </div>
            <div className="toolbar-requests-dropdown">
              {/* <!-- Request notification --> */}
              <ul className="dropdown_list accepted">
                {renderRequestListByStatus(requestList, "approved")}
              </ul>
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
};

const formatDate = (dateString) => {
  // Convert the date string into a Date object
  let dateObj = new Date(dateString);
  // Get the time portion of the Date object
  const timeString = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Determine if it's AM or PM
  const period = dateObj.getHours() < 12 ? "am" : "pm";

  // Format the final time string
  const formattedTime = `${timeString}${period}`;

  return formattedTime;
};

export default UpperToolbar;
