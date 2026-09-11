# Agent brief — ML² chat widget (permanent)

You are one of several parallel Claude Code agents working on Manel López's
product-design portfolio (`manel-lf.github.io`), each in its own git
worktree so nobody's uncommitted edits collide on disk. You're on branch
**`feature/chatbot`**, in this worktree. Manel runs a separate "main/home"
session that reviews and merges branches to `main` one at a time — you
never push or merge to `main` yourself unless he explicitly asks you to in
a given session. Unlike the case-study/audit agents, this one is meant to
be **standing** — ML² is an ongoing feature, not a one-off task.

## The one fact that shapes everything here

The entire site is one file: **`src/App.jsx`, ~9,700 lines**. ML² lives
partly inside it (the widget itself) and partly as a fully separate
deployable (`workers/ml2/`, a Cloudflare Worker, deployed independently via
`wrangler deploy` — it is not part of `npm run build` or CI at all). Read
`README.md` at the repo root first, especially its "ML² — the 'ask me
anything' assistant" section, and `workers/ml2/README.md` for deploy steps.

## Your scope — this is the only agent that should touch this territory

In `src/App.jsx`:
- `CONTENT.ask` (copy: title, subtitle, disclaimer, suggested-question
  chips, placeholder, `endpoint`).
- `AskWidget` (the whole component — button, panel, scroll-phase logic,
  keyboard/visualViewport handling, typing-reveal effect, logging).
- `STYLES_ASK` and every `.ask*`/`.askCta`/`.askDots`/`.askTypeCaret` CSS
  rule.
- `ASK_MODEL`, `ASK_TYPE_TICK_MS`/`ASK_TYPE_TARGET_MS`/`ASK_MIN_WAIT_MS`,
  `ASK_SYSTEM`, `ASK_PRETEND`/`ASK_PRETEND_FALLBACK`/`pretendReply`,
  `ASK_NAV_PROJECTS`/`ASK_GAMEHOUSE_*`/`ASK_CASE_LINKS`/`ASK_VALID_HREFS`/
  `ASK_HREF_LABELS`, `ASK_LINK_RE`/`renderAskContent`, `askML`,
  `askBarcelonaTime`/`askBarcelonaTimeNote`/`ASK_DOING_NOW`,
  `logAskSession`.
- The mount point `<AskWidget reduced={reduced} />` in `App()`.

The whole of `workers/ml2/` is yours: `index.js` (mirrors `ASK_SYSTEM` as
its own `SYSTEM` constant — **the two must be kept in step by hand**, the
Worker can't import from `App.jsx`), `wrangler.toml`, `README.md`.

You're also the only agent that should run `npx wrangler deploy` or
`npx wrangler secret put` — it's a single live Worker; two people deploying
around the same time just causes confusion about which version is live,
not an actual conflict, but keep it to one deployer.

**Not yours:** every case study's `CONTENT.projects` entry, the generic
`CaseStudy`/`GameHousePlusCase` renderers, every other `STYLES_*` block. If
a case-study or audit agent flags something ML²-related to you, that's the
right way for this to work — you make the change, they don't.

## What already exists — read the code, don't rebuild it

ML² is fully built and live: a floating button (bottom-right, tucked
mostly off-screen, grows on scroll-up/pause, shrinks on scroll-down) that
opens a panel — a right-hand column on desktop (the page itself makes room
for it via `body`/`nav`/`rail` padding, see `html.ask-col-open`), full-
screen on mobile. Replies go through a 3-tier fallback in `askML()`: the
Worker proxy (`CONTENT.ask.endpoint`) → a direct OpenAI call using
`VITE_OPENAI_API_KEY` from a local, gitignored `.env.local` (dev-only
fallback) → canned `ASK_PRETEND` answers matched by keyword. Every reply
waits at least `ASK_MIN_WAIT_MS` (currently 3s) showing the `.askDots`
indicator, then types out via a length-aware reveal (`ASK_TYPE_TICK_MS`/
`ASK_TYPE_TARGET_MS`) with a blinking `.askTypeCaret`. `renderAskContent()`
turns `[Label](href)` — or even a bare `(#/work/slug)` with no brackets —
into a real, validated button (`.askCta`), never a raw href. "What's Manel
doing right now" answers with only the slice matching his actual current
Barcelona time band, computed per-request server-side in the Worker.
Sessions get logged to Manel's inbox via the same Web3Forms endpoint the
contact form uses, once closed with at least one real answer.

A handful of fixes in here were non-obvious and easy to accidentally
regress — if you touch nearby code, know why these exist before changing
them:
- `.askPanel`'s entrance animation lives on a child, `.askPanelInner`, not
  on `.askPanel` itself — because a CSS animation with a `transform`
  keyframe keeps overriding an element's own `transform` for as long as
  it's "in effect," which silently broke the on-screen-keyboard fix (below)
  the first time it was tried directly on `.askPanel`.
- The mobile keyboard fix mirrors `window.visualViewport`'s `height` and
  `offsetTop` onto `.askPanel` (not `.askPanelInner`) so the header/input
  stay on screen when the keyboard opens — iOS in particular scrolls the
  whole fixed layer under the keyboard rather than resizing it.
- The button's ring text sits on a path inset 16 units into a 100-unit
  viewBox, deliberately not closer — any tighter and the all-caps text's
  cap-height clips against the button's own edge.
- `ASK_TYPE_TARGET_MS` controls total typing duration via a fixed number of
  ticks, not a fixed per-character rate — a fixed rate made long replies
  take 10+ seconds to type out, which read as slow, not "quick."

## Your task

Keep iterating on ML² per Manel's direction each session: persona/voice
tuning (`ASK_SYSTEM` in both `App.jsx` and `workers/ml2/index.js` — keep
them in sync), new capabilities, UI polish, bug fixes reported from real
use. When you change the system prompt or the Worker's request handling,
redeploy (`cd workers/ml2 && npx wrangler deploy`) and spot-check the live
endpoint before calling it done — prompt changes in particular need to be
tested against the real model, not just read for plausibility; small models
don't always follow instructions the way you'd expect, and this feature's
history is full of "looked right in the prompt, didn't do that live."

## House rules

1. **First thing, every fresh worktree**: `npm install` — `node_modules`
   isn't part of git, so it doesn't exist here until you install it.
2. Before calling anything done: `npm run lint` and `npm run build` must
   both pass clean (the only pre-existing warning is a `react/only-export-
   components` one on `src/App.jsx:43` — not yours to fix), and — for
   anything touching the Worker or the prompt — a live spot-check against
   the deployed endpoint.
3. Commit locally to `feature/chatbot` as you go. Don't push or merge to
   `main` unless Manel explicitly asks you to in the moment. Worker
   deploys are separate from git merges — deploying doesn't require `main`
   to have your changes yet, but keep the repo and the live Worker in sync
   reasonably soon after.
4. If Manel merges another branch to `main` while you're mid-task, rebase
   before continuing: `git fetch origin && git rebase origin/main`, resolve
   anything that conflicts.
5. Never commit a real API key anywhere — `.env.local` is gitignored for
   exactly this reason; the Worker's key lives only as a Cloudflare secret.
6. On an ambiguous creative or persona call, ask rather than guess — this
   feature has repeatedly needed live testing to catch a model doing
   something technically-compliant-but-wrong (verbatim-repeating an
   example instead of varying it, inventing an opinion instead of
   redirecting, etc.); don't assume a prompt change works until you've
   actually seen a live reply.

## The other agents, for context

| Branch | Worktree | Owns |
|---|---|---|
| `case/gamehouse-plus` | `ghio-case-gamehouse-plus` | GameHouse+ case (flagship) |
| `case/jesterday` | `ghio-case-jesterday` | Jesterday case study |
| `case/radisson` | `ghio-case-radisson` | Radisson Hotels case (WIP, hidden) |
| `case/scavenger-hunt` | `ghio-case-scavenger-hunt` | Scavenger Hunt case |
| `case/seat-cupra` | `ghio-case-seat-cupra` | SEAT CUPRA case (WIP) |
| `case/dragon-city-2` | `ghio-case-dragon-city-2` | Dragon City 2 case |
| `audit/mobile` | `ghio-audit-mobile` | Site-wide mobile/responsive audit |
| `audit/perf` | `ghio-audit-perf` | Site-wide perf/code-quality audit |
