A "design bits" tile: 4:3 image, accent mono kicker, one sentence. Renders an `<li>` — put four in a `<ul className="bitsRow">`.

```jsx
<ul className="bitsRow">
  <BitTile index={0} kicker="AI tooling" image="assets/img/journal-tcebc-tool.jpg"
    caption="A working prototype in an afternoon — Claude Code driving the build, the Figma MCP keeping it on the design system." />
</ul>
```

Captions are single sentences about a real artefact, often with an em-dash aside. Rows are horizontally scrollable and paired with an `IconButton` arrow pair in `.rowHead`.
