import React from 'react'
import { useState } from 'react';
import '../../css/Scheduling/Toolbar/UpperToolbar.css';
import dashboard from "/public/images/dashboard.png";    
import request from "/public/images/request.png";
import user from "/src/assets/footer/circle.svg";

const UpperToolbar = ({requestList, setSelectedRequest}) => {
    // console.log(requestList)
    // const [showRequests, setShowRequests] = useState(true);
    // const hideRequests = () => {
    //   setShowRequests(!showRequests);

    
    // const [showRequests, setShowRequests] = useState(false);

    // Return the request by id from the requestList
    const getRequestByKey = (key) => {
        let selectedRequest = requestList.find((request) => request._id === key)
        // console.log(requestList.find((request) => request._id === key))
        setSelectedRequest(selectedRequest)
      };


    // Handling the approval state
    // const [approvalState, setApprovalState] = useState(null);

    // const handleApprove = (key) => {
    //   // Extract the request object based on the key (index)
    //   const selectedRequest = requestList[key];
  
    //   // Logic to handle approval based on the selected request
    //   console.log('Approving request:', selectedRequest);
    //   setApprovalState('approved');
    // };  

    const renderRequestList = (requestList) => {
     // Map over the filtered list and render the components
        return requestList.map((request) => (
        <li className="dropdown_item" onClick={() => getRequestByKey(request._id)}>
        <span className="dropdown_text">
            <div className="left_column">
                <img src={user} alt=""></img>
            </div>
            <div className="right_column">
                <div className="student_name">{request?.student?.username}</div>
                <div className="course_name">{request.title}</div>
                <div className="meet_duration">{formatDate(request.startTime)} to {formatDate(request.endTime)}</div>
            </div>
        </span>
        </li>
        ))
    }

  return (

        <div className="toolbar-menu">
        
        {/* toolbar request */}
            <div className="toolbar-requests">
                {/* <!-- view request --> */}
                <div className="dropdown">
                    <div className="dropdown_select">
                        <span className="dropdown_selected">
                            <button className="view-request">
                                <img className="icon" src={request} alt="View Requests Icon" ></img>
                                View Request
                                {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                            </button>           
                        </span>
                    </div>
                </div>
                <div className={`toolbar-requests-dropdown`}>
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