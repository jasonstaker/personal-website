import { Link } from "react-router-dom";
import { projects } from "../content/projects";

export default function Projects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="text-neutral-600 mt-2">
          3–6 projects. Skimmable. Proof-first.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.slug} className="rounded-lg border p-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-semibold">
                  <Link className="hover:underline" to={`/projects/${p.slug}`}>
                    {p.title}
                  </Link>
                </h2>
                <p className="text-sm text-neutral-600 mt-1">{p.description}</p>
              </div>
              {p.category && (
                <span className="text-xs rounded-full border px-2 py-1 text-neutral-600">
                  {p.category}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-md bg-neutral-100 px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 text-sm">
              <a
                className="underline"
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
              {p.demoUrl && (
                <a
                  className="underline"
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              <Link className="underline" to={`/projects/${p.slug}`}>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
