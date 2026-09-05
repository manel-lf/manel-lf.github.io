# Portfolio UI kit

A click-through recreation of **manel-lf.github.io**, composed from this design
system's components. Open `index.html`.

## Views

Hash-routed, exactly as upstream:

- `#/` — home
- `#/work/<slug>` — case study (`gamehouse-plus` is the full one)
- `#/journal/<slug>` — journal post (`grounding-ideas-fast` is the full one)

## What is interactive

- Light/dark toggle in the nav (a CSS-variable swap on `[data-theme]`).
- The typing role headline and the five-at-a-time client logo rotator.
- Section rail at the bottom: click to jump, the pill slides on a spring, and
  scroll position drives the active item.
- Design-bits rows and the case-study process scroller: arrow controls disable
  at the ends.
- Testimonial carousel: dots and arrows.
- Contact form: validates on blur, then reports a sent state locally (upstream
  it POSTs to Web3Forms).
- "Book a call" opens the dialog — focus-trapped, Escape closes.
- Project cards for Jesterday and Scavenger Hunt are external Behance links, as
  upstream; their case-study routes show a short referral view.

## Files

| File | What |
| --- | --- |
| `index.html` | Router, theme state, script mounting |
| `data.js` | Content, verbatim from the source `CONTENT` object |
| `HomeScreen.jsx` | Home view + shared `SiteFooter`, `Plate`, reveal/scroll-spy hooks |
| `CaseStudyScreen.jsx` | Case-study view |
| `JournalPostScreen.jsx` | Journal post view |

## Substitutions

Upstream, any image without a real file is drawn as a deterministic geometric
SVG plate. That generator is not reproduced: those slots render as a flat
placeholder box labelled with what belongs there (`Plate` in `HomeScreen.jsx`).
Real screenshots should replace them. The images that do exist upstream — the
portrait, three testimonial avatars, two project thumbnails and one journal
image — are used as-is.
