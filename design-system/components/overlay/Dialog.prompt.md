The one overlay: a blurred scrim over a surface panel. Used for the booking calendar and small third-party embeds.

```jsx
{open && (
  <Dialog title="Book a call" subtitle="Pick a slot that suits you — 30 minutes, no agenda needed."
    footerLink="https://cal.com/…" footerLabel="Open in a new tab instead" onClose={() => setOpen(false)}>
    <iframe title="Book a call" src="…" style={{ width: '100%', height: 640, border: 0 }} />
  </Dialog>
)}
```

Escape closes, focus is trapped, body scroll is locked, and the trigger regains focus on close. Always give an embedded third party a visible fallback link — the dialog should never become a dead end.
