import { Travel } from "../models";
import type { Request, Response } from "express";
const travelController = {
  getAll: async (_: Request, res: Response) => {
    try {
      console.log("test");
      const result = await Travel.find();
      console.log(result);
      res.status(200).json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  // createOne: (req, res) => {
  //   const {}=req.body
  // }
};

export default travelController;
