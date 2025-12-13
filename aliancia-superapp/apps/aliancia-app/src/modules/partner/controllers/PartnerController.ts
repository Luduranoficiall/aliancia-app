import { Request, Response } from "express";
import { PartnerService } from "../services/PartnerService";

const service = new PartnerService();

export class PartnerController {
  async create(req: Request, res: Response) {
    try {
      const partner = await service.createPartner(req.body);
      return res.json(partner);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async list(req: Request, res: Response) {
    const partners = await service.listPartners();
    return res.json(partners);
  }

  async createOffer(req: Request, res: Response) {
    try {
      const partnerId = req.params.partnerId;
      const offer = await service.createOffer(partnerId, req.body);
      return res.json(offer);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
