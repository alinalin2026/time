import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { getRedis } from "../api/_lib/redis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));
  app.use(express.json());

  // Mirrors api/geo.ts (Vercel Edge Function) for non-Vercel hosts
  app.get("/api/geo", (req, res) => {
    res.json({ country: req.headers["x-vercel-ip-country"] ?? null });
  });

  // Mirrors api/go/[slug].ts for non-Vercel hosts
  app.get("/go/:slug", async (req, res) => {
    const slug = req.params.slug;
    const country = (req.headers["x-vercel-ip-country"] as string) || "XX";
    const referrer = req.headers.referer || "";

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
      console.error("go-link tracking failed", err);
    }

    res.cookie("tr_src", slug, { maxAge: 2592000 * 1000, sameSite: "lax" });
    res.redirect(302, "/");
  });

  // Mirrors api/track.ts for non-Vercel hosts
  app.post("/api/track", async (req, res) => {
    const outcome = req.body?.outcome;
    if (outcome !== "qualified" && outcome !== "not_qualified") {
      return res.status(400).json({ error: "Invalid outcome" });
    }
    const cookieMatch = (req.headers.cookie || "").match(/(?:^|;\s*)tr_src=([^;]+)/);
    const slug = cookieMatch ? decodeURIComponent(cookieMatch[1]) : "direct";

    try {
      const redis = getRedis();
      await Promise.all([redis.incr(`go:${outcome}:${slug}`), redis.incr(`go:${outcome}:total`)]);
    } catch (err) {
      console.error("track failed", err);
    }

    res.json({ ok: true });
  });

  // Mirrors api/dashboard-data.ts for non-Vercel hosts
  app.get("/api/dashboard-data", async (req, res) => {
    if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
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
          return { slug, hits: hits ?? 0, qualified: qualified ?? 0, notQualified: notQualified ?? 0 };
        }),
      );
      rows.sort((a, b) => b.hits - a.hits);

      const [totalHits, rawLog] = await Promise.all([redis.get<number>("go:hits:total"), redis.lrange("go:log", 0, 49)]);
      const recent = (rawLog as unknown[])
        .map((entry) => (typeof entry === "string" ? JSON.parse(entry) : entry))
        .filter(Boolean);

      res.json({ totalHits: totalHits ?? 0, rows, recent });
    } catch (err) {
      console.error("dashboard-data failed", err);
      res.status(500).json({ error: "Redis not configured or unreachable" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
