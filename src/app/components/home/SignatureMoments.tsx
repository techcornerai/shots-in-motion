"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { signatureMoments } from "@/data/signatureMoments";
import { MOTION } from "@/lib/motion";

export default function SignatureMoments() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060606] to-black" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8 * MOTION.SPEED,
            ease: MOTION.EASE,
          }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <p className="eyebrow mb-5">Signature Work</p>
          <h2 className="heading-section">Moments with Presence</h2>
          <p className="copy-muted mx-auto mt-6 max-w-2xl">
            A focused selection of frames that define the visual language of
            Shots in Motion — elegant, emotive, and unmistakably cinematic.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {signatureMoments.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.85 * MOTION.SPEED,
                delay: index * 0.08 * MOTION.SPEED,
                ease: MOTION.EASE,
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
                <div className="relative h-[480px] md:h-[560px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#c6a66b]">
                    Signature Moment
                  </p>
                  <h3 className="mt-3 text-2xl text-white md:text-[1.9rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}