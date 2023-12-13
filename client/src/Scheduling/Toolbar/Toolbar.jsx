import React, { useState } from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import TutorRequestDescription from './TutorRequestDescription';
import StudentCreateRequest from './StudentCreateRequest';
import UpperToolbar from './UpperToolbar';
function Toolbar({role, requestList, tutorId, studentId}) {
  const [selectedRequest, setSelectedRequest] = React.useState({});
  console.log(selectedRequest)
  const renderComponentInside = () => {
    switch (role) {
      case 'tutor':
        return (
          <>
              <UpperToolbar
                  requestList={requestList}   
                  setSelectedRequest={setSelectedRequest}                     
              />
              <TutorRequestDescription
                requestList={requestList}
                selectedRequest={selectedRequest}
              />

          </>   
        );
      case 'student':
        return(
          <>
              <div></div>
              <StudentCreateRequest
                  studentId={studentId}
                  tutorId={tutorId}
              />
            </>
        );
    
      default:
        return null;
    }
  }
  return (
    <div className='toolbar'>
        
        {renderComponentInside()}
    </div> 
  )
}

export default Toolbar