import React from 'react';
import '../../css/Scheduling/ScheduleView/CalendarTimeline.css'
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import CheckTypeToRender from './CheckTypeToRender';
import Upcoming from './EventBox/Upcoming';


   const CalendarTimeline = (sessionList) => {
      console.log(sessionList);
      const ssList = [
        {
          title: 'Session 1',
          startTime: '2023-12-13T09:00:00',
          endTime: '2023-12-13T11:00:00',
          status: 'upcoming',
          description: 'This is the first session',
        },
        {
          title: 'Session 2',
          startTime: '2023-12-12T09:00:00',
          endTime: '2023-12-12T10:00:00',
          status: 'completed',
          description: 'This is the second session',
        },
        {
          title: 'Session 3',
          startTime: '2023-12-14T09:00:00',
          endTime: '2023-12-14T10:00:00',
          status: 'cancelled',
          description: 'This is the third session',
        }
      ];

      const eventList = ssList.map(event => ({
        title: event.title,
        start: event.startTime,
        end: event.endTime,
        type: event.status,
        backgroundColor: 'transparent',
        // description: event.description,
      }));

     return (
       <div className='calendar-timeline'>
        <FullCalendar
            plugins={[ timeGridPlugin ]}
            initialView="timeGridWeek"
            headerToolbar= {false}
            allDaySlot={false}

            slotLabelFormat={{ hour: 'numeric', minute: '2-digit', omitZeroMinute: false, meridiem: false }}
            dayHeaderFormat={{ weekday: 'short', day: 'numeric', omitCommas: true }}
 
            contentHeight={'65vh'}
            slotDuration={'01:00:00'}
            

            events={eventList}
            eventContent = {CheckTypeToRender}
          
            
        />

       </div>
     );
   };

   export default CalendarTimeline;