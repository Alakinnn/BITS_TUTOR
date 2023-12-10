import React from 'react'
import '../../css/Scheduling/ScheduleView/ScheduleView.css'
import CalendarSummary from './CalendarSummary'
import CalendarTimeline from './CalendarTimeline'

function ScheduleView({sessionList, requestList}) {
    return (
        <div className='schedule-view'>
            {<CalendarSummary/>}
            {<CalendarTimeline
                sessionList={sessionList}
            />}
        </div>
    )
}

export default ScheduleView