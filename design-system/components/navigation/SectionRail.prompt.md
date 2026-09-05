The bottom-docked wayfinding rail — a blurred near-black capsule with a pill that slides to the active section.

```jsx
<SectionRail activeId={active} onSelect={scrollToId} items={[
  { id: 'work', label: 'Work' }, { id: 'bits', label: 'Bits' },
  { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' },
]} />
```

This is the page's only navigation. Labels are single words in mono. The rail is dark in both themes — it reads as a floating object, not a surface.
