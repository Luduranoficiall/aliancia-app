import { prisma } from "db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(req: Request) {
  const { name, email, phone, password, referralCode } = await req.json();

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return NextResponse.json({ error: "EMAIL_EXISTS" }, { status: 409 });

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      passwordHash
    }
  });

  const member = await prisma.member.create({
    data: {
      userId: user.id,
      referralCode: crypto.randomUUID().slice(0, 8).toUpperCase(),
      referredBy: referralCode ?? null,
      planId: "BASIC"
    }
  });

  await prisma.referral.create({
    data: {
      memberId: referralCode,
      referredId: member.id,
      level: 1
    }
  });

  return NextResponse.json({ ok: true });
}
