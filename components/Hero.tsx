"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { profile } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    // Word-level stagger without pulling in the paid SplitText plugin —
    // split by word in markup (see spans below) and animate those.
    const words = el.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: "110%" },
        {
          y: "0%",
          duration: 0.9,
          stagger: 0.06,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const headline = profile.tagline;

  return (
    <section
      id="top"
      className="bp-grid relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-12"
    >
      <p className="bp-label mb-6">
        {profile.role} — {profile.location}
      </p>

      <h1
  ref={headlineRef}
  className="max-w-4xl font-display text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-tight"
>
  {headline.split(" ").map((word, i) => (
    <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
      <span data-word className="inline-block">
        {word}
      </span>
    </span>
  ))}
</h1>

      <div className="mt-10 flex flex-wrap items-center gap-6">
  <MagneticButton
    as="a"
    href="#work"
    className="bp-bracket rounded-full bg-brass px-7 py-3 font-mono text-sm font-medium text-ink hover:bg-brass/90"
  >
    <span>View work</span>
  </MagneticButton>

  <a
    href="/resume"
    className="bp-label border-b border-transparent pb-0.5 hover:border-ink_text"
    data-cursor-hover
  >
    View resume
  </a>

  <a
    href={`mailto:${profile.email}`}
    className="bp-label border-b border-transparent pb-0.5 hover:border-ink_text"
    data-cursor-hover
  >
    {profile.email}
  </a>
</div>

      <div
        className="absolute bottom-10 left-6 hidden items-center gap-2 md:flex md:left-12"
        aria-hidden="true"
      >
        <span className="h-8 w-px animate-pulse bg-ink_text/40" />
        <span className="bp-label">Scroll</span>
      </div>
    </section>
  );
}
