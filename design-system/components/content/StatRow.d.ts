export interface Stat {
  /** The number or short phrase: "6×", "Same day", "0". */
  value: string;
  /** Mono caption beneath it: "Day-0 activation". */
  label: string;
}

export interface StatRowProps {
  /** Three is the house number. */
  stats: Stat[];
  /** Panel colours by default; set false for the light canvas. */
  onPanel?: boolean;
}

export declare function StatRow(props: StatRowProps): JSX.Element;
