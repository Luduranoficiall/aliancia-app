import { Request, Response } from "express";
import { CreateMemberService } from "../services/CreateMemberService";

const createMemberService = new CreateMemberService();

export class OnboardingController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        nome,
        email,
        telefone,
        cidade,
        areaAtuacao,
        codigoIndicacao
      } = req.body;

      const result = await createMemberService.execute({
        nome,
        email,
        telefone,
        cidade,
        areaAtuacao,
        codigoIndicacao
      });

      return res.status(201).json({
        message: "Membro cadastrado com sucesso na ALIANCI.A (MVP).",
        member: result
      });
    } catch (error: any) {
      console.error("Erro ao criar membro:", error);

      return res.status(400).json({
        error: "Erro ao cadastrar membro",
        message:
          error?.message ||
          "Ocorreu um problema ao tentar cadastrar o membro. Tente novamente."
      });
    }
  }
}
