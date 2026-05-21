"use client";

import { easeOutQuart } from "@/lib/animation";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

interface FooterWordmarkProps {
  text: string;
}

const LILAC_DEEP = "#7a66e8";

export function FooterWordmark({ text }: FooterWordmarkProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(false);
  const [pulse, setPulse] = useState(false);
  const hoverCount = useRef(0);

  const handleEnter = () => {
    setActive(true);
    hoverCount.current += 1;
    if (hoverCount.current % 5 === 0) {
      setPulse(true);
      setTimeout(() => setPulse(false), 200);
    }
  };

  const handleLeave = () => {
    setActive(false);
  };

  if (reduceMotion) {
    return (
      <div className="type-wordmark uppercase text-foreground select-none">
        {text}
      </div>
    );
  }

  return (
    <div
      className="relative type-wordmark uppercase select-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="text-foreground" aria-hidden>
        {text}
      </span>
      <motion.span
        aria-hidden
        initial={false}
        animate={{
          clipPath: active ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          opacity: pulse ? 1 : 0.3,
        }}
        transition={{
          clipPath: {
            duration: active ? 0.6 : 0.8,
            ease: easeOutQuart,
          },
          opacity: {
            duration: pulse ? 0.05 : 0.4,
            ease: easeOutQuart,
          },
        }}
        style={{
          color: LILAC_DEEP,
          position: "absolute",
          inset: 0,
          willChange: "clip-path, opacity",
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
