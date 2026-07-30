import { getRedis } from "./_lib/redis";

export const config = { runtime: "edge" };

function getCookieSlug(request: Request): string {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(/(?:^|;\s*)tr_src=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "direct";
}

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await request.json().catch(() => null);
  const outcome = body?.outcome;
  if (outcome !== "qualified" && outcome !== "not_qualified") {
    return new Response(JSON.stringify({ error: "Invalid outcome" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const slug = getCookieSlug(request);

  try {
    const redis = getRedis();
    await Promise.all([redis.incr(`go:${outcome}:${slug}`), redis.incr(`go:${outcome}:total`)]);
  } catch (err) {
    console.error("track failed", err);
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}
