The light/dark switch that sits at the right end of the nav.

```jsx
<ThemeToggle theme={theme} onToggle={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
```

The knob position is driven by `[data-theme='dark']` on an ancestor, not by the prop — set `document.documentElement.dataset.theme` when you toggle, and add the `theme-ready` class after mount so the first paint never animates.
