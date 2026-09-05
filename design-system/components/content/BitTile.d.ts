export interface BitTileProps {
  image?: string;
  /** Accent mono kicker — a discipline, not a title: "AI tooling", "Game economy". */
  kicker: string;
  /** One sentence describing what the artefact is. */
  caption: string;
  /** Staggers the reveal by 60ms per tile. */
  index?: number;
  /** Media aspect ratio. Every tile in a row shares it — 4/3 in the product. */
  ratio?: number;
}

export declare function BitTile(props: BitTileProps): JSX.Element;
