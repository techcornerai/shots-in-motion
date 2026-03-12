"use client";

import { useEffect, useMemo, useState } from "react";
import type { PrivateGallery } from "@/data/galleries";
import GalleryGrid from "@/app/components/galleries/GalleryGrid";

type GalleryPasswordGateProps = {
  gallery: PrivateGallery;
};

export default function GalleryPasswordGate({
  gallery,
}: GalleryPasswordGateProps) {
  const storageKey = useMemo(
    () => `gallery-access-${gallery.slug}`,
    [gallery.slug]
  );

  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);

    if (stored === "granted") {
      setIsUnlocked(true);
    }
  }, [storageKey]);

  function unlockGallery(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password.trim() === gallery.password) {
      sessionStorage.setItem(storageKey, "granted");
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Incorrect password. Please try again.");
  }

  function lockGallery() {
    sessionStorage.removeItem(storageKey);
    setIsUnlocked(false);
  }

  if (isUnlocked) {
    return (
      <>
        <section className="bg-[#050505] pt-8 pb-2">
          <div className="section-shell flex items-center justify-between">
            <p className="text-xs text-white/45">
              This gallery is unlocked for your current session.
            </p>

            <button
              onClick={lockGallery}
              className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/60 transition hover:bg-white/10"
            >
              Lock Gallery
            </button>
          </div>
        </section>

        <GalleryGrid media={gallery.media} />
      </>
    );
  }

  return (
    <section className="bg-[#050505] py-14 md:py-18">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.38)] md:p-10">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#c6a66b] md:text-[11px]">
              Private Access
            </p>

            <h2 className="mt-4 font-[family:var(--font-heading)] text-3xl text-white md:text-4xl">
              Enter Gallery Password
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              This gallery is private. Enter the password provided to you to
              access photos and videos.
            </p>
          </div>

          <form onSubmit={unlockGallery} className="mt-8">
            <label className="mb-3 block text-[10px] uppercase tracking-[0.28em] text-white/45 md:text-[11px]">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
            />

            {error ? (
              <p className="mt-3 text-sm text-red-400">{error}</p>
            ) : null}

            <button
              type="submit"
              className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#c6a66b] px-6 py-4 text-xs uppercase tracking-[0.24em] text-black transition hover:opacity-90"
            >
              Unlock Gallery
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}