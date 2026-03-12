"use client";

import Link from "next/link";
import * as motion from "motion/react-client";

const VIDEO_SCALE = 1.15;
const VIDEO_Y = -4;

export default function Hero() {
  return (
    <section className="relative flex h-[82vh] overflow-hidden md:h-[90vh] lg:h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            transform: `scale(${VIDEO_SCALE}) translateY(${VIDEO_Y}%)`,
          }}
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-45"
        >
          <source src="/videos/hero/cinematic-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
        <div className="10" />
      </div>

      <div className="section-shell relative z-10 flex h-full items-center pt-28 pb-12 md:items-end md:pt-28 md:pb-20 lg:pb-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow mb-4 md:mb-5"
          >
            Tampa Cinematic Photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="heading-display max-w-[520px] text-[2.4rem] leading-[0.96] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Moments move fast.
            <br />
            We capture them forever.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base md:mt-6"
          >
            Luxury visual storytelling for events, portraits, weddings, and
            unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4 md:mt-10"
          >
            <Link
              href="/portfolio"
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90 sm:px-6"
            >
              View the Work
            </Link>

            <Link
              href="/events"
              className="inline-flex min-h-[48px] items-center rounded-full border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white/10 sm:px-6"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}