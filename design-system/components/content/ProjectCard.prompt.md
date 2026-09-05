A card in the secondary work grid. Renders as an `<li>` — put it inside `<ul className="projectGrid">`.

```jsx
<ul className="projectGrid">
  <ProjectCard index={0} project={{
    slug: 'seat-cupra', name: 'SEAT CUPRA', eyebrow: 'SEAT CUPRA',
    logo: 'assets/logos/cupra.svg', logoAspect: 7.008, logoScale: 0.85,
    cardDescription: 'In-car HMI for a performance brand — one type ramp from cluster to centre display.',
  }} />
</ul>
```

Two media modes: a masked wordmark centred in the box (default), or `thumbnail` for a real screenshot, which bleeds edge to edge and pushes the eyebrow into a translucent overlay. `externalUrl` turns the card into an external Behance link with the CTA copy swapped.
