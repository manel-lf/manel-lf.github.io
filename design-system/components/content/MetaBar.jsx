import React from 'react';

/* The rules-bounded meta strip under a case study's hero: role, years, and a
   wider skills cell. */
export function MetaBar({ items }) {
  return (
    <dl className="metaBar">
      {items.map((item) => (
        <div className="metaCell" key={item.label}>
          <dt className="mono">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
