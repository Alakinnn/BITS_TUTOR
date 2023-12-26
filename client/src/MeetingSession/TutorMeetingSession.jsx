import { useState, useEffect } from "react";
// import StudentInterface from "./studentInterface";
import axios from "axios";
import InitZoom from "./InitZoom";
import MeetingSessionContainer from "./MeetingSessionContainer";
import "../css/MeetingSession.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../App";
const token = localStorage.getItem("token");

// TUTOR
const TutorMeetingSession = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState({});
  const [sessionActive, setSessionActive] = useState("");

  // declare the data fetching function
  const fetchData = async () => {
    console.log("Token", token);
    console.log("Session ID", sessionId);
    const response = await axios.get(
      `${BASE_URL}/session/${sessionId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setSession(response.data);
    setSessionActive(response.data.status);
  };
  useEffect(() => {
    // call the function
    fetchData();
  }, [sessionId]);

  const [inputUrl, setInputUrl] = useState("");

  const handleChange = (event) => {
    setInputUrl(event.target.value);
  };

  const startSession = async () => {
    //  Send update request to backend
    // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
    const response = await axios.post(
      `${BASE_URL}/session/${sessionId}/start`,
      {
        liveShareUrl: inputUrl,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setInputUrl("");
    window.open(response.data.liveShareUrl);
    setSessionActive("active");
    console.log(response);
    InitZoom(response.data.session);
  };

  const endSession = async () => {
    // Set URL
    // let lastInputUrl = ("");
    //  Send update request to backend
    // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
    const response = await axios.post(
      `${BASE_URL}/session/${sessionId}/end`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    setSessionActive("completed");
  };

  return (
    <>
      {
        <MeetingSessionContainer
          role="tutor"
          renderData={session}
          ssActive={sessionActive}
          joinSessionFunction={() => InitZoom(session)}
          handleChangeFunction={handleChange}
          startSessionFunction={startSession}
          endSessionFunction={endSession}
        />
      }

      <div id="meetingSDKElement"></div>
    </>
  );
};
export default TutorMeetingSession;
