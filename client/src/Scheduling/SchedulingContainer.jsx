import React from 'react'
import '../css/Scheduling/SchedulingContainer.css'
import Toolbar from './Toolbar/Toolbar';
import ScheduleView from './ScheduleView/ScheduleView';

function SchedulingContainer() {
  return (
    <div className='scheduling-container'>
      { <Toolbar /> }
      { <ScheduleView /> }
    </div>
  )
}

export default SchedulingContainer;