import React from 'react';
import '../../css/Scheduling/ScheduleView/CalendarTimeline.css'
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';


   const CalendarTimeline = () => {
    function renderEventContent(eventInfo) {
        return (
          <>
            <div className='event-content'>
                <div class = "vertical"></div>
                <div className='event-description'>
                    <div><b>babaa</b></div>
                    <div>aa</div>
                </div>
            </div>
          </>
        )}

     return (
       <div className='calendar-timeline'>
        <FullCalendar
            plugins={[ timeGridPlugin ]}
            initialView="timeGridWeek"
            headerToolbar= {false}
            allDaySlot={false}
 
            contentHeight={600}
            slotDuration={'01:00:00'}
            

            events={[
                { title: 'C++',  start: '2023-12-08T10:00:00', end: '2023-12-08T12:00:00', description: 'Lecture', backgroundColor: '#FFD700'},  
            ]}
            eventContent={renderEventContent}
            
        />

       </div>
     );
   };

   export default CalendarTimeline;