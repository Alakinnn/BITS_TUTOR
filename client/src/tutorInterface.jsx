import {useState, useEffect} from "react";
// import StudentInterface from "./studentInterface";
import axios from "axios";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded"
const client = ZoomMtgEmbedded.createClient()
const sessionId = "6569a1f8c3f228b8ee4b6de0" // This is a fake ID, will have to implement scheduling feature


// TUTOR
const TutorInterface = () => {

    // const createSession = async () => {
    //   const response = await axios.get('http://139.59.105.114/api/v1/session');
    //   console.log(response.data); 
    // }
    // createSession().catch(console.error);

    const [session, setSession] = useState({});
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
        // Set URL
        let lastInputUrl = inputUrl;


        setInputUrl("");
        //  Send update request to backend
        // PATCH({sID: '123', status: 'ongoing', liveShareUrl: inputUrl})
        const response = await axios.post(`http://139.59.105.114/api/v1/session/${sessionId}/start`, {
            liveShareUrl: lastInputUrl
        });
        // window.location.href = "/tutor";
        console.log(response);

       

        // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
        // to pass values to your ZoomMtg.init and ZoomMtg.join functions.
      axios
        .get(`http://139.59.105.114/api/v1/session/${sessionId}`)
        .then(() => {
          

          // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
          // to pass values to your ZoomMtg.init and ZoomMtg.join functions.

         let meetingSDKElement = document.getElementById('meetingSDKElement')
        client.init({ zoomAppRoot: meetingSDKElement, language: 'en-US' })
        client.join({
          sdkKey: "sdkKey",
          signature: 1,
          meetingNumber: 1,
          password: "password",
          userName: "userName"
       })
        })
        .catch((error) => {
          console.error("Error fetching Zoom data:", error);
        });


        
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
          <div className="headTitle">
            <div className="container">
            <div className="opacity"></div>
              <img className="hinddenPic" src="" alt="" />
              <h2>Meeting 68757</h2>
            </div>
  
            <div className="imgBox">
              <div className="student">
                <a href="/student">
                  <img className="studentImg" src="" alt="student" />
                </a>
                <p>Name</p>
              </div>
              <div className="tutor">
                <a href="/tutor">
                  <img
                    className="tutorImg"
                    src={"src/assets/footer/linkIn.svg"}
                    alt="tutor"
                    onClick={TutorInterface}
                  />
                </a>
                <p>Name</p>
              </div>
            </div>
          </div>
  
          <div className="infoDate">
            <h3 className="title">Date :</h3>
            <h3 className="text">Mon 09/11/2924</h3>
          </div>
  
          <div className="infoStart">
            <h3 className="title">Start Time :</h3>
            <h3 className="text">12am PCT</h3>
          </div>
  
          <div className="infoEnd">
            <h3 className="title">End Time :</h3>
            <h3 className="text">2am PCT</h3>
          </div>
  
          {session.status === "active" ? (
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
        </div>
  
        {/* <h1>Tutor's View</h1>
        <input type="text" placeholder='Live Share URL' onChange={handleChange}/>
        <button onClick={startSession}>Start Session</button>
        <p>Live Share URL: {inputUrl}</p>
        
        <h1>Student's View</h1>
        <button onClick={joinSession}>Join Session</button> */}
      </>

    // <>
    //     <div className='headTitle'>
    //     <h1>Meeting 68757</h1>
    //     <div className='student'>
    //         <a href="/student"><img className='logo' src="./images/address.png" alt='student'></img></a>
    //         <p>Student</p>
    //     </div>
    //     <div className='tutor'>
    //         <a href="/tutor"><img className='logo' src="./images/address.png" alt='tutor'></img></a>
    //         <p>Tutor</p>
    //     </div>
    //   </div>
     
  
    //   <div className='infoLine date'>
    //     <h3 className='title'>Date: </h3>
    //     <h3 className='text'>Mon 09/11/2924</h3>
    //   </div>
  
    //   <div className='infoLine startTime'>
    //     <h3 className='title'>Start Time: </h3>
    //     <h3 className='text'>12am PCT</h3>
    //   </div>
  
    //   <div className='infoLine endTime'>
    //     <h3 className='title'>End Time: </h3>
    //     <h3 className='text'>2am PCT</h3>
    //   </div>
  
    //   <h4 id='message'>To start the meeting, enter Live Share URL</h4>
      
    //   {
    //     (session.status === 'ongoing')? 
    //     (
    //         <div className='endSession'>
    //             <button onClick={endSession}>End Session</button>
    //         </div>
    //     )
    //      : (
    //         <div className='startSession'>
    //             <input type="text" placeholder='Live Share URL' onChange={handleChange}/>
    //             <button onClick={startSession}>Start Session</button>
    //         </div>
    //     )

    //   }
      
    //   {/* <h1>Tutor's View</h1>
    //   <input type="text" placeholder='Live Share URL' onChange={handleChange}/>
    //   <button onClick={startSession}>Start Session</button>
    //   <p>Live Share URL: {inputUrl}</p>
      
    //   <h1>Student's View</h1>
    //   <button onClick={joinSession}>Join Session</button> */} 
    // </>
    )  
}
export default TutorInterface


