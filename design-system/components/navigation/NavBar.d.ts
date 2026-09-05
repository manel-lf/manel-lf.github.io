export interface NavBarProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  /** The single call to action. There are no other nav links. */
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: (e: React.MouseEvent) => void;
  onHome?: (e: React.MouseEvent) => void;
  monogram?: string;
}

export declare function NavBar(props: NavBarProps): JSX.Element;
