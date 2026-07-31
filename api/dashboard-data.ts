import { getRedis } from "./_lib/redis";

export const config = { runtime: "edge" };

interface LogEntry {
  ts: number;
  slug: string;
  country: string;
  referrer: string;
}

function parseLogEntry(raw: unknown): LogEntry | null {
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as LogEntry;
    } catch {
      return null;
    }
  }
  if (raw && typeof raw === "object") {
    return raw as LogEntry;
  }
  return null;
}

export default async function handler(request: Request) {
  const password = request.headers.get("x-admin-password");
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const redis = getRedis();
    const slugs = ((await redis.smembers("go:slugs")) as string[]) || [];

    const rows = await Promise.all(
      slugs.map(async (slug) => {
        const [hits, qualified, notQualified] = await Promise.all([
          redis.get<number>(`go:hits:${slug}`),
          redis.get<number>(`go:qualified:${slug}`),
          redis.get<number>(`go:notqualified:${slug}`),
        ]);
        return {
          slug,
          hits: hits ?? 0,
          qualified: qualified ?? 0,
          notQualified: notQualified ?? 0,
        };
      }),
    );
    rows.sort((a, b) => b.hits - a.hits);

    const [totalHits, rawLog] = await Promise.all([redis.get<number>("go:hits:total"), redis.lrange("go:log", 0, 49)]);

    const recent = (rawLog as unknown[]).map(parseLogEntry).filter((entry): entry is LogEntry => entry !== null);

    return new Response(JSON.stringify({ totalHits: totalHits ?? 0, rows, recent }), {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  } catch (err) {
    console.error("dashboard-data failed", err);
    // TEMPORARY: return the real error message for debugging. Remove once
    // /go/ tracking + dashboard are confirmed working.
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: `Redis error: ${message}` }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
