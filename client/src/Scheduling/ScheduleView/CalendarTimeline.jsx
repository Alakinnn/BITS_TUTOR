import React from 'react';
import '../../css/Scheduling/ScheduleView/CalendarTimeline.css'
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import CheckTypeToRender from './CheckTypeToRender';
import Upcoming from './EventBox/Upcoming';


   const CalendarTimeline = ({sessionList, role}) => {
      // console.log("Session list: ", sessionList);

      const eventList = sessionList.map(event => ({
        title: event.title,
        start: event.startTime,
        end: event.endTime,
        type: event.status,
        backgroundColor: 'transparent',
        tutor: event.tutor.username,
        sessionId: event._id,
        // description: event.description,
      }));

     return (
       <div className='calendar-timeline'>
        <FullCalendar
            plugins={[ timeGridPlugin, interactionPlugin ]}
            initialView="timeGridWeek"
            headerToolbar={{
                left: 'today',
                center: 'title',
                right: 'prev,next'
            }}
            allDaySlot={false}

            slotLabelFormat={{ hour: 'numeric', minute: '2-digit', omitZeroMinute: false, meridiem: false }}
            dayHeaderFormat={{ weekday: 'short', day: 'numeric', omitCommas: true }}
 
            contentHeight={'68vh'}
            slotDuration={'01:00:00'}
            timeZone='Asia/Saigon'

            events={eventList}
            eventContent = {CheckTypeToRender}
          
            
        />

       </div>
     );
   };

   export default CalendarTimeline;