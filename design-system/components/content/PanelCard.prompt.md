The brand's one inverted surface — a near-black panel with a 12px radius. Use it once or twice per page, never more.

```jsx
<PanelCard aside={<img src="assets/img/manel-portrait.jpg" alt="Manel López" />}>
  <h3>AI Native Designer. Design Thinker.</h3>
  <div className="aboutBody"><p>…</p><p>…</p></div>
  <div className="btnRow"><Button variant="panel" leadingIcon="linkedin" icon="arrowUpRight" href="…">LinkedIn</Button></div>
</PanelCard>
```

`variant="system"` is the wide panel a case study's screen grid sits on. On the dark theme both variants gain a hairline border, since a near-black block no longer defines its own edge.
