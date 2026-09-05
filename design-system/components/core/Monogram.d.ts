export interface MonogramProps {
  /** Single character. 'M' for Manel López. */
  letter?: string;
  href?: string;
  /** Accessible name — the letter alone is not one. */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export declare function Monogram(props: MonogramProps): JSX.Element;
