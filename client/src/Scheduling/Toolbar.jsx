import React from 'react'
import user from "/src/assets/footer/circle-user.svg";
import UpperToolbar from './Toolbar/UpperToolbar';
function Toolbar() {
  return (
    <div className='toolbar'>
        {<UpperToolbar />}
    </div> 
  )
}

export default Toolbar