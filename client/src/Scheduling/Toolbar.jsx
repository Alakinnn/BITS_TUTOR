import React from 'react'
import '../css/Scheduling/Toolbar.css'

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
        <div className="toolbar-description">
            <div className="description-user-profile">
                <img className='student-picture' src="" alt="" />
                <div className="student-info"></div>
            </div>

            {/* description time */}
            <div className="description-time">
                <div className="request-date">Lorem ipsum dolor sit amet.</div>
                
                <div className="time">
                    <div className="from">
                        <p>From:</p>
                        <p>10:00</p>
                    </div>
                
                    <div className="to">
                        <p>To:</p>
                        <p>11:00</p>
                    </div>
                </div>
                
                {/* content */}
                <div className="content"></div>
                
                {/* buttons */}
                <div className="buttons">
                    <button className='approve'>Approve</button>
                    <button className='decline'>Decline</button>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Toolbar