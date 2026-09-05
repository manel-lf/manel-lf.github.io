export interface TestimonialProps {
  /** Verbatim quote. Never trimmed to a pull-quote — the site runs them in full. */
  quote: string;
  name: string;
  /** Job title only, no company. */
  role: string;
  avatar?: string;
  /** Profile URL; omit and the attribution renders inert. */
  href?: string;
  profileLabel?: string;
}

export declare function Testimonial(props: TestimonialProps): JSX.Element;
