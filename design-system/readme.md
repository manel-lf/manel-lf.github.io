# Manel López — Portfolio Design System

The design language of **manel-lf.github.io**, the personal portfolio of Manel
López, a Barcelona-based senior product designer with an engineering
background. One product, one surface: a single-page React portfolio with
per-project case-study views and a small journal.

Positioning, in the site's own words: *"Barcelona-based senior product designer
with an engineering background. Consumer subscription apps, mobile products and
design systems, grounded in research and product analytics."*

The visual idea is an **off-white editorial canvas, near-black display type, one
restrained accent blue, and a working light/dark toggle**. It reads like a
well-set magazine that happens to be a product: rules instead of shadows, mono
micro-labels instead of decoration, and a single inverted panel used sparingly
for emphasis.

## Sources

Everything here was read from the repository — no screenshots, no
reconstruction.

- **GitHub:** <https://github.com/manel-lf/manel-lf.github.io> (branch `main`)
  — read `README.md`, `index.html`, `package.json`, and `src/App.jsx` (the whole
  app: content, injected stylesheet, components, views).
- **Live site:** <https://manel-lf.github.io>
- A verbatim copy of the source component file is kept at
  `reference/portfolio-App.jsx.txt` for future diffing. It is **not** part of
  the compiled system.

Read those repositories directly when you need more than this system captures —
the whole site is one well-commented file, and the comments explain most of the
decisions recorded below.

### Stack notes carried over

React 19 + Vite, hash routing, no CSS files upstream (the stylesheet is a
template literal injected once), no icon library, no animation library. Two type
families from Google Fonts: **Archivo** and **JetBrains Mono**. Every icon and
brand mark is SVG.

## Products and surfaces

There is exactly one product: the portfolio website. It has three views, all
recreated in `ui_kits/portfolio/`:

1. **Home** — hero, client logo rotator, work spotlight + grid, design bits,
   about, testimonials, journal index, contact form, footer, section rail.
2. **Case study** (`#/work/<slug>`) — overview, process scroller, dark system
   panel, extend grid, impact, prev/next.
3. **Journal post** (`#/journal/<slug>`) — one measured column of long-form
   prose with figures, lists, stat rows and references.

---

## Content fundamentals

**Voice.** First person, past or present tense, no hedging. Manel writes about
what he did and what it cost. Sentences are declarative and often carry one
subordinate clause after an em dash. There is no marketing register anywhere on
the site.

**Casing.** Sentence case everywhere except mono micro-labels, which are
uppercase. Never title case in headings.

**The heading formula.** Every section opens with a two-part heading: a muted
category ending in a full stop, then an ink claim, also ending in a full stop,
at the same size and weight.

- "Recent work." → "From pixels to products."
- "Design bits." → "What I have lately been working on."
- "About me." → "Design that ships."
- "Shoutouts." → "What stakeholders and teammates say about me."
- "Get in touch." → "Let's talk."

Case studies use the same shape with a colon instead: "Overview:" → "Backstory
of the work.", "Process:" → "How I kicked things off.", "The impact:" →
"Activation, and what changed."

**Punchy, but never cute.** The quirk is in the specifics, not in wordplay. The
hero's cycling roles run "Product Designer, Engineer, Systems Designer, AI
Prototyper, Gamificator, Product Thinker, University Lecturer, Cat Butler" — the
joke is the last item, and it only works because the seven before it are true.

**Product language, rational framing.** Copy names the mechanism and the
evidence: *"Instrumented the first session step by step in Amplitude and found
the drop was not at paywall or signup — it was in the gap between opening the
app and anything being playable."* Claims arrive with a number attached ("6×
day-0 activation") or not at all. Risks are stated against the author's own
interest: *"a prototype that runs is not the same as a decision that is right"*,
*"I have since used the same analytics to argue for redirecting a feature I had
already shipped myself."*

**I vs you.** "I" for the work. "You" only in the interface: form labels ("Your
name", "Your email"), the booking subtitle ("Pick a slot that suits you"), error
messages ("Please tell me your name."). Never "we" — this is one person.

**Microcopy.** Polite, complete sentences with a full stop, and a reason where
one exists: "Please add a message — a couple of sentences is plenty." Buttons
are plain verbs or verb phrases: "Book a call", "View case", "Send message",
"Write another", "Open in a new tab instead". Status copy is honest rather than
optimistic: "That didn't go through."

**Journal titles** are first-person claims, not topics: "Grounding ideas fast is
changing how I design", "My toolkit for prototyping with Claude Code". Deks are
one or two sentences that set up a tension.

**Emoji: never.** Not in copy, not in labels, not in headings. There is no emoji
anywhere in the source. Unicode is used only for typographic characters —
curly quotes and apostrophes (’ “ ”), the em dash (—), the multiplication sign
in metrics (6×), and a left guillemet-free `"` opening quote mark drawn large as
the testimonial's quote glyph.

**Numbers.** Relative multiples ("6×", "2×") or plain words ("Same day",
"Fewer", "Earlier"). Never a fabricated absolute.

---

## Visual foundations

### Colour

Semantic only — there is no raw palette. Both themes declare the same token
names, so no component branches on theme.

| Role | Light | Dark |
| --- | --- | --- |
| `--canvas` | `#F4F4F2` | `#0B0B0B` |
| `--surface` | `#FFFFFF` | `#131313` |
| `--surface-2` | `#EDEDEA` | `#1A1A1A` |
| `--ink` | `#0A0A0A` | `#F4F4F2` |
| `--ink-2` | `#3A3A38` | `#C9C9C5` |
| `--muted` | `#6B6B68` | `#8E8E8A` |
| `--hairline` | `#E2E2DE` | `#232323` |
| `--hairline-strong` | `#CFCFC9` | `#333331` |
| `--panel` | `#0E0E0E` | `#050505` |
| `--panel-ink` | `#F4F4F2` | `#F4F4F2` |
| `--panel-muted` | `#9A9A96` | `#8E8E8A` |
| `--accent` | `#2145E6` | `#5B77FF` |
| `--danger` | `#C0392B` | `#FF6B5B` |

The off-white canvas is warm-neutral, not white. The accent is used only for:
the typing caret, the focus ring, bit-tile kickers, process-card indices,
selection highlight, link hover, input focus underline, and the bullet dot in
journal lists. It is **never** a fill behind text and never a button colour.

### Type

Archivo for everything; JetBrains Mono at 11px for micro-labels. Tracking
tightens as size grows: `-.045em` at hero size, `-.03em` at section size,
`-.02em` at title size, `0` at body size, `+.12em` on mono.

| Role | Size | Weight |
| --- | --- | --- |
| Hero | `clamp(2.75rem, 9.2vw, 7.5rem)` / .92 | 700 |
| Case title | `clamp(2.25rem, 6.2vw, 5rem)` / .98 | 700 |
| Section heading | `clamp(1.5rem, 3vw, 2.5rem)` / 1.08 | 600 |
| Panel statement | `clamp(1.5rem, 3.4vw, 2.75rem)` / 1.12 | 600 |
| Stat value | `clamp(1.75rem, 3.2vw, 2.75rem)` | 700 |
| Quote | `clamp(1.0625rem, 1.7vw, 1.375rem)` / 1.55 | 400 |
| Hero bio / post prose | 1.0625rem / 1.62–1.72 | 400 |
| Body / case prose | 1rem / 1.68 | 400 |
| Card copy | .9375rem / 1.6 | 400 |
| Mono label | .6875rem / 1.4 | 500 |

Measures are capped in `ch`: headings 22ch, prose 62ch, journal body 68ch, card
copy 44ch, bio 46ch. `text-wrap: balance` on statements.

### Space and layout

A 4px base that opens into editorial rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 96,
128, 160 (`--s1`…`--s11`). Content sits in a 1240px measure with a fluid gutter
`clamp(20px, 5vw, 64px)`; sections are padded `clamp(80px, 12vh, 160px)`, tight
sections `clamp(56px, 8vh, 104px)`, panels `clamp(28px, 4.5vw, 72px)`.

Two elements are fixed: the translucent nav at the top and the section rail
docked bottom-centre. Everything else scrolls.

### Backgrounds, imagery, transparency

No gradient backgrounds, no textures, no patterns, no hand-drawn illustration.
The canvas is flat colour. The only gradient in the system is a **protection
gradient** — `linear-gradient(180deg, rgba(5,5,5,.55), rgba(5,5,5,.35) 45%,
rgba(5,5,5,.9))` — laid over the spotlight's photography so off-white text stays
legible. No capsules or scrims behind text anywhere else.

Imagery is real: product screenshots and photography, cropped hard to the box
with `object-fit: cover`, cool-to-neutral, no grain, no duotone, no filters.
Where a screenshot does not exist, the upstream site draws a deterministic
geometric SVG "plate" from a seed — the UI kits here substitute a flat
placeholder box instead (see *Known gaps*).

Transparency and blur appear in exactly three places: the nav
(`color-mix(canvas 82%)` + `blur(12px) saturate(140%)`), the section rail
(`color-mix(panel 92%)` + `blur(14px) saturate(150%)`), and the dialog scrim
(`rgba(10,10,10,.55)` + `blur(4px)`). Nowhere else.

### Borders, radii, shadows

Divisions are 1px rules, not shadows. Radii: 4px (thumbnails), 8px (inner
frames, monogram), 12px (cards and panels), pill (everything interactive —
buttons, chips, icon buttons, the rail, the toggle).

Cards are `--surface` with a `--hairline` border, 12px radius, and
`0 1px 2px rgba(10,10,10,.04)` at rest — a shadow so slight it reads as a
second border. On hover the card lifts 3–4px and takes
`0 18px 40px -18px rgba(10,10,10,.22)`: wide, downward, negative spread, never
a glow. On the dark theme the near-black panels gain a hairline border, since a
near-black block no longer defines its own edge against a near-black canvas.

Inputs have no box at all — a mono label over a single bottom hairline that
turns accent on focus and danger when invalid.

### Motion

Transform and opacity only. 150–400ms for UI transitions; longer only for
deliberate reveals.

- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` — entrances, reveals, hover lifts.
- `--ease-std: cubic-bezier(0.4, 0, 0.2, 1)` — colour and opacity.
- `--ease-spring: cubic-bezier(0.34, 1.32, 0.64, 1)` — the rail pill and the
  theme knob only. One restrained overshoot, nothing bouncy.
- Durations: 150 / 220 / 320 / 560 / 720ms.

**Hover states** lift and dim: `translate3d(0,-1px…-4px,0)` plus `opacity .92`
on filled buttons, media scaling to 1.045 inside a card, arrows sliding 3px in
their own direction. **Press states** are not styled — the site relies on the
lift releasing. Disabled controls drop to `.32` opacity (icon buttons) or `.55`
(submit) and are never hidden.

Two things move unprompted: the typing headline and the client logo rotator
(five marks cross-fading every 4s over 960ms). Scroll reveals are opacity +
18px rise, fire once, and are JS-gated (`.has-reveal`) so a page without
scripting renders fully visible. Everything is disabled under
`prefers-reduced-motion`.

---

## Iconography

- **One icon set, drawn in the source**: a 20×20 viewBox, 1.5px stroke, round
  caps and joins. It is small on purpose — `arrowRight`, `arrowLeft`,
  `arrowUpRight`, `chevronLeft`, `chevronRight`, `sun`, `moon`, `mail`,
  `calendar`, `close`. Three filled brand glyphs sit alongside it: `linkedin`,
  `behance`, `github`. Every path is copied verbatim into
  `components/core/Icon.jsx`; there is no icon font, no sprite sheet, no CDN
  library, and no substitution.
- **Sizes in use**: 11px (theme knob), 14px (inside mono labels and small
  pills), 16–18px (buttons, social buttons), 20px (default).
- **Directional arrows carry meaning**: `arrowRight` for internal navigation,
  `arrowUpRight` for anything that leaves the page, `arrowLeft` for back and
  previous, chevrons only for scroller controls.
- **No emoji, ever.** No unicode symbols used as icons either — the only
  non-typographic glyph drawn from a font is the large `"` in the testimonial
  block.
- **Client brand marks** live in `assets/logos/` as single-colour SVGs and are
  painted as CSS masks over `currentColor`, so one black file renders near-black
  on the light canvas and off-white in dark mode. Each carries an aspect (its
  viewBox ratio) and an optical-weight scale:

| File | Company | aspect | scale |
| --- | --- | --- | --- |
| `gamehouse.svg` | GameHouse | 8.201 | 0.62 |
| `jesterday.svg` | Jesterday | 3.292 | 1.45 |
| `eunoiadigital.svg` | Eunoia Digital | 12.264 | 0.45 |
| `popcore.svg` | Popcore Games | 6.036 | 0.9 |
| `cupra.svg` | SEAT CUPRA | 7.008 | 0.85 |
| `socialpoint.svg` | Socialpoint | 4.867 | 1 |
| `lasalle.svg` | La Salle BCN | 3.526 | 1.4 |
| `kavehome.svg` | Kave Home | 5.581 | 0.95 |
| `murisbrand.svg` | MURIS | 4.68 | 1 |
| `radisson.svg` | Radisson Hotels | 2.681 | 1.5 |
| `ghplus.svg` | GameHouse+ (mono) | — | — |
| `ghplus-colored.svg` | GameHouse+ (colour lockup) | 4.457 | — |

`ghplus-colored.svg` keeps its own fills and is used as a real `<img>`; a mask
would discard them.

## Brand mark

**There is no logotype.** The identity is a monogram: the letter **M** in
Archivo 800 on a near-black 32px square with an 8px radius, taken from the
site's favicon and saved here as `assets/logo.svg`. Where a wordmark would go,
the site sets the name in Archivo 700. Do not draw one.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — a list of `@import`s. Link this one file. |
| `tokens/` | `fonts`, `typography`, `spacing`, `radius`, `shadow`, `motion`, `layout`, `colors`, `base` |
| `css/components.css` | The component-level class rules, copied verbatim from the source stylesheet |
| `assets/logo.svg` | The monogram |
| `assets/logos/` | 12 client brand marks (single-colour SVG, mask-ready) |
| `assets/img/` | Portrait, testimonial avatars, two project thumbnails, one journal image |
| `guidelines/` | 21 foundation specimen cards (Colors, Type, Spacing, Motion, Brand) |
| `components/` | Reusable primitives — see below |
| `ui_kits/portfolio/` | The three-view click-through recreation of the site |
| `templates/case-study/` | A case-study page template for consuming projects |
| `reference/portfolio-App.jsx.txt` | Verbatim upstream source, for diffing |
| `github.md` | Source-repo association and sync record |
| `SKILL.md` | Agent-skill entry point |

### Components

`components/core/` — **Icon**, **Button**, **IconButton**, **MonoLabel**,
**Chip**, **TextLink**, **ThemeToggle**, **Monogram**, **Wordmark**,
**Avatar**

`components/content/` — **SectionHead**, **StatRow**, **SpotlightCard**,
**ProjectCard**, **BitTile**, **ProcessCard**, **Testimonial**,
**JournalRow**, **CaseNavBtn**, **PanelCard**, **MetaBar**

`components/forms/` — **Field**

`components/navigation/` — **NavBar**, **SectionRail**

`components/overlay/** — **Dialog**

Every family here has a counterpart in the source. The inventory is the
source's inventory: no Toast, no Tabs, no Select, no Tooltip, because the site
has none.

**Intentional additions:** none. `Icon` and `Wordmark` are wrappers around the
source's own `Icon` and `Wordmark` functions, not new ideas.

### Known gaps

- **Generated plates.** Upstream, any image without a real file is drawn as a
  deterministic geometric SVG composition (10 plate types × 3 tones × a seed).
  That generator is not reproduced here; the UI kits use a flat placeholder box
  labelled with what belongs there. Real screenshots should replace both.
- **Case studies for Jesterday and Scavenger Hunt** are published on Behance
  upstream, so their in-app views are external links. The kit reproduces that.
- **Fonts** are loaded from Google Fonts via `@import` in `tokens/fonts.css`,
  exactly as upstream. No font binaries are vendored, so the compiler reports
  zero `@font-face` rules — this is faithful, not a gap, but a consuming
  project that needs offline fonts should vendor Archivo and JetBrains Mono.
