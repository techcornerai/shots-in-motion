"use server";

import { redirect } from "next/navigation";
import { updateGalleryById } from "@/lib/galleries-store";

export async function updateGalleryAction(id: string, formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim();
  const eventDate = String(formData.get("eventDate") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const accessType = String(formData.get("accessType") || "private").trim() as
    | "public"
    | "private";
  const password = String(formData.get("password") || "").trim();
  const published = formData.get("published") === "on";
  const downloadsEnabled = formData.get("downloadsEnabled") === "on";

  const updated = await updateGalleryById(id, {
    title,
    slug,
    eventDate,
    location,
    description,
    accessType,
    password,
    published,
    downloadsEnabled,
    coverImage: `/galleries/${slug}/cover.jpg`,
  });

  if (!updated) {
    redirect("/admin/galleries");
  }

  redirect("/admin/galleries");
}
