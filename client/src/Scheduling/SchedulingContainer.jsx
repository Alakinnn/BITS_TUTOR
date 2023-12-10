import React from 'react'
import { useState, useEffect } from 'react';
import '../css/Scheduling/SchedulingContainer.css'
import Toolbar from './Toolbar/Toolbar';
import ScheduleView from './ScheduleView/ScheduleView';
import { getTutorSessions } from './TutorScheduling';

function SchedulingContainer() {
  const [sessions, setSessions] = useState({});
  useEffect(() => {
    setSessions(getTutorSessions());
  }, []);
  return (
    <div className='scheduling-container'>
      { <Toolbar /> }
      { <ScheduleView
        sessionList={sessions}
      /> }
    </div>
  )
}

export default SchedulingContainer;