import Link from "next/link";

type ComingSoonPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function ComingSoonPage({
  eyebrow = "Coming Soon",
  title,
  description,
}: ComingSoonPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-black" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c6a66b]/[0.06] blur-3xl md:h-80 md:w-80" />

      <section className="section-shell relative z-10 flex min-h-screen items-center justify-center py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">{eyebrow}</p>

          <h1 className="heading-display text-[2.6rem] leading-[0.96] sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90 sm:px-6"
            >
              Back Home
            </Link>

            <Link
              href="/galleries"
              className="inline-flex min-h-[48px] items-center rounded-full border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white/10 sm:px-6"
            >
              View Galleries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
