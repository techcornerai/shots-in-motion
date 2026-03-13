"use client";

import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { MOTION } from "@/lib/motion";
import type { SelectedMoment } from "@/data/selectedMoments";

type FrameCardProps = {
  item: SelectedMoment;
};

const sizeClasses: Record<SelectedMoment["size"], string> = {
  small: "h-[220px] w-[160px] md:h-[260px] md:w-[190px]",
  medium: "h-[300px] w-[220px] md:h-[390px] md:w-[285px]",
  large: "h-[390px] w-[270px] md:h-[560px] md:w-[380px]",
};

const positionClasses: Record<SelectedMoment["position"], string> = {
  "back-left":
    "left-[0%] top-[10%] z-10 rotate-[-11deg] opacity-40 md:left-[8%]",
  "back-right":
    "right-[0%] top-[9%] z-10 rotate-[11deg] opacity-40 md:right-[8%]",
  left: "left-[2%] top-[25%] z-20 rotate-[-8deg] md:left-[14%]",
  center:
    "left-1/2 top-[16%] z-30 -translate-x-1/2 rotate-[-1.5deg]",
  right: "right-[2%] top-[25%] z-20 rotate-[8deg] md:right-[14%]",
};

const entranceDelay: Record<SelectedMoment["position"], number> = {
  "back-left": 0.05,
  left: 0.12,
  center: 0.2,
  right: 0.28,
  "back-right": 0.36,
};

const driftRanges: Record<SelectedMoment["position"], [number, number]> = {
  "back-left": [-26, 18],
  "back-right": [-24, 20],
  left: [-18, 14],
  center: [-10, 10],
  right: [-18, 14],
};

const entranceVariants: Record<
  SelectedMoment["position"],
  { opacity: number; x?: number; y?: number; scale?: number }
> = {
  "back-left": { opacity: 0, x: -70, y: 12, scale: 0.96 },
  left: { opacity: 0, x: -55, y: 10, scale: 0.97 },
  center: { opacity: 0, y: 10, scale: 0.94 },
  right: { opacity: 0, x: 55, y: 10, scale: 0.97 },
  "back-right": { opacity: 0, x: 70, y: 12, scale: 0.96 },
};

export default function FrameCard({ item }: FrameCardProps) {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], driftRanges[item.position]);

  const isBack =
    item.position === "back-left" || item.position === "back-right";
  const isCenter = item.position === "center";

  return (
    <motion.div
      initial={entranceVariants[item.position]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: MOTION.CARD_ENTRANCE * MOTION.SPEED,
        delay: entranceDelay[item.position] * MOTION.SPEED,
        ease: MOTION.EASE,
      }}
      style={{ y }}
      className={`absolute ${positionClasses[item.position]}`}
    >
      <Link href={item.href} className="group block">
        <motion.div
          whileHover={{
            y: isCenter ? -8 : -6,
            scale: isCenter ? 1.025 : 1.02,
          }}
          transition={{
            duration: MOTION.HOVER * MOTION.SPEED,
            ease: MOTION.EASE,
          }}
          className={[
            "relative overflow-hidden rounded-[28px]",
            "border border-white/10",
            "bg-white/[0.03] backdrop-blur-sm",
            sizeClasses[item.size],

            // stronger center shadow
            isCenter
              ? "shadow-[0_40px_140px_rgba(0,0,0,0.75)]"
              : "shadow-[0_30px_100px_rgba(0,0,0,0.55)]",

            // slight blur for back cards
            isBack ? "blur-[0.4px]" : "",
          ].join(" ")}
        >
          {/* Center glow highlight */}
          {isCenter && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(198,166,107,0.18),transparent_60%)] opacity-70" />
          )}

          {/* subtle frame line */}
          <div className="pointer-events-none absolute inset-0 z-[2] rounded-[28px] border border-white/8" />

          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={[
                "object-cover transition duration-700 group-hover:scale-[1.045]",
                isBack ? "saturate-75 brightness-75" : "",
                isCenter ? "brightness-[0.98]" : "",
              ].join(" ")}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#c6a66b]">
                {item.category}
              </p>

              <h3 className="mt-2 text-sm text-white md:text-base">
                {item.title}
              </h3>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}