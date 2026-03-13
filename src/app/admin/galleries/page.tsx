import Link from "next/link";
import { readGalleries } from "@/lib/galleries-store";
import { logoutAdmin } from "@/app/admin/actions/logout";

export default async function AdminGalleriesPage() {
  const galleries = await readGalleries();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Admin</p>
            <h1 className="heading-section">Gallery Control</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              Manage gallery visibility, access type, passwords, and publishing
              status.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/galleries/new"
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90 sm:px-6"
            >
              New Gallery
            </Link>

            <form action={logoutAdmin}>
              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center rounded-full border border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:bg-white/10 hover:text-white sm:px-6"
              >
                Logout
              </button>
            </form>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
          <div className="hidden grid-cols-[1.4fr_1fr_0.8fr_0.8fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.28em] text-white/45 md:grid">
            <p>Title</p>
            <p>Slug</p>
            <p>Access</p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          <div className="divide-y divide-white/10">
            {galleries.map((gallery) => (
              <div
                key={gallery.id}
                className="grid gap-4 px-5 py-5 md:grid-cols-[1.4fr_1fr_0.8fr_0.8fr_1fr] md:px-6"
              >
                <div>
                  <p className="text-lg text-white">{gallery.title}</p>
                  <p className="mt-2 text-sm text-white/55">
                    {gallery.eventDate} • {gallery.location}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 md:hidden">
                    Slug
                  </p>
                  <p className="text-sm text-white/70">{gallery.slug}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 md:hidden">
                    Access
                  </p>
                  <span
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]",
                      gallery.accessType === "private"
                        ? "border border-[#c6a66b]/30 bg-[#c6a66b]/10 text-[#c6a66b]"
                        : "border border-white/15 bg-white/[0.04] text-white/70",
                    ].join(" ")}
                  >
                    {gallery.accessType}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 md:hidden">
                    Status
                  </p>
                  <span
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]",
                      gallery.published
                        ? "border border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                        : "border border-white/15 bg-white/[0.04] text-white/55",
                    ].join(" ")}
                  >
                    {gallery.published ? "published" : "draft"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/galleries/${gallery.slug}`}
                    className="rounded-full border border-white/12 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    View
                  </Link>

                  <Link
                    href={`/admin/galleries/${gallery.id}/edit`}
                    className="rounded-full border border-white/12 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    className="rounded-full border border-red-400/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-red-300/80 transition hover:bg-red-500/10"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {!galleries.length && (
              <div className="px-6 py-12 text-center">
                <p className="text-sm text-white/60">No galleries found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
