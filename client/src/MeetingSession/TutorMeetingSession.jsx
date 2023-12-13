import {useState, useEffect} from "react";
// import StudentInterface from "./studentInterface";
import axios from "axios";
import InitZoom from "./InitZoom";
import MeetingSessionContainer from "./MeetingSessionContainer";
import "../css/MeetingSession.css";
import PrintAllTutorSessions from "../Login/PrintAllTutorSessions";

const functionResponse = PrintAllTutorSessions();
const sessionId = "6571efe2da17854f7db59958" // This is a fake ID, will have to implement scheduling feature


// TUTOR
const TutorMeetingSession = () => {
    const [session, setSession] = useState({});
    const [sessionActive, setSessionActive] = useState(false);

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const response = await axios.get(`http://139.59.105.114/api/v1/session/${sessionId}`);
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
        //  Send update request to backend
        // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
        const response = await axios.post(`http://139.59.105.114/api/v1/session/${sessionId}/start`, {
            liveShareUrl: inputUrl
        });
        setInputUrl("");
        // window.location.href = "/tutor";
        setSessionActive(true);
        console.log(response); 
        InitZoom(response.data.session);

      }

    const endSession = async () => {
        // Set URL
        // let lastInputUrl = ("");
        //  Send update request to backend
        // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
        const response = await axios.post(`http://139.59.105.114/api/v1/session/${sessionId}/end`, {});
        console.log(response);
        setSessionActive(false);
    }    

    return (
        <>
        
          {<MeetingSessionContainer
            role = 'tutor'
            renderData = {session}
            ssActive = {sessionActive}
            joinSessionFunction = {() => InitZoom(session)}
            handleChangeFunction = {handleChange}
            startSessionFunction = {startSession}
            endSessionFunction = {endSession}
          />}

        
          <div id="meetingSDKElement"></div>
      </>
    )  
}
export default TutorMeetingSession


