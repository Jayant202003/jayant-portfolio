"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { profile } from "@/lib/data";

/**
 * Runs once per session (sessionStorage-gated) so returning visitors on
 * the same tab, or navigating back, don't re-sit through it. Caps at
 * ~1.4s so it never becomes a tax on repeat viewing — its job is to
 * mask the font swap, not to perform.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    setHasMounted(true);
    const alreadySeen = sessionStorage.getItem("preloader-seen");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadySeen || reduceMotion) {
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";

    const controls = animate(count, 100, {
      duration: 1.2,
      ease: "easeInOut",
      onUpdate: (v) => setDisplayCount(Math.round(v)),
      onComplete: () => {
        sessionStorage.setItem("preloader-seen", "1");
        setTimeout(() => {
          setShow(false);
          document.body.style.overflow = "";
        }, 200);
      },
    });

    return () => controls.stop();
  }, [count]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink font-mono text-ink_text"
          role="status"
          aria-live="polite"
        >
          <span className="bp-label mb-4">{profile.name}</span>
          <span className="font-display text-5xl tabular-nums">
            {displayCount}%
          </span>
          <span className="sr-only">Loading, {displayCount} percent complete</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
