import React, { useState } from 'react';

/* 44px circle with a hairline border. Falls back to initials rather than a
   broken image, so a missing file degrades to something deliberate. */
export function Avatar({ src, name, size = 44 }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  if (!src || failed) {
    return (
      <span className="avatar avatar--initials" style={{ width: size, height: size }} aria-hidden="true">
        {initials}
      </span>
    );
  }
  return (
    <img
      className="avatar"
      style={{ width: size, height: size }}
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
