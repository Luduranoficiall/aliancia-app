import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_KEY!);

export async function POST(req: Request) {
  const { memberId, email } = await req.json();

  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    mode: "subscription",
    line_items: [
      {
        price: process.env.STRIPE_PLAN_ID,
        quantity: 1
      }
    ],
    success_url: `${process.env.APP_URL}/pagamento-sucesso`,
    cancel_url: `${process.env.APP_URL}/pagamento-cancelado`,
    metadata: { memberId }
  });

  return NextResponse.json({ url: session.url });
}
