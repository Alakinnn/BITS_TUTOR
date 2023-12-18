import React, { useState } from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import TutorRequestDescription from './TutorRequestDescription';
import StudentCreateRequest from './StudentCreateRequest';
import UpperToolbar from './UpperToolbar';
function Toolbar({role, tutorId, studentId}) {
  const [selectedRequest, setSelectedRequest] = React.useState({});
  // console.log(selectedRequest)
  const renderComponentInside = () => {
    switch (role) {
      case 'tutor':
        return (
          <>
              <UpperToolbar 
                  setSelectedRequest={setSelectedRequest}    
                  role={role}              
              />
              <TutorRequestDescription
                selectedRequest={selectedRequest}
                role={role}
              />

          </>   
        );
      case 'student':
        return(
          <>
              <UpperToolbar 
                  role={role}              
              />
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