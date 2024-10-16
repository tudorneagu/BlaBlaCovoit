import { Booking } from "../models";
import type { Request, Response } from "express";
const bookingController = {
  getAll: (_: Request, res: Response) => {
    const result = Booking.find();
    console.log(result);
    res.json({ status: "success", data: result });
  },
  // createOne: (req, res) => {
  //   const {}=req.body
  // }
};

export default bookingController;
