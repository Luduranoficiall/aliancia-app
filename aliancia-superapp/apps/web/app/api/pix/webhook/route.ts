import { prisma } from "db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();

  if (payload.status === "COMPLETED") {
    const memberId = payload.charge.correlationID;

    await prisma.member.update({
      where: { id: memberId },
      data: { status: "ACTIVE" }
    });
  }

  return NextResponse.json({ ok: true });
}
