The one button component — a pill with a trailing arrow, in the four treatments the site uses.

```jsx
<Button variant="ink" size="sm" href="#book">Book a call</Button>
<Button variant="inverse" href="#/work/gamehouse-plus">View case</Button>
<Button variant="ghost" leadingIcon="linkedin" icon="arrowUpRight">LinkedIn</Button>
<Button type="submit" variant="ink">Send message</Button>
```

Variants map to context, not hierarchy: `ink` sits on the light canvas, `inverse`/`panel`/`ghost` sit on a near-black panel. `size="sm"` is the 32px nav pill with an uppercase mono label. Never put two filled buttons side by side — the site always pairs one filled with one ghost.
