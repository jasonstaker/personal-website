import { mailto, site } from "../content/site";

export default function Contact() {
  return (
    <div className="page-stack">
      <section className="page-hero fade-up">
        <h1 className="panel-title">Contact</h1>
        <p className="lead-copy">Fastest way to reach me: email or LinkedIn.</p>
      </section>

      <section className="panel fade-up delay-1">
        <div className="contact-links">
          <a className="btn-trail w-fit" href={mailto}>
            Email
          </a>

          <a className="section-link w-fit" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a className="section-link w-fit" href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="mt-4 text-sm text-muted">{site.location ? site.location : null}</div>
      </section>
    </div>
  );
}
