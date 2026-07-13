export interface NavLink {
  label: string;
  href: string;
}

export interface PressLogo {
  name: string;
}

export interface WhyCard {
  number: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  skinType: string;
  quote: string;
  highlight?: string;
  initial: string;
  verified: boolean;
}

export interface RatingBar {
  stars: number;
  percentage: number;
}

export interface IngredientPoint {
  number: string;
  title: string;
  description: string;
}

export interface HowToUseStep {
  step: number;
  instruction: string;
}

export interface ProductSize {
  label: string;
  value: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}
