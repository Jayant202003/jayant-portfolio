import type { Project } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="bp-bracket group border-t border-ink-line py-16 first:border-t-0 md:py-24">
      <div className="grid gap-8 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-2">
          <Reveal className="bp-label">
            {String(index + 1).padStart(2, "0")} / {project.year}
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal
            as="h3"
            className="font-display text-fluid-h2 font-medium tracking-tight transition-colors group-hover:text-brass"
          >
            {project.title}
          </Reveal>
          <Reveal as="p" delay={0.05} className="bp-label mt-2">
            {project.role}
          </Reveal>

          <Reveal delay={0.1} className="mt-6 max-w-lg space-y-4 text-ink_text/90">
            <p>
              <span className="text-ink_text/50">Problem — </span>
              {project.problem}
            </p>
            <p>
              <span className="text-ink_text/50">Approach — </span>
              {project.approach}
            </p>
            <p>
              <span className="text-ink_text/50">Outcome — </span>
              {project.outcome}
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-4">
          <Reveal delay={0.15} className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bp-label rounded-full border border-ink-line px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-6 flex gap-6">
            {project.href && (
              <a
                href={project.href}
                className="bp-label border-b border-ink_text/40 pb-0.5 hover:border-brass hover:text-brass"
                data-cursor-hover
              >
                Live Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="bp-label border-b border-ink_text/40 pb-0.5 hover:border-brass hover:text-brass"
                data-cursor-hover
              >
                GitHub
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </article>
  );
}
