import React, { useEffect } from "react";
import { useState } from "react";
import "../../css/Scheduling/Toolbar/UpperToolbar.css";
import requestImg from "/images/request.png";
import user from "/src/assets/footer/circle.svg";
import { useSelector } from "react-redux";
import { selectRequestList } from "../../slices/requestListSlice";
import { formatDate } from "./RequestFunctions/DateTimeFormat";

const UpperToolbar = ({ setSelectedRequest, role, requestList }) => {
  // Return the request by id from the requestList
  const getRequestByKey = (key) => {
    let selectedRequest = requestList.find((request) => request._id === key);
    setSelectedRequest(selectedRequest);
  };

  const renderRequestList = (requestList) => {
    // No console log in this function
    // Map over the filtered list and render the components
    return requestList.map((request) => (
      <li
        className="dropdown_item"
        onClick={() => getRequestByKey(request._id)}
      >
        <span className="dropdown_text">
          <div className="left_column">
            <img
              src={
                // role == "student"
                //   ? request.tutor.profilePicUrl
                //   : request.student.profilePicUrl
                request.student.profilePicUrl
              }
              alt=""
            ></img>
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
            <img
              src={
                // role == "student"
                //   ? request.tutor.profilePicUrl
                //   : request.student.profilePicUrl
                request.student.profilePicUrl
              }
              alt=""
            ></img>
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
                      src={requestImg}
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
                      src={requestImg}
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
          </div>
        </div>
      );
    default:
      break;
  }
};

export default UpperToolbar;
