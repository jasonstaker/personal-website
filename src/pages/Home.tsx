import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../content/getProject";

export default function Home() {
  const featured = getFeaturedProjects(3);

  return (
    <div className="page-stack">
      <section className="page-hero hero-camp fade-up">
        <div className="hero-shell">
          <div>
            <h1 className="panel-title">Jason Staker's Portfolio</h1>
            <p className="lead-copy">
              High-signal projects with repo links, screenshots, and concise
              engineering highlights.
            </p>

            <div className="action-row">
              <Link className="btn-trail" to="/projects">
                View Projects
              </Link>
              <Link className="btn-trail" to="/resume">
                Resume
              </Link>
              <Link className="btn-trail" to="/contact">
                Contact
              </Link>
            </div>

            <div className="chip-cloud">
              {["TypeScript", "React", "Testing", "APIs", "Performance"].map(
                (k) => (
                  <span key={k} className="chip">
                    {k}
                  </span>
                )
              )}
            </div>
          </div>

          <figure className="hero-photo-frame" aria-label="Portrait photo">
            <img
              className="hero-photo"
              src="/about/face-with-background.jpg"
              alt="Portrait of Jason Staker"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="panel terrain-panel fade-up delay-1">
        <div className="section-header">
          <h2 className="section-title">Featured projects</h2>
          <Link className="section-link" to="/projects">
            View all
          </Link>
        </div>

        <div className="card-grid">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="project-card"
            >
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-meta">
                Updated {p.lastUpdated}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
