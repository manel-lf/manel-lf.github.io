import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Chip } from '../core/Chip.jsx';

/* A journal row: thumbnail, date + tags, title + dek, and an arrow that
   slides 3px on hover. The whole row is the link. */
export function JournalRow({ post, index = 0, onClick }) {
  return (
    <li>
      <a
        className="postRow reveal"
        href={`#/journal/${post.slug}`}
        style={{ '--reveal-delay': `${index * 70}ms` }}
        onClick={onClick}
        aria-label={`${post.title} — Read`}
      >
        <span className="postThumb">
          {post.image ? <img src={post.image} alt="" loading="lazy" /> : <span style={{ display: 'block', aspectRatio: '4 / 3', background: 'var(--surface-2)' }} />}
        </span>
        <span className="postMeta">
          <span className="mono">{post.date}</span>
          <span className="chips">
            {(post.tags || []).map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </span>
        </span>
        <span className="postMain">
          <span className="postTitle">{post.title}</span>
          <span className="postDek">{post.dek}</span>
        </span>
        <span className="go" aria-hidden="true">
          <Icon name="arrowUpRight" size={18} />
        </span>
      </a>
    </li>
  );
}
