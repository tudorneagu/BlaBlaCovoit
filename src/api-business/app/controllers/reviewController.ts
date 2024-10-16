import { Review } from "../models";
import type { Request, Response } from "express";
const reviewController = {
  getAll: (_: Request, res: Response) => {
    const result = Review.find();
    console.log(result);
    res.json({ status: "success", data: result });
  },
  // createOne: (req, res) => {
  //   const {}=req.body
  // }
};

export default reviewController;
