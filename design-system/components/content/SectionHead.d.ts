export interface SectionHeadProps {
  /** The muted first half. Always ends in a full stop: "Recent work." */
  label: string;
  /** The ink second half — the claim. "From pixels to products." */
  statement: string;
  /** Optional supporting sentence; renders a two-column split head. */
  aside?: string;
  /** Invert for a near-black panel. */
  onPanel?: boolean;
  /** id for the section's aria-labelledby. */
  headingId?: string;
  as?: keyof JSX.IntrinsicElements;
}

export declare function SectionHead(props: SectionHeadProps): JSX.Element;
