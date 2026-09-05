export interface ThemeToggleProps {
  /** Current theme. Drives the knob position and the glyph. */
  theme?: 'light' | 'dark';
  onToggle?: () => void;
  labelToDark?: string;
  labelToLight?: string;
}

export declare function ThemeToggle(props: ThemeToggleProps): JSX.Element;
