import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/getProject";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <Link className="underline" to="/projects">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p className="text-neutral-600">{project.description}</p>
        <div className="flex gap-3 text-sm">
          <a className="underline" href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub repo
          </a>
          {project.demoUrl && (
            <a className="underline" href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
        </div>
        <div className="text-xs text-neutral-500">Last updated {project.lastUpdated}</div>
      </header>

      {project.visuals?.[0] && (
        <img
          className="w-full rounded-lg border"
          src={project.visuals[0].src}
          alt={project.visuals[0].alt}
        />
      )}

      <Section title="Overview">
        <p>{project.description}</p>
      </Section>

      <Section title="Problem / Goal">
        <ul className="list-disc pl-5 space-y-1">
          {project.problem.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="What was built">
        <ul className="list-disc pl-5 space-y-1">
          {project.whatBuilt.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Key engineering highlights">
        <ul className="list-disc pl-5 space-y-1">
          {project.highlights.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Tech stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="text-xs rounded-md bg-neutral-100 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Proof links">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a className="underline" href={project.repoUrl} target="_blank" rel="noreferrer">
              Repo
            </a>
          </li>
          {project.demoUrl && (
            <li>
              <a className="underline" href={project.demoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </li>
          )}
        </ul>
      </Section>

      <Link className="underline" to="/projects">
        ← Back to projects
      </Link>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-neutral-800">{children}</div>
    </section>
  );
}