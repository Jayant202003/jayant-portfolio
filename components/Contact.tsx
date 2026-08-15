"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browser / permissions) —
      // the mailto link on the address itself still works.
    }
  };

  return (
    <section
      id="contact"
      className="bp-grid border-t border-ink-line px-6 py-28 md:px-12 md:py-40"
    >
      <Reveal as="p" className="bp-label">
       07 — Get in touch
      </Reveal>

     <Reveal
  as="h2"
  delay={0.05}
  className="mt-4 max-w-3xl font-display text-fluid-h2 font-medium leading-[1.05] tracking-tight"
>
  {profile.availability}. I&rsquo;m open to opportunities where I can
  contribute, learn, and build reliable software.
</Reveal>

      <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-6">
        <MagneticButton
          as="a"
          href={`mailto:${profile.email}`}
          className="rounded-full bg-brass px-8 py-4 font-mono text-base font-medium text-ink hover:bg-brass/90"
        >
          {profile.email}
        </MagneticButton>

        <button
          onClick={handleCopy}
          className="bp-label border-b border-ink_text/40 pb-0.5 hover:border-brass hover:text-brass"
          data-cursor-hover
        >
          {copied ? "Copied" : "Copy email"}
        </button>
      </Reveal>

      <Reveal delay={0.15} className="mt-16 flex gap-6">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="bp-label hover:text-brass"
            data-cursor-hover
            target="_blank"
            rel="noreferrer"
          >
            {s.label}
          </a>
        ))}
      </Reveal>
    </section>
  );
}
