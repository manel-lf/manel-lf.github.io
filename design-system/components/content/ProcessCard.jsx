import React from 'react';

/* One step of a case study's process, in the horizontal scroller. The index
   is accent mono; the body is pushed to the bottom with margin-top:auto so
   cards of different title lengths still baseline-align. */
export function ProcessCard({ index, title, meta, body }) {
  return (
    <article className="processCard">
      <span className="idx mono">{String(index).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <span className="meta mono">{meta}</span>
      <p>{body}</p>
    </article>
  );
}
