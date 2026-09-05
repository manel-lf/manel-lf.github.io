import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { StatRow } from './StatRow.jsx';

/* The hero work card: a near-black panel with the case's imagery behind a
   three-stop protection gradient, the brand lockup top-left, a two-line
   statement, and stats sharing the bottom rail with the CTA. */
export function SpotlightCard({ image, logo, logoAspect = 4.457, eyebrow, statement = [], stats = [], href, ctaLabel = 'View case', mediaRef }) {
  return (
    <article className="spotlight reveal">
      <div className="spotlightMedia" ref={mediaRef} aria-hidden="true">
        {image ? <img src={image} alt="" /> : null}
      </div>
      <div className="spotlightInner">
        <p className="spotlightBrand">
          {logo ? (
            <img src={logo} alt="" style={{ height: '30px', width: `${Math.round(30 * logoAspect)}px` }} />
          ) : (
            <span className="mono spotlightEyebrow">{eyebrow}</span>
          )}
        </p>
        <h3 className="spotlightStatement">
          {statement.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h3>
        <div className="spotFoot">
          <StatRow stats={stats} />
          <a className="viewCase" href={href}>
            {ctaLabel}
            <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
