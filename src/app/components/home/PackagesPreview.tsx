export default function PackagesPreview() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="mb-16 text-4xl md:text-5xl font-serif">
          Packages
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="border border-white/10 p-10">
            <h3 className="text-2xl mb-4">Portrait Session</h3>
            <p className="text-white/60">
              1 hour session · 10 edited images · online gallery
            </p>
          </div>

          <div className="border border-white/10 p-10">
            <h3 className="text-2xl mb-4">Family Session</h3>
            <p className="text-white/60">
              1.5 hour shoot · 20 edited photos · private gallery
            </p>
          </div>

          <div className="border border-white/10 p-10">
            <h3 className="text-2xl mb-4">Event Coverage</h3>
            <p className="text-white/60">
              2–4 hour coverage · event gallery · guest downloads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}