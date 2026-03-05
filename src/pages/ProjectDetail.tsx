import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/getProject";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="page-stack">
        <section className="page-hero fade-up">
          <h1 className="panel-title">Project not found</h1>
          <Link className="section-link mt-3 inline-flex w-fit" to="/projects">
            Back to projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="detail-wrap">
      <header className="detail-header fade-up">
        <h1 className="detail-title">{project.title}</h1>
        <p className="lead-copy">{project.description}</p>
        <div className="link-row mt-3">
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub repo
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
        </div>
        <div className="project-meta mt-3">Last updated {project.lastUpdated}</div>
      </header>

      {project.visuals?.[0] && (
        <img
          className="detail-image fade-up delay-1"
          src={project.visuals[0].src}
          alt={project.visuals[0].alt}
        />
      )}

      <Section title="Overview">
        <p>{project.description}</p>
      </Section>

      <Section title="Problem / Goal">
        <ul>
          {project.problem.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="What was built">
        <ul>
          {project.whatBuilt.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Key engineering highlights">
        <ul>
          {project.highlights.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Tech stack">
        <div className="chip-cloud">
          {project.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Proof links">
        <ul>
          <li>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Repo
            </a>
          </li>
          {project.demoUrl && (
            <li>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </li>
          )}
        </ul>
      </Section>

      <Link className="section-link inline-flex w-fit" to="/projects">
        Back to projects
      </Link>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="detail-section fade-up delay-2">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
