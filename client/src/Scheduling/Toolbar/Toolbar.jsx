import React from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import TutorRequestDescription from './TutorRequestDescription';
import StudentCreateRequest from './StudentCreateRequest';
import UpperToolbar from './UpperToolbar';
function Toolbar({role, requestList}) {
  let renderComponent;
  switch (role) {
    case 'tutor':
      renderComponent = (
        <>
            <UpperToolbar
                requestList={requestList}                        
            />
            <TutorRequestDescription/>
          </>
      );
      break;
    case 'student':
      renderComponent = (
        <>
            <div></div>
            <StudentCreateRequest/>
          </>
      );
      break;

    default:
      break;
  }
  return (
    <div className='toolbar'>
        
        {renderComponent}
    </div> 
  )
}

export default Toolbar