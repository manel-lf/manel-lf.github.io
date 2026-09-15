# Agent brief — main/home session

You're on `main`, in the primary worktree of Manel López's product-design
portfolio (`manel-lf.github.io`). Several other Claude Code sessions work
on this same repo in parallel, each in its own git worktree/branch (see the
fleet table below) — you're the only one of them that ever pushes or
merges to `main`. That's not a permissions quirk to route around; it's what
keeps N parallel agents from silently clobbering each other's edits on the
same files, most of them inside the one ~9,700-line `src/App.jsx`.

## Your job

- **Ship branches.** When a branch is lint/build-clean and ready, use the
  `ship` skill (or `/ship <branch>`) — it rebases the branch onto the
  latest `origin/main`, runs the repo's own lint/build gate, fast-forwards
  `main`, pushes, and confirms the resulting deploy actually went live
  (retrying once on a transient CI failure). A session on another branch
  that invokes `/ship` bare will relay its request to you via
  `SendMessage` — expect those, and reply back once it's shipped so it
  isn't left hanging.
- **Shared, cross-cutting work.** Anything that doesn't belong to one case
  study specifically — shared components (`SectionHead`, `Footer`,
  `CaseStudy`/`GameHousePlusCase`, the case-study sign-off block), global
  CSS tokens, the work-grid cards, site-wide bugs — is yours, since it's
  the one territory every other branch depends on and none of them owns.
- **Keep this fleet's plumbing healthy.** Worktree/branch setup, dev-server
  port conflicts, and — per the incident that prompted this rewrite — the
  fact that `CLAUDE.md` is a single tracked path: if a branch's own brief
  ever gets carried into `main` by a merge, every other branch inherits it
  on its next rebase. If you fix another worktree's `CLAUDE.md`, edit the
  file on disk there rather than committing it to that branch's history —
  a local, uncommitted fix can't leak into `main` through a future ship.

## The fleet

| Branch | Worktree | Owns |
|---|---|---|
| `case/gamehouse-plus` | `ghio-case-gamehouse-plus` | GameHouse+ case (flagship) |
| `case/jesterday` | `ghio-case-jesterday` | Jesterday case study |
| `case/radisson` | `ghio-case-radisson` | Radisson Hotels case (WIP, hidden) |
| `case/scavenger-hunt` | `ghio-case-scavenger-hunt` | Scavenger Hunt case |
| `case/seat-cupra` | `ghio-case-seat-cupra` | SEAT CUPRA case (WIP) |
| `case/dragon-city-2` | `ghio-case-dragon-city-2` | Dragon City 2 case |
| `case/the-southern` | `ghio-case-the-southern` | The Southern case study |
| `audit/mobile` | `ghio-audit-mobile` | Site-wide mobile/responsive audit |
| `audit/perf` | `ghio-audit-perf` | Site-wide perf/code-quality audit |
| `feature/chatbot` | `ghio-chatbot` | ML² chat widget + its Cloudflare Worker (`workers/ml2/`) |

Each case-study/audit branch's own `CLAUDE.md` should describe exactly what
it owns and its house rules (npm install first, lint+build clean before
calling anything done, commit to its own branch, never merge/push to `main`
itself — ask the home session or invoke `/ship`). If one of them is showing
this same main/home brief instead of its own, that's the propagation bug
above — fix the file in that worktree directly.

## The one fact that shapes everything here

The entire site is one file: **`src/App.jsx`, ~9,700 lines** — every case
study's content, every shared component, every style block, and the
`CONTENT` object for the whole site. `workers/ml2/` (the ML² chatbot's
Cloudflare Worker) is the one fully separate deployable, owned by
`feature/chatbot` alone; it's not part of `npm run build` or CI.

## House rules

1. Before merging/shipping anything: `npm run lint` and `npm run build`
   must both pass clean (the only pre-existing warning is a `react/only-
   export-components` one on `src/App.jsx:43`, plus a handful of unrelated
   warnings under `design-system/` — always ignorable).
2. Fetch and rebase onto `origin/main` before shipping, every time — other
   branches land here independently and often.
3. Never force-push, never skip the lint/build gate to save time.
4. Never commit a real API key or secret anywhere.
