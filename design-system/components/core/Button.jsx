import React from 'react';
import { Icon } from './Icon.jsx';

/* Four button treatments, all from the portfolio:
   ink      → .ctaBook / .submit   filled near-black on the canvas
   inverse  → .viewCase            filled off-white on a dark panel
   panel    → .btn                 filled off-white on a dark panel, smaller
   ghost    → .btn--ghost          outlined on a dark panel
   Every one is a pill; every one lifts 1–2px on hover and dims to .92. */
const CLASS = {
  ink: { sm: 'ctaBook mono', md: 'submit', lg: 'submit' },
  inverse: { sm: 'viewCase', md: 'viewCase', lg: 'viewCase' },
  panel: { sm: 'btn', md: 'btn', lg: 'btn' },
  ghost: { sm: 'btn btn--ghost', md: 'btn btn--ghost', lg: 'btn btn--ghost' },
};

export function Button({
  children,
  variant = 'ink',
  size = 'md',
  href,
  icon = 'arrowRight',
  iconPosition = 'end',
  leadingIcon,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  const base = (CLASS[variant] || CLASS.ink)[size] || CLASS.ink.md;
  const cls = `${base}${className ? ' ' + className : ''}`;
  const glyph = icon ? <Icon name={icon} size={size === 'sm' ? 14 : 16} /> : null;
  const body = (
    <>
      {leadingIcon ? <Icon name={leadingIcon} size={18} /> : null}
      {iconPosition === 'start' ? glyph : null}
      <span>{children}</span>
      {iconPosition === 'end' ? glyph : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {body}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick} {...rest}>
      {body}
    </button>
  );
}
