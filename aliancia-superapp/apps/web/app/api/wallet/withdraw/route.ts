import { prisma } from "db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { memberId, amountCents, pixKey } = await req.json();

  await prisma.withdraw.create({
    data: { memberId, amountCents, pixKey, status: "PENDING" }
  });

  return NextResponse.json({ ok: true });
}
