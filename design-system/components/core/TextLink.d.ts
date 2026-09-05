export interface TextLinkProps {
  children: React.ReactNode;
  /** Omit to render a button that looks identical (used for "Write another"). */
  href?: string;
  /** Set for the small uppercase variant used on form reset actions. */
  mono?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export declare function TextLink(props: TextLinkProps): JSX.Element;
