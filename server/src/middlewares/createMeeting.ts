import axios from 'axios';
import env from "../config/env"
const {ZOOM_S2S_ACCOUNT_ID, ZOOM_S2S_CLIENT_ID, ZOOM_S2S_CLIENT_SECRET} = env
import { Response, Request, NextFunction } from 'express';
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

const createMeeting = async (req: Request, res: Response) => {
  const accessToken = await generateAccess()
  const { tutorEmail, topic, startTime, timezone, duration, studentEmail } = req.body
  const headers = {
    Authorization: `Bearer ${accessToken}`
  };

  const response= await axios.post(`https://api.zoom.us/v2/users/${tutorEmail}/meetings`, 
  {
    topic: topic,
    type: 2,
    start_time: startTime,
    timezone: timezone,
    duration: duration,
    join_before_host: true,
    schedule_for: tutorEmail,
    settings : {
      join_before_host: true,
      private_meeting: true,
      meeting_invitees: [{"email": studentEmail}]
    }
  }, { headers });
  
  res.status(201).json({
    message: "Created successfully",
    data: response.data
  })
}

export {createMeeting, generateAccess}