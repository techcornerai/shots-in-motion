import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/events", label: "Events" },
  { href: "/packages", label: "Packages" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-black" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#c6a66b]/[0.05] blur-3xl" />

      <div className="section-shell relative z-10 py-16 md:py-20">
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-[#c6a66b]/70 to-transparent" />

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
          <div>
            <Link
              href="/"
              aria-label="Shots in Motion home"
              className="inline-flex items-center"
            >
              <Image
                src="/images/logo00.svg"
                alt="Shots in Motion"
                width={180}
                height={64}
                className="h-auto w-[150px] sm:w-[165px] md:w-[180px]"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65 md:text-base">
              Cinematic photography shaped by emotion, atmosphere, and
              unforgettable visual storytelling.
            </p>

            <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[#c6a66b] md:text-[11px]">
              Tampa, Florida
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-2">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-white/45 md:text-[11px]">
                Navigate
              </p>

              <div className="space-y-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-white/45 md:text-[11px]">
                Connect
              </p>

              <div className="space-y-3 text-sm text-white/70">
                <p>Instagram</p>
                <p>Email</p>
                <p>Book a Session</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-white/45 md:text-[11px]">
                Closing Frame
              </p>

              <p className="max-w-sm text-sm leading-7 text-white/60">
                Photography is memory shaped by light, timing, and feeling.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Shots in Motion Media. All rights reserved.</p>
            <p className="uppercase tracking-[0.24em]">Built for visual storytelling</p>
          </div>
        </div>
      </div>
    </footer>
  );
}