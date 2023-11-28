// This is my urge to make something random because I think we might need it
import {Request, Response, NextFunction } from "express";
const successMessage = (req: Request,
  res: Response,
  next: NextFunction) => {
    res.status(200).json({
      messsage: "Live meeting sucessfully ininiated!"
    })
    next()
  }