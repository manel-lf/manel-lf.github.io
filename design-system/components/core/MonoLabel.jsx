import React from 'react';

/* The mono micro-label: 11px JetBrains Mono, .12em tracking, uppercase.
   Every eyebrow, meta line, rail item and stat label in the product. */
export function MonoLabel({ children, as: Tag = 'span', tone = 'default', className = '', ...rest }) {
  const toneStyle =
    tone === 'muted'
      ? { color: 'var(--muted)' }
      : tone === 'accent'
        ? { color: 'var(--accent)' }
        : tone === 'onPanel'
          ? { color: 'var(--panel-muted)' }
          : undefined;
  return (
    <Tag className={`mono${className ? ' ' + className : ''}`} style={toneStyle} {...rest}>
      {children}
    </Tag>
  );
}
