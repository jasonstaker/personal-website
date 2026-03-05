import { NavLink } from "react-router-dom";
import { site } from "../content/site";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  ["nav-link", isActive ? "active" : ""].join(" ").trim();

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand-link">
          {site.name || "personal-website"}
        </NavLink>

        <nav className="nav-trail">
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>

          <a
            className="social-link"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="social-link"
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
