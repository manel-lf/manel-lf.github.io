export interface AvatarProps {
  /** Square crop. Omit — or let it 404 — and initials are drawn instead. */
  src?: string | null;
  /** Used for the initials fallback. */
  name: string;
  /** Diameter in px. 44 everywhere in the product. */
  size?: number;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
