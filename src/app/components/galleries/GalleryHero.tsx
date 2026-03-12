import type { PrivateGallery } from "@/data/galleries";

type GalleryHeroProps = {
  gallery: PrivateGallery;
};

export default function GalleryHero({ gallery }: GalleryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${gallery.coverImage})` }}
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/25" />

      <div className="section-shell relative z-10 flex min-h-[58vh] items-end py-16 md:min-h-[70vh] md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Private Gallery</p>

          <h1 className="heading-display max-w-4xl text-[2.5rem] leading-[0.96] sm:text-5xl md:text-6xl lg:text-7xl">
            {gallery.title}
          </h1>

          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#c6a66b] md:text-[13px]">
            {gallery.eventDate} • {gallery.location}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            {gallery.description}
          </p>
        </div>
      </div>
    </section>
  );
}