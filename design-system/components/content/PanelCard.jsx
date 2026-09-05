import React from 'react';

/* The near-black panel: the brand's one inverted surface. Used for the About
   block (with a portrait beside the copy) and for a case study's system
   section. Content on it uses --panel-ink / --panel-muted. */
export function PanelCard({ children, aside, variant = 'about', className = '' }) {
  const cls = variant === 'system' ? 'systemPanel' : 'aboutCard';
  if (variant === 'system') {
    return <section className={`${cls}${className ? ' ' + className : ''}`}>{children}</section>;
  }
  return (
    <div className={`${cls}${className ? ' ' + className : ''}`}>
      <div className="aboutCopy">{children}</div>
      {aside ? <div className="aboutPortrait">{aside}</div> : null}
    </div>
  );
}
