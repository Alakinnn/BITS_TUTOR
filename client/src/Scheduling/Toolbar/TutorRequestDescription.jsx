import React from 'react'
import user from "/src/assets/footer/circle-user.svg";
import '../../css/Scheduling/Toolbar/RequestDescription.css'

function RequestDescription() {
  return (
    <>
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
            <input className='input-content' type="text" placeholder='Please approve request' disabled />
                
                {/* buttons */}
                <div className="buttons toolbar-buttons">
                    <button className='approve'>Approve</button>
                    <button className='decline'>Decline</button>
                </div>
        </div>

    </>
)
}

export default RequestDescription