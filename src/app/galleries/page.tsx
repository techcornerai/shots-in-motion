import Link from "next/link";

export default function GalleriesLandingPage() {
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-black" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-[#c6a66b]/[0.06] blur-3xl md:h-72 md:w-72" />

        <div className="section-shell relative z-10 flex min-h-[72vh] items-center py-20 md:min-h-[78vh] md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Private Access</p>

            <h1 className="heading-display text-[2.6rem] leading-[0.96] sm:text-5xl md:text-6xl lg:text-7xl">
              Client Galleries
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              This area is reserved for private gallery access. Use the direct
              gallery link and password provided to you to view and download
              your photos or videos.
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.38)] md:p-8">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#c6a66b] md:text-[11px]">
                How Access Works
              </p>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/70 md:text-base">
                <p>1. Open the private link sent to you.</p>
                <p>2. Enter the gallery password provided by Shots in Motion.</p>
                <p>3. View and download your images or videos.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90 sm:px-6"
                >
                  Contact Us
                </Link>

                <Link
                  href="/"
                  className="inline-flex min-h-[48px] items-center rounded-full border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white/10 sm:px-6"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}