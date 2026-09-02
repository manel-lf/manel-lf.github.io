# Manel López — Portfolio

Single-page React portfolio with per-project case-study views. Off-white
editorial canvas, near-black display type, one restrained accent, working
light/dark toggle. No router, no CSS files, no image files.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build locally
```

## Everything editable lives in one place

All copy, links, projects, case-study sections, testimonials, journal posts
and visuals are in the `CONTENT` object exported from the top of
[`src/App.jsx`](src/App.jsx). Nothing below `CONTENT` needs to change to
change what the site says.

| I want to change… | Edit |
| --- | --- |
| Email, LinkedIn, Behance, GitHub, "Book a call" | `LINKS` (just above `CONTENT`) — each URL is written once |
| Name, role, monogram | `CONTENT.meta` |
| Hero bio | `CONTENT.hero.bio` |
| The cycling roles in the headline | `CONTENT.hero.roles` |
| Logo strip companies | `CONTENT.logos.items` |
| Which project is the spotlight | `CONTENT.work.spotlightSlug` |
| A project, or a whole case study | `CONTENT.projects[n]` |
| "Design bits" tiles | `CONTENT.bits.items` |
| About copy and heading | `CONTENT.about` |
| Testimonials | `CONTENT.testimonials.quotes` |
| Journal posts | `CONTENT.journal.posts` |
| Contact copy, labels, validation messages | `CONTENT.contact` |
| Footer rail, socials, copyright | `CONTENT.footer` |
| Case-study section labels shared across projects | `CONTENT.caseUi` |
| Any visual on the site | `CONTENT.IMAGES` |

### Swapping in real images

Every visual is one entry in `CONTENT.IMAGES`. With `src: null` the entry is
drawn as a deterministic SVG plate. Point `src` at a file and that one value
swaps in a real screenshot — nothing else changes, and the alt text travels
with the entry either way:

```js
'case.gamehouse-plus.hero': {
  src: '/img/gamehouse-hero.png',   // file at public/img/gamehouse-hero.png
  alt: 'GameHouse+ first-session flow, three screens.',
  plate: 'mesh', tone: 'dark', seed: 201,   // ignored once src is set
},
```

Plates: `lattice`, `mesh`, `grid`, `strata`, `portrait`, `orbit`, `panels`,
`columns`, `weave`, `ramp`. Tones: `dark`, `light`, `accent`. `seed` is any
integer and changes the composition deterministically.

### Adding a project

Append to `CONTENT.projects` with a unique `slug`, then add its eight
`case.<slug>.*` keys to `CONTENT.IMAGES`. It appears in the secondary grid
and gets its own case study at `#/work/<slug>` automatically, including
prev/next navigation.

### Adding journal post links

Journal rows are deliberately not links, because there are no post pages yet.
Give a post an `href` and it becomes a real link with a visible affordance.

## Routing

Hash-based, no dependency. `#/` is home, `#/work/<slug>` is a case study.
Shareable, back/forward works, and it needs no server rewrite rules — which
is why it deploys to static hosting untouched.

## Motion

Transform and opacity only, 150–400ms for UI transitions and longer only for
deliberate reveals. Everything is gated behind `prefers-reduced-motion`: the
typing headline resolves to a single static role, reveals render visible, and
hover/parallax/flight are all disabled.

The scroll reveal is opt-in from JavaScript (`.has-reveal` on `<html>`), so if
scripting or `IntersectionObserver` is unavailable the page renders fully
visible rather than stranded at `opacity: 0`.

## Deploying

Static build, no server needed.

```bash
npm run build
```

`vite.config.js` sets `base: './'`, so `dist/` works from any path — a
subfolder, GitHub Pages, or a bare host.

> Note on internal policy: for anything company-related, publish via the
> `/deploy-internal-web` skill to `*.internalweb.gameco.biz` rather than an
> external host. This is a personal portfolio, so pick a host accordingly.

## Stack

React 19 + Vite. Two type families (Archivo, JetBrains Mono) from Google
Fonts. Every icon and wordmark is inline SVG. No CSS files, no image files,
no icon library, no animation library, no router.
