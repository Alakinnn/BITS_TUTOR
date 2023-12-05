import React from 'react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';


   const Schedule = () => {
     return (
       <div>
        <FullCalendar
            plugins={[ timeGridPlugin, dayGridPlugin ]}
            initialView="timeGridWeek"
            headerToolbar= {{
              left: 'prev,next',
              center: 'title',
              right: 'timeGridDay,timeGridWeek,dayGridMonth' // user can switch between the two
            }}
        />

       </div>
     );
   };

   export default Schedule;