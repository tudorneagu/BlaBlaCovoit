import { Router } from "express";
import bookingRouter from "./booking";
import travelRouter from "./travel";
import reviewRouter from "./review";
const router = Router();

router.use("/travel", travelRouter);
router.use("/booking", bookingRouter);
router.use("/review", reviewRouter);

export default router;
