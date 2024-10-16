import { Router } from "express";
import reviewController from "../controllers/reviewController";

const router = Router();

router.get("/review", reviewController.getAll);

export default router;
