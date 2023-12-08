import React from 'react'
import '../../css/Scheduling/ScheduleView/ScheduleView.css'
import CalendarSummary from './CalendarSummary'
import CalendarTimeline from './CalendarTimeline'

function ScheduleView() {
    return (
        <div className='schedule-view'>
            {<CalendarSummary/>}
            {<CalendarTimeline/>}
        </div>
    )
}

export default ScheduleView