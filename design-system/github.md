repo: manel-lf/manel-lf.github.io
branch: main

## Last sync

date: 2026-09-04T16:31:14Z

### Updated in this project

- Built the design system from the repository's injected stylesheet: tokens, component rules, and the 20×20 icon set.
- Copied all 12 client brand marks and 7 image assets from `public/img/`.
- Recreated the three site views (home, case study, journal post) as a UI kit.
- Kept a verbatim copy of `src/App.jsx` at `reference/portfolio-App.jsx.txt` for diffing.

## Screen map

| Project screen | Built from |
| --- | --- |
| `ui_kits/portfolio/index.html` (router, theme) | `index.html`, `src/App.jsx` (parseHash, useTheme, useStyleSheet) |
| `ui_kits/portfolio/HomeScreen.jsx` | `src/App.jsx` — Hero, LogoStrip, WorkSection, Spotlight, ProjectCard, BitsSection, AboutSection, Testimonials, JournalSection, ContactSection, Footer, SectionRail |
| `ui_kits/portfolio/CaseStudyScreen.jsx` | `src/App.jsx` — CaseStudy, CaseSection, ProcessScroller, STYLES_CASE |
| `ui_kits/portfolio/JournalPostScreen.jsx` | `src/App.jsx` — JournalPost, STYLES_POST |
| `ui_kits/portfolio/data.js` | `src/App.jsx` — LINKS, CONTENT |
| `tokens/*.css`, `css/components.css` | `src/App.jsx` — RADIUS, EASE, DUR, STYLES, STYLES_HOME, STYLES_CASE, STYLES_POST, STYLES_UTIL |
| `components/core/Icon.jsx` | `src/App.jsx` — ICON_PATHS, ICON_FILLED, Icon |
| `components/**` | `src/App.jsx` — Wordmark, Avatar, SectionHead, SectionRail, Nav, IframeDialog, and the class rules they apply |
| `assets/logos/*`, `assets/img/*` | `public/img/**` |
