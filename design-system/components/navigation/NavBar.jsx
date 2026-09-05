import React, { useEffect, useState } from 'react';
import { Monogram } from '../core/Monogram.jsx';
import { Button } from '../core/Button.jsx';
import { ThemeToggle } from '../core/ThemeToggle.jsx';

/* Fixed translucent bar: monogram left, one filled CTA and the theme toggle
   right. It has no nav links — the section rail at the bottom does that job.
   A hairline appears under it once the page is scrolled. */
export function NavBar({ theme = 'light', onToggleTheme, ctaLabel = 'Book a call', ctaHref, onCta, onHome, monogram = 'M' }) {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav xfade${stuck ? ' is-stuck' : ''}`}>
      <Monogram letter={monogram} onClick={onHome} />
      <div className="navRight">
        <Button variant="ink" size="sm" href={ctaHref} onClick={onCta} icon="arrowRight">
          {ctaLabel}
        </Button>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
