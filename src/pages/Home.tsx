import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../content/getProject";

export default function Home() {
  const featured = getFeaturedProjects(3);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Software / CS portfolio</h1>
        <p className="text-neutral-600 max-w-2xl">
          High-signal projects with repo links, screenshots, and concise
          engineering highlights.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link className="px-4 py-2 rounded-md border" to="/projects">
            View Projects
          </Link>
          <Link className="px-4 py-2 rounded-md border" to="/resume">
            Resume
          </Link>
          <Link className="px-4 py-2 rounded-md border" to="/contact">
            Contact
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {["TypeScript", "React", "Testing", "APIs", "Performance"].map(
            (k) => (
              <span
                key={k}
                className="text-xs rounded-md bg-neutral-100 px-2 py-1"
              >
                {k}
              </span>
            )
          )}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured projects</h2>
          <Link className="text-sm underline" to="/projects">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="rounded-lg border p-4 hover:bg-neutral-50 transition"
            >
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-neutral-600 mt-1">
                {p.description}
              </div>
              <div className="text-xs text-neutral-500 mt-3">
                Updated {p.lastUpdated}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
