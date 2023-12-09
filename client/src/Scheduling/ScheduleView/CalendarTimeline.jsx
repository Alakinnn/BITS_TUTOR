import React from 'react';
import '../../css/Scheduling/ScheduleView/CalendarTimeline.css'
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import CheckTypeToRender from './CheckTypeToRender';
import Upcoming from './EventBox/Upcoming';


   const CalendarTimeline = () => {
    // function renderEventContent(eventInfo) {
    //     return (
    //       <>
    //         <div className='event-content'>
    //             <div class = "vertical"></div>
    //             <div className='event-description'>
    //                 <b><h5>Introduction to BGC</h5></b>
    //                 <h5>Binh Nguyen</h5>
    //                 <h6>10:00 - 11:00</h6>
    //             </div>
    //         </div>
    //       </>
    //     )}

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
            

            events={[
                { 
                  title: 'C++',
                  start: '2023-12-08T10:00:00',
                  end: '2023-12-08T12:00:00',
                  description: 'Lecture',
                  backgroundColor: '#E8FDFF',
                  type: 'upcoming',
                },
                { 
                  title: 'C++',
                  start: '2023-12-09T10:00:00',
                  end: '2023-12-09T12:00:00',
                  description: 'Lecture',
                  backgroundColor: '#EAEEFF',
                  extendedProps: {
                    type: 'completed'
                  }
                },  
                { 
                  title: 'C++',
                  start: '2023-12-04T10:00:00',
                  end: '2023-12-04T12:00:00',
                  description: 'Lecture',
                  backgroundColor: '#FFEDED',
                  extendedProps: {
                    type: 'cancelled'
                  }
                },  
            ]}
            eventContent = {CheckTypeToRender}
          
            
        />

       </div>
     );
   };

   export default CalendarTimeline;