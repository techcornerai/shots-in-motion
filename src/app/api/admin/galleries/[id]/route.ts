import { NextResponse } from "next/server";
import { readGalleries, writeGalleries } from "@/lib/galleries-store";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(req: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = await req.json();

  const galleries = await readGalleries();
  const index = galleries.findIndex((gallery) => gallery.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Gallery not found" }, { status: 404 });
  }

  galleries[index] = {
    ...galleries[index],
    title: body.title,
    slug: body.slug,
    eventDate: body.eventDate,
    location: body.location,
    description: body.description,
    accessType: body.accessType,
    password: body.password,
    published: body.published,
    downloadsEnabled: body.downloadsEnabled,
    coverImage: `/galleries/${body.slug}/cover.jpg`,
  };

  await writeGalleries(galleries);

  return NextResponse.json({ success: true });
}
