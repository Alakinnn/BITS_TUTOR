import React from 'react'
import Upcoming from './EventBox/Upcoming';
import Completed from './EventBox/Completed';
import Cancelled from './EventBox/Cancelled';

function CheckTypeToRender(arg) {
    if (arg.event.extendedProps.type === 'upcoming') {
        return (
          <>
            {<Upcoming/>}
          </>
            
        );
      } else if (arg.event.extendedProps.type === 'completed') {
        return (
            <>
                {<Completed/>}
            </>  
        );
      } else if (arg.event.extendedProps.type === 'cancelled') {
        return (
            <>
                {<Cancelled/>}
            </>  
        );
      }
}

export default CheckTypeToRender