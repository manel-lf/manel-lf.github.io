Read-only mono tag in a hairline pill — journal post tags, case-study skill lists.

```jsx
<span className="chips">
  {post.tags.map((t) => <Chip key={t}>{t}</Chip>)}
</span>
```

Never interactive, never filled, never coloured. Wrap a group in `.chips` for the 8px gap.
