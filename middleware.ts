import { getRedis } from "./api/_lib/redis";

// Edge Middleware runs before static files, functions, and vercel.json
// rewrites are even considered, so /go/:slug is guaranteed to be intercepted
// here rather than depending on rewrite-ordering to reach a nested function.
export const config = {
  matcher: "/go/:slug",
};

async function middleware(request: Request) {
  const url = new URL(request.url);
  const slug = decodeURIComponent(url.pathname.split("/").filter(Boolean).pop() || "unknown");
  const country = request.headers.get("x-vercel-ip-country") || "XX";
  const referrer = request.headers.get("referer") || "";

  try {
    const redis = getRedis();
    const entry = JSON.stringify({ ts: Date.now(), slug, country, referrer });

    await Promise.all([
      redis.incr(`go:hits:${slug}`),
      redis.incr("go:hits:total"),
      redis.sadd("go:slugs", slug),
      redis.lpush("go:log", entry),
      redis.ltrim("go:log", 0, 499),
    ]);
  } catch (err) {
    // Don't block the redirect if Redis isn't reachable/configured - traffic
    // monitoring should never be the reason a visitor gets stuck.
    console.error("go-link tracking failed", err);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: new URL("/", url.origin).toString(),
      "Set-Cookie": `tr_src=${encodeURIComponent(slug)}; Path=/; Max-Age=2592000; SameSite=Lax; Secure`,
      "Cache-Control": "no-store",
    },
  });
}

// Vercel's standalone (non-Next.js) Edge Middleware convention expects a
// default export, but exporting both here removes any doubt.
export default middleware;
export { middleware };
