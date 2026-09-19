import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Homepage design preview",
  robots: { index: false, follow: false },
};

export default function DesignPreview() {
  return (
    <div className="design-preview">
      <header className="preview-header">
        <Link href="/design-preview">Anastasia Galkova</Link>
        <nav aria-label="Preview navigation">
          <a href="#selected-work">Work</a>
          <a href="#preview-about-heading">About</a>
          <a href="/anastasia-galkova-resume.pdf">Résumé</a>
        </nav>
      </header>

      <section className="preview-intro" aria-labelledby="preview-heading">
        <div className="preview-intro-copy">
          <h1 id="preview-heading">Hi, I&apos;m Anastasia.</h1>
          <p>
            I study economics and computer science at Lake Forest College.
            Lately I&apos;ve been working on time-series forecasting, small-data
            NLP, and testing in open-source projects.
          </p>
        </div>
        <figure className="preview-portrait">
          <Image
            src="/images/anastasia-galkova.jpg"
            alt="Portrait of Anastasia Galkova outdoors"
            width={1280}
            height={1280}
            priority
          />
        </figure>
      </section>

      <dl className="preview-details">
          <div>
            <dt>Based in</dt>
            <dd>Chicago</dd>
          </div>
          <div>
            <dt>Graduating</dt>
            <dd>December 2026</dd>
          </div>
          <div>
            <dt>Elsewhere</dt>
            <dd>
              <a href="https://github.com/ageefox">GitHub</a> ·{" "}
              <a href="https://www.linkedin.com/in/agalkova/">LinkedIn</a>
            </dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>
              <a href="mailto:galkovaa@lakeforest.edu">Email me</a>
            </dd>
          </div>
      </dl>

      <p className="preview-now">
        <strong>Now:</strong> I&apos;m taking a statistics course, learning R, and
        looking for entry-level data science, analytics, and software
        engineering roles beginning in 2027.
      </p>

      <section className="preview-work" aria-labelledby="selected-work">
        <header className="preview-section-title">
          <p>Selected work</p>
          <p>2024–2026</p>
        </header>

        <article className="preview-feature preview-feature-lead" id="selected-work">
          <div className="preview-project-copy">
            <p className="preview-meta">01 · Economics / time series</p>
            <h2>
              <Link href="/work/effr">Forecasting the federal funds rate</Link>
            </h2>
            <p>
              I tested whether lagged rate history could beat a one-month
              persistence forecast. On an untouched 2017–2026 period, Ridge
              improved RMSE from 0.1922 to 0.1606 percentage points.
            </p>
            <p className="preview-takeaway">
              Ridge helped a little. Random Forest didn&apos;t.
            </p>
            <Link className="preview-link" href="/work/effr">
              Read the study <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <figure className="preview-figure">
            <span className="preview-effr-desktop">
              <Image
                src="/images/effr-external-forecast.png"
                alt="Actual effective federal funds rate alongside three one-month forecasts from 2017 through 2026"
                width={1600}
                height={1000}
                priority
              />
            </span>
            <span className="preview-effr-mobile">
              <Image
                src="/images/effr-mobile-forecast.svg"
                alt="Actual effective federal funds rate with Ridge and persistence forecasts from 2017 through 2026"
                width={900}
                height={920}
              />
            </span>
            <figcaption>
              External evaluation, March 2017–August 2026. Percentage points.
            </figcaption>
          </figure>
        </article>

        <div className="preview-secondary-grid">
          <article className="preview-feature preview-feature-secondary">
            <figure className="preview-bars">
              <figcaption>Unseen-thread test performance · macro F1</figcaption>
              <div className="preview-bar-row">
                <span>TF–IDF + logistic regression</span>
                <i className="preview-bar preview-bar-310" />
                <strong>0.310</strong>
              </div>
              <div className="preview-bar-row">
                <span>DistilBERT + class weights</span>
                <i className="preview-bar preview-bar-172" />
                <strong>0.172</strong>
              </div>
              <div className="preview-bar-row">
                <span>DistilBERT</span>
                <i className="preview-bar preview-bar-151" />
                <strong>0.151</strong>
              </div>
              <div className="preview-bar-row">
                <span>Majority baseline</span>
                <i className="preview-bar preview-bar-151" />
                <strong>0.151</strong>
              </div>
            </figure>
            <div className="preview-project-copy">
              <p className="preview-meta">02 · NLP / evaluation</p>
              <h2>
                <Link href="/work/craft-forum-nlp">Craft Forum NLP</Link>
              </h2>
              <p>
                A four-class text benchmark split by whole forum conversations.
                With 212 labeled posts, TF–IDF generalized better than either
                DistilBERT setup.
              </p>
              <Link className="preview-link" href="/work/craft-forum-nlp">
                See the benchmark <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

          <article className="preview-feature preview-contribution">
            <dl className="preview-contribution-facts">
              <div>
                <dt>Contribution</dt>
                <dd>Prompt snapshot tests</dd>
              </div>
              <div>
                <dt>Verification</dt>
                <dd>42 focused tests</dd>
              </div>
              <div>
                <dt>Review</dt>
                <dd>Upstream PR #769</dd>
              </div>
            </dl>
            <div className="preview-project-copy">
              <p className="preview-meta">03 · Open-source contribution</p>
              <h2>
                <Link href="/work/pathreview">PathReview</Link>
              </h2>
              <p>
                I replaced a snapshot assertion that could never catch content
                changes with per-version SHA-256 checks, then verified the
                failure with a deliberate prompt mutation.
              </p>
              <Link className="preview-link" href="/work/pathreview">
                View the contribution <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="preview-experience" aria-labelledby="experience-heading">
        <p className="preview-kicker">Experience &amp; leadership</p>
        <div className="preview-roles">
          <article>
            <p className="preview-role-date">August–December 2025</p>
            <h2 id="experience-heading">SQL Data Analyst Intern</h2>
            <p className="preview-company">Oscillas Technologies</p>
            <p>
              Built reporting and reconciliation workflows for sensor,
              equipment-downtime, and reliability data across PostgreSQL and SQL
              Server, then translated the findings for engineering and business
              stakeholders.
            </p>
          </article>
          <article>
            <p className="preview-role-date">December 2024–May 2026</p>
            <h2>Girls Who Code Chapter President</h2>
            <p className="preview-company">Lake Forest College</p>
            <p>
              Led chapter programming, technical workshops, and campus outreach,
              and mentored high-school students in Python and AI through the
              Girls Who Code Mentoring Corps.
            </p>
          </article>
        </div>
      </section>

      <section className="preview-about" aria-labelledby="preview-about-heading">
        <p className="preview-kicker">About</p>
        <div>
          <h2 id="preview-about-heading">
            I usually start with a simple baseline.
          </h2>
          <p>
            Most of my recent work started with something practical: can a
            simple baseline hold up, can a classifier generalize beyond one
            conversation, or can a test actually catch the change it claims to
            protect? I like following those questions through the data and being
            honest about what the answer supports.
          </p>
          <p>
            Outside class, I knit, paint, and travel. I&apos;ve lived in Russia and
            Hong Kong, and I now call the Chicago area home.
          </p>
          <div className="preview-about-links">
            <Link href="/about">About me</Link>
            <a href="/anastasia-galkova-resume.pdf">Résumé</a>
            <a href="mailto:galkovaa@lakeforest.edu">Email</a>
          </div>
        </div>
      </section>

      <footer className="preview-footer">
        <p>Anastasia Galkova · Chicago</p>
        <div>
          <a href="mailto:galkovaa@lakeforest.edu">Email</a>
          <a href="https://github.com/ageefox">GitHub</a>
          <a href="https://www.linkedin.com/in/agalkova/">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
