import React from 'react'
import { useState, useEffect } from 'react';
import '../css/Scheduling/SchedulingContainer.css'
import Toolbar from './Toolbar/Toolbar';
import ScheduleView from './ScheduleView/ScheduleView';
import { getTutorSessions, getStudentRequests } from './TutorScheduling';

const role = 'tutor';

function SchedulingContainer() {
  const [sessions, setSessions] = useState([]);
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
      const sessions = await getTutorSessions()
      const requests = await getStudentRequests()
      setSessions(sessions);
      setRequests(requests);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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