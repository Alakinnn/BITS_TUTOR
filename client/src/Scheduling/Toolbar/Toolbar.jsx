import React from 'react'
import '../../css/Scheduling/Toolbar/Toolbar.css'
import TutorRequestDescription from './TutorRequestDescription';
import StudentCreateRequest from './StudentCreateRequest';
import UpperToolbar from './UpperToolbar';
function Toolbar({role, requestList}) {
  const [renderComponent, setRenderComponent] = React.useState(null);
  React.useEffect(() => {
    switch (role) {
      case 'tutor':
        setRenderComponent(
          <>
              <UpperToolbar
                  requestList={requestList}                        
              />
              <TutorRequestDescription/>
            </>
        );
        break;
      case 'student':
        setRenderComponent(
          <>
              <div></div>
              <StudentCreateRequest/>
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