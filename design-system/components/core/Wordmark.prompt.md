Client logo, painted as a CSS mask over `currentColor` so one black source file works in both themes.

```jsx
<Wordmark src="assets/logos/gamehouse.svg" name="GameHouse" aspect={8.201} scale={0.62} />
<Wordmark src="assets/logos/ghplus-colored.svg" name="GameHouse+" aspect={4.457} preserveColor />
```

Every logo in `assets/logos/` has a known aspect and scale — copy them from readme.md rather than guessing, or the row's optical weight goes ragged. Use `preserveColor` only for the colour lockup; everything else masks.
