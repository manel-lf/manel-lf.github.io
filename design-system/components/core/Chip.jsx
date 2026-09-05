import React from 'react';

/* Pill-outlined mono tag. Journal post tags and skill lists. */
export function Chip({ children, as: Tag = 'span', className = '', ...rest }) {
  return (
    <Tag className={`chip mono${className ? ' ' + className : ''}`} {...rest}>
      {children}
    </Tag>
  );
}
