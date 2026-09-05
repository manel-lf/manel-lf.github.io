The one hero card at the top of the work section — a near-black panel over the case's own imagery.

```jsx
<SpotlightCard
  image="assets/img/scavenger-hunt-thumbnail.jpg"
  logo="assets/logos/ghplus-colored.svg" logoAspect={4.457}
  statement={['Rethinking how players start playing.', 'A product-wide pivot to in-app games.']}
  stats={[{ value: '6×', label: 'Day-0 activation' }, { value: '2×', label: 'Day-1 retention' }]}
  href="#/work/gamehouse-plus" />
```

Exactly two statement lines: the claim, then the mechanism (rendered muted). One spotlight per page — everything else goes in the `projectGrid` below it.
