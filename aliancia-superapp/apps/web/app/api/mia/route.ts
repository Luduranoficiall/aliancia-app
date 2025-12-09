import OpenAI from "openai";

export async function POST(req: Request) {
  const msg = await req.text();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [{ role: "user", content: msg }]
  });

  return new Response(stream.toReadableStream());
}
