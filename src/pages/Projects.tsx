import { Link } from "react-router-dom";
import { projects } from "../content/projects";

export default function Projects() {
  return (
    <div className="page-stack">
      <section className="page-hero fade-up">
        <h1 className="panel-title">Projects</h1>
        <p className="lead-copy">3-6 projects. Skimmable. Proof-first.</p>
      </section>

      <section className="projects-grid fade-up delay-1">
        {projects.map((p) => (
          <article key={p.slug} className="projects-item">
            <div className="item-head">
              <div>
                <h2 className="item-heading">
                  <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="item-desc">{p.description}</p>
              </div>
              {p.category && <span className="category-pill">{p.category}</span>}
            </div>

            <div className="chip-cloud">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="link-row">
              <a href={p.repoUrl} target="_blank" rel="noreferrer">
                Repo
              </a>
              {p.demoUrl && (
                <a href={p.demoUrl} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
              <Link to={`/projects/${p.slug}`}>Details</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
