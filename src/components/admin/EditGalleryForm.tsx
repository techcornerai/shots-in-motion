"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { GalleryRecord } from "@/lib/galleries-store";

type EditGalleryFormProps = {
  gallery: GalleryRecord;
};

export default function EditGalleryForm({ gallery }: EditGalleryFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: gallery.title,
    slug: gallery.slug,
    eventDate: gallery.eventDate,
    location: gallery.location,
    description: gallery.description,
    accessType: gallery.accessType,
    password: gallery.password,
    published: gallery.published,
    downloadsEnabled: gallery.downloadsEnabled,
  });

  const [saving, setSaving] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(`/api/admin/galleries/${gallery.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setSaving(false);

    if (!res.ok) {
      alert("Failed to save gallery changes.");
      return;
    }

    router.push("/admin/galleries");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] md:p-8"
    >
      <div>
        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
          Title
        </label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
        />
      </div>

      <div>
        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
          Slug
        </label>
        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
            Event Date
          </label>
          <input
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
          />
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
            Location
          </label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#c6a66b]/40"
        />
      </div>

      <div>
        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
          Access Type
        </label>
        <select
          name="accessType"
          value={form.accessType}
          onChange={handleChange}
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
        >
          <option value="public">public</option>
          <option value="private">private</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
          Password
        </label>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={handleChange}
            className="h-4 w-4 accent-[#c6a66b]"
          />
          Published
        </label>

        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
          <input
            type="checkbox"
            name="downloadsEnabled"
            checked={form.downloadsEnabled}
            onChange={handleChange}
            className="h-4 w-4 accent-[#c6a66b]"
          />
          Downloads Enabled
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
