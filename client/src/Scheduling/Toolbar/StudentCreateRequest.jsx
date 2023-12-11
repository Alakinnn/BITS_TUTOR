import React from 'react'
import { useState } from 'react'
import user from "/src/assets/footer/circle-user.svg"
import '../../css/Scheduling/Toolbar/ToolbarRequest.css'
import BookingSession from './BookingSession'


const ToolbarRequest = ({tutorId, studentId}) => {
    const [removeClass, setRemoveClass] = useState(false);
    const [request, setRequest] = useState({
        title: "",
        description: "",
        tutorId: {tutorId},
        studentId: {studentId},
        startTime: "",
        endTime: "",
        timezone: "Asia/Saigon"
    })


    const handleChange = (e) => {
        const {name, value} = e.target
        setRequest(prevRequest =>({
            ...prevRequest,
            [name]: value
        }))
    }

    const showDescription = () => {
        setRemoveClass(!removeClass)
    }
  return (
    <>
        <button className='bookingSession' onClick={showDescription}>Book a Session</button>
        <div className={`toolbar-description ${removeClass ? '' : 'invisible'}`}>
                <div className="description-user-profile">
                    <img className="picture-user" src={user} alt="circle" />    
                    <div className="addingTitle">
                        <input type="text" value={request.title} name='title' placeholder='Add a title' onChange={handleChange} />
                    </div>
                </div>

                {/* description time */}
                <div className="description-time">
                    <div className="settingTime">
                        <div className="from">
                            <p>From:</p>
                            <input type="text" value={request.startTime} name='startTime' onChange={handleChange} placeholder='E.g: 2024-02-25T12:00:00' />
                        </div>
                    
                        <div className="to">
                            <p>To:</p>
                            <input type="text" value={request.endTime} name='endTime' onChange={handleChange} placeholder='E.g: 2024-02-25T12:00:00' />
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="inputContent">
                <input className='input-content' value={request.description} name='description' onChange={handleChange} type="text" placeholder='What would you like to learn about?' />
                </div>
                    
                    {/* buttons */}
                    <div className="buttonRequest">
                        <BookingSession
                            request={request}
                        />
                    </div>
        </div>
    </>
        
    
  )
}

export default ToolbarRequest