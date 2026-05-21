"use client";

import { easeOutCubic } from "@/lib/animation";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const LOOP = 5.5;
const REPEAT_DELAY = 0.4;
const OUT_START = 5.0;
const OUT_DONE = 5.4;
const IMESSAGE_BLUE = "#007AFF";

const TOKEN = "cashuBpGFkdGVzdGVuMmEgY2FzaHV2MjAwMDA0MjgwMDA4ZGE5b3Bxc2t6";

function bubbleKeyframes(inSec: number) {
  return {
    opacity: [0, 0, 1, 1, 0],
    y: [8, 8, 0, 0, 0],
    transition: {
      duration: LOOP,
      repeat: Infinity,
      repeatDelay: REPEAT_DELAY,
      ease: easeOutCubic,
      times: [
        0,
        Math.max(0, (inSec - 0.1) / LOOP),
        inSec / LOOP,
        OUT_START / LOOP,
        OUT_DONE / LOOP,
      ],
    },
  };
}

function fadeKeyframes(inSec: number, peak = 1) {
  return {
    opacity: [0, 0, peak, peak, 0],
    transition: {
      duration: LOOP,
      repeat: Infinity,
      repeatDelay: REPEAT_DELAY,
      ease: easeOutCubic,
      times: [
        0,
        Math.max(0, (inSec - 0.1) / LOOP),
        inSec / LOOP,
        OUT_START / LOOP,
        OUT_DONE / LOOP,
      ],
    },
  };
}

export function IMessageChat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15%" });
  const reduce = useReducedMotion() ?? false;
  const active = inView && !reduce;

  return (
    <div
      ref={ref}
      className="flex h-full w-full max-w-[460px] flex-col justify-center gap-2 py-2 sm:py-4"
      aria-label="A chat showing an ecash token sent as a regular text message"
    >
      <motion.div
        className="max-w-[80%] self-start rounded-[20px] rounded-bl-md bg-foreground/[0.10] px-4 py-2.5 text-[15px] leading-snug text-foreground"
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : active
              ? bubbleKeyframes(0.2)
              : { opacity: 0, y: 8 }
        }
      >
        owe me 5 for lunch?
      </motion.div>

      <motion.div
        className="max-w-[82%] min-w-0 self-end rounded-[20px] rounded-br-md px-4 py-2.5"
        style={{ backgroundColor: IMESSAGE_BLUE, color: "#fff" }}
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : active
              ? bubbleKeyframes(1.4)
              : { opacity: 0, y: 8 }
        }
      >
        <span className="block truncate font-mono text-[13px] leading-snug">
          {TOKEN}
        </span>
      </motion.div>

      <motion.div
        className="self-end pr-1 text-[10px] font-medium uppercase tracking-[0.06em] text-foreground/50"
        initial={reduce ? { opacity: 0.6 } : { opacity: 0 }}
        animate={
          reduce
            ? { opacity: 0.6 }
            : active
              ? fadeKeyframes(2.0, 0.6)
              : { opacity: 0 }
        }
      >
        Read 9:41
      </motion.div>

      <motion.div
        className="mt-1 max-w-[80%] self-start rounded-[20px] rounded-bl-md bg-foreground/[0.10] px-4 py-2.5 text-[15px] leading-snug text-foreground"
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : active
              ? bubbleKeyframes(3.0)
              : { opacity: 0, y: 8 }
        }
      >
        thanks!
      </motion.div>
    </div>
  );
}
