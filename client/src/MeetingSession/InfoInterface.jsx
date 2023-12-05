import React from 'react'
import TutorMeetingSession from './TutorMeetingSession'

function InfoInterface() {
  return (
    <div>
        <div className="headTitle">
            <div className="container">
            <div className="opacity"></div>
              <img className="hinddenPic" src="" alt="" />
              <h2>Meeting 68757</h2>
            </div>
  
            <div className="imgBox">
              <div className="student">
                <a href="/student">
                  <img className="studentImg" src="" alt="student" />
                </a>
                <p>Name</p>
              </div>
              <div className="tutor">
                <a href="/tutor">
                  <img
                    className="tutorImg"
                    src={"src/assets/footer/linkIn.svg"}
                    alt="tutor"
                    onClick={TutorMeetingSession}
                  />
                </a>
                <p>Name</p>
              </div>
            </div>
          </div>
  
          <div className="infoDate">
            <h3 className="title">Date :</h3>
            <h3 className="text">Mon 09/11/2924</h3>
          </div>
  
          <div className="infoStart">
            <h3 className="title">Start Time :</h3>
            <h3 className="text">12am PCT</h3>
          </div>
  
          <div className="infoEnd">
            <h3 className="title">End Time :</h3>
            <h3 className="text">2am PCT</h3>
          </div>
    </div>
  )
}

export default InfoInterface