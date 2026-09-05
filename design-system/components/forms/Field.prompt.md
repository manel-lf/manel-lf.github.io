The only input treatment: a mono label over an underline-only control. No boxes, no fills.

```jsx
<form className="form">
  <Field name="name" label="Your name" value={v.name} placeholder="Hiring Manager" onChange={…} />
  <Field name="email" label="Your email" type="email" value={v.email} placeholder="you@company.com" onChange={…} />
  <Field name="message" label="Message" textarea full value={v.message}
    placeholder="A line or two about the team, the product and the problem." onChange={…} />
</form>
```

Validate on blur, never on keystroke. Error copy is a polite full sentence ("Please add a message — a couple of sentences is plenty."). Wrap fields in `.form` for the two-column grid and use `full` for anything that should span it.
