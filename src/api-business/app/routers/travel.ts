import { Router } from "express";
import travelController from "../controllers/travelController";

const router = Router();

router.get("/", travelController.getAll);

export default router;
