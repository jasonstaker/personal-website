import { mailto, site } from "../content/site";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <div className="page-stack contact-page">
      <Seo
        title="Contact | Jason Staker"
        description="Contact Jason Staker via email, LinkedIn, or GitHub."
        canonicalPath="/contact"
      />

      <header className="page-title-wrap fade-up">
        <span className="page-kicker">Let's Connect</span>
        <h1 className="page-display-title">Contact</h1>
      </header>

      <section className="contact-layout fade-up delay-1">
        <article className="contact-card contact-card-primary">
          <h2 className="contact-card-title">Fastest way to reach me</h2>
          <p className="contact-card-copy">Email is best. LinkedIn is close second.</p>

          <div className="contact-actions">
            <a className="btn-trail" href={mailto}>
              Email Jason
            </a>
            <a className="contact-soft-link" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="contact-soft-link" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <article className="contact-card contact-card-secondary">
          <h3 className="contact-meta-label">Whereabouts</h3>
          <p className="contact-meta-value">{site.location}</p>

          <h3 className="contact-meta-label">Direct</h3>
          <a className="contact-inline-link" href={mailto}>
            {site.email}
          </a>
        </article>
      </section>
    </div>
  );
}
