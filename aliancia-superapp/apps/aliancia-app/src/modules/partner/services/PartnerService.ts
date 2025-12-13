import { prisma } from "../../../shared/database/prisma";

export class PartnerService {
  async createPartner(data: any) {
    return prisma.partner.create({ data });
  }

  async listPartners() {
    return prisma.partner.findMany({
      include: { offers: true },
    });
  }

  async createOffer(partnerId: string, data: any) {
    return prisma.offer.create({
      data: { ...data, partnerId },
    });
  }
}
