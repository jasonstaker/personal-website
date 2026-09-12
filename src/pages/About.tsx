import Seo from "../components/Seo";

export default function About() {
  return (
    <div className="page-stack">
      <Seo
        title="About | Jason Staker"
        description="About Jason Staker, a Computer Science student focused on flight software, simulation, and autonomous systems."
        canonicalPath="/about"
      />

      <section className="page-hero fade-up">
        <h1 className="panel-title">About</h1>
        <p className="lead-copy">
          I am a Computer Science student at the University of British Columbia focused on flight software, simulation,
          and autonomous systems.
        </p>
        <p className="lead-copy">
          I am currently a backend co-op at Visier and a developer on the UBC UAS software team, where I work on ROS2
          navigation and imaging nodes and the Docker-based workflows that let us validate them without hardware. On my
          own time I am building rocket-sim, a C++17 rocket flight simulator with a test-validated numerical core. I
          was previously the sole developer of a document automation engine for a California trust administration
          practice, and built automation tools at HOTB Software Solutions.
        </p>
      </section>

      <section className="panel fade-up delay-1">
        <h2 className="section-title">Core Focus</h2>
        <div className="chip-cloud">
          {[
            "C++17",
            "Python",
            "ROS2",
            "MAVROS",
            "Docker",
            "Flight Dynamics",
            "Numerical Methods",
            "Systems Programming",
            "Test Automation",
            "Linux",
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
