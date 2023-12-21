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
          <img className="pictureTitle" src={heading} alt="circle" />
          <h1>{renderData.title}</h1>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={date} alt="circle" />
          <h4>{renderData.startTime}</h4>
        </div>
        <div className="line description">
          <img className="pictureTitle" src={time} alt="circle" />
          <h4>{renderData.description}</h4>
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
                <h4 className="textNotice">Sessions has not started or has been</h4>
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
        <h2>Participants:</h2>
        <div className="participant student">
          <img className="pictureTitle" src={user} alt="circle" />
          <h4>{renderData.tutorId}</h4>
        </div>
        <div className="participant tutor">
          <img className="pictureTitle" src={user} alt="circle" />
          <h4>{renderData.studentId}</h4>
        </div> 
      </div>
    </div>
  );
}

export default MeetingSessionContainer;
