export interface CaseNavBtnProps {
  direction: 'prev' | 'next';
  /** Mono direction label: "Previous" / "Next". */
  label: string;
  /** The destination's name, at 1.5rem. */
  name: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export declare function CaseNavBtn(props: CaseNavBtnProps): JSX.Element;
