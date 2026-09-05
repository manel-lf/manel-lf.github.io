import React from 'react';

/* Metric row. The value is rendered below the label in the DOM and flipped
   with column-reverse, so the label reads first to assistive tech while the
   number sits on top. */
export function StatRow({ stats, onPanel = true }) {
  return (
    <dl className={`statRow${onPanel ? '' : ' statRow--onCanvas'}`}>
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <dt className="label mono">{s.label}</dt>
          <dd className="value">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
