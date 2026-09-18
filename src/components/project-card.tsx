import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-number" aria-hidden="true">
        {project.number}
      </div>
      <div className="project-card-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.shortTitle}</Link>
        </h3>
        <p>{project.summary}</p>
        <p className="project-result">{project.result}</p>
      </div>
      <Link className="circle-link" href={`/work/${project.slug}`} aria-label={`Read ${project.shortTitle} case study`}>
        <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
