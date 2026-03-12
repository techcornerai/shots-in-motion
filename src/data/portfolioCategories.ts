export type PortfolioCategory = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 1,
    title: "Portraits",
    subtitle: "Presence, personality, and quiet power.",
    image: "/images/category-portraits.jpeg",
    href: "/portfolio/portraits",
  },
  {
    id: 2,
    title: "Events",
    subtitle: "Energy, connection, and unforgettable moments.",
    image: "/images/category-events.jpeg",
    href: "/portfolio/events",
  },
  {
    id: 3,
    title: "Weddings",
    subtitle: "Emotion, intimacy, and timeless vows.",
    image: "/images/category-weddings.jpeg",
    href: "/portfolio/weddings",
  },
  {
    id: 4,
    title: "Nature",
    subtitle: "Light, stillness, and the beauty of the world.",
    image: "/images/category-nature.jpeg",
    href: "/portfolio/nature",
  },
  {
    id: 5,
    title: "Editorial",
    subtitle: "Art, mood, and stories shaped through style.",
    image: "/images/category-editorials.jpeg",
    href: "/portfolio/editorial",
  },
];