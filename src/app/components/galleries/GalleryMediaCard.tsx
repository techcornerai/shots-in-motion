import Image from "next/image";
import type { GalleryMediaItem } from "@/data/galleries";

type GalleryMediaCardProps = {
  item: GalleryMediaItem;
  onOpen: () => void;
};

export default function GalleryMediaCard({
  item,
  onOpen,
}: GalleryMediaCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03] shadow-[0_14px_40px_rgba(0,0,0,0.32)] md:rounded-[22px] md:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <button
        type="button"
        onClick={onOpen}
        className="relative block w-full text-left"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111] to-black">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 md:text-xs md:tracking-[0.28em]">
                Video
              </p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-black/5" />

          {item.type === "video" && (
            <div className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-[#c6a66b] backdrop-blur-md md:left-4 md:top-4 md:px-3 md:py-1.5 md:text-[10px] md:tracking-[0.28em]">
              Video
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-4">
            <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2.5 backdrop-blur-md md:px-4 md:py-3">
              <p className="line-clamp-2 text-xs leading-5 text-white/85 md:text-sm md:line-clamp-1">
                {item.alt}
              </p>

              <div className="mt-2 inline-flex rounded-full border border-[#c6a66b]/35 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[#c6a66b] md:px-4 md:py-2 md:text-[10px] md:tracking-[0.24em]">
                Open
              </div>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}