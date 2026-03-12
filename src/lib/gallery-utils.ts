import fs from "node:fs/promises";
import path from "node:path";
import {
  galleries,
  type GalleryMediaItem,
  type PrivateGallery,
} from "@/data/galleries";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".m4v"]);

function isImageFile(filename: string) {
  return IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

function isVideoFile(filename: string) {
  return VIDEO_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

function isCoverFile(filename: string) {
  return /^cover\./i.test(filename);
}

function isThumbFile(filename: string) {
  return /-thumb\.(jpg|jpeg|png|webp|avif)$/i.test(filename);
}

function toPublicSrc(slug: string, filename: string) {
  return `/galleries/${slug}/${filename}`;
}

function toReadableAlt(filename: string) {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  return nameWithoutExt.replace(/[-_]+/g, " ").trim();
}

async function readGalleryMedia(slug: string): Promise<GalleryMediaItem[]> {
  const galleryDir = path.join(process.cwd(), "public", "galleries", slug);

  let files: string[] = [];
  try {
    files = await fs.readdir(galleryDir);
  } catch {
    return [];
  }

  const sortedFiles = [...files].sort((a, b) => a.localeCompare(b));

  const imageFiles = sortedFiles.filter(isImageFile);
  const videoFiles = sortedFiles.filter(isVideoFile);

  const media: GalleryMediaItem[] = [];

  for (const file of imageFiles) {
    if (isCoverFile(file) || isThumbFile(file)) continue;

    media.push({
      id: `${slug}-${file}`,
      type: "image",
      src: toPublicSrc(slug, file),
      alt: toReadableAlt(file),
      downloadName: file,
    });
  }

  for (const file of videoFiles) {
    const ext = path.extname(file);
    const baseName = file.slice(0, -ext.length);

    const thumbnailCandidate = imageFiles.find((img) =>
      img.startsWith(`${baseName}-thumb.`)
    );

    media.push({
      id: `${slug}-${file}`,
      type: "video",
      src: toPublicSrc(slug, file),
      thumbnail: thumbnailCandidate
        ? toPublicSrc(slug, thumbnailCandidate)
        : undefined,
      alt: toReadableAlt(file),
      downloadName: file,
    });
  }

  return media;
}

export function getGalleryBySlug(slug: string) {
  return galleries.find(
    (gallery) => gallery.slug === slug && gallery.published
  );
}

export async function getGalleryWithMedia(
  slug: string
): Promise<PrivateGallery | undefined> {
  const gallery = getGalleryBySlug(slug);

  if (!gallery) return undefined;

  const media = await readGalleryMedia(slug);

  return {
    ...gallery,
    media,
  };
}