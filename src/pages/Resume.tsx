import Seo from "../components/Seo";
const resumePath = "/resume/Staker_Jason_Resume.pdf";

export default function Resume() {
  return (
    <div className="page-stack">
      <Seo
        title="Resume | Jason Staker"
        description="View and download Jason Staker's resume."
        canonicalPath="/resume"
      />

      <header className="page-title-wrap resume-title-wrap fade-up">
        <div>
          <span className="page-kicker">Credentials</span>
          <h1 className="page-display-title">Resume</h1>
        </div>

        <div className="resume-actions-strip">
          <div className="resume-actions-row">
            <a className="btn-trail" href={resumePath} target="_blank" rel="noreferrer">
              Open Resume PDF
            </a>
            <a className="btn-trail" href={resumePath} download>
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <section className="panel fade-up delay-1">
        <iframe className="resume-frame" src={resumePath} title="Jason Staker Resume" loading="lazy" />
      </section>
    </div>
  );
}
