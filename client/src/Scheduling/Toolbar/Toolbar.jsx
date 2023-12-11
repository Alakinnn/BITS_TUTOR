import React from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import TutorRequestDescription from './TutorRequestDescription';
import StudentCreateRequest from './StudentCreateRequest';
import UpperToolbar from './UpperToolbar';
function Toolbar({role, requestList, tutorId, studentId}) {
  const [renderComponent, setRenderComponent] = React.useState(null);
  React.useEffect(() => {
    switch (role) {
      case 'tutor':
        setRenderComponent(
          <>
              <UpperToolbar
                  requestList={requestList}                        
              />
              <TutorRequestDescription
                requestList={requestList}
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
  }, [requestList])
  return (
    <div className='toolbar'>
        
        {renderComponent}
    </div> 
  )
}

export default Toolbar