# ML² chat proxy

A Cloudflare Worker that keeps the OpenAI key off the static site. The
browser POSTs `{ messages }`; the Worker adds the system prompt and the key
and returns `{ reply }`. Model, temperature and token cap are fixed in
`index.js` so a caller can't run them up.

## Deploy (one time)

1. Free Cloudflare account, then from this folder:

   ```bash
   cd workers/ml2
   npx wrangler login
   npx wrangler deploy
   ```

2. Give it the key (paste when prompted — it never touches the repo):

   ```bash
   npx wrangler secret put OPENAI_API_KEY
   ```

3. `deploy` printed a URL like `https://ml2-chat.<your-subdomain>.workers.dev`.
   Put it in `src/App.jsx`:

   ```js
   // CONTENT.ask
   endpoint: "https://ml2-chat.<your-subdomain>.workers.dev",
   ```

   Commit and push. The live site now gets real replies; `.env.local` is no
   longer needed for them (it still works as a fallback path locally).

## After changing the Worker

```bash
cd workers/ml2 && npx wrangler deploy
```

## Agent Analytics

Every successful reply fires `[Agent] User Message` + `[Agent] AI Response`
to Amplitude, grouped by a `sessionId` the Ask widget generates once per
page load (see `ASK_SESSION_ID` in `src/App.jsx`) and a `deviceId` pulled
from the site's own Amplitude browser SDK — so an ML² conversation shows up
tied to the same visitor the rest of the site's analytics already sees.

This is **not** the `@amplitude/ai` SDK — that package can't be bundled
into a Cloudflare Worker at all (it transitively depends on
`node:async_hooks`/`node:module`/`node:crypto`, which Workers Builds
rejects even with `nodejs_compat`). `trackAgentTurn()` in `index.js` posts
`[Agent]`-prefixed events straight to Amplitude's HTTP V2 API instead, per
Amplitude's own documented pattern for this exact situation. Tracking runs
via `ctx.waitUntil()` and is wrapped in try/catch — a flush failure logs
and drops, never blocks or breaks the actual chat reply.

`AMPLITUDE_AI_API_KEY` lives in `wrangler.toml` under `[vars]`, not as a
secret — it's a public ingestion key, same reasoning as the site's own
`VITE_AMPLITUDE_API_KEY`. Set `AMPLITUDE_TRACKING_DISABLED = "1"` there as
a kill switch if it ever needs to go quiet without a code change.

## Notes

- **Allowed origins** are hard-coded in `index.js` (`ALLOWED_ORIGINS`). Add a
  custom domain there if the site ever moves off `manel-lf.github.io`.
- **Abuse protection** is: fixed model + 450-token cap here, the origin
  allowlist (hygiene only — `Origin` is browser-enforced, not a real gate),
  and — the one that actually matters — a **monthly spend limit on the
  OpenAI key** in the OpenAI dashboard. Set that. For more, add a Cloudflare
  Rate Limiting rule on the Worker route in the CF dashboard.
- Keep `SYSTEM` in `index.js` in step with `ASK_SYSTEM` in `src/App.jsx`
  (the latter is only used on the direct-key local dev path).
- The Worker is deployed separately from the site — it is not part of
  `npm run build` and CI never touches it.
