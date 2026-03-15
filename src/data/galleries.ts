export type GalleryMediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  downloadName: string;
};

export type PrivateGallery = {
  id: string;
  title: string;
  slug: string;
  eventDate: string;
  location: string;
  description: string;
  coverImage: string;
  accessType: "public" | "private";
  password: string;
  published: boolean;
  downloadsEnabled: boolean;
  media: GalleryMediaItem[];
};
