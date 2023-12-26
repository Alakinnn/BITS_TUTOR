import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  renderRequestList,
  selectRequestList,
} from "../slices/requestListSlice";
import "../css/Scheduling/SchedulingContainer.css";
import Toolbar from "./Toolbar/Toolbar";
import ScheduleView from "./ScheduleView/ScheduleView";

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
  const dispatch = useDispatch();
  const requests = useSelector(selectRequestList);
  // console.log("Request list: ", requests);
  const [sessions, setSessions] = useState([]);

  const renderRequest = async () => {
    let renderedRequestList = await getRequests(role, userId);
    dispatch(renderRequestList(renderedRequestList));
  };

  const fetchData = useCallback(async () => {
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
      setSessions(sessionValues);
      renderRequest();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [dispatch, role, userId]);

  return (
    <div className="scheduling-container">
      <Toolbar role={role} tutorId={tutorId} studentId={userId} />
      <ScheduleView sessionList={sessions} role={role} />
    </div>
  );
}

export default SchedulingContainer;
