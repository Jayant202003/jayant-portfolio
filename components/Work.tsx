import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 md:px-12 md:py-40">
      <Reveal as="p" className="bp-label">
        02 — Selected work
      </Reveal>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-3 max-w-2xl font-display text-fluid-h2 font-medium tracking-tight"
      >
        Projects I&rsquo;ve built and worked on.
      </Reveal>

      <div className="mt-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
