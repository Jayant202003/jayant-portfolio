import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-ink-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal as="p" className="bp-label">
            06 — Education & Certifications
          </Reveal>

          <div className="mt-8">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                B.Tech in Electrical Engineering
              </h2>

              <p className="mt-4 font-mono text-sm">
                Yeshwantrao Chavan College of Engineering, Nagpur
              </p>

              <p className="bp-label mt-3">
                2021 — 2025
              </p>
            </Reveal>
          </div>
        </div>

        <div>
          <Reveal as="p" className="bp-label">
            Certifications
          </Reveal>

          <div className="mt-8 space-y-6">
            <Reveal>
              <h3 className="font-display text-xl">
                Full Stack Web Development 
              </h3>
              <p className="bp-label mt-2">
                Apna College
              </p>
            </Reveal>

            <Reveal>
              <h3 className="font-display text-xl">
                Data Structures & Algorithms 
              </h3>
              <p className="bp-label mt-2">
                Apna College
              </p>
            </Reveal>

            <Reveal>
              <h3 className="font-display text-xl">
                Introduction to Artificial Intelligence
              </h3>
              <p className="bp-label mt-2">
                IBM SkillsBuild
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}