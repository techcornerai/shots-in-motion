import fs from "node:fs/promises";
import path from "node:path";

export type GalleryRecord = {
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
};

const galleriesFilePath = path.join(process.cwd(), "data", "galleries.json");

export async function readGalleries(): Promise<GalleryRecord[]> {
  const file = await fs.readFile(galleriesFilePath, "utf8");
  return JSON.parse(file) as GalleryRecord[];
}

export async function writeGalleries(galleries: GalleryRecord[]) {
  await fs.writeFile(
    galleriesFilePath,
    JSON.stringify(galleries, null, 2),
    "utf8"
  );
}

export async function getGalleryBySlug(slug: string) {
  const galleries = await readGalleries();
  return galleries.find((gallery) => gallery.slug === slug);
}

export async function getPublishedGalleryBySlug(slug: string) {
  const galleries = await readGalleries();
  return galleries.find(
    (gallery) => gallery.slug === slug && gallery.published
  );
}

export async function getGalleryById(id: string) {
  const galleries = await readGalleries();
  return galleries.find((gallery) => gallery.id === id);
}

export async function updateGalleryById(
  id: string,
  updates: Partial<GalleryRecord>
) {
  const galleries = await readGalleries();

  const index = galleries.findIndex((gallery) => gallery.id === id);

  if (index === -1) {
    return null;
  }

  galleries[index] = {
    ...galleries[index],
    ...updates,
  };

  await writeGalleries(galleries);

  return galleries[index];
}
