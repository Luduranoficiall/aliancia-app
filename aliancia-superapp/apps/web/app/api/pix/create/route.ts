import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { memberId, value } = await req.json();

  const r = await fetch("https://api.openpix.com.br/api/v1/charge", {
    method: "POST",
    headers: {
      Authorization: process.env.OPENPIX_KEY!,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      correlationID: memberId,
      value: value * 100,
      comment: "Pagamento ALIANCI.A"
    })
  });

  const out = await r.json();
  return NextResponse.json(out);
}
