// import {SessionModel} from "../schema/sessionSchema" => I'm just going to assume there exists such model
import axios from "axios"
import { Request, Response } from "express"
const updateLiveCodingURL = (req: Request, res: Response) => {
  try {
    if(req?.params?.id) {
      res.status(404).json({
        message: "Session Not Found"
      })
    }
    // const session = await SessionModel.findOne(req.params.id).exec()
    const session: Object= Error // Delete this later once there is model
    if (session) {
      // session.id = req.body.url
      // await session.save()
      res.status(200).json({
        message: "Live Coding URL submitted successfully"
      }) 
    }
  } catch (error) {
    res.status(400).json(
      {message: error}
    )
  }
}

const getZoomInitData = async (req: Request, res: Response) => {
  try {
    if(req?.params?.id) {
      res.status(404).json({
        message: "Session Not Found"
      })
    }
    // const session = await SessionModel.findOne(req.params.id).exec()
    const session: Object= Error // Delete this later once there is model
    if (session) {
      // const hostEmail = session.owner
      // const zoomAccessToken = await axios.get(`https://api.zoom.us/v2/users/${hostEmail}/meetings`)
      // const meetingNumber = session.meetingID

      const zoomData = {
        // meetingNumber: meetingNumber,
        // userName: hostEmail => I just realized that we have username values so may query that instead of using email
        // zak: zoomAccessToken
      }
      res.status(200).json({
        zoomData
      })
    }
  } catch (error) {
    res.status(400).json(
      {message: error}
    )
  }
}

// I MADE THIS FOR FRONTEND, IT SHOULD NOT BELONG HERE
// import axios from 'axios';

// const userId = 'yourUserId'; // Replace with the actual user ID

// // Make an HTTP request to the server to fetch Zoom data
// axios.get(`http://localhost:3000/getZoomInitData/${sessionId}`)
//   .then((response) => {
//     const zoomData = response.data;

//     // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
//     // to pass values to your ZoomMtg.init and ZoomMtg.join functions.

//     ZoomMtg.init({
//       leaveUrl: leaveUrl,
//       success: (success) => {
//         ZoomMtg.join({
//           sdkKey: sdkKey,
//           signature: zoomData.signature,
//           meetingNumber: zoomData.meetingNumber,
//           passWord: zoomData.passWord,
//           userName: zoomData.userName,
//           zak: zoomData.zakToken,
//           success: (success) => {
//             console.log(success);
//           },
//           error: (error) => {
//             console.log(error);
//           },
//         });
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });
//   })
//   .catch((error) => {
//     console.error('Error fetching Zoom data:', error);
//   });
