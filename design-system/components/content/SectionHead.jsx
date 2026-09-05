import React from 'react';

/* Every section opens the same way: a muted label, then the statement in ink,
   both at the same size and weight. An optional aside splits it into two
   columns. Both halves reveal on scroll, the statement 80ms behind the label. */
export function SectionHead({ label, statement, aside, onPanel = false, headingId, as: Tag = 'h2' }) {
  const heading = (
    <Tag className={`sectionHead${onPanel ? ' sectionHead--onPanel' : ''}`} id={headingId}>
      <span className="label reveal">{label}</span>{' '}
      <span className="statement reveal" style={{ '--reveal-delay': '80ms' }}>
        {statement}
      </span>
    </Tag>
  );
  if (!aside) return heading;
  return (
    <div className="splitHead">
      {heading}
      <p className="aside reveal" style={{ '--reveal-delay': '160ms' }}>
        {aside}
      </p>
    </div>
  );
}
