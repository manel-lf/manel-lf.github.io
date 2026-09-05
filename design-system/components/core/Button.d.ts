import type { IconName } from './Icon';

/** Pill button in the four treatments the portfolio uses. */
export interface ButtonProps {
  children: React.ReactNode;
  /** ink = filled on canvas (nav CTA, form submit). inverse = off-white on a dark panel (View case). panel = filled on a dark panel. ghost = outlined on a dark panel. */
  variant?: 'ink' | 'inverse' | 'panel' | 'ghost';
  /** sm is the 32px nav-height pill with a mono label; md/lg are the 1rem body-size pills. */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an anchor instead of a button. */
  href?: string;
  /** Trailing glyph. Pass null for no icon. Defaults to arrowRight. */
  icon?: IconName | null;
  iconPosition?: 'start' | 'end';
  /** Extra glyph before the label — used for the LinkedIn button on the About panel. */
  leadingIcon?: IconName;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export declare function Button(props: ButtonProps): JSX.Element;
