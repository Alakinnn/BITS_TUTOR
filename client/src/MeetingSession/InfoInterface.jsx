import React from "react";
import "../css/InfoInterface.css";
import testImg from "/src/assets/footer/circle.svg";
import testImg1 from "/src/assets/footer/circle-small.svg";
import user from "/src/assets/footer/circle-user.svg";
import ButtonsSessions from "./Buttons/ButtonsSessions";
import EndSession from "./Buttons/EndSession";
import InputUrl from "./Buttons/InputUrl";
function InfoInterface({role, renderData, ssActive, joinSessionFunction, joinLiveCodingFunction, handleChangeFunction, startSessionFunction, endSessionFunction}) {
  console.log(renderData);
  return (
    <div className="meetingSession">
      <div className="meetingInfo">
        <div className="line title">
          <img className="pictureTitle" src={testImg} alt="circle" />
          <h1>{renderData.title}</h1>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={testImg1} alt="circle" />
          <h4>{renderData.startTime}</h4>
        </div>
        <div className="line description">
          <img className="pictureTitle" src={testImg1} alt="circle" />
          <h4>{renderData.description}</h4>
        </div>
        <div className="line accessToURLs">
          <img className="pictureTitle" src={testImg1} alt="circle" />
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
            ssActive ? (
              <ButtonsSessions
                joinSessionFunction = {joinSessionFunction}
                joinLiveCodingFunction = {joinLiveCodingFunction}
              />
            ) : (
              <h4 className="textNotice">Sessions has not started yet</h4>
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

export default InfoInterface;
