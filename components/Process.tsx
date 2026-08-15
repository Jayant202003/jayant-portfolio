import { process } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="border-t border-ink-line px-6 py-28 md:px-12 md:py-40">
      <Reveal as="p" className="bp-label">
        03 — How I work
      </Reveal>

      <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
        {process.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} as="li">
            <span className="bp-label text-draft">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink_text/70">
              {step.detail}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
