import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="page-stack notfound-page">
      <Seo
        title="404 | Jason Staker"
        description="The page you requested does not exist on Jason Staker's portfolio site."
        noIndex
      />

      <section className="page-hero notfound-hero fade-up">
        <div className="notfound-content">
          <span className="page-kicker">Off Trail</span>
          <h1 className="page-display-title">404: Trail Not Found</h1>
          <p className="lead-copy">
            This route disappeared into the trees. Use one of the marked paths below to get back to the main site.
          </p>
          <div className="action-row">
            <Link className="btn-trail" to="/">
              Back Home
            </Link>
            <Link className="btn-trail" to="/projects">
              View Projects
            </Link>
          </div>
        </div>

        <div className="notfound-scene" aria-hidden="true">
          <span className="notfound-sun" />
          <span className="notfound-ridge ridge-1" />
          <span className="notfound-ridge ridge-2" />
          <span className="notfound-ridge ridge-3" />
          <span className="notfound-sign-post" />
          <span className="notfound-sign-board">No Trail</span>
        </div>
      </section>
    </div>
  );
}
