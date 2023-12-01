import { Request, Response } from "express"

const loginUser = (req: Request, res: Response) => {
    res.send("testing")
}

const registerUser = (req: Request, res: Response) => {
    res.send("testing")
}

export {loginUser, registerUser}

