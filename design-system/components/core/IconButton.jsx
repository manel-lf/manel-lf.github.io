import React from 'react';
import { Icon } from './Icon.jsx';

/* 32px circular outline button. Used in pairs for the horizontal scrollers
   (.iconBtn) and at 36px for the footer socials (.socialBtn). */
export function IconButton({
  icon,
  label,
  href,
  variant = 'outline',
  size,
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = `${variant === 'social' ? 'socialBtn' : 'iconBtn'}${className ? ' ' + className : ''}`;
  const glyph = <Icon name={icon} size={size || (variant === 'social' ? 17 : 16)} />;
  if (href && !disabled) {
    return (
      <a className={cls} href={href} aria-label={label} {...rest}>
        {glyph}
      </a>
    );
  }
  return (
    <button type="button" className={cls} aria-label={label} disabled={disabled} onClick={onClick} {...rest}>
      {glyph}
    </button>
  );
}
