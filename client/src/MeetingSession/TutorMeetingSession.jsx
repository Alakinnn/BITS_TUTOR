import { useState, useEffect } from "react";
// import StudentInterface from "./studentInterface";
import axios from "axios";
import InitZoom from "./InitZoom";
import MeetingSessionContainer from "./MeetingSessionContainer";
import "../css/MeetingSession.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../App";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const token = localStorage.getItem("token");

// TUTOR
const TutorMeetingSession = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState({});
  const [sessionActive, setSessionActive] = useState("");

  // declare the data fetching function
  const fetchData = async () => {
    const response = await axios.get(
      `${BASE_URL}/session/${sessionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
    if (
      !inputUrl.startsWith("https://prod.liveshare.vsengsaas.visualstudio.com")
    ) {
      window.alert("Invalid Live Share Url");
      return;
    }
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
    window.open(response.data.session.liveShareUrl, "_blank");
    setSessionActive("active");
    InitZoom(response.data.session);
  };

  const endSession = async () => {
    const response = await axios.post(
      `${BASE_URL}/session/${sessionId}/end`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSessionActive("completed");
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default TutorMeetingSession;
