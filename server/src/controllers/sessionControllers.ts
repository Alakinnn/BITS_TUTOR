// import {SessionModel} from "../schema/sessionSchema" => I'm just going to assume there exists such model
import axios from "axios";
import { Request, Response } from "express";
import { NotFoundError } from "../errors";

const startSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    const { liveShareUrl } = req.body;

    // TODO: Implement this after data modeling

    // Update the session model with the liveShareUrl
    // const session = await Session.findOneAndUpdate({liveShareUrl}, {new: true});
    // if (!session) {
    // throw new NotFoundError("Session not found");
    // }

    // res.status(200).json(session)
};

const joinSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    // const session = await Session.findOneAndUpdate({liveShareUrl}, {new: true});
    // if (!session) {
    // throw new NotFoundError("Session not found");
    // }

    // res.status(200).json(session)
};

// NOTE to @Alakin: why do you need to separate the controllers when you can just put them in the same function?
// Also you don't need to try/catch, just throw the error directly and the errorHandler will catch it

const updateLiveCodingURL = (req: Request, res: Response) => {
    try {
        if (req?.params?.id) {
            res.status(404).json({
                message: "Session Not Found",
            });
        }
        // const session = await SessionModel.findOne(req.params.id).exec()
        const session: Object = Error; // Delete this later once there is model
        if (session) {
            // session.id = req.body.url
            // await session.save()
            res.status(200).json({
                message: "Live Coding URL submitted successfully",
            });
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const getZoomInitData = async (req: Request, res: Response) => {
    try {
        if (req?.params?.id) {
            res.status(404).json({
                message: "Session Not Found",
            });
        }
        // const session = await SessionModel.findOne(req.params.id).exec()
        const session: Object = Error; // Delete this later once there is model
        if (session) {
            // const hostEmail = session.owner
            // const zoomAccessToken = await axios.get(`https://api.zoom.us/v2/users/${hostEmail}/meetings`)
            // const meetingNumber = session.meetingID

            const zoomData = {
                // meetingNumber: meetingNumber,
                // userName: hostEmail => I just realized that we have username values so may query that instead of using email
                // zak: zoomAccessToken
            };
            res.status(200).json({
                zoomData,
            });
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

// I MADE THIS FOR FRONTEND, IT SHOULD NOT BELONG HERE
// import axios from 'axios';

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

export { startSession, joinSession };
