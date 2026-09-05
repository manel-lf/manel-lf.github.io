export interface PanelCardProps {
  /** Copy column: an h3, paragraphs, and a button row. */
  children: React.ReactNode;
  /** Right-hand media (a portrait). Ignored by the system variant. */
  aside?: React.ReactNode;
  /** about = two-column card with media. system = full-width panel for a screen grid. */
  variant?: 'about' | 'system';
  className?: string;
}

export declare function PanelCard(props: PanelCardProps): JSX.Element;
