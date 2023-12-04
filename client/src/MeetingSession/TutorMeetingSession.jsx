import {useState, useEffect} from "react";
// import StudentInterface from "./studentInterface";
import axios from "axios";
import InitZoom from "./InitZoom";
import InfoInterface from "./InfoInterface";
import "../css/MeetingSession.css";

const sessionId = "656db707dedcd0cd9235983e" // This is a fake ID, will have to implement scheduling feature


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
        window.location.href = "/tutor";
    }    

    return (
        <>
        <div id="boxContains">
          {<InfoInterface/>}
          {sessionActive ? (
            <div className="endSession">
              <button onClick={endSession}>End Session</button>
            </div>
          ) : (
            <div>
              <h4 id="message">To start the meeting, enter Live Share URL</h4>
              <div className="startSession">
                <input
                  type="url"
                  placeholder="Live Share URL"
                  onChange={handleChange}
                />
                <button onClick={startSession}>Start Session</button>
              </div>
            </div>
          )}
          <div id="meetingSDKElement"></div>
        </div>
      </>
    )  
}
export default TutorMeetingSession


