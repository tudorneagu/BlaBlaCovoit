import { Router } from "express";
import bookingController from "../controllers/bookingController";

const router = Router();

router.get("/booking", bookingController.getAll);

export default router;
