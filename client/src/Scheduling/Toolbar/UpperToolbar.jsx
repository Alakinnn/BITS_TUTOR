import React from 'react'
import '../../css/Scheduling/Toolbar/UpperToolbar.css'

function UpperToolbar() {
  return (
    <div>
        {/* toolbat menu */}
        <div className="toolbar-menu">
            <div id="dashboard">
                <img></img>
                <p>Dashboard</p>
            </div>
        </div>
        {/* toolbar request */}
        <div className="toolbar-requests">
            {/* <!-- view request --> */}
            <div class="dropdown">
                <div class="dropdown_select">
                    <span class="dropdown_selected">
                        <img src="image/interview.png" alt="" class="icon"></img>
                        View Request
                    </span>    
                    <i class="fa fa-caret-down dropdown_caret"></i>
                </div>
                {/* <!-- Request notification --> */}
                <ul class="dropdown_list">  
                    <li class="dropdown_item">
                        <span class="dropdown_text">
                            <div class="left_column">
                                <img src="image/dashboard.png" alt=""></img>
                            </div>
                            <div class="right_column">
                                <div class="student_name">Nguyen Van A</div>
                                <div class="course_name">Intro to Programming</div>
                                <div class="meet_duration">10pm to 12pm</div>
                            </div>
                        </span>
                    </li>
                    <li class="dropdown_item">
                        <span class="dropdown_text">
                            <div class="left_column">
                                <img src="image/dashboard.png" alt=""></img>
                            </div>
                            <div class="right_column">
                                <div class="student_name">Nguyen Van A</div>
                                <div class="course_name">Intro to Programming</div>
                                <div class="meet_duration">10pm to 12pm</div>
                            </div>
                        </span>
                    </li><li class="dropdown_item">
                        <span class="dropdown_text">
                            <div class="left_column">
                                <img src="image/dashboard.png" alt=""></img>
                            </div>
                            <div class="right_column">
                                <div class="student_name">Nguyen Van A</div>
                                <div class="course_name">Intro to Programming</div>
                                <div class="meet_duration">10pm to 12pm</div>
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