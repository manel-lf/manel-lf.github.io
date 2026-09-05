The whole icon system: one 20×20 grid, 1.5px stroke, round caps — use it for every glyph rather than pasting SVG.

```jsx
<Icon name="arrowRight" size={16} />
<Icon name="linkedin" size={18} />
```

Only these names exist: arrowRight, arrowLeft, arrowUpRight, chevronLeft, chevronRight, sun, moon, mail, calendar, close, plus the filled brand marks linkedin, behance, github. `arrowRight` is the default fallback. Directional arrows translate 3px on the parent's hover — that motion lives in the parent's CSS (`.ctaBook:hover svg`, `.cardCta`, `.viewCase`), not here.
