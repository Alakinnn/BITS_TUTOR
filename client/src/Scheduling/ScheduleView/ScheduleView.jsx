import React from 'react'
import '../../css/Scheduling/ScheduleView/ScheduleView.css'
import CalendarTimeline from './CalendarTimeline'

function ScheduleView() {
    return (
        <div className='schedule-view'>


            {/* Calendar timeline */}
            {<CalendarTimeline/>}
        </div>
    )
}

export default ScheduleView