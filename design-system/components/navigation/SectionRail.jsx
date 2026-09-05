import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

/* Floating pill rail, docked bottom-centre on a blurred near-black capsule.
   The active highlight is an absolutely-positioned pill that slides and
   resizes on a spring, rather than a border on each item. */
export function SectionRail({ items, activeId, label = 'Sections on this page', onSelect, reduced = false }) {
  const listRef = useRef(null);
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false });

  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const el = list.querySelector(`[data-rail-id="${activeId}"]`);
    if (!el) return;
    setPill({ x: el.offsetLeft, w: el.offsetWidth, ready: true });
    if (list.scrollWidth > list.clientWidth) {
      const target = el.offsetLeft - (list.clientWidth - el.offsetWidth) / 2;
      list.scrollTo({ left: Math.max(0, target), behavior: reduced ? 'auto' : 'smooth' });
    }
  }, [activeId, reduced]);

  useLayoutEffect(measure, [measure, items]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div className="railDock">
      <nav className="rail xfade" aria-label={label} ref={listRef}>
        <span
          className={`railPill${pill.ready ? ' is-ready' : ''}`}
          style={{ transform: `translate3d(${pill.x}px,0,0)`, width: `${pill.w}px` }}
          aria-hidden="true"
        />
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            data-rail-id={item.id}
            className="railItem mono"
            aria-current={activeId === item.id ? 'true' : undefined}
            onClick={() => onSelect && onSelect(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
