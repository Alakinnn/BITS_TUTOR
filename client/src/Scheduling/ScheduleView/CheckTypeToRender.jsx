import React from 'react'
import Upcoming from './EventBox/Upcoming';
import Completed from './EventBox/Completed';
import Cancelled from './EventBox/Cancelled';

function CheckTypeToRender(arg) {
    if (arg.event.extendedProps.type === 'inactive') {
        return (
          <>
            {<Upcoming
              event={arg}
            />}
          </>
            
        );
      } else if (arg.event.extendedProps.type === 'completed') {
        return (
            <>
                {<Completed
                  event={arg}
                />}
            </>  
        );
      } else if (arg.event.extendedProps.type === 'cancelled') {
        return (
            <>
                {<Cancelled
                  event={arg}
                />}
            </>  
        );
      }
}

export default CheckTypeToRender