import { projects } from "../content/projects";
import { mailto, site } from "../content/site";

function getLastUpdated() {
  if (!projects.length) return null;
  return projects.reduce((max, p) => (p.lastUpdated > max ? p.lastUpdated : max), projects[0].lastUpdated);
}

export default function Footer() {
  const lastUpdated = getLastUpdated();

  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <div className="footer-card">
          <div className="footer-grid">
            <div className="footer-block">
              <span className="footer-kicker">Basecamp</span>
              <span className="footer-brand">
                &copy; {new Date().getFullYear()} {site.name || "Portfolio"}
              </span>
              {lastUpdated && <span className="footer-updated">Last updated {lastUpdated}</span>}
            </div>

            <div className="footer-block footer-block-links">
              <span className="footer-kicker">Trail Links</span>
              <div className="footer-links">
                <a href={site.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={mailto}>Email</a>
              </div>
            </div>
          </div>

          <div className="footer-base">
            <span className="footer-note">Built with React + Vite</span>
            {site.location && <span className="footer-location">{site.location}</span>}
          </div>
        </div>
      </div>
    </footer>
  );
}
