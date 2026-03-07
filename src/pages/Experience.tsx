import { experiences } from "../content/experience";
import Seo from "../components/Seo";

export default function Experience() {
  return (
    <div className="page-stack experience-page">
      <Seo
        title="Experience | Jason Staker"
        description="Experience timeline for Jason Staker across UBC UAS and HOTB Software Solutions."
        canonicalPath="/experience"
      />

      <header className="page-title-wrap fade-up">
        <span className="page-kicker">Hands-On Work</span>
        <h1 className="page-display-title">Experience</h1>
      </header>

      <section className="experience-list fade-up delay-1" aria-label="Professional experience timeline">
        {experiences.map((entry) => (
          <article key={entry.slug} className="experience-card">
            <span className="experience-marker" aria-hidden="true" />

            <header className="experience-card-head">
              <div className="experience-company">
                <div className="experience-logo-shell">
                  <img className="experience-logo" src={entry.logoSrc} alt={entry.logoAlt} loading="lazy" />
                </div>
                <div>
                  <h2 className="experience-role">{entry.role}</h2>
                  <p className="experience-org">{entry.organization}</p>
                </div>
              </div>

              <div className="experience-meta">
                <p className="experience-period">{entry.period}</p>
                <p className="experience-location">{entry.location}</p>
              </div>
            </header>

            <p className="experience-summary">{entry.summary}</p>

            <ul className="experience-points">
              {entry.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="chip-cloud experience-tech">
              {entry.tech.map((tool) => (
                <span key={tool} className="chip">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
