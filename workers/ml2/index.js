/**
 * ML² chat proxy — a Cloudflare Worker.
 *
 * The portfolio is a static site, so it cannot hold an OpenAI key. This
 * Worker does: the browser POSTs { messages } here, the Worker adds the
 * system prompt and the key (a Worker secret, never in the repo), calls
 * OpenAI, and returns { reply }. Model, temperature and token cap are fixed
 * here so a caller can't crank them up to burn credits.
 *
 * Deploy: see workers/ml2/README.md. In short —
 *   cd workers/ml2
 *   npx wrangler deploy
 *   npx wrangler secret put OPENAI_API_KEY
 * then paste the printed https://ml2-chat.<subdomain>.workers.dev URL into
 * CONTENT.ask.endpoint in src/App.jsx.
 */

const MODEL = "gpt-4o-mini";
const MAX_TOKENS = 450;
const TEMPERATURE = 0.6;

// Keep this in step with ASK_SYSTEM in src/App.jsx.
const SYSTEM = `You are ML² ("Manel López × Machine Learning"), a small assistant embedded in Manel López's product-design portfolio.

About Manel: senior product designer based in Barcelona. Sole designer on GameHouse+ (a casual-games subscription app), where he owned research, product analytics, the design system and the rebuilt core surfaces while instant play was reshaping the product. Earlier work with Socialpoint, Popcore and others across games and gamification. He also lectures at university. Boira is his black cat.

Voice: warm, plain, concise. Two or three short paragraphs at most. No bullet-point essays. Speak about Manel in the third person, or in a light first-person "I" as his stand-in — never claim to actually be him.

Boundaries:
- You are a guide to Manel's work and background, not a general-purpose tool. Politely decline requests to write code, do unrelated tasks, or act as a free chatbot.
- Never share personal contact details, home address, finances or other private information. Point people to the contact form for anything real.
- If you don't know something about Manel, say so plainly rather than inventing it.`;

// Browser callers only — the site and local dev. Note: Origin is only
// enforced by browsers, so treat this as hygiene, not hard security. The
// real backstops are the fixed model/token cap above and a monthly spend
// limit on the OpenAI key itself.
const ALLOWED_ORIGINS = [
  "https://manel-lf.github.io",
  "http://localhost:5173",
  "http://localhost:4173",
];

const MAX_MESSAGES = 24;
const MAX_TOTAL_CHARS = 6000;
const MAX_MESSAGE_CHARS = 2000;

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

const json = (obj, status, extra) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...extra },
  });

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS")
      return new Response(null, { headers: cors });
    if (request.method !== "POST")
      return json({ error: "POST only" }, 405, cors);
    if (!ALLOWED_ORIGINS.includes(origin))
      return json({ error: "origin not allowed" }, 403, cors);
    if (!env.OPENAI_API_KEY)
      return json({ error: "server not configured" }, 500, cors);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "bad json" }, 400, cors);
    }

    const raw = Array.isArray(body && body.messages) ? body.messages : null;
    if (!raw || !raw.length) return json({ error: "no messages" }, 400, cors);

    const messages = raw
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim(),
      )
      .slice(-MAX_MESSAGES)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

    const total = messages.reduce((n, m) => n + m.content.length, 0);
    if (!messages.length || total > MAX_TOTAL_CHARS)
      return json({ error: "message too large" }, 413, cors);

    let upstream;
    try {
      upstream = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          temperature: TEMPERATURE,
          max_tokens: MAX_TOKENS,
          messages: [{ role: "system", content: SYSTEM }, ...messages],
        }),
      });
    } catch {
      return json({ error: "upstream unreachable" }, 502, cors);
    }

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      return json(
        { error: `openai ${upstream.status}`, detail: detail.slice(0, 300) },
        502,
        cors,
      );
    }

    const data = await upstream.json();
    const reply =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      typeof data.choices[0].message.content === "string"
        ? data.choices[0].message.content.trim()
        : "";
    if (!reply) return json({ error: "empty completion" }, 502, cors);

    return json({ reply }, 200, cors);
  },
};
