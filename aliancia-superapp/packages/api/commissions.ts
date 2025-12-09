import { prisma } from "db";

export async function gerarComissoes(memberId: string, amountCents: number) {
  const member = await prisma.member.findUnique({ where: { id: memberId } });
  if (!member?.referredBy) return;

  const nivel1 = await prisma.member.findUnique({ where: { id: member.referredBy } });
  if (nivel1) {
    await prisma.commission.create({
      data: {
        memberId: nivel1.id,
        sourceId: memberId,
        level: 1,
        amountCents: Math.round(amountCents * 0.25)
      }
    });
  }

  const nivel2 = await prisma.member.findUnique({ where: { id: nivel1?.referredBy ?? "" } });
  if (nivel2) {
    await prisma.commission.create({
      data: {
        memberId: nivel2.id,
        sourceId: memberId,
        level: 2,
        amountCents: Math.round(amountCents * 0.1)
      }
    });
  }

  const nivel3 = await prisma.member.findUnique({ where: { id: nivel2?.referredBy ?? "" } });
  if (nivel3) {
    await prisma.commission.create({
      data: {
        memberId: nivel3.id,
        sourceId: memberId,
        level: 3,
        amountCents: Math.round(amountCents * 0.05)
      }
    });
  }
}
