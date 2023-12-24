import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Scheduling/SchedulingContainer.css";
import Toolbar from "./Toolbar/Toolbar";
import ScheduleView from "./ScheduleView/ScheduleView";
import {
  renderRequestList,
  selectRequestList,
} from "../slices/requestListSlice";
import {
  getTutorSessions,
  getStudentRequests,
  getRequests,
} from "./TutorScheduling";
import { getStudentSessions, getCurrentRequests } from "./StudentScheduling";
import { useAuth } from "../contexts/AuthContext";

function SchedulingContainer() {
  const { user } = useAuth();
  const role = user.role;
  const userId = user._id;
  const dispatch = useDispatch();
  const requests = useSelector(selectRequestList);
  const [sessions, setSessions] = useState([]);
  const renderRequest = async () => {
    let renderedRequestList = await getRequests(role, userId);

    dispatch(renderRequestList(renderedRequestList));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let sessionValues = [];
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
        await renderRequest();
        setSessions(sessionValues);
        // console.log("Received sessions", sessions);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="scheduling-container">
      <Toolbar
        role={role}
        requestList={requests}
        tutorId={userId}
        studentId={userId}
      />
      <ScheduleView sessionList={sessions} role={role} />
    </div>
  );
}

export default SchedulingContainer;
