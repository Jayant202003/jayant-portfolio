"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
};

/**
 * Pulls itself toward the cursor within a radius, then springs back.
 * Falls back to a static button on touch (no mousemove events fire
 * there anyway, so this degrades automatically — no extra branching
 * needed beyond disabling on prefers-reduced-motion).
 */
export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  as = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const sharedClassName = clsx(
    "inline-flex items-center justify-center transition-colors duration-300",
    className
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      {as === "a" ? (
        <motion.a
          href={href}
          onClick={onClick}
          whileTap={{ scale: 0.96 }}
          className={sharedClassName}
        >
          {children}
        </motion.a>
      ) : (
        <motion.button
          type="button"
          onClick={onClick}
          whileTap={{ scale: 0.96 }}
          className={sharedClassName}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
