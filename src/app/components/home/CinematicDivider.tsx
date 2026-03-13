export default function CinematicDivider() {
  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-16">
      {/* soft overlap fade */}
      <div className="absolute -top-20 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070707] to-transparent" />

      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center px-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/8 to-[#c6a66b]/40" />

        <div className="mx-6">
          <div className="rounded-full border border-white/10 bg-[#0b0b0b] px-5 py-2 shadow-[0_0_30px_rgba(198,166,107,0.08)]">
            <p className="text-[15px] uppercase tracking-[0.35em] text-[#c6a66b] md:text-[11px]">
              Visual Narrative
            </p>
          </div>
        </div>

        <div className="h-px flex-1 bg-gradient-to-r from-[#c6a66b]/40 via-white/8 to-transparent" />
      </div>

      {/* center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a66b]/[0.06] blur-3xl" />
    </section>
  );
}