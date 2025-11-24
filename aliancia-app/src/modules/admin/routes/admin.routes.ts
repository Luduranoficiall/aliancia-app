import { Router } from "express";
import { AdminController } from "../controllers/AdminController";
import { auth } from "../../../shared/middleware/auth";

export const adminRouter = Router();
const controller = new AdminController();

adminRouter.get("/all", auth, (req, res) => controller.all(req, res));
