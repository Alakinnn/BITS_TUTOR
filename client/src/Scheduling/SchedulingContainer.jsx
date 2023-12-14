import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Scheduling/SchedulingContainer.css";
import Toolbar from "./Toolbar/Toolbar";
import ScheduleView from "./ScheduleView/ScheduleView";
import { renderRequestList, selectRequestList } from "../slices/requestListSlice";
import { getTutorSessions, getStudentRequests, getRequests } from "./TutorScheduling";
import { getStudentSessions, getCurrentRequests } from "./StudentScheduling";

const role = "student";
const studentId = "656f616650d0394bfa76feb0";
const tutorId = "656f614ac37e79091ef39474"; //This can be either the user's id or the targeted tutor's id (when student click on a tutor's profile)

function SchedulingContainer() {
  const dispatch = useDispatch();
  const requests = useSelector(selectRequestList);
  const [sessions, setSessions] = useState([]);
  const renderRequest = async () => {
    let renderedRequestList = await getRequests(role, role === "tutor" ? tutorId : studentId);

    dispatch(
      renderRequestList(renderedRequestList)
    );

  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let sessionValues = [];
        switch (role) {
          case "tutor":
            sessionValues = await getTutorSessions(tutorId);
            break;
          case "student":
            sessionValues = await getStudentSessions(studentId);
            break;
          default:
            break;
        }
        await renderRequest();
        setSessions(sessionValues);
        // console.log("Received sessions", sessions);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [requests]);
  return (
    <div className="scheduling-container">
      <Toolbar
        role={role}
        requestList={requests}
        tutorId={tutorId}
        studentId={studentId}
      />
      <ScheduleView sessionList={sessions} />
    </div>
  );
}

export default SchedulingContainer;
