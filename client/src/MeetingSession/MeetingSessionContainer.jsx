import React, { useEffect } from "react";
import "../css/InfoInterface.css";
import date from "../assets/footer/calendar.svg";
import time from "../assets/footer/calendar-clock.svg";
import waiting from "../assets/footer/loading.svg";
import user from "../assets/footer/circle-user.svg";
import ButtonsSessions from "./Buttons/ButtonsSessions";
import EndSession from "./Buttons/EndSession";
import InputUrl from "./Buttons/InputUrl";
import CancelSession from "./Buttons/CancelSession";
import {
  formatDate,
  extractDate,
} from "../Scheduling/Toolbar/RequestFunctions/DateTimeFormat";
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
          <img className="pictureTitle" src={time} alt="circle" />
          <p className="date">Date: {extractDate(renderData.startTime)}</p>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={time} alt="circle" />
          <p className="date">Start: {formatDate(renderData.startTime)}</p>
          <p className="date">End: {formatDate(renderData.endTime)}</p>
        </div>
        <div className="line description">
          <img className="pictureTitle" src={date} alt="circle" />
          <p className="time">Description: {renderData.description}</p>
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
            <img className="pictureTitle" src={user} alt="circle" />
            <p className="name-users">{renderData.tutor.username}</p>
          </div>
        )}
        {renderData && renderData.student && (
          <div className="participant tutor">
            <img className="pictureTitle" src={user} alt="circle" />
            <p className="name-users">{renderData.student.username}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MeetingSessionContainer;
