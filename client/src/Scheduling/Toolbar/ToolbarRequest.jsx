import React from 'react'
import user from "/src/assets/footer/circle-user.svg"
import '../../css/Scheduling/Toolbar/ToolbarRequest.css'
import BookingSession from './BookingSession'

const ToolbarRequest = () => {
  return (

        <div className="toolbar-description">
                <div className="description-user-profile">
                    <img className="picture-user" src={user} alt="circle" />    
                    <div className="addingTitle">
                        <input type="text" value="" placeholder='Add a title' />
                    </div>
                </div>

                {/* description time */}
                <div className="description-time">
                    <div className="settingTime">
                        <div className="from">
                            <p>From:</p>
                            <input type="text" placeholder='' />
                        </div>
                    
                        <div className="to">
                            <p>To:</p>
                            <input type="text" placeholder='' />
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="inputContent">
                <input className='input-content' type="text" placeholder='What would you like to learn about?' />
                </div>
                    
                    {/* buttons */}
                    <div className="buttons buttonRequest">
                        <BookingSession/>
                    </div>
        </div>
    
  )
}

export default ToolbarRequest