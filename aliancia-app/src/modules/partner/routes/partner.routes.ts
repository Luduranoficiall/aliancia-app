import { Router } from "express";
import { PartnerController } from "../controllers/PartnerController";
import { auth } from "../../../shared/middleware/auth";

export const partnerRouter = Router();
const controller = new PartnerController();

partnerRouter.post("/", auth, (req, res) => controller.create(req, res));
partnerRouter.get("/", (req, res) => controller.list(req, res));
partnerRouter.post("/:partnerId/offer", auth, (req, res) =>
  controller.createOffer(req, res)
);
