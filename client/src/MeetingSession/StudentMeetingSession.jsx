import { useState, useEffect } from "react";
import axios from "axios";
import InitZoom from "./InitZoom";
import MeetingSessionContainer from "./MeetingSessionContainer";
import { BASE_URL } from "../App";
import "../css/MeetingSession.css";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const token = localStorage.getItem("token");

// STUDENT
const StudentMeetingSession = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/session/${sessionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSession(response.data);
    };

    fetchData().catch(console.error);
  }, []);

  const joinSession = async () => {
    const response = await axios.get(
      `${BASE_URL}/session/${sessionId}/join`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    InitZoom(response.data.session, "student");
  };

  const joinLiveCoding = () => {
    if (session.liveShareUrl) {
      window.open(session.liveShareUrl, "_blank");
    }
  };

  const handleCancelSession = async () => {
    await axios.post(
      `${BASE_URL}/session/${sessionId}/cancel`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <>
      <Header />
      {
        <MeetingSessionContainer
          role="student"
          renderData={session}
          ssActive={session.status}
          joinSessionFunction={joinSession}
          joinLiveCodingFunction={joinLiveCoding}
          handleCancelSession={handleCancelSession}
        />
      }

      <div id="meetingSDKElement"></div>
      <Footer />
    </>
  );
};

export default StudentMeetingSession;
