import React from 'react'
import '../../css/Scheduling/Toolbar/RequestDescription.css';
import user from "/src/assets/footer/circle-user.svg";
import { CreateRequest } from './Request Functions/CreateRequest';
const BookingSession = ({request}) => {
  console.log(request)
  return (
    <>
        <button className='bookingSession' onClick={() => CreateRequest(request)}>Book a Session</button>
        {/* <button className='bookingSession'>Book a Session</button> */}
    </>
  )
}

export default BookingSession