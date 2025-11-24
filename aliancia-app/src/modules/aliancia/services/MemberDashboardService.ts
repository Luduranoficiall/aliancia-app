import { prisma } from "../../../shared/database/prisma";

export class MemberDashboardService {
  async getDashboard(memberId: string) {
    const member = await prisma.member.findUnique({
      where: { id: memberId },
    });

    if (!member) throw new Error("Membro não encontrado.");

    const transactions = await prisma.transaction.findMany({
      where: { memberId },
      orderBy: { createdAt: "desc" },
    });

    const cashback = await prisma.cashback.findMany({
      where: { memberId },
      include: { partner: true },
    });

    const referralBonuses = await prisma.referralBonus.findMany({
      where: { memberId },
    });

    const uplines = await prisma.member.findMany({
      where: { id: { in: member.uplines ?? [] } },
    });

    return {
      member,
      transactions,
      cashback,
      referralBonuses,
      uplines,
    };
  }
}
