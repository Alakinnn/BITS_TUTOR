import React, { useEffect } from "react";
import "../css/InfoInterface.css";
import date from "../assets/footer/calendar.svg";
import time from "../assets/footer/calendar-clock.svg";
import waiting from "../assets/footer/loading.svg";
import user from "../assets/footer/circle-user.svg";
import calendar from "../assets/footer/calendar-days.svg";
import note from "../assets/footer/description.svg";
import ButtonsSessions from "./Buttons/ButtonsSessions";
import EndSession from "./Buttons/EndSession";
import InputUrl from "./Buttons/InputUrl";
import CancelSession from "./Buttons/CancelSession";
import {
  formatDate,
  extractDate,
} from "../Scheduling/Toolbar/RequestFunctions/DateTimeFormat";
import { Link } from "react-router-dom";
function MeetingSessionContainer({
  role,
  renderData,
  ssActive,
  joinSessionFunction,
  joinLiveCodingFunction,
  handleChangeFunction,
  startSessionFunction,
  endSessionFunction,
  handleCancelSession,
}) {
  return (
    <div className="meetingSession">
      <div className="meetingInfo">
        <div className="line title">
          {/* <img className="pictureTitle" src={heading} alt="circle" /> */}
          <p className="heading">{renderData.title}</p>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={calendar} alt="circle" />
          <p className="date"><strong>Date:</strong>{extractDate(renderData.startTime)}</p>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={time} alt="circle" />
          <p className="date"><strong>Start:</strong>{formatDate(renderData.startTime)}</p>
          <p className="date"><strong>End:</strong> {formatDate(renderData.endTime)}</p>
        </div>
        <div className="line description">
          <img className="pictureTitle" src={note} alt="circle" />
          <p className="time"><strong>Description:</strong> {renderData.description}</p>
        </div>
        <div className="line accessToURLs">
          <img className="pictureTitle" src={waiting} alt="circle" />
          {role == "tutor" ? (
            ssActive == "active" ? (
              <EndSession
                joinSessionFunction={joinSessionFunction}
                endSessionFunction={endSessionFunction}
              />
            ) : ssActive == "inactive" ? (
              <InputUrl
                handleChangeFunction={handleChangeFunction}
                startSessionFunction={startSessionFunction}
              />
            ) : ssActive == "completed" ? (
              <p className="textNotice">Sessions has been completed</p>
            ) : (
              <p className="textNotice">Sessions has been cancelled</p>
            )
          ) : ssActive == "active" ? (
            <ButtonsSessions
              joinSessionFunction={joinSessionFunction}
              joinLiveCodingFunction={joinLiveCodingFunction}
            />
          ) : ssActive == "inactive" ? (
            <>
              <p className="textNotice">Sessions has not started</p>
              <CancelSession handleCancelSession={handleCancelSession} />
            </>
          ) : ssActive == "completed" ? (
            <p className="textNotice">Sessions has been completed</p>
          ) : (
            <p className="textNotice">Sessions has been cancelled</p>
          )}
        </div>
      </div>
      <div className="meetingParticipants">
        <p className="participants">Participants:</p>
        {renderData && renderData.tutor && (
          <div className="participant student">
            <Link to={`/tutor/${renderData.tutor._id}`}>
              <img
                className="pictureTitle"
                src={renderData.tutor.profilePicUrl}
                alt="circle"
              />
            </Link>
            <p className="name-users">{renderData.tutor.username}</p>
          </div>
        )}
        {renderData && renderData.student && (
          <div className="participant tutor">
            <Link to={`/student/${renderData.student._id}`}>
              <img
                className="pictureTitle"
                src={renderData.student.profilePicUrl}
                alt="circle"
              />
            </Link>
            <p className="name-users">{renderData.student.username}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MeetingSessionContainer;
