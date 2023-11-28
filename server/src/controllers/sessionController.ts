// import {SessionModel} from "../schema/sessionSchema" => I'm just going to assume there exists such model
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