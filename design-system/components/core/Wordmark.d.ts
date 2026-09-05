export interface WordmarkProps {
  /** Path to a solid-black single-colour SVG in assets/logos/. */
  src: string;
  /** Company name — becomes the accessible label. */
  name: string;
  /** The file's viewBox ratio (width ÷ height). Sets width from height. */
  aspect?: number;
  /** Optical-weight correction: 0.45 for a very wide wordmark, 1.5 for a compact one. */
  scale?: number;
  /** Explicit height in px. Defaults to 24, or 34 when `large`. */
  height?: number;
  /** The 34px size used inside project cards. */
  large?: boolean;
  /** Render as a real <img> so the source's own fills survive (the gh+ lockup). */
  preserveColor?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export declare function Wordmark(props: WordmarkProps): JSX.Element;
