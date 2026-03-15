import Link from "next/link";
import { getGalleryById } from "@/lib/galleries-store";
import { updateGalleryAction } from "./actions";

type EditGalleryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGalleryPage({
  params,
}: EditGalleryPageProps) {
  const { id } = await params;
  const gallery = await getGalleryById(id);

  if (!gallery) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="section-shell py-24">
          <h1 className="heading-section">Gallery not found</h1>
        </section>
      </main>
    );
  }

  const updateWithId = updateGalleryAction.bind(null, id);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell max-w-2xl py-24">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Admin</p>
            <h1 className="heading-section">Edit Gallery</h1>
          </div>

          <Link
            href="/admin/galleries"
            className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Back
          </Link>
        </div>

        <form action={updateWithId} className="space-y-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] md:p-8">
          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
              Title
            </label>
            <input
              name="title"
              defaultValue={gallery.title}
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
              defaultValue={gallery.slug}
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
                defaultValue={gallery.eventDate}
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
                Location
              </label>
              <input
                name="location"
                defaultValue={gallery.location}
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
              defaultValue={gallery.description}
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
              defaultValue={gallery.accessType}
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
              defaultValue={gallery.password}
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
              <input
                type="checkbox"
                name="published"
                defaultChecked={gallery.published}
                className="h-4 w-4 accent-[#c6a66b]"
              />
              Published
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
              <input
                type="checkbox"
                name="downloadsEnabled"
                defaultChecked={gallery.downloadsEnabled}
                className="h-4 w-4 accent-[#c6a66b]"
              />
              Downloads Enabled
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
