The fixed top bar: monogram, one CTA, theme toggle. Nothing else.

```jsx
<NavBar theme={theme} onToggleTheme={toggle} ctaHref="https://cal.com/…" onCta={openDialog} />
```

Deliberately has no navigation links — section wayfinding belongs to `SectionRail` at the bottom of the viewport. The bar is translucent with a 12px backdrop blur and grows a hairline border once `window.scrollY > 8`.
