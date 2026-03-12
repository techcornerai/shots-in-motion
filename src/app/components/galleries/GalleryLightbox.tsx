"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import type { GalleryMediaItem } from "@/data/galleries";

type GalleryLightboxProps = {
  media: GalleryMediaItem[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({
  media,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const item = media[activeIndex];

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex h-full w-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 md:px-6">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#c6a66b] md:text-[11px]">
              {item.type === "video" ? "Video" : "Image"}
            </p>
            <p className="mt-1 truncate text-sm text-white/75 md:text-base">
              {item.alt}
            </p>
          </div>

          <div className="ml-4 flex items-center gap-2">
            <a
              href={item.src}
              download={item.downloadName}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#c6a66b]/35 px-4 text-[10px] uppercase tracking-[0.24em] text-[#c6a66b] transition hover:bg-[#c6a66b] hover:text-black md:px-5"
            >
              <span className="mr-2">
                <Download size={15} />
              </span>
              Download
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10"
              aria-label="Close viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-4 py-4 md:px-8 md:py-6">
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition hover:bg-white/10 md:left-6"
            aria-label="Previous item"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex h-full w-full max-w-6xl items-center justify-center">
            {item.type === "image" ? (
              <div className="relative h-full max-h-[78vh] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            ) : (
              <video
                src={item.src}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] w-full rounded-[20px] bg-black object-contain"
              />
            )}
          </div>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition hover:bg-white/10 md:right-6"
            aria-label="Next item"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="border-t border-white/10 px-4 py-3 text-center text-xs uppercase tracking-[0.22em] text-white/40 md:px-6">
          {activeIndex + 1} / {media.length}
        </div>
      </div>
    </div>
  );
}