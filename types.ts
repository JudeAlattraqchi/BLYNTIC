export interface LottieProps {
  src: string;
  className?: string;
  loop?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Testimonial {
  id: number;
  icon: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  lottieSrc: string;
  tabLabel: string;
}