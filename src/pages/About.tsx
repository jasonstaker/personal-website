export default function About() {
  return (
    <div className="page-stack">
      <section className="page-hero fade-up">
        <h1 className="panel-title">About</h1>
        <p className="lead-copy">
          I am a Computer Science student at the University of British Columbia focused on systems, robotics, and
          practical software engineering.
        </p>
        <p className="lead-copy">
          I currently work on UBC UAS software, where I contribute to Docker-based workflows and ROS2 imaging and
          telemetry pipelines. I previously built automation tools at HOTB Software Solutions, including an RFP scraper
          workflow that significantly reduced manual search time.
        </p>
      </section>

      <section className="panel fade-up delay-1">
        <h2 className="section-title">Core Focus</h2>
        <div className="chip-cloud">
          {[
            "C++",
            "Python",
            "ROS2",
            "Docker",
            "Algorithms",
            "Systems Programming",
            "Test Automation",
            "Linux CLI",
          ].map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
