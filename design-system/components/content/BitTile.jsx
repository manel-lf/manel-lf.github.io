import React from 'react';

/* Small tile in the "Design bits" rows: 4:3 media, an accent mono kicker and
   one sentence. Renders as an <li> for .bitsRow. */
export function BitTile({ image, kicker, caption, index = 0, ratio = 4 / 3 }) {
  return (
    <li className="bitTile reveal" style={{ '--reveal-delay': `${index * 60}ms` }}>
      <div className="bitMedia">
        {image ? (
          <img src={image} alt="" loading="lazy" style={{ width: '100%', aspectRatio: String(ratio), objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', aspectRatio: String(ratio), background: 'var(--surface-2)' }} />
        )}
      </div>
      <div className="bitBody">
        <span className="mono kicker">{kicker}</span>
        <p>{caption}</p>
      </div>
    </li>
  );
}
