import React from 'react'
import { useState, useEffect } from 'react';
import '../css/Scheduling/SchedulingContainer.css'
import Toolbar from './Toolbar/Toolbar';
import ScheduleView from './ScheduleView/ScheduleView';
import { getTutorSessions, getStudentRequests } from './TutorScheduling';
import { getStudentSessions, getCurrentRequests } from './StudentScheduling';


const role = 'tutor';
const studentId ='656f616650d0394bfa76feb0'
const tutorId ='656f614ac37e79091ef39474' //This can be either the user's id or the targeted tutor's id (when student click on a tutor's profile)


function SchedulingContainer() {
  const [sessions, setSessions] = useState([]);
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let sessions = [];
        let requests = [];
        switch (role) {
          case 'tutor':
            sessions = await getTutorSessions(tutorId);
            let allRequests = await getStudentRequests(tutorId);
            
            // Filter the requestList to include only "pending" requests
            requests = allRequests.filter((request) => request.status === "pending");
            break;
          case 'student':
            sessions = await getStudentSessions(studentId);
            requests = await getCurrentRequests(studentId);
            break;
          default:
            break;
        }
        setSessions(sessions);
        setRequests(requests);
      } catch (error) {
        console.log.error('Error fetching data:', error);
      }
    }

    
    fetchData();
  }, []);
  return (
    <div className='scheduling-container'>
      { <Toolbar 
        role={role}
        requestList={requests}
        tutorId={tutorId}
        studentId={studentId}
      />}
      { <ScheduleView
        sessionList={sessions}
      /> }
    </div>
  )
}

export default SchedulingContainer;