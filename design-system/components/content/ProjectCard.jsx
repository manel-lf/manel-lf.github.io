import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Wordmark } from '../core/Wordmark.jsx';

/* Secondary work card. Either a masked client wordmark centred in the media
   box, or a real thumbnail bleeding to its edges with the eyebrow lifted onto
   it as a translucent overlay. Lifts 4px on hover; the media scales 1.045. */
export function ProjectCard({ project, index = 0, onClick }) {
  const isExternal = Boolean(project.externalUrl);
  const hasThumb = Boolean(project.thumbnail);
  return (
    <li>
      <a
        className="projectCard reveal"
        href={isExternal ? project.externalUrl : `#/work/${project.slug}`}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer noopener' : undefined}
        style={{ '--reveal-delay': `${index * 70}ms` }}
        onClick={onClick}
        aria-label={`${project.name} — ${isExternal ? 'View on Behance' : 'View case'}`}
      >
        <span className="cardMedia">
          <span className={`cardTop mono${hasThumb ? ' cardTop--overlay' : ''}`}>
            <span>{project.eyebrow}</span>
            <Icon name="arrowUpRight" size={16} />
          </span>
          <span className={`cardMarkWrap${hasThumb ? ' cardMarkWrap--thumbnail' : ''}`}>
            {hasThumb ? (
              <img className="cardMediaImg" src={project.thumbnail} alt="" loading="lazy" />
            ) : (
              <Wordmark
                src={project.logo}
                name={project.name}
                aspect={project.logoAspect}
                scale={project.logoScale}
                large
              />
            )}
          </span>
        </span>
        <span className="cardBody">
          <span className="cardDesc">{project.cardDescription}</span>
          <span className="cardCta mono">
            {isExternal ? 'View on Behance' : 'View case'}
            <Icon name="arrowRight" size={14} />
          </span>
        </span>
      </a>
    </li>
  );
}
