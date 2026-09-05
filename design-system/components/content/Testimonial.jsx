import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';

/* A single quote: an oversized hairline quote mark, the quote at 1.375rem,
   then avatar + name + role. The attribution is a link when the person has a
   profile, and inert (but identically laid out) when they do not. */
export function Testimonial({ quote, name, role, avatar, href, profileLabel = 'on LinkedIn' }) {
  const who = (
    <>
      <Avatar src={avatar} name={name} />
      <span className="quoteWho">
        <span className="quoteName">{name}</span>
        <span className="quoteRole mono">{role}</span>
      </span>
      <Icon name="arrowUpRight" size={16} />
    </>
  );
  return (
    <figure className="quoteWrap">
      <span className="quoteMark" aria-hidden="true">&ldquo;</span>
      <div className="quoteViewport">
        <blockquote className="quoteBody">{quote}</blockquote>
        <figcaption className="quoteAttr">
          {href ? (
            <a className="quoteWhoLink" href={href} target="_blank" rel="noreferrer noopener" aria-label={`${name} ${profileLabel}`}>
              {who}
            </a>
          ) : (
            <span className="quoteWhoLink is-static">{who}</span>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
