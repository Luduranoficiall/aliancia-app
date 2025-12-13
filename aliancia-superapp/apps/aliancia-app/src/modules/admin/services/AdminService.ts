import { prisma } from "../../../shared/database/prisma";

export class AdminService {
  listMembers() {
    return prisma.member.findMany();
  }

  listPartners() {
    return prisma.partner.findMany({ include: { offers: true } });
  }

  listTransactions() {
    return prisma.transaction.findMany();
  }

  listCashback() {
    return prisma.cashback.findMany({
      include: { partner: true, member: true },
    });
  }

  listReferrals() {
    return prisma.referralBonus.findMany({
      include: { member: true },
    });
  }
}
