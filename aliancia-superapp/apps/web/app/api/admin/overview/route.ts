import { prisma } from "db";
import { NextResponse } from "next/server";

export async function GET() {
  const totalMembros = await prisma.member.count({
    where: { status: "ACTIVE" }
  });

  const faturamento = await prisma.payment.aggregate({
    _sum: { amountCents: true }
  });

  const comissoesPendentes = await prisma.commission.aggregate({
    where: { status: "PENDING" },
    _sum: { amountCents: true }
  });

  return NextResponse.json({
    totalMembros,
    faturamento: (faturamento._sum.amountCents ?? 0) / 100,
    comissoesPendentes: (comissoesPendentes._sum.amountCents ?? 0) / 100
  });
}
