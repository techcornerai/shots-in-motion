export type SignatureMoment = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export const signatureMoments: SignatureMoment[] = [
  {
    id: 1,
    title: "Portraits",
    subtitle: "Crafted light, expression, and presence in every frame.",
    image: "/images/placeholders/signature-portrait.jpeg",
  },
  {
    id: 2,
    title: "Energy",
    subtitle: "Movement captured with rhythm, control, and atmosphere.",
    image: "/images/placeholders/signature-dance.jpeg",
  },
  {
    id: 3,
    title: "Events",
    subtitle: "Real moments preserved with cinematic depth and emotion.",
    image: "/images/placeholders/signature-event.jpeg",
  },
];