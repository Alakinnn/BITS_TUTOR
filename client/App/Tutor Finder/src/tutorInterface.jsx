import React, {useState, useEffect} from "react";
import studentInterface from "./studentInterface";
import axios from "axios";

const mySessionID = "123" // This is a fake ID, will have to implement scheduling feature


// TUTOR
const tutorInterface = () => {
    const [session, setSession] = useState({});
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
    


    const [inputUrl, setInputUrl] = useState("");
  
    const handleChange = (event) => {
        setInputUrl(event.target.value)
    }


    const startSession = async () => {
        // Set URL
        let lastInputUrl = inputUrl;


        setInputUrl("");
        //  Send update request to backend
        // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
        const response = await axios.patch(`http://localhost:3000/api/v1/session/${mySessionID}`, {
            status: 'ongoing', 
            liveShareUrl: lastInputUrl
        });
        window.location.href = "/tutor";
        console.log(response);
    }   

    const endSession = async () => {
        // Set URL
        let lastInputUrl = ("");
        //  Send update request to backend
        // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
        const response = await axios.patch(`http://localhost:3000/api/v1/session/${mySessionID}`, {
            status: 'inactive', 
            liveShareUrl: lastInputUrl
        });
        
        console.log(response);
        window.location.href = "/tutor";
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
            <a href="/tutor"><img className='logo' src="./images/address.png" alt='tutor'></img></a>
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
  
      <div className='infoLine endTime'>
        <h3 className='title'>End Time: </h3>
        <h3 className='text'>2am PCT</h3>
      </div>
  
      <h4 id='message'>To start the meeting, enter Live Share URL</h4>
      
      {
        (session.status === 'ongoing')? 
        (
            <div className='endSession'>
                <button onClick={endSession}>End Session</button>
            </div>
        )
         : (
            <div className='startSession'>
                <input type="text" placeholder='Live Share URL' onChange={handleChange}/>
                <button onClick={startSession}>Start Session</button>
            </div>
        )

      }
      
      {/* <h1>Tutor's View</h1>
      <input type="text" placeholder='Live Share URL' onChange={handleChange}/>
      <button onClick={startSession}>Start Session</button>
      <p>Live Share URL: {inputUrl}</p>
      
      <h1>Student's View</h1>
      <button onClick={joinSession}>Join Session</button> */} 
    </>
    )  
}
export default tutorInterface


