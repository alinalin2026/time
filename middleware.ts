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

  let debugError = "";
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
    debugError = err instanceof Error ? err.message : String(err);
    console.error("go-link tracking failed", err);
  }

  // TEMPORARY: surface a write failure directly in the redirect URL, since
  // this environment has no access to Vercel's middleware function logs.
  // Remove once /go/ tracking is confirmed working.
  const dest = new URL("/", url.origin);
  if (debugError) {
    dest.searchParams.set("tr_debug", debugError.slice(0, 200));
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: dest.toString(),
      "Set-Cookie": `tr_src=${encodeURIComponent(slug)}; Path=/; Max-Age=2592000; SameSite=Lax; Secure`,
      "Cache-Control": "no-store",
    },
  });
}

// Vercel's standalone (non-Next.js) Edge Middleware convention expects a
// default export, but exporting both here removes any doubt.
export default middleware;
export { middleware };
