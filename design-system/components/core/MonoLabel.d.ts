export interface MonoLabelProps {
  children: React.ReactNode;
  /** Element to render. span by default. */
  as?: keyof JSX.IntrinsicElements;
  /** default inherits ink; muted is the usual eyebrow colour; accent is reserved for kickers and process indices; onPanel is the dark-panel muted. */
  tone?: 'default' | 'muted' | 'accent' | 'onPanel';
  className?: string;
}

export declare function MonoLabel(props: MonoLabelProps): JSX.Element;
