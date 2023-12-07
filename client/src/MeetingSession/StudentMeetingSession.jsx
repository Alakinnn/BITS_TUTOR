import { useState, useEffect } from "react";
import axios from "axios";
import InitZoom from "./InitZoom";
import InfoInterface from "./InfoInterface";
import "../css/MeetingSession.css";

const sessionId = "6569a1f8c3f228b8ee4b6de0"; // This is a fake ID, will have to implement scheduling feature

// STUDENT
const StudentMeetingSession = () => {
  // Only enable when time comes
  // request session data from backend

  const [session, setSession] = useState({});

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await axios.get(
        `http://139.59.105.114/api/v1/session/${sessionId}`
      );
      console.log(response.data);
      setSession(response.data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // GET({sID: '123'})

  const joinSession = async () => {
    const response = await axios.get(`http://139.59.105.114/api/v1/session/${sessionId}/join`); 
    console.log(response);
    if (response.data.session.liveShareUrl) {
      // Redirect to live share URL
      window.open(response.data.session.liveShareUrl, "_blank");
    }
    InitZoom(response.data.session);
    
  };

  return (
    <>
      <div id="boxContains">
        {<InfoInterface/>}
        {session.status === "active" ? (
          <div>
            <div className="infoEnd">
              <h3 className="title">End Time: </h3>
              <h3 className="text">2am PCT</h3>
            </div>
            <h4 id="message">Session is ongoing</h4>
            <div className="joinSession">
              <button onClick={joinSession}>Join Session</button>
            </div>
          </div>
        ) : (
          <div className="joinSession">
            <h4 id="message">Session has not started yet</h4>
          </div>
        )}
        <div id="meetingSDKElement"></div>
      </div>
    </>
  );
};
export default StudentMeetingSession;
