import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../content/getProject";
import Seo from "../components/Seo";

export default function Home() {
  const featured = getFeaturedProjects(3);
  const skills = {
    Languages: ["C++", "Python", "Java"],
    "Frameworks & Tools": [
      "ROS2",
      "Docker",
      "Git",
      "CMake",
      "OpenCV",
      "OpenMP",
      "GoogleTest",
      "SFML",
      "PyQt5",
      "Selenium",
      "Pandas",
      "Postman",
    ],
    "Core Knowledge": [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "API Testing",
      "Test Automation",
      "Bash",
      "Linux CLI",
    ],
  } as const;

  return (
    <div className="page-stack cohesive-stack">
      <Seo
        title="Jason Staker | Software Portfolio"
        description="Computer Science portfolio of Jason Staker featuring systems, robotics, and software engineering projects."
        canonicalPath="/"
      />

      <section className="page-hero hero-camp fade-up">
        <div className="hero-shell">
          <div>
            <h1 className="panel-title home-intro-title">Hi I&apos;m Jason</h1>

            <div className="action-row">
              <Link className="btn-trail" to="/projects">
                View Projects
              </Link>
              <Link className="btn-trail" to="/resume">
                Resume
              </Link>
              <Link className="btn-trail" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <figure className="hero-photo-frame" aria-label="Portrait photo">
            <img
              className="hero-photo"
              src="/about/face-with-background.jpg"
              alt="Portrait of Jason Staker"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="panel fade-up delay-1">
        <h2 className="section-title">About</h2>
        <p className="lead-copy">
          I&apos;m a Computer Science student at the University of British Columbia (B.Sc., expected 2028, GPA 4.0)
          focused on systems and practical software engineering. I currently contribute to the UBC UAS software team,
          where I work on Dockerized camera and ROS2 telemetry workflows for reliable offline development and testing.
          At HOTB Software Solutions, I worked across software development and QA, building automation that
          significantly reduced manual work and improved release confidence. Outside of code, I&apos;ve been mountain
          biking for six years, which is the inspiration for this site&apos;s outdoor visual direction.
        </p>
      </section>

      <section className="panel terrain-panel fade-up delay-2">
        <div className="section-header">
          <h2 className="section-title">Featured projects</h2>
          <Link className="section-link" to="/projects">
            View all
          </Link>
        </div>

        <div className="card-grid">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="project-card"
            >
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-meta">
                Updated {p.lastUpdated}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="panel fade-up delay-3">
        <h2 className="section-title">Skills</h2>
        <div className="skills-layout">
          {Object.entries(skills).map(([group, values]) => (
            <article key={group} className="skills-group">
              <h3 className="skills-group-title">{group}</h3>
              <div className="chip-cloud">
                {values.map((value) => (
                  <span key={value} className="chip">
                    {value}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
