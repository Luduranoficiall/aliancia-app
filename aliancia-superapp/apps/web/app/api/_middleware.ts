export const config = {
  matcher: "/api/:path*"
};

export function middleware() {
  return new Response(null, {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=120"
    }
  });
}
