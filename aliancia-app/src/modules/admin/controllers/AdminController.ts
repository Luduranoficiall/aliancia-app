import { Request, Response } from "express";
import { AdminService } from "../services/AdminService";

const service = new AdminService();

export class AdminController {
  async all(req: Request, res: Response) {
    const data = {
      members: await service.listMembers(),
      partners: await service.listPartners(),
      transactions: await service.listTransactions(),
      cashback: await service.listCashback(),
      referrals: await service.listReferrals(),
    };

    return res.json(data);
  }
}
