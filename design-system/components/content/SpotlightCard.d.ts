import type { Stat } from './StatRow';

export interface SpotlightCardProps {
  /** Full-bleed background image; sits behind a dark protection gradient and parallaxes slowly. */
  image?: string;
  /** Colour brand lockup, rendered as a real img at 30px tall. */
  logo?: string;
  /** The lockup's viewBox ratio. */
  logoAspect?: number;
  /** Mono eyebrow used when there is no lockup. */
  eyebrow?: string;
  /** Two lines. The second is muted — the subordinate clause. */
  statement: string[];
  stats?: Stat[];
  href: string;
  ctaLabel?: string;
  /** Ref for the parallax hook, if you wire one. */
  mediaRef?: React.Ref<HTMLDivElement>;
}

export declare function SpotlightCard(props: SpotlightCardProps): JSX.Element;
