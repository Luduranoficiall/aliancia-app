import { Request, Response } from "express";
import { MemberDashboardService } from "../services/MemberDashboardService";

const dashboardService = new MemberDashboardService();

export class MemberDashboardController {
  async index(req: Request, res: Response) {
    try {
      const user = (req as any).user;
      const data = await dashboardService.getDashboard(user.id);
      return res.json({ dashboard: data });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
