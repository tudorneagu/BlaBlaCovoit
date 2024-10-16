import mongoose from "mongoose";
import Travel from "./travel";
import Booking from "./booking";
import Review from "./review";

const mongoURL =
  process.env.MONGO_URL || "mongodb://business-db:27017/business-db";
mongoose.connect(mongoURL);

export { Travel, Booking, Review };
