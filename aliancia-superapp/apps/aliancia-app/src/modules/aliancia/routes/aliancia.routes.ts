import { Router } from "express";
import { OnboardingController } from "../controllers/OnboardingController";

export const alianciaRouter = Router();

const onboardingController = new OnboardingController();

// Rota para cadastro de novo membro (onboarding básico)
alianciaRouter.post("/members", (req, res) =>
  onboardingController.create(req, res)
);

// Rota para simular listagem de membros (por enquanto mock)
alianciaRouter.get("/members", (_req, res) => {
  return res.json({
    message: "Listagem de membros (mock inicial)",
    data: []
  });
});
