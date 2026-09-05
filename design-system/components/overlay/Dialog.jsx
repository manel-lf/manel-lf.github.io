import React, { useEffect, useRef } from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { TextLink } from '../core/TextLink.jsx';

/* Modal shell: blurred scrim, a surface panel that rises 12px and settles,
   Escape to close, focus trapped inside, body scroll locked. The compact
   variant is for a fixed-size third-party embed. */
export function Dialog({ title, subtitle, children, footerLink, footerLabel, closeLabel = 'Close dialog', compact = false, reduced = false, onClose, titleId = 'dialog-title' }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose && onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = panelRef.current?.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])');
      if (!focusables || !focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    panelRef.current?.querySelector('button, a[href]')?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className={`bookingScrim${reduced ? '' : ' is-animated'}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div
        className={`bookingPanel${compact ? ' bookingPanel--compact' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={panelRef}
      >
        <div className="bookingHead">
          <div>
            <p className="bookingTitle" id={titleId}>{title}</p>
            {subtitle ? <p className="bookingSub">{subtitle}</p> : null}
          </div>
          <IconButton icon="close" label={closeLabel} onClick={onClose} />
        </div>
        <div className="bookingBody">{children}</div>
        {footerLink ? (
          <div className="bookingFoot">
            <TextLink mono href={footerLink} target="_blank" rel="noreferrer noopener">
              {footerLabel}
            </TextLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
