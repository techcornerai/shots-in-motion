"use client";

import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { MOTION } from "@/lib/motion";
import { portfolioCategories } from "@/data/portfolioCategories";

export default function PortfolioCategories() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060606] to-black" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8 * MOTION.SPEED,
            ease: MOTION.EASE,
          }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="eyebrow mb-5">Stories in Light</p>
          <h2 className="heading-section">Explore the Portfolio</h2>
          <p className="copy-muted mx-auto mt-6 max-w-2xl">
            Five visual worlds shaped by emotion, atmosphere, and cinematic
            storytelling.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-5">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8 * MOTION.SPEED,
                delay: index * 0.06 * MOTION.SPEED,
                ease: MOTION.EASE,
              }}
            >
              <Link href={category.href} className="group block">
                <article className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-[0_18px_60px_rgba(0,0,0,0.38)]">
                  <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/25 md:from-black/78 md:via-black/34 md:to-black/20" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_28%,transparent_72%,rgba(0,0,0,0.22))]" />

                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full p-5 sm:p-6 md:p-8 lg:p-10">
                        <div className="max-w-xl">
                          <p className="text-[10px] uppercase tracking-[0.32em] text-[#c6a66b] md:text-[11px]">
                            Category
                          </p>

                          <h3 className="mt-3 font-[family:var(--font-heading)] text-3xl leading-none text-white sm:text-4xl md:text-5xl">
                            {category.title}
                          </h3>

                          <p className="mt-3 max-w-md text-sm leading-7 text-white/75 md:text-base">
                            {category.subtitle}
                          </p>

                          <div className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-white/80">
                            <span>View Collection</span>
                            <span className="h-px w-8 bg-[#c6a66b]/70 transition duration-500 group-hover:w-12" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}