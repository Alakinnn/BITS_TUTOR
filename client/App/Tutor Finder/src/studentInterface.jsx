import React, {useState, useEffect} from "react";
import tutorInterface from "./tutorInterface";
import axios from 'axios';

const mySessionID = "123" // This is a fake ID, will have to implement scheduling feature

// STUDENT
const studentInterface = () => {
    // Only enable when time comes
    // request session data from backend
    
    const [session, setSession] = useState({})
    
    useEffect(() => {


        // declare the data fetching function
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/api/v1/session/${mySessionID}`);
            console.log(response.data);
            setSession(response.data)
        }

        // call the function
        fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, []);

    // GET({sID: '123'})
    
    const joinSession = async () => {
        if (session.liveShareUrl) {
            // Redirect to live share URL
            window.location.href = session.liveShareUrl;
        }  
        
    }


    return (
        <>
        <div className='headTitle'>
          <h1>Meeting 68757</h1>
          <div className='student'>
            <a href="/student"><img className='logo' src="./images/address.png" alt='student'></img></a>
            <p>Student</p>
          </div>
          <div className='tutor'>
            <a href="/tutor"><img className='logo' src="./images/address.png" alt='tutor' onClick={tutorInterface}></img></a>
            <p>Tutor</p>
          </div>
        </div>
        <div className='infoLine date'>
          <h3 className='title'>Date: </h3>
          <h3 className='text'>Mon 09/11/2924</h3>
        </div>
    
        <div className='infoLine startTime'>
          <h3 className='title'>Start Time: </h3>
          <h3 className='text'>12am PCT</h3>
        </div>
    
        {(session.status === 'ongoing')? 
        (
            <div>
                <div className='infoLine endTime'>
                    <h3 className='title'>End Time: </h3>
                    <h3 className='text'>2am PCT</h3>
                </div>
                <h4 id='message'>Session is ongoing</h4>
                <div className='joinSession'>
                    <button onClick={joinSession}>Join Session</button>
                </div>
            </div>
            
        ) : (
            <div className='joinSession'>
                <h4 id='message'>Session has not started yet</h4>
                <button onClick={joinSession}>Join Session</button>
            </div> 
        )
        }

        </>);
    
  }
  export default studentInterface;