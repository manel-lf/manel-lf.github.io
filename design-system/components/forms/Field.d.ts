export interface FieldProps {
  id?: string;
  name: string;
  /** Mono label above the control: "Your name", "Subject". */
  label: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  value: string;
  /** A realistic example, not a repeat of the label: "you@company.com". */
  placeholder?: string;
  required?: boolean;
  /** Only ever true after blur — the site never validates while typing. */
  invalid?: boolean;
  /** Full sentence, polite, first person: "Please add a subject." */
  error?: string;
  /** Spans both columns of the .form grid. */
  full?: boolean;
  textarea?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
}

export declare function Field(props: FieldProps): JSX.Element;
