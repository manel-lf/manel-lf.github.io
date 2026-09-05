import React from 'react';

/* The brand mark: a single letter in a 32px near-black rounded square.
   This is the whole identity — there is no wordmark logo. */
export function Monogram({ letter = 'M', href = '#/', label = 'Manel López — back to home', onClick }) {
  return (
    <a className="monogram" href={href} aria-label={label} onClick={onClick}>
      {letter}
    </a>
  );
}
