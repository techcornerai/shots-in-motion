"use client";

import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import FrameCard from "@/app/components/home/FrameCard";
import { selectedMoments } from "@/data/selectedMoments";

export default function SelectedMoments3D() {
  const { scrollYProgress } = useScroll();

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section className="relative overflow-hidden bg-[#050505] pt-28 pb-6 md:pt-40 md:pb-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />

      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,166,107,0.12),transparent_34%)]"
      />

      <motion.div
        style={{ y: glowY }}
        className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a66b]/[0.05] blur-3xl"
      />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: headingY }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="eyebrow mb-5">Curated Visual Stories</p>

          <h2 className="heading-section">Selected Moments</h2>

          <p className="copy-muted mx-auto mt-6 max-w-2xl">
            A cinematic collection of portraits, performances, celebrations,
            and unforgettable frames crafted to feel like a digital exhibition.
          </p>
        </motion.div>

        <div className="relative mx-auto h-[660px] max-w-6xl md:h-[920px]">
          <div className="absolute inset-x-[14%] bottom-[8%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {selectedMoments.map((item) => (
            <FrameCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}