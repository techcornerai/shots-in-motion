export type SelectedMoment = {
  id: number
  title: string
  category: string
  image: string
  href: string
  size: "small" | "medium" | "large"
  position:
    | "back-left"
    | "back-right"
    | "left"
    | "center"
    | "right"
}

export const selectedMoments: SelectedMoment[] = [
  {
    id: 1,
    title: "Portrait",
    category: "Portrait",
    image: "/images/placeholders/selected-portrait.jpeg",
    href: "/portfolio",
    size: "large",
    position: "center"
  },
  {
    id: 2,
    title: "Motion in Gold",
    category: "Family",
    image: "/images/placeholders/selected-family.jpeg",
    href: "/portfolio",
    size: "medium",
    position: "left"
  },
  {
    id: 3,
    title: "After the Flash",
    category: "Dance",
    image: "/images/placeholders/selected-event.jpeg",
    href: "/portfolio",
    size: "medium",
    position: "right"
  },
  {
    id: 4,
    title: "Quiet Frame",
    category: "Editorial",
    image: "/images/placeholders/selected-nature.jpeg",
    href: "/portfolio",
    size: "small",
    position: "back-left"
  },
  {
    id: 5,
    title: "A Lasting Vow",
    category: "Wedding",
    image: "/images/placeholders/selected-wedding.jpeg",
    href: "/portfolio",
    size: "small",
    position: "back-right"
  }
]