import React from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import RequestDescription from './RequestDescription';
function Toolbar() {
  return (
    <div className='toolbar'>
        {/* toolbat menu */}
        <div className="toolbar-menu">
            <div id="dashboard">
                <img></img>
                <p></p>
            </div>
            <div id="view-request">
                <img></img>
                <p></p>
            </div>
        </div>
        {/* toolbar request */}
        <div className="toolbar-requests">
            <div className="request">
                <img></img>
                <div className="session-info">
                    <p></p>
                </div>
            </div>
        </div>
        {/* toolbar description */}
        {<RequestDescription/>}

        
    </div> 
  )
}

export default Toolbar