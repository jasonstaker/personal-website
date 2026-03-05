export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category?: "Web" | "Systems" | "AI" | "Data" | "Robotics";
  repoUrl: string;
  demoUrl?: string;
  lastUpdated: string; // YYYY-MM-DD
  highlights: string[];
  whatBuilt: string[];
  problem: string[];
  stack: string[];
  visuals?: { src: string; alt: string }[];
};

const PLACEHOLDER_REPO = "https://github.com/yourname/tbd";
const PLACEHOLDER_DEMO = "https://example.com";

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Portfolio Website",
    description: "Fast, recruiter-friendly portfolio site with skimmable project case studies.",
    tags: ["React", "TypeScript", "Vite", "Router", "Tailwind", "Vercel"],
    category: "Web",
    repoUrl: PLACEHOLDER_REPO,
    demoUrl: PLACEHOLDER_DEMO,
    lastUpdated: "2026-03-05",
    problem: ["Show engineering ability in <10 seconds", "Reduce friction: projects/resume/contact in one click"],
    whatBuilt: ["Route-based site structure", "Data-driven projects system (schema + rendering)"],
    highlights: ["SPA routing on deploy", "Consistent layout + nav", "Project pages optimized for skimming"],
    stack: ["React", "TypeScript", "Vite", "React Router", "Tailwind", "Vercel"],
    visuals: [{ src: "/projects/placeholder.png", alt: "Website screenshot placeholder" }],
  },
  {
    slug: "insight-analytics-api",
    title: "Analytics Query API",
    description: "API that supports structured querying over a dataset with validation and error handling.",
    tags: ["TypeScript", "Testing", "Parsing", "API", "Validation"],
    category: "Systems",
    repoUrl: PLACEHOLDER_REPO,
    lastUpdated: "2026-03-05",
    problem: ["Need reliable query results", "Handle malformed inputs and edge cases safely"],
    whatBuilt: ["Query layer", "Validation rules + helpful errors"],
    highlights: ["Defensive parsing", "Test-first workflows", "Clear failure modes"],
    stack: ["TypeScript", "Node", "Test runner (TBD)"],
    visuals: [{ src: "/projects/placeholder.png", alt: "API placeholder visual" }],
  },
  {
    slug: "drone-navigation-node",
    title: "Autonomous Navigation Node",
    description: "Robotics node for navigation/override logic with state monitoring and safety handling.",
    tags: ["Robotics", "ROS2", "State", "Safety", "Control"],
    category: "Robotics",
    repoUrl: PLACEHOLDER_REPO,
    lastUpdated: "2026-03-05",
    problem: ["Need stable control behavior", "Support manual override and safe fallback"],
    whatBuilt: ["State monitoring + mode handling", "Command publishing pipeline (TBD)"],
    highlights: ["Safety-first state machine", "Edge case handling", "Logging/telemetry hooks"],
    stack: ["ROS2", "Python/C++ (TBD)", "MAVROS (TBD)"],
    visuals: [{ src: "/projects/placeholder.png", alt: "Robotics placeholder visual" }],
  },
  {
    slug: "data-pipeline-etl",
    title: "Data Pipeline + Quality Checks",
    description: "ETL pipeline that cleans, validates, and loads structured data for analysis.",
    tags: ["ETL", "Data Quality", "Schema", "Automation"],
    category: "Data",
    repoUrl: PLACEHOLDER_REPO,
    lastUpdated: "2026-03-05",
    problem: ["Raw data is inconsistent", "Need repeatable ingestion + validation"],
    whatBuilt: ["Ingest + transform steps", "Quality checks and reports"],
    highlights: ["Schema validation", "Deterministic outputs", "Re-runnable pipeline"],
    stack: ["Python/TS (TBD)", "Validation tooling (TBD)"],
    visuals: [{ src: "/projects/placeholder.png", alt: "Pipeline placeholder visual" }],
  },
  {
    slug: "systems-cli-tool",
    title: "Systems CLI Tool",
    description: "Command-line tool focused on speed, reliability, and clean UX for a repeated task.",
    tags: ["CLI", "Performance", "DX", "Testing"],
    category: "Systems",
    repoUrl: PLACEHOLDER_REPO,
    lastUpdated: "2026-03-05",
    problem: ["Repeated workflow is slow/manual", "Need consistent output and fast iteration"],
    whatBuilt: ["CLI commands + config", "Output formatting + error handling"],
    highlights: ["Fast startup path", "Useful errors", "Good defaults"],
    stack: ["Node/Go/Rust (TBD)"],
    visuals: [{ src: "/projects/placeholder.png", alt: "CLI placeholder visual" }],
  },
  {
    slug: "ai-mini-project",
    title: "ML / AI Mini Project",
    description: "Small ML project demonstrating a complete pipeline from data → model → evaluation.",
    tags: ["ML", "Evaluation", "Pipeline", "Metrics"],
    category: "AI",
    repoUrl: PLACEHOLDER_REPO,
    lastUpdated: "2026-03-05",
    problem: ["Turn data into a measurable result", "Keep the pipeline reproducible"],
    whatBuilt: ["Training + evaluation flow", "Baseline comparisons"],
    highlights: ["Clear metrics", "Reproducible runs", "Readable results summary"],
    stack: ["Python", "NumPy/Pandas (TBD)", "Modeling lib (TBD)"],
    visuals: [{ src: "/projects/placeholder.png", alt: "ML placeholder visual" }],
  },
];