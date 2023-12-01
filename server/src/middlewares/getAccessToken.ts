import axios from 'axios';
import env from "../config/env"
import Session from "../models/session";
import Tutor from "../models/tutor";
import Student from "../models/student";
const {ZOOM_S2S_ACCOUNT_ID, ZOOM_S2S_CLIENT_ID, ZOOM_S2S_CLIENT_SECRET} = env
import { Response, Request} from 'express';
const clientID=ZOOM_S2S_CLIENT_ID
const secretID=ZOOM_S2S_CLIENT_SECRET
const accountID=ZOOM_S2S_ACCOUNT_ID
const credentials = `${clientID}:${secretID}`
const base64Credentials = Buffer.from(credentials).toString("base64")

const generateAccess = async () => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${base64Credentials}`
  }
  const response = await axios.post('https://zoom.us/oauth/token', 
    {
      grant_type: 'account_credentials',
      account_id: accountID,
    },
    {headers: headers}
  );

  return response.data.access_token as string

};

const createSession = async (req: Request, res: Response) => {
  const accessToken = await generateAccess()
  const { hostEmail, topic, startTime, timezone, duration, studentEmail } = req.body
  const headers = {
    Authorization: `Bearer ${accessToken}`
  };

  const response= await axios.post(`https://api.zoom.us/v2/users/${hostEmail}/meetings`, 
  {
    topic: topic,
    type: 2,
    start_time: startTime,
    timezone: timezone,
    duration: duration,
    join_before_host: true,
    schedule_for: hostEmail,
    settings : {
      join_before_host: true,
      private_meeting: true,
      meeting_invitees: [{"email": studentEmail}]
    }
  }, { headers });

  const tutor = await Tutor.findOne({
    email: hostEmail
  })
  const student = await Student.findOne({ email: studentEmail });


  await Session.create(
    {
      // Since codeURL is required, I have to put this here. 
      // Is there a way to tell the function that with an empty string codeURL, the session can't start? Or is it implement already?
      codeURL: "", 
      tutorId: tutor?._id,
      studentId: student?._id,
      meetingNumber: response.data.id,
      hostEmail: hostEmail,
      startTime: startTime,
      zak: ""
    }
  )
  res.status(201).json({
    message: "Created successfully",
  })
}

export {createSession, generateAccess}