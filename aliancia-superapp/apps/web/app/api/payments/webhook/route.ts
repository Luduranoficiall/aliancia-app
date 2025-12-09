import { prisma } from "db";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { gerarComissoes } from "api/commissions";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("MISSING_SIG", { status: 400 });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (_) {
    return new Response("INVALID", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const data = event.data.object as Stripe.Checkout.Session;
    const memberId = data.metadata?.memberId;

    if (memberId) {
      await prisma.member.update({
        where: { id: memberId },
        data: { status: "ACTIVE" }
      });

      const amount = data.amount_total ?? 0;

      await prisma.payment.create({
        data: {
          memberId,
          amountCents: amount,
          gateway: "STRIPE",
          status: "PAID"
        }
      });

      await gerarComissoes(memberId, amount);
    }
  }

  return NextResponse.json({ received: true });
}
