import React from "react";
import { useState } from "react";
import user from "/src/assets/footer/circle-user.svg";
import "../../css/Scheduling/Toolbar/ToolbarRequest.css";
import BookingSession from "./BookingSession";
import {
  convertTimeToString,
  convertStringToDateTime,
  checkTimeAhead,
} from "./RequestFunctions/DateTimeFormat";
import { GetTutorInfo } from "./RequestFunctions/GetTutorInfo";
import { Link } from "react-router-dom";

const StudentCreateRequest = ({
  tutorId,
  studentId,
  submitCounter,
  setSubmitCounter,
}) => {
  const [removeClass, setRemoveClass] = useState(false);
  const [tutor, setTutor] = useState(null);
  const defaultRequest = {
    title: "",
    description: "",
    tutorId: tutorId,
    studentId: studentId,
    startTime: "",
    endTime: "",
    timezone: "Asia/Saigon",
  };
  const [request, setRequest] = useState(defaultRequest);

  const handleChange = (e) => {
    if (e.target.name === "startTime" || e.target.name === "endTime") {
      const { name } = e.target;
      const { value } = convertTimeToString(e.target.value);
      setRequest((prevRequest) => ({
        ...prevRequest,
        [name]: value,
      }));
    }
    const { name, value } = e.target;
    setRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  };

  const showDescription = () => {
    setRemoveClass(!removeClass);
    GetTutorInfo(tutorId, setTutor);
  };
  return (
    <>
      <button
        className="bookingSession"
        onClick={() =>
          tutorId != "me"
            ? showDescription()
            : (window.location.href = "/search")
        }
      >
        Send Request
      </button>
      <div className={`toolbar-description ${removeClass ? "" : "invisible"}`}>
        <div className="description-user-profile">
          <Link to={`/tutor/${tutorId}`}>
            <img
              className="picture-user"
              src={tutor != null ? tutor.profilePicUrl : { user }}
              alt="circle"
            />
          </Link>
          <div className="addingTitle">
            <input
              type="text"
              value={request.title}
              name="title"
              placeholder="Add a title"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* description time */}
        <div className="description-time">
          <div className="settingTime">
            <div className="from">
              <p>From:</p>
              <input
                type="datetime-local"
                value={request.startTime}
                name="startTime"
                onChange={handleChange}
              />
            </div>

            <div className="to">
              <p>To:</p>
              <input
                type="datetime-local"
                value={request.endTime}
                name="endTime"
                onChange={handleChange}
                min={request.startTime}
              />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="inputContent">
          <input
            className="input-content"
            value={request.description}
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="What would you like to learn about?"
          />
        </div>

        {/* buttons */}
        <div className="buttonRequest">
          <BookingSession
            request={request}
            setRequest={setRequest}
            defaultRequest={defaultRequest}
            submitCounter={submitCounter}
            setSubmitCounter={setSubmitCounter}
          />
        </div>
      </div>
    </>
  );
};

export default StudentCreateRequest;
