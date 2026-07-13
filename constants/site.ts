import {
  NavLink,
  PressLogo,
  WhyCard,
  Review,
  RatingBar,
  IngredientPoint,
  HowToUseStep,
  ProductSize,
  FooterLinkGroup,
} from "@/types";

export const AMAZON_URL = "https://www.amazon.in/";

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "#product" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Rituals", href: "#why-auro" },
  { label: "Journal", href: "#reviews" },
  { label: "About", href: "#why-auro" },
];

export const PRESS_LOGOS: PressLogo[] = [
  { name: "Vogue" },
  { name: "Elle" },
  { name: "Byrdie" },
  { name: "Refinery29" },
  { name: "Allure" },
  { name: "Harper's" },
];

export const WHY_CARDS: WhyCard[] = [
  {
    number: "01",
    title: "Clinically proven",
    description:
      "Every formula is dermatologist-tested and backed by peer-reviewed studies. We publish our full data — no cherry-picking.",
  },
  {
    number: "02",
    title: "Radically transparent",
    description:
      "Full ingredient disclosure, every time. We explain what each ingredient does and why it's in your product — no mysteries.",
  },
  {
    number: "03",
    title: "Sustainably sourced",
    description:
      "100% recyclable packaging, carbon-neutral shipping, and ingredients sourced from certified ethical farms worldwide.",
  },
];

export const HOW_TO_USE_STEPS: HowToUseStep[] = [
  { step: 1, instruction: "Cleanse your face and pat dry gently" },
  { step: 2, instruction: "Apply 2–3 drops to fingertips" },
  { step: 3, instruction: "Press gently onto face and neck in upward motions" },
  { step: 4, instruction: "Follow with moisturizer. Use AM & PM." },
];

export const PRODUCT_SIZES: ProductSize[] = [
  { label: "15 ML", value: "15ml" },
  { label: "30 ML", value: "30ml" },
  { label: "90 ML", value: "90ml" },
];

export const RATING_BARS: RatingBar[] = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 65 },
  { stars: 3, percentage: 22 },
  { stars: 2, percentage: 12 },
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Priya Sharma",
    location: "Mumbai",
    skinType: "Sensitive skin",
    quote:
      "I've tried every serum on the market nothing compares. My skin went from dull and uneven to genuinely glowing in under three weeks. My dermatologist noticed before I even mentioned it.",
    highlight: "dull and uneven to genuinely glowing in under three weeks.",
    initial: "P",
    verified: true,
  },
  {
    id: "review-2",
    name: "Riya Mehta",
    location: "Delhi",
    skinType: "Dry skin",
    quote:
      "My husband noticed my skin before I told him I started something new. That says everything. It's transformed my morning routine — I actually look forward to skincare now.",
    highlight: "It's transformed my morning routine —",
    initial: "R",
    verified: true,
  },
];

export const INGREDIENT_POINTS: IngredientPoint[] = [
  {
    number: "01",
    title: "Bioavailable actives",
    description:
      "Nano-encapsulation technology ensures ingredients penetrate to the right skin layer not just the surface.",
  },
  {
    number: "02",
    title: "Ethically sourced",
    description:
      "All botanical ingredients are sourced from certified fair-trade farms. We audit our supply chain annually.",
  },
  {
    number: "03",
    title: "Zero harmful additives",
    description:
      "No parabens, sulfates, artificial fragrance, mineral oils, or fillers. Ever. Read the full INCI list on every product.",
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Shop",
    links: [
      { label: "Serums", href: "#product" },
      { label: "Moisturisers", href: "#product" },
      { label: "Cleansers", href: "#product" },
      { label: "Ritual kits", href: "#product" },
      { label: "Bestsellers", href: "#product" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Ingredients glossary", href: "#ingredients" },
      { label: "Skin quiz", href: "#" },
      { label: "Journal", href: "#reviews" },
      { label: "Clinical studies", href: "#why-auro" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#why-auro" },
      { label: "Sustainability", href: "#why-auro" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const PAYMENT_METHODS = ["UPI", "Visa", "RuPay", "EMI", "COD"];
