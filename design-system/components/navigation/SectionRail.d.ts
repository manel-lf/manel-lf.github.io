export interface RailItem {
  /** Matches the section element's id. */
  id: string;
  /** One word: "Work", "Bits", "About". */
  label: string;
}

export interface SectionRailProps {
  items: RailItem[];
  /** Section currently in view — drives the sliding pill. */
  activeId: string;
  label?: string;
  onSelect?: (id: string) => void;
  /** Skips smooth scrolling under prefers-reduced-motion. */
  reduced?: boolean;
}

export declare function SectionRail(props: SectionRailProps): JSX.Element;
