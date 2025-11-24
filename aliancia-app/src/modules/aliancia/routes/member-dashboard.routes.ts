import { Router } from "express";
import { auth } from "../../../shared/middleware/auth";
import { MemberDashboardController } from "../controllers/MemberDashboardController";

export const memberDashboardRouter = Router();

const controller = new MemberDashboardController();

memberDashboardRouter.get("/", auth, (req, res) =>
  controller.index(req, res)
);
