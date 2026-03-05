import { projects } from "../content/projects";
import { mailto, site } from "../content/site";

function getLastUpdated() {
  if (!projects.length) return null;
  return projects.reduce((max, p) => (p.lastUpdated > max ? p.lastUpdated : max), projects[0].lastUpdated);
}

export default function Footer() {
  const lastUpdated = getLastUpdated();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-600">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-neutral-800">
              © {new Date().getFullYear()} {site.name || "Portfolio"}
            </span>
            {lastUpdated && <span>Last updated {lastUpdated}</span>}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="underline" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline" href={mailto}>
              Email
            </a>
          </div>
        </div>

        <div className="mt-4 text-xs text-neutral-500">Built with React + Vite</div>
      </div>
    </footer>
  );
}