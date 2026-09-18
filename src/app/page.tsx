import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-intro">
          <p className="eyebrow">Anastasia Galkova · Chicago</p>
          <h1 id="hero-heading">Applied machine learning, tested carefully.</h1>
        </div>
        <div className="hero-statement">
          <p>
            I build data and machine-learning projects informed by computer science and economics. My work focuses on clear evaluation, reproducible results, and knowing when a simpler model is the stronger choice.
          </p>
          <div className="hero-links">
            <a href="mailto:galkovaa@lakeforest.edu">Email me</a>
            <a href="/anastasia-galkova-resume.pdf">View résumé</a>
          </div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-heading">Three projects, three kinds of evidence.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="home-about" aria-labelledby="about-heading">
        <p className="eyebrow">About</p>
        <div>
          <h2 id="about-heading">Computer science and economics at Lake Forest College.</h2>
          <p>
            I graduate in December 2026. My recent work spans SQL reporting pipelines, time-series forecasting, small-data NLP, and testing in an existing open-source codebase.
          </p>
          <Link className="text-link" href="/about">
            More about my work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
