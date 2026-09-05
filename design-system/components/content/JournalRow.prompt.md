One row of the journal index. Renders an `<li>` — put them in `<ul className="journalList">`.

```jsx
<ul className="journalList">
  <JournalRow index={0} post={{
    slug: 'grounding-ideas-fast', date: 'June 2026', tags: ['Process', 'Prototyping'],
    title: 'Grounding ideas fast is changing how I design',
    dek: 'The distance between a question and an answer used to be a chain of documents.',
  }} />
</ul>
```

The whole row is the link; the hover state is a surface fill bleeding 24px past the text column. Titles are first-person claims, not topics.
