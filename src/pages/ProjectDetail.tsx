import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/getProject";
import NotFound from "./NotFound";
import Seo from "../components/Seo";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const visual = project?.visuals?.[0];

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="detail-wrap cohesive-stack">
      <Seo
        title={`${project.title} | Jason Staker`}
        description={`${project.title} project details, engineering highlights, and tech stack by Jason Staker.`}
        canonicalPath={`/projects/${project.slug}`}
      />

      <header className="detail-header fade-up">
        <div className="detail-header-top">
          <h1 className="detail-title">{project.title}</h1>
          {project.category && <span className="category-pill detail-category">{project.category}</span>}
        </div>
        <p className="lead-copy detail-lead">{project.description}</p>
        <div className="detail-header-actions">
          <div className="link-row">
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub repo
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
          </div>
          <div className="project-meta">Last updated {project.lastUpdated}</div>
        </div>
      </header>

      {visual && (
        <figure className="detail-media-panel fade-up delay-1">
          <img className="detail-image" src={visual.src} alt={visual.alt} />
        </figure>
      )}

      <section className="detail-body-grid fade-up delay-2">
        <aside className="detail-section detail-at-glance">
          <h2>At a Glance</h2>
          <div className="detail-facts">
            <div className="detail-fact">
              <span>Category</span>
              <strong>{project.category ?? "Project"}</strong>
            </div>
            <div className="detail-fact">
              <span>Updated</span>
              <strong>{project.lastUpdated}</strong>
            </div>
          </div>

          <h3 className="detail-mini-title">Tech stack</h3>
          <div className="chip-cloud">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <h3 className="detail-mini-title">Focus</h3>
          <div className="chip-cloud">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </aside>

        <section className="detail-section detail-breakdown">
          <div className="detail-columns">
            <DetailList title="Problem / Goal" items={project.problem} />
            <DetailList title="What Was Built" items={project.whatBuilt} />
            <DetailList title="Engineering Highlights" items={project.highlights} />
          </div>
        </section>
      </section>

      <Link className="section-link detail-back-link inline-flex w-fit" to="/projects">
        Back to projects
      </Link>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="detail-list-block">
      <h2>{title}</h2>
      <ul className="detail-points">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
