import React from 'react'
import { useState, useEffect } from 'react';
import '../css/Scheduling/SchedulingContainer.css'
import Toolbar from './Toolbar/Toolbar';
import ScheduleView from './ScheduleView/ScheduleView';
import { getTutorSessions, getStudentRequests } from './TutorScheduling';
import { getStudentSessions, getCurrentRequests } from './StudentScheduling';

const role = 'tutor';

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
            sessions = await getTutorSessions();
            requests = await getStudentRequests();
            break;
          case 'student':
            sessions = await getStudentSessions();
            requests = await getCurrentRequests();
            break;
          default:
            break;
        }
        setSessions(sessions);
        setRequests(requests);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      console.error('Error fetching data:', error);
    }

    
    fetchData();
  }, []);
  return (
    <div className='scheduling-container'>
      { <Toolbar 
        role={role}
        requestList={requests}
      />}
      { <ScheduleView
        sessionList={sessions}
      /> }
    </div>
  )
}

export default SchedulingContainer;