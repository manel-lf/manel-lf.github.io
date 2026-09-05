import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* Prev/next pair at the foot of a case study or journal post. The "next"
   variant mirrors its alignment to the right edge. */
export function CaseNavBtn({ direction, label, name, href, onClick }) {
  const isNext = direction === 'next';
  return (
    <a
      className={`caseNavBtn${isNext ? ' caseNavBtn--next' : ''}`}
      href={href}
      onClick={onClick}
      aria-label={`${label} — ${name}`}
    >
      <span className="dir mono">
        {!isNext ? <Icon name="arrowLeft" size={14} /> : null}
        {label}
        {isNext ? <Icon name="arrowRight" size={14} /> : null}
      </span>
      <span className="name">{name}</span>
    </a>
  );
}
