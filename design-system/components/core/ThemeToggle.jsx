import React from 'react';
import { Icon } from './Icon.jsx';

/* 44×24 pill with an 18px knob. The knob slides 20px on a spring; the theme
   itself is a CSS-variable swap on [data-theme]. */
export function ThemeToggle({ theme = 'light', onToggle, labelToDark = 'Switch to dark theme', labelToLight = 'Switch to light theme' }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="themeToggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? labelToLight : labelToDark}
    >
      <span className="knob" aria-hidden="true">
        <Icon name={isDark ? 'moon' : 'sun'} size={11} strokeWidth={1.8} />
      </span>
    </button>
  );
}
