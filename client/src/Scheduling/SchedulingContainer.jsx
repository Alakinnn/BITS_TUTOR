import React from "react";
import { useState, useEffect } from "react";
import "../css/Scheduling/SchedulingContainer.css";
import Toolbar from "./Toolbar/Toolbar";
import ScheduleView from "./ScheduleView/ScheduleView";
import Header from "/src/components/header/Header";
import Footer from "/src/components/footer/Footer";


import {
  getTutorSessions,
  getStudentRequests,
  getRequests,
} from "./TutorScheduling";
import { getStudentSessions, getCurrentRequests } from "./StudentScheduling";
import { useAuth } from "../contexts/AuthContext";
import { useCallback } from "react";
import { useParams } from "react-router-dom";

function SchedulingContainer() {
  const { tutorId } = useParams();
  const { user } = useAuth();
  const role = user.role;
  const userId = user._id;
  // const requests = useSelector(selectRequestList);
  // console.log("Request list: ", requests);
  const [sessions, setSessions] = useState([]);
  const [requests, setRequests] = useState([]);
  const [submitCounter, setSubmitCounter] = useState(0);

  const fetchData = async () => {
    try {
      let sessionValues = [];
      let requestValues = [];
      switch (role) {
        case "tutor":
          sessionValues = await getTutorSessions(userId);
          break;
        case "student":
          sessionValues = await getStudentSessions(userId);
          break;
        default:
          break;
      }
      requestValues = await getRequests(role, userId);
      setSessions(sessionValues);
      setRequests(requestValues);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [submitCounter]);

  return (
    <>
    <Header />
    <div className="scheduling-container">
      <Toolbar
        role={role}
        tutorId={tutorId}
        studentId={userId}
        requestList={requests}
        submitCounter={submitCounter}
        setSubmitCounter={setSubmitCounter}
      />
      <ScheduleView sessionList={sessions} role={role} />
    </div>
     <Footer />
     </>
  );
}

export default SchedulingContainer;
