export async function POST(req: Request) {
  const body = await req.text();
  return new Response(body || "Pergunte algo para a MI.A", {
    headers: { "Content-Type": "text/plain" }
  });
}
