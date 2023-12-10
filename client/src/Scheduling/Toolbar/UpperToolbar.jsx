import React from 'react'
import '../../css/Scheduling/Toolbar/UpperToolbar.css'
import dashboard from "/public/images/dashboard.png";    
import user from "/public/images/interview.png";

function UpperToolbar() {
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
                            <img className="icon" src={user} alt="View Requests Icon" ></img>
                            View Request
                        </span>    
                        <i className="fa fa-caret-down dropdown_caret"></i>
                    </div>
                    {/* <!-- Request notification --> */}
                    <ul className="dropdown_list">  
                        <li className="dropdown_item">
                            <span className="dropdown_text">
                                <div className="left_column">
                                    <img src="image/dashboard.png" alt=""></img>
                                </div>
                                <div className="right_column">
                                    <div className="student_name">Nguyen Van A</div>
                                    <div className="course_name">Intro to Programming</div>
                                    <div className="meet_duration">10pm to 12pm</div>
                                </div>
                            </span>
                        </li>
                        <li className="dropdown_item">
                            <span className="dropdown_text">
                                <div className="left_column">
                                    <img src="image/dashboard.png" alt=""></img>
                                </div>
                                <div className="right_column">
                                    <div className="student_name">Nguyen Van A</div>
                                    <div className="course_name">Intro to Programming</div>
                                    <div className="meet_duration">10pm to 12pm</div>
                                </div>
                            </span>
                        </li><li className="dropdown_item">
                            <span className="dropdown_text">
                                <div className="left_column">
                                    <img src="image/dashboard.png" alt=""></img>
                                </div>
                                <div className="right_column">
                                    <div className="student_name">Nguyen Van A</div>
                                    <div className="course_name">Intro to Programming</div>
                                    <div className="meet_duration">10pm to 12pm</div>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


  )
}

export default UpperToolbar