import React from 'react'
import '../css/Scheduling/SchedulingContainer.css'
import Toolbar from './Toolbar';
import ScheduleInterface from './ScheduleView';

function SchedulingContainer() {
  return (
    <>
      { <Toolbar /> }
      { <ScheduleInterface /> }
    </>
  )
}

export default SchedulingContainer;