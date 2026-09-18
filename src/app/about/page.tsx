import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, and contact information for Anastasia Galkova.",
};

export default function AboutPage() {
  return (
    <article className="about-page">
      <header className="page-intro about-intro">
        <p className="eyebrow">About</p>
        <h1>I care about the evaluation as much as the model.</h1>
        <p className="lede">
          I am a computer science and economics student at Lake Forest College, graduating in December 2026. I work at the point where data engineering, statistical reasoning, and software quality meet.
        </p>
      </header>

      <div className="about-grid">
        <section>
          <h2>Background</h2>
          <p>
            During a SQL data analyst internship at Oscillas Technologies, I built reporting and reconciliation workflows for sensor, equipment-downtime, and reliability data across PostgreSQL and SQL Server. The work required translating technical findings into decisions for engineering and business stakeholders.
          </p>
          <p>
            My independent projects ask a related question: does an apparent result survive a more realistic test? That led me to chronological validation for EFFR forecasting, thread-held-out evaluation for TakeMeter, and a mutation check for the PathReview snapshot tests.
          </p>
        </section>
        <section>
          <h2>Tools</h2>
          <ul className="tool-list">
            <li>Python, SQL, Java, Bash</li>
            <li>pandas, NumPy, scikit-learn, PyTorch</li>
            <li>PostgreSQL, SQL Server, MySQL, ChromaDB</li>
            <li>Flask, SQLAlchemy, REST APIs</li>
            <li>Git, Docker, Linux, pytest, GitHub Actions</li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            Bachelor of Arts in Computer Science and Economics, Lake Forest College. GPA: 4.00. Phi Beta Kappa, Dean&apos;s List, Presidential Scholarship, and Plansoen Family Scholarship.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <ul className="contact-list">
            <li><a href="mailto:galkovaa@lakeforest.edu">galkovaa@lakeforest.edu</a></li>
            <li><a href="https://www.linkedin.com/in/agalkova/">LinkedIn</a></li>
            <li><a href="https://github.com/ageefox">GitHub</a></li>
            <li><a href="/anastasia-galkova-resume.pdf">Résumé PDF</a></li>
          </ul>
        </section>
      </div>
    </article>
  );
}
