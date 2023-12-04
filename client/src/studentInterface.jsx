import { useState, useEffect } from "react";
import tutorInterface from "./TutorInterface";
import axios from "axios";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded"
const client = ZoomMtgEmbedded.createClient()
const sessionId = "6569a1f8c3f228b8ee4b6de0"; // This is a fake ID, will have to implement scheduling feature

// STUDENT
const StudentInterface = () => {
  // Only enable when time comes
  // request session data from backend

  const [session, setSession] = useState({});

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await axios.get(
        `http://139.59.105.114/api/v1/session/${sessionId}`
      );
      console.log(response.data);
      setSession(response.data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // GET({sID: '123'})

  const joinSession = async () => {
    const response = await axios.get(`http://139.59.105.114/api/v1/session/${sessionId}/join`); 
    console.log(response);
    if (response.data.session.liveShareUrl) {
      // Redirect to live share URL
      window.open(response.data.session.liveShareUrl, "_blank");
    }

    axios
      .get(`http://139.59.105.114/api/v1/session/${sessionId}`)
      .then((response) => {
        const zoomData = response.data

        // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
        // to pass values to your ZoomMtg.init and ZoomMtg.join functions.

        let meetingSDKElement = document.getElementById('meetingSDKElement')
        client.init({ zoomAppRoot: meetingSDKElement, language: 'en-US' })
        client.join({
          sdkKey: "sdkKey", // Use environment variable
          signature: 1,
          meetingNumber: zoomData.meetingNumber,
          password: zoomData.password,
          userName: zoomData.userName,
          zak: zoomData.zak
       })
      })
      .catch((error) => {
        console.error("Error fetching Zoom data:", error);
      });
  };

  return (
    <>
      <div id="boxContains">
        <div className="headTitle">
          <div className="container">
            <div className="opacity"></div>
            <img className="hinddenPic" src="" alt="" />
            <h2>Meeting 68757</h2>
          </div>
          <div className="imgBox">
            <div className="student">
              <a href="/student">
                <img
                  className="studentImg"
                  src={"src/assets/footer/linkIn.svg"}
                  alt="student"
                />
              </a>
              <p>Name</p>
            </div>
            <div className="tutor">
              <a href="/tutor">
                <img
                  className="tutorImg"
                  src={"src/assets/footer/linkIn.svg"}
                  alt="tutor"
                  onClick={tutorInterface}
                />
              </a>
              <p>Name</p>
            </div>
          </div>
        </div>
        <div className="infoDate">
          <h3 className="title">Date: </h3>
          <h3 className="text">Mon 09/11/2924</h3>
        </div>

        <div className="infoStart">
          <h3 className="title">Start Time: </h3>
          <h3 className="text">12am PCT</h3>
        </div>
        <div id="meetingSDKElement">
          
        </div>
        {session.status === "active" ? (
          <div>
            <div className="infoEnd">
              <h3 className="title">End Time: </h3>
              <h3 className="text">2am PCT</h3>
            </div>
            <h4 id="message">Session is ongoing</h4>
            <div className="joinSession">
              <button onClick={joinSession}>Join Session</button>
            </div>
          </div>
        ) : (
          <div className="joinSession">
            <h4 id="message">Session has not started yet</h4>
          </div>
        )}
      </div>
    </>

    // <>
    //   <div className="headTitle">
    //     <h1>Meeting 68757</h1>
    //     <div className="student">
    //       <a href="/student">
    //         <img
    //           className="logo"
    //           src="./images/address.png"
    //           alt="student"
    //         ></img>
    //       </a>
    //       <p>Student</p>
    //     </div>
    //     <div className="tutor">
    //       <a href="/tutor">
    //         <img
    //           className="logo"
    //           src="./images/address.png"
    //           alt="tutor"
    //           onClick={tutorInterface}
    //         ></img>
    //       </a>
    //       <p>Tutor</p>
    //     </div>
    //   </div>
    //   <div className="infoLine date">
    //     <h3 className="title">Date: </h3>
    //     <h3 className="text">Mon 09/11/2924</h3>
    //   </div>

    //   <div className="infoLine startTime">
    //     <h3 className="title">Start Time: </h3>
    //     <h3 className="text">12am PCT</h3>
    //   </div>

    //   {session.status === "ongoing" ? (
    //     <div>
    //       <div className="infoLine endTime">
    //         <h3 className="title">End Time: </h3>
    //         <h3 className="text">2am PCT</h3>
    //       </div>
    //       <h4 id="message">Session is ongoing</h4>
    //       <div className="joinSession">
    //         <button onClick={joinSession}>Join Session</button>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="joinSession">
    //       <h4 id="message">Session has not started yet</h4>
    //       <button onClick={joinSession}>Join Session</button>
    //     </div>
    //   )}
    // </>
  );
};
export default StudentInterface;
