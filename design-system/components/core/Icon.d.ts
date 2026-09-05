export type IconName =
  | 'arrowRight'
  | 'arrowLeft'
  | 'arrowUpRight'
  | 'chevronLeft'
  | 'chevronRight'
  | 'sun'
  | 'moon'
  | 'mail'
  | 'calendar'
  | 'close'
  | 'linkedin'
  | 'behance'
  | 'github';

export interface IconProps {
  /** Which glyph to draw. Unknown names fall back to arrowRight. */
  name: IconName;
  /** Rendered box in px. 14 inside small labels, 16–18 in buttons, 20 default. */
  size?: number;
  /** Stroke width for outline glyphs. Ignored by the filled brand marks. */
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
