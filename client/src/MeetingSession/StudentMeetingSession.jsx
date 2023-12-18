import { useState, useEffect } from "react";
import axios from "axios";
import InitZoom from "./InitZoom";
import MeetingSessionContainer from "./MeetingSessionContainer";
import "../css/MeetingSession.css";
import { useParams } from "react-router-dom";

// STUDENT
const StudentMeetingSession = () => {
  const sessionId = useParams().parameter;
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
    const response = await axios.get(
      `http://139.59.105.114/api/v1/session/${sessionId}/join`
    );
    console.log(response);
    InitZoom(response.data.session);
  };

  const joinLiveCoding = () => {
    if (session.liveShareUrl) {
      // Redirect to live share URL
      window.open(session.liveShareUrl, "_blank");
    }
  };

  return (
    <>
      {
        <MeetingSessionContainer
          role="student"
          renderData={session}
          ssActive={session.status}
          joinSessionFunction={joinSession}
          joinLiveCodingFunction={joinLiveCoding}
        />
      }

      <div id="meetingSDKElement"></div>
    </>
  );
};
export default StudentMeetingSession;
