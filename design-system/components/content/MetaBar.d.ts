export interface MetaItem {
  /** Mono label: "Role", "Years", "Skills". */
  label: string;
  value: React.ReactNode;
}

export interface MetaBarProps {
  /** Three cells; the third gets double width for the skills list. */
  items: MetaItem[];
}

export declare function MetaBar(props: MetaBarProps): JSX.Element;
