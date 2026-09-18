import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MetricStrip } from "@/components/metric-strip";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.shortTitle, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="case-study">
      <header className="case-header">
        <Link className="back-link" href="/#work">← Selected work</Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <div className="case-links">
          <a href={project.repository}>Repository ↗</a>
          {project.externalLink && <a href={project.externalLink}>Upstream pull request ↗</a>}
        </div>
      </header>

      <MetricStrip metrics={project.metrics} />

      {project.image && (
        <figure className="project-figure">
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            width={project.slug === "effr" ? 1760 : 1280}
            height={project.slug === "effr" ? 1280 : 720}
            priority
          />
          <figcaption>{project.result}</figcaption>
        </figure>
      )}

      <div className="case-body">
        {project.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <div>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <section>
          <h2>Tools</h2>
          <ul className="inline-tools">
            {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </section>
      </div>

      <aside className="next-project">
        <p className="eyebrow">Next case study</p>
        <Link href={`/work/${nextProject.slug}`}>
          {nextProject.shortTitle} <span aria-hidden="true">→</span>
        </Link>
      </aside>
    </article>
  );
}
