import Reveal from "./Reveal";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal as="p" className="bp-label md:col-span-2">
          01 — About
        </Reveal>

        <div className="md:col-span-8">
          <Reveal as="p" className="text-fluid-h3 font-display leading-snug">
            {about.paragraph}
          </Reveal>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-ink-line pt-8 md:grid-cols-4">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-brass">
                  {stat.value}
                </dd>
                <dd className="bp-label mt-2">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
