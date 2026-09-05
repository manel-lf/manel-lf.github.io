export interface DialogProps {
  /** 1.25rem semibold heading. */
  title: string;
  /** One muted line of context. */
  subtitle?: string;
  children: React.ReactNode;
  /** Always-visible escape hatch — the product uses it for "open in a new tab". */
  footerLink?: string;
  footerLabel?: string;
  closeLabel?: string;
  /** 460px panel for a fixed-size embed, instead of the 1080px default. */
  compact?: boolean;
  reduced?: boolean;
  onClose?: () => void;
  titleId?: string;
}

export declare function Dialog(props: DialogProps): JSX.Element;
