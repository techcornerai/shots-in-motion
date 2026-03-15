"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/galleries", label: "Galleries" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Shots in Motion home"
            className="relative flex items-center"
          >
            <Image
              src="/images/logo00.svg"
              alt="Shots in Motion"
              width={170}
              height={58}
              priority
              className="h-auto w-[136px] sm:w-[152px] md:w-[170px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-sm uppercase tracking-[0.18em] transition",
                    active ? "text-white" : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-[#c6a66b]/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#c6a66b] transition hover:bg-[#c6a66b] hover:text-black lg:inline-flex"
            >
              Book
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-[60] lg:hidden transition-all duration-500",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <aside
          className={[
            "absolute inset-y-0 right-0 flex w-full max-w-[90%] flex-col border-l border-white/10 bg-black/92 backdrop-blur-xl shadow-[0_20px_100px_rgba(0,0,0,0.65)] transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 pb-6 pt-6">
            <Link
              href="/"
              aria-label="Shots in Motion home"
              className="relative flex items-center"
            >
              <Image
                src="/images/logo00.svg"
                alt="Shots in Motion"
                width={150}
                height={50}
                className="h-auto w-[120px]"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-1 flex-col px-6 pb-6 pt-8">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "rounded-[22px] border px-6 py-5 text-left text-sm uppercase tracking-[0.28em] transition",
                      active
                        ? "border-[#c6a66b]/35 bg-[#c6a66b]/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-white/85 hover:bg-white/[0.06]",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-10">
              <div className="border-t border-white/10 pt-8">
                <Link
                  href="/contact"
                  className="flex h-14 items-center justify-center rounded-full bg-[#c6a66b] text-xs uppercase tracking-[0.28em] text-black transition hover:opacity-90"
                >
                  Book a Session
                </Link>

                <p className="mt-6 text-center text-[10px] uppercase tracking-[0.32em] text-white/35">
                  Tampa Cinematic Photography
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}