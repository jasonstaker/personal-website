const resumePath = "/resume/Staker_Jason_Resume.pdf";

export default function Resume() {
  return (
    <div className="page-stack">
      <section className="page-hero fade-up">
        <h1 className="panel-title">Resume</h1>
        <p className="lead-copy">
          Computer Science student with experience in robotics software, automation tooling, and systems-focused C++
          projects.
        </p>
        <div className="action-row">
          <a className="btn-trail" href={resumePath} target="_blank" rel="noreferrer">
            Open Resume PDF
          </a>
          <a className="btn-trail" href={resumePath} download>
            Download Resume
          </a>
        </div>
      </section>

      <section className="panel fade-up delay-1">
        <iframe className="resume-frame" src={resumePath} title="Jason Staker Resume" loading="lazy" />
      </section>
    </div>
  );
}
