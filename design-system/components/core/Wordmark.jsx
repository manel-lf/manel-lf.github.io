import React from 'react';

/* Client brand marks. The SVG file is used as a CSS mask over currentColor,
   so one solid-black source renders near-black on the light canvas and
   off-white in dark mode. `aspect` is the file's viewBox ratio and sets width
   from height; `scale` evens out optical weight between a wide wordmark and a
   compact one. A mark whose colour must survive is passed `preserveColor` and
   rendered as a real <img> instead, since a mask discards the source fills. */
export function Wordmark({ src, name, aspect = 4, scale = 1, height, large = false, preserveColor = false, className = '', style }) {
  const h = height || (large ? 34 : 24);
  const w = Math.round(h * aspect * scale);

  if (preserveColor) {
    return (
      <img
        src={src}
        alt={name}
        className={className}
        style={{ height: `${h * scale}px`, width: 'auto', ...style }}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={name}
      className={`brandmark${large ? ' wordmark--lg' : ''}${className ? ' ' + className : ''}`}
      style={{
        width: `${w}px`,
        height: `${Math.round(h * scale)}px`,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        ...style,
      }}
    />
  );
}
