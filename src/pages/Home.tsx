import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../content/getProject";

export default function Home() {
  const featured = getFeaturedProjects(3);

  return (
    <div className="page-stack">
      <section className="page-hero fade-up">
        <h1 className="panel-title">Software / CS portfolio</h1>
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
      </section>

      <section className="panel fade-up delay-1">
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
