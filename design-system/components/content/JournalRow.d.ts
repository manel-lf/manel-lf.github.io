export interface JournalPost {
  slug: string;
  /** Month and year: "June 2026". */
  date: string;
  tags: string[];
  /** A claim, not a topic: "Grounding ideas fast is changing how I design". */
  title: string;
  /** One or two sentences of setup — the hook, not a summary. */
  dek: string;
  image?: string;
}

export interface JournalRowProps {
  post: JournalPost;
  index?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export declare function JournalRow(props: JournalRowProps): JSX.Element;
