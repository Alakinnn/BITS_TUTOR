import React, { useState } from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import TutorRequestDescription from './TutorRequestDescription';
import StudentCreateRequest from './StudentCreateRequest';
import UpperToolbar from './UpperToolbar';
function Toolbar({role, requestList, tutorId, studentId}) {
  const [renderComponent, setRenderComponent] = React.useState(null);
  const [selectedRequest, setSelectedRequest] = React.useState({});
  console.log(selectedRequest)
  React.useEffect(() => {
    switch (role) {
      case 'tutor':
        setRenderComponent(
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
        break;
      case 'student':
        setRenderComponent(
          <>
              <div></div>
              <StudentCreateRequest
                  studentId={studentId}
                  tutorId={tutorId}
              />
            </>
        );
        break;
    
      default:
        break;
    }
  }, [requestList, selectedRequest])
  return (
    <div className='toolbar'>
        
        {renderComponent}
    </div> 
  )
}

export default Toolbar