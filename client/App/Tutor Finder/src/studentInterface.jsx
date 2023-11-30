import React, {useState, useEffect} from "react";
import tutorInterface from "./tutorInterface";
import axios from 'axios';

const sessionID = "123" // This is a fake ID, will have to implement scheduling feature

// STUDENT
const studentInterface = () => {
    // Only enable when time comes
    // request session data from backend
    
    const [session, setSession] = useState({})
    
    useEffect(() => {


        // declare the data fetching function
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/api/v1/session/${sessionID}`);
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
            window.open(session.liveShareUrl, '_blank');
;
        }  

        axios.get(`http://localhost:3000/getZoomInitData/${sessionID}`)
        .then((response) => {
            const zoomData = response.data;
    
            // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
            // to pass values to your ZoomMtg.init and ZoomMtg.join functions.
    
            ZoomMtg.init({
                leaveUrl: leaveUrl,
                success: (success) => {
                    ZoomMtg.join({
                        sdkKey: sdkKey,
                        signature: zoomData.signature,
                        meetingNumber: zoomData.meetingNumber,
                        passWord: zoomData.passWord,
                        userName: zoomData.userName,
                        zak: zoomData.zakToken,
                        success: (success) => {
                            console.log(success);
                        },
                        error: (error) => {
                            console.log(error);
                        },
                    });
                },
                error: (error) => {
                    console.log(error);
                },
                });
            })
            .catch((error) => {
                console.error('Error fetching Zoom data:', error);
            });
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
                <button onClick={test}>Join Session</button>
            </div> 
        )
        }

        </>);
    
  }
  export default studentInterface;