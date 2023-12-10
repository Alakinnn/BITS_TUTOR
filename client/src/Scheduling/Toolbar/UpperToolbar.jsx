import React from 'react'
import { useState } from 'react';
import '../../css/Scheduling/Toolbar/UpperToolbar.css';
import dashboard from "/public/images/dashboard.png";    
import request from "/public/images/interview.png";
import user from "/src/assets/footer/circle.svg";
import '@fortawesome/fontawesome-free/css/all.css'; 

const UpperToolbar = (requestList) => {
    const [removeClass, setRemoveClass] = useState(false);
    const colapseRequest = () => {
        setRemoveClass(!removeClass)
    }

  return (

        <div className="toolbar-menu">
            <div className="dashboard">
                <img className="icon" src={dashboard} alt=""></img>
                <p>Dashboard</p>
            </div>
        
        {/* toolbar request */}
            <div className="toolbar-requests">
                {/* <!-- view request --> */}
                <div className="dropdown">
                    <div className="dropdown_select">
                        <span className="dropdown_selected">
                            <img className="icon" src={request} alt="View Requests Icon" ></img>
                            View Request
                        </span>    
                        <button className='view-request' onClick={colapseRequest}><i className="fas fa-caret-down dropdown_caret"></i></button>
                    </div>
                    {/* <!-- Request notification --> */}
                    <ul className="dropdown_list">
                        {renderRequestList(requestList)} 
                    </ul>
                </div>
            </div>
        </div>


  )
  }

const renderRequestList = (requestList) => {
    return requestList.map((request) => (
    <li className="dropdown_item">
    <span className="dropdown_text">
        <div className="left_column">
            <img src={user} alt=""></img>
        </div>
        <div className="right_column">
             <div className="student_name">{request.student.username}</div>
            <div className="course_name">{request.title}</div>
            <div className="meet_duration">{formatDate(request.startTime)} to {formatDate(request.endTime)}</div>
        </div>
    </span>
    </li>
    ))
}

const formatDate = (date) => {
    // Get the time portion of the Date object
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  
    // Determine if it's AM or PM
    const period = date.getHours() < 12 ? 'am' : 'pm';
  
    // Format the final time string
    const formattedTime = `${timeString}${period}`;
  
    return formattedTime;
  };


export default UpperToolbar