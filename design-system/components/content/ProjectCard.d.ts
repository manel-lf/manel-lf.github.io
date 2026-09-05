export interface Project {
  slug: string;
  name: string;
  /** Mono label at the top of the card: "GameHouse+", "SEAT CUPRA". */
  eyebrow: string;
  /** One sentence, no marketing adjectives. */
  cardDescription: string;
  /** Masked client logo, when there is no thumbnail. */
  logo?: string;
  logoAspect?: number;
  logoScale?: number;
  /** Real screenshot; bleeds to the media box's edges and moves the eyebrow into an overlay. */
  thumbnail?: string;
  /** Set when the case study lives on Behance — the card becomes an external link. */
  externalUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
  /** Position in the grid; staggers the scroll reveal by 70ms per card. */
  index?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
