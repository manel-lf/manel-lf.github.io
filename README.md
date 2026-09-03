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
| Email, LinkedIn, Behance, "Book a call" | `LINKS` (just above `CONTENT`) — each URL is written once |
| Name, role, monogram | `CONTENT.meta` |
| Hero bio | `CONTENT.hero.bio` |
| The cycling roles in the headline | `CONTENT.hero.roles` |
| Logo strip companies | `CONTENT.logos.items` |
| How many logos show at once, the wait between swaps, and the cross-fade length | `CONTENT.logos.perPage`, `CONTENT.logos.intervalMs`, `CONTENT.logos.fadeMs` |
| Booking dialog copy and the calendar URL | `CONTENT.booking` |
| Which project is the spotlight | `CONTENT.work.spotlightSlug` |
| A project, or a whole case study | `CONTENT.projects[n]` |
| "Design bits" tiles | `CONTENT.bits.items` |
| Design bits image aspect (all tiles share it) | `CONTENT.bits.mediaRatio` |
| About copy and heading | `CONTENT.about` |
| Testimonials, including each `avatar` path | `CONTENT.testimonials.quotes` |
| Journal posts | `CONTENT.journal.posts` |
| Contact copy, labels, validation messages | `CONTENT.contact` |
| Make the form actually send (see below) | `CONTENT.contact.endpoint` |
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
  src: 'img/gamehouse-hero.png',    // file at public/img/gamehouse-hero.png
  alt: 'GameHouse+ first-session flow, three screens.',
  plate: 'mesh', tone: 'dark', seed: 201,   // ignored once src is set
},
```

**Write the path without a leading slash.** `img/shot.png` is resolved
against the deployment base, so it works both at a domain root and from a
subfolder (`user.github.io/manel-portfolio/`). A leading slash resolves from
the domain root and 404s in the subfolder case. Absolute `https://` URLs work
too. Verified against both layouts.

Two things that bite people:

- Files in `public/` are committed to git and copied into `dist/` verbatim,
  so they do upload — but **filenames are case-sensitive once deployed**,
  even though macOS is not. `Hero.PNG` referenced as `hero.png` works on your
  laptop and 404s on the host.
- Images are lazy-loaded and the box is sized from `ratio`, so give each
  entry a `ratio` close to the real aspect to avoid a visible letterbox.

Plates: `lattice`, `mesh`, `grid`, `strata`, `portrait`, `orbit`, `panels`,
`columns`, `weave`, `ramp`. Tones: `dark`, `light`, `accent`. `seed` is any
integer and changes the composition deterministically.

### Testimonial avatars

Each quote takes an `avatar` path resolved the same way as any other image.
Save each person's photo into `public/img/` under their own filename:

```
img/testimonial-emmi-kuusikko.jpg
img/testimonial-lea-schonfelder.jpg
img/testimonial-alex-segura.jpg
```

Square crops look best — they are rendered as a 44px circle. Until a file
exists, or if one is ever missing after deploy, the avatar falls back to the
person's initials rather than showing a broken image.

### Adding a project

Append to `CONTENT.projects` with a unique `slug`, then add its eight
`case.<slug>.*` keys to `CONTENT.IMAGES`. It appears in the secondary grid
and gets its own case study at `#/work/<slug>` automatically, including
prev/next navigation.

### Making the contact form actually send

Out of the box the form validates and then opens a prefilled draft in the
visitor's mail app — no third-party service, no keys, works as a pure static
build. A static page cannot send email on its own, so real sending needs a
form service. Set one key and it switches over; the UI then reports genuine
success or failure instead of being optimistic:

```js
// CONTENT.contact
endpoint: 'https://formspree.io/f/YOUR_ID',
```

Web3Forms works too, with its key passed alongside:

```js
endpoint: 'https://api.web3forms.com/submit',
endpointExtraFields: { access_key: 'YOUR_ACCESS_KEY' },
```

It POSTs `{ name, email, subject, message }` as JSON. Leave `endpoint: null`
to keep the mail-draft behaviour.

### Booking a call

The header CTA opens `CONTENT.booking.url` in a dialog as an iframe, rather
than pulling in Cal.com's embed script — so the app stays free of
third-party JavaScript. The CTA is a real anchor to the same URL, so
middle-click, "open in new tab" and a no-JavaScript visit all still work, and
the dialog carries a visible "open in a new tab" fallback in case the frame
is ever refused.

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

Two things move on a timer the visitor did not trigger: the typing headline
and the logo strip, which cross-fades four marks at a time. Both stop under
reduced motion — the headline pins to a single role and the strip renders
every logo at once. The strip also pauses on hover and focus so a name can be
read.

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
