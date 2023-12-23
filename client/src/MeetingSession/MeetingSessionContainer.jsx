import React from "react";
import "../css/InfoInterface.css";
import heading from "/src/assets/footer/circle.svg";
import testImg1 from "/src/assets/footer/circle-small.svg";
import date from "/src/assets/footer/calendar.svg";
import time from "/src/assets/footer/calendar-clock.svg";
import waiting from "/src/assets/footer/loading.svg";
import user from "/src/assets/footer/circle-user.svg";
import ButtonsSessions from "./Buttons/ButtonsSessions";
import EndSession from "./Buttons/EndSession";
import InputUrl from "./Buttons/InputUrl";
function MeetingSessionContainer({role, renderData, ssActive, joinSessionFunction, joinLiveCodingFunction, handleChangeFunction, startSessionFunction, endSessionFunction}) {
  return (
    <div className="meetingSession">
      <div className="meetingInfo">
        <div className="line title">
          {/* <img className="pictureTitle" src={heading} alt="circle" /> */}
          <p className="heading">{renderData.title}Meeting</p>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={date} alt="circle" />
          <p className="date">date{renderData.startTime}</p>
        </div>
        <div className="line description">
          <img className="pictureTitle" src={time} alt="circle" />
          <p className="time">time{renderData.description}</p>
        </div>
        <div className="line accessToURLs">
          <img className="pictureTitle" src={waiting} alt="circle" />
          {role == 'tutor' ? (
            ssActive? (
              <EndSession
                joinSessionFunction={joinSessionFunction}
                endSessionFunction={endSessionFunction}
              />
            ) : (
              <InputUrl
                handleChangeFunction={handleChangeFunction}
                startSessionFunction={startSessionFunction}
              />
            )
          ) : (
            ssActive == 'active' ? (
              <ButtonsSessions
                joinSessionFunction = {joinSessionFunction}
                joinLiveCodingFunction = {joinLiveCodingFunction}
              />
            ) : (
                <p className="textNotice">Sessions has not started or has been</p>
            )
          ) 
          }


          {/* <div className="buttons">
            <input type="url" placeholder="Live Share URL" />
            <button className="blueButton">Start Session</button>
          </div> */}

          {/* <EndSession/> */}


        </div>
      </div>
      <div className="meetingParticipants">
        <p className="participants">Participants:</p>
        <div className="participant student">
          <img className="pictureTitle" src={user} alt="circle" />
          <p className="name-users">{renderData.tutorId}student</p>
        </div>
        <div className="participant tutor">
          <img className="pictureTitle" src={user} alt="circle" />
          <p className="name-users">{renderData.studentId}tutor.</p>
        </div> 
      </div>
    </div>
  );
}

export default MeetingSessionContainer;
