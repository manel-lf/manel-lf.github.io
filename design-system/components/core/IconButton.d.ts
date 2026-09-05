import type { IconName } from './Icon';

export interface IconButtonProps {
  icon: IconName;
  /** Required: the button has no visible text, so this becomes its aria-label. */
  label: string;
  /** Renders an anchor instead of a button. */
  href?: string;
  /** outline = 32px scroller control. social = 36px footer social button. */
  variant?: 'outline' | 'social';
  /** Glyph size override. Defaults to 16 (outline) / 17 (social). */
  size?: number;
  /** Disabled scroller controls drop to .32 opacity — the site never hides them. */
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
