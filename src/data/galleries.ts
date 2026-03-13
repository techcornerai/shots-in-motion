export type GalleryMeta = {
  slug: string;
  title: string;
  eventDate: string;
  location: string;
  description: string;
  coverImage: string;
  password: string;
  published: boolean;
};

export type GalleryMediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  downloadName: string;
};

export type PrivateGallery = GalleryMeta & {
  media: GalleryMediaItem[];
};

export const galleries: GalleryMeta[] = [
  {
    slug: "q-first-night-social",
    title: "Q First Night Social",
    eventDate: "March 2026",
    location: "Tampa, Florida",
    description:
      "An evening of connection, movement, and unforgettable moments captured in motion.",
    coverImage: "/galleries/q-first-night-social/cover.jpg",
    password: "test123",
    published: true,
  },
  {
    slug: "q-workshops",
    title: "Q Workshops",
    eventDate: "March 2026",
    location: "Tampa, Florida",
    description:
      "Workshop moments, learning, movement, and energy documented throughout the experience.",
    coverImage: "/galleries/q-workshops/cover.jpg",
    password: "test123",
    published: true,
  },
];