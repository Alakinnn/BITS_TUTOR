import React from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import RequestDescription from './RequestDescription';
import UpperToolbar from './UpperToolbar';
function Toolbar() {
  return (
    <div className='toolbar'>
        {/* toolbat menu */}
        {<UpperToolbar/>}
        {/* toolbar description */}
        {<RequestDescription/>}

        
    </div> 
  )
}

export default Toolbar