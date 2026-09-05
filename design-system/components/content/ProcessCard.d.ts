export interface ProcessCardProps {
  /** 1-based step number; padded to two digits. */
  index: number;
  /** Short noun phrase: "Funnel teardown", "Problem statement". */
  title: string;
  /** The discipline it belonged to: "Product analytics", "UX research". */
  meta: string;
  /** What was actually done and what it revealed. Past tense, first person implied. */
  body: string;
}

export declare function ProcessCard(props: ProcessCardProps): JSX.Element;
