import { prisma } from "db";

export async function giveMedal(memberId: string, name: string, icon: string) {
  await prisma.medal.create({
    data: { memberId, name, icon }
  });
}
