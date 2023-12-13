import React from 'react'
import '../../css/Scheduling/Toolbar/RequestDescription.css';
import user from "/src/assets/footer/circle-user.svg";
import { CreateRequest } from './Request Functions/CreateRequest';
const BookingSession = ({request, setRequest, defaultRequest}) => {
  return (
    <>
      <button className='bookingSession' onClick={() => CreateRequest(request, setRequest, defaultRequest)}>Book a Session</button>
        {/* <button className='bookingSession'>Book a Session</button> */}
    </>
  )
}

export default BookingSession