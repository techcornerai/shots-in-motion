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
    <article className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111] to-black">
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                Video
              </p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />

          {item.type === "video" && (
            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#c6a66b] backdrop-blur-md">
              Video
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="flex items-end justify-between gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
              <div className="min-w-0">
                <p className="truncate text-sm text-white/85">{item.alt}</p>
              </div>

              <span className="shrink-0 rounded-full border border-[#c6a66b]/35 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#c6a66b]">
                Open
              </span>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}