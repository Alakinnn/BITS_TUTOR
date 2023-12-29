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
  // Only enable when time comes
  // request session data from backend

  const [session, setSession] = useState({});

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/session/${sessionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      `${BASE_URL}/session/${sessionId}/join`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    InitZoom(response.data.session, "student");
  };

  const joinLiveCoding = () => {
    if (session.liveShareUrl) {
      // Redirect to live share URL
      window.open(session.liveShareUrl, "_blank");
    }
  };

  const handleCancelSession = async () => {
    const response = await axios.post(
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
