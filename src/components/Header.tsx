import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm font-medium transition",
    isActive ? "text-black" : "text-neutral-600 hover:text-black",
  ].join(" ");

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-semibold">
          personal-website
        </NavLink>

        <nav className="flex items-center gap-4">
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>
          <a
            className="text-sm font-medium text-neutral-600 hover:text-black transition"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-sm font-medium text-neutral-600 hover:text-black transition"
            href="https://www.linkedin.com/"
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
