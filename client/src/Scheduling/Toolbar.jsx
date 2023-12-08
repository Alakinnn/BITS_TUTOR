import React from 'react'
import '../css/Scheduling/Toolbar.css'
import user from "/src/assets/footer/circle-user.svg";
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
                <img className="picture-user" src={user} alt="circle" />    
                <div className="student-info">
                    <div className="subject">Introduction to UI design</div>
                    <div className="status">
                        <div className="user-name">Nguyễn Hạ Uyên</div>
                        <div className="current-time">2 minutes ago</div>
                    </div>
                </div>
            </div>

            {/* description time */}
            <div className="description-time">
                <div className="request-date">Wednesday, December 6th</div>
                
                <div className="time">
                    <div className="from">
                        <p>From:</p>
                        <p className='text'>10:00</p>
                    </div>
                
                    <div className="to">
                        <p>To:</p>
                        <p className='text'>11:00</p>
                    </div>
                </div>
            </div>
            {/* content */}
            <input className='input-content' type="text" placeholder='Please approve request' />
                
                {/* buttons */}
                <div className="buttons toolbar-buttons">
                    <button className='approve'>Approve</button>
                    <button className='decline'>Decline</button>
                </div>
        </div>
    </div> 
  )
}

export default Toolbar