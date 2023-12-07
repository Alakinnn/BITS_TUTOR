import { useState, useEffect } from "react";
import axios from "axios";
import InitZoom from "./InitZoom";
import InfoInterface from "./InfoInterface";
import "../css/MeetingSession.css";

const sessionId = "6570540f7e4a31100b3bca08"; // This is a fake ID, will have to implement scheduling feature

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
    InitZoom(response.data.session);
  };

  const joinLiveCoding = () => {
    if (session.liveShareUrl) {
      // Redirect to live share URL
      window.open(session.liveShareUrl, "_blank");
    }
  }

  return (
    <>
      {<InfoInterface
            role = 'student'
            renderData={session}
            ssActive = {session.status}
            joinSessionFunction = {joinSession}
            joinLiveCodingFunction={joinLiveCoding}
          />}
    </>
  );
};
export default StudentMeetingSession;
