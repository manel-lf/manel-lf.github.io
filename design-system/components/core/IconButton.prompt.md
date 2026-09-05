Circular icon-only button — scroller arrows (`outline`, 32px) and footer socials (`social`, 36px).

```jsx
<span className="arrowPair">
  <IconButton icon="chevronLeft" label="Previous bits" disabled={atStart} onClick={() => scrollBy(-1)} />
  <IconButton icon="chevronRight" label="Next bits" disabled={atEnd} onClick={() => scrollBy(1)} />
</span>
<IconButton variant="social" icon="linkedin" label="LinkedIn" href="…" />
```

Always in a pair for scrollers, and always disabled rather than removed at the ends of a row. `label` is mandatory.
