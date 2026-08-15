"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Ring cursor that grows over interactive elements. Entirely inert on
 * touch/coarse-pointer devices (checked via matchMedia, not just CSS,
 * so we skip the event listeners too — no point paying the cost).
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isCoarsePointer || prefersReducedMotion) return;

    const el = dotRef.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    const interactiveSelector = "a, button, [data-cursor-hover]";
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) {
        gsap.to(el, { width: 44, height: 44, duration: 0.25 });
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) {
        gsap.to(el, { width: 22, height: 22, duration: 0.25 });
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div ref={dotRef} className="bp-cursor hidden md:block" aria-hidden="true" />;
}
