import { stack } from "@/lib/data";
import Reveal from "./Reveal";

const categories: { label: string; items: string[] }[] = [
  { label: "Frontend", items: stack.frontend },
  { label: "Backend", items: stack.backend },
  { label: "Tools & CS", items: stack.infra },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="border-t border-ink-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal as="p" className="bp-label">
            04 — Tools
          </Reveal>

          <div className="mt-8 space-y-8">
            {categories.map((cat, i) => (
              <Reveal key={cat.label} delay={i * 0.06}>
                <h3 className="bp-label mb-3 text-draft">{cat.label}</h3>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-line px-3 py-1.5 font-mono text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal as="p" className="bp-label">
            05 — What I bring
          </Reveal>

          <div className="mt-8 space-y-6">
            {[
              "Build full-stack applications with React.js, Node.js, Express.js, and MongoDB.",
              "Design and integrate REST APIs, authentication, CRUD workflows, and database-driven features.",
              "Build real-time applications using Socket.IO and WebRTC, including video communication and chat.",
              "Apply Data Structures & Algorithms, OOP, DBMS, and Operating Systems fundamentals when solving development problems.",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.08}>
                <p className="font-display text-xl leading-snug">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}