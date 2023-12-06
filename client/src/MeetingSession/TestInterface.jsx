import React from "react";
import "../css/TestInterface.css";
import testImg from "/src/assets/footer/circle.svg";
import testImg1 from "/src/assets/footer/circle-small.svg";
import user from "/src/assets/footer/circle-user.svg";
function TestInterface() {
  return (
    <div className="meetingSession">
      <div className="meetingInfo">
        <div className="line title">
          <img className="pictureTitle" src={testImg} alt="circle" />
          <h1>Meeting 1232</h1>
        </div>
        <div className="time line">
          <img className="pictureTitle" src={testImg1} alt="circle" />
          <h4>12:00 pm 12/12/2023</h4>
        </div>
        <div className="line description">
          <img className="pictureTitle" src={testImg1} alt="circle" />
          <h4>Learn React</h4>
        </div>
        <div className="line accessToURLs">
          <img className="pictureTitle" src={testImg1} alt="circle" />
          <div className="buttons">
            <input type="url" placeholder="Live Share URL" />
            <button id="blueButton">Start Session</button>
          </div>
        </div>
      </div>
      <div className="meetingParticipants">
        <h2>Participants:</h2>
        <div className="participant">
          <img className="pictureTitle" src={user} alt="circle" />
          <h4>Participant 1</h4>
        </div>
      </div>
    </div>
  );
}

export default TestInterface;
