import Link from "next/link";

export default function EventsPreview() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="mb-10 text-4xl md:text-5xl font-serif">
          Recent Events
        </h2>

        <p className="mb-12 text-white/60 max-w-xl">
          Explore the latest events captured by Shots in Motion.
        </p>

        <Link
          href="/events"
          className="inline-block border border-[#c6a66b] px-6 py-3 uppercase text-sm tracking-widest text-[#c6a66b] hover:bg-[#c6a66b] hover:text-black transition"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}