import { notFound } from "next/navigation";
import GalleryHero from "@/app/components/galleries/GalleryHero";
import GalleryPasswordGate from "@/app/components/galleries/GalleryPasswordGate";
import { getGalleryWithMediaBySlug } from "@/lib/gallery-utils";

type GalleryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const gallery = await getGalleryWithMediaBySlug(slug);

  if (!gallery) {
    notFound();
  }

  return (
    <main className="bg-black">
      <GalleryHero gallery={gallery} />
      <GalleryPasswordGate gallery={gallery} />
    </main>
  );
}
