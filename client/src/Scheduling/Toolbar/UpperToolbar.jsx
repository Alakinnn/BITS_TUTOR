import React from 'react'
import { useState } from 'react';
import '../../css/Scheduling/Toolbar/UpperToolbar.css';
import dashboard from "/public/images/dashboard.png";    
import request from "/public/images/request.png";
import user from "/src/assets/footer/circle.svg";
// import '@fortawesome/fontawesome-free/css/all.css'; 

const UpperToolbar = ({requestList}) => {
    console.log(requestList)
    const [removeClass, setRemoveClass] = useState(false);
    const colapseRequest = () => {
        setRemoveClass(!removeClass)
    }
    const [showRequests, setShowRequests] = useState(true);
    const toggleRequests = () => {
      setShowRequests(!showRequests);
    }

    const renderRequestList = (requestList) => {
     // Map over the filtered list and render the components 
        return requestList.map((request) => (
        <li className="dropdown_item" key={request._id}>
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
                            <button className="view-request" onClick={() => toggleRequests}>
                                <img className="icon" src={request} alt="View Requests Icon" ></img>
                                View Request
                            </button>           
                        </span>
                    </div>
                </div>
                <div className={`toolbar-requests-dropdown ${showRequests ? 'visible' : 'invisible'}`}>
                    {/* <!-- Request notification --> */}
                    <ul className="dropdown_list">
                        {renderRequestList(requestList)} 
                    </ul>
                </div>
            </div>
        </div>


  )
  }



  const formatDate = (dateString) => {
    // Convert the date string into a Date object
    let dateObj = new Date(dateString);
    // Get the time portion of the Date object
    const timeString = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  
    // Determine if it's AM or PM
    const period = dateObj.getHours() < 12 ? 'am' : 'pm';
  
    // Format the final time string
    const formattedTime = `${timeString}${period}`;
  
    return formattedTime;
  };

export default UpperToolbar