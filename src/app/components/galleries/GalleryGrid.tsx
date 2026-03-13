"use client";

import { useCallback, useState } from "react";
import type { GalleryMediaItem } from "@/data/galleries";
import GalleryMediaCard from "@/app/components/galleries/GalleryMediaCard";
import GalleryLightbox from "@/app/components/galleries/GalleryLightbox";

type GalleryGridProps = {
  media: GalleryMediaItem[];
};

export default function GalleryGrid({ media }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? media.length - 1 : prev - 1;
    });
  }, [media.length]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === media.length - 1 ? 0 : prev + 1;
    });
  }, [media.length]);

  if (!media.length) {
    return (
      <section className="bg-[#050505] py-14 md:py-18">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.38)] md:p-10">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#c6a66b] md:text-[11px]">
              No Media Found
            </p>

            <h2 className="mt-4 font-[family:var(--font-heading)] text-3xl text-white md:text-4xl">
              This gallery folder is empty
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Add images or videos to this gallery folder and they will render
              automatically here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#050505] pb-16 pt-6 md:pb-20 md:pt-8">
        <div className="section-shell">
          <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#c6a66b] md:text-[11px]">
                Gallery Media
              </p>
              <h2 className="mt-3 font-[family:var(--font-heading)] text-2xl text-white md:text-4xl">
                Photos & Videos
              </h2>
            </div>

            <p className="text-xs text-white/45 md:text-sm">{media.length} items</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:gap-5">
            {media.map((item, index) => (
              <GalleryMediaCard
                key={item.id}
                item={item}
                onOpen={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null ? (
        <GalleryLightbox
          media={media}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </>
  );
}