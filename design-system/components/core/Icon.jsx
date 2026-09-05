import React from 'react';

/* Icon set lifted verbatim from the portfolio: 20×20 viewBox, 1.5px stroke,
   round caps and joins. Brand marks (linkedin, behance, github) are filled
   paths instead of strokes. */
export const ICON_PATHS = {
  arrowRight: 'M4 10h12M11 5l5 5-5 5',
  arrowLeft: 'M16 10H4M9 15L4 10l5-5',
  arrowUpRight: 'M6 14L14 6M7 6h7v7',
  chevronLeft: 'M12 4L6 10l6 6',
  chevronRight: 'M8 4l6 6-6 6',
  sun: 'M10 3v1.6M10 15.4V17M3 10h1.6M15.4 10H17M5.05 5.05l1.13 1.13M13.82 13.82l1.13 1.13M14.95 5.05l-1.13 1.13M6.18 13.82l-1.13 1.13',
  moon: 'M15.5 12.6A6.2 6.2 0 017.4 4.5a6.5 6.5 0 108.1 8.1z',
  mail: 'M2.5 5.5h15v9h-15zM2.5 6l7.5 5 7.5-5',
  calendar: 'M4 5.5h12v11H4zM7 3v3M13 3v3M4 9h12',
  close: 'M5 5l10 10M15 5L5 15',
};

export const ICON_FILLED = {
  linkedin:
    'M4.98 3.5a2 2 0 11-.02 4 2 2 0 01.02-4zM3.3 8.9h3.35V19H3.3zM9.2 8.9h3.2v1.38h.05c.45-.83 1.55-1.7 3.19-1.7 3.41 0 4.04 2.2 4.04 5.05V19h-3.35v-4.72c0-1.13-.02-2.58-1.6-2.58-1.6 0-1.85 1.22-1.85 2.5V19H9.2z',
  behance:
    'M8.4 4.6c1.9 0 3.4.55 3.4 2.55 0 1.05-.5 1.75-1.4 2.15 1.25.35 1.9 1.3 1.9 2.6 0 2.15-1.75 3.1-3.75 3.1H2.5V4.6zm-.3 4.2c.8 0 1.35-.35 1.35-1.2 0-.95-.7-1.15-1.5-1.15H5.1v2.35zm.15 4.45c.9 0 1.6-.35 1.6-1.4 0-1.05-.6-1.45-1.55-1.45H5.1v2.85zM16.9 13.6c.6 0 1.15-.3 1.35-.85h1.9c-.4 1.7-1.65 2.5-3.3 2.5-2.3 0-3.75-1.55-3.75-3.85 0-2.2 1.5-3.85 3.75-3.85 2.4 0 3.5 1.85 3.4 4.2h-5c0 1.15.6 1.85 1.65 1.85zm1.15-3.1c-.1-.9-.55-1.4-1.4-1.4-.95 0-1.35.65-1.4 1.4zM14.3 5.4h4.35v1.25H14.3z',
  github:
    'M10 1.8a8.2 8.2 0 00-2.6 16c.41.08.56-.18.56-.4v-1.4c-2.28.5-2.76-1.1-2.76-1.1-.37-.95-.91-1.2-.91-1.2-.75-.51.06-.5.06-.5.82.06 1.26.85 1.26.85.73 1.26 1.92.9 2.39.68.07-.53.28-.9.51-1.1-1.82-.21-3.73-.91-3.73-4.05 0-.9.32-1.63.85-2.2-.09-.21-.37-1.05.08-2.18 0 0 .69-.22 2.25.84a7.8 7.8 0 014.1 0c1.56-1.06 2.25-.84 2.25-.84.45 1.13.17 1.97.08 2.18.53.57.85 1.3.85 2.2 0 3.15-1.92 3.84-3.75 4.04.29.25.55.74.55 1.5v2.22c0 .22.15.48.57.4A8.2 8.2 0 0010 1.8z',
};

export function Icon({ name, size = 20, strokeWidth = 1.5, className, style }) {
  const filled = ICON_FILLED[name];
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {filled ? (
        <path d={filled} fill="currentColor" />
      ) : (
        <path
          d={ICON_PATHS[name] || ICON_PATHS.arrowRight}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
