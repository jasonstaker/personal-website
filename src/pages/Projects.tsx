import { Link } from "react-router-dom";
import { projects } from "../content/projects";
import Seo from "../components/Seo";

export default function Projects() {
  return (
    <div className="page-stack projects-page">
      <Seo
        title="Projects | Jason Staker"
        description="Project portfolio of Jason Staker with C++, Python, systems, and data-focused software builds."
        canonicalPath="/projects"
      />

      <header className="page-title-wrap fade-up">
        <span className="page-kicker">Selected Work</span>
        <h1 className="page-display-title">Projects</h1>
      </header>

      <section className="projects-grid fade-up delay-1">
        {projects.map((p) => (
          <article key={p.slug} className="projects-item projects-showcase">
            <Link className="project-media-link" to={`/projects/${p.slug}`} aria-label={`${p.title} preview`}>
              {p.visuals?.[0] ? (
                <img className="project-media" src={p.visuals[0].src} alt={p.visuals[0].alt} loading="lazy" />
              ) : (
                <div className="project-media project-media-placeholder">Project Preview</div>
              )}
            </Link>

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
