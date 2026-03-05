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

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Portfolio Website",
    description: "Personal site for project case studies, resume, and contact info in one fast-to-scan place.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "React Router"],
    category: "Web",
    repoUrl: "https://github.com/jasonstaker/personal-website",
    lastUpdated: "2026-03-05",
    problem: ["Needed one clear hub for projects, resume, and professional links", "Wanted recruiter-friendly navigation with low click friction"],
    whatBuilt: ["Route-based portfolio with shared design system", "Data-driven project pages so content updates are easy and consistent"],
    highlights: ["Deployed and versioned as a production-ready personal site", "Theme-forward UI with responsive layouts across desktop/mobile", "Project detail pages structured for technical skimming"],
    stack: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS", "Vercel"],
    visuals: [{ src: "/projects/example.png", alt: "Portfolio site screenshot" }],
  },
  {
    slug: "rfp-scraper",
    title: "RFP Scraper (Desktop GUI)",
    description:
      "Cross-platform Python application that scrapes U.S. state and county procurement sites with filtering, logging, and export.",
    tags: ["Python", "PyQt5", "Selenium", "Requests", "Pandas", "Automation"],
    category: "Data",
    repoUrl: "https://github.com/jasonstaker/rfp-scraper",
    lastUpdated: "2026-01-13",
    problem: ["Manual RFP discovery across many procurement portals was slow and repetitive", "Needed one workflow that handled multiple sources and output formats"],
    whatBuilt: ["Modular scraper architecture for state/county sources", "Desktop GUI for keywords, region selection, progress logs, and Excel export"],
    highlights: ["Included retry logic, caching, and rotating logs for reliability", "Combined requests-based and Selenium-based scraping paths", "Reduced manual RFP retrieval time by about 80 percent"],
    stack: ["Python", "PyQt5", "Requests", "Selenium", "Pandas", "OpenPyXL"],
    visuals: [{ src: "/projects/example.png", alt: "RFP scraper output example" }],
  },
  {
    slug: "schwarzschild-blackhole-renderer",
    title: "Schwarzschild Ray Tracer",
    description: "C++ renderer that simulates light trajectories around a Schwarzschild black hole using numerical integration.",
    tags: ["C++", "OpenMP", "Ray Tracing", "Numerical Methods", "GoogleTest"],
    category: "Systems",
    repoUrl: "https://github.com/jasonstaker/schwarzschild-blackhole-renderer",
    lastUpdated: "2025-07-21",
    problem: ["Wanted a physically grounded simulation of curved light paths in strong gravity", "Needed performance good enough for practical rendering experiments"],
    whatBuilt: ["Null geodesic integration pipeline for lightlike trajectories", "Image rendering workflow with multithreaded execution"],
    highlights: ["Used OpenMP to improve render throughput", "Validated behavior with targeted GoogleTest coverage", "Mapped curved trajectories onto a spherical background projection"],
    stack: ["C++", "OpenMP", "GoogleTest", "STB"],
    visuals: [{ src: "/projects/example.png", alt: "Schwarzschild renderer visual output" }],
  },
  {
    slug: "2d-physics-demo",
    title: "2D Physics Engine and Renderer",
    description:
      "Real-time rigid-body simulation in C++ with collisions, friction, gravity, and quadtree broad-phase optimization.",
    tags: ["C++", "SFML", "Physics", "Spatial Partitioning", "JSON"],
    category: "Systems",
    repoUrl: "https://github.com/jasonstaker/2d-physics-demo",
    lastUpdated: "2025-06-12",
    problem: ["Needed a performant simulation loop that still allowed interactive controls", "Wanted configurable experiments without recompiling constants"],
    whatBuilt: ["Rigid-body update and collision handling pipeline", "JSON-driven configuration with pause/slow-motion/entity spawn controls"],
    highlights: ["Sustained around 1000 entities near 60 FPS", "Added velocity-based coloring and debug overlays", "Used quadtree partitioning to reduce collision checks"],
    stack: ["C++", "SFML", "JSON", "Quadtree Spatial Partitioning"],
    visuals: [{ src: "/projects/example.png", alt: "2D physics engine simulation screenshot" }],
  },
  {
    slug: "student-calendar",
    title: "Student Calendar",
    description:
      "Java desktop calendar for student workflows with recurring events, category customization, and save/load functionality.",
    tags: ["Java", "Swing", "Desktop App", "OOP"],
    category: "Systems",
    repoUrl: "https://github.com/jasonstaker/student-calendar",
    lastUpdated: "2025-05-09",
    problem: ["Wanted a calendar better aligned to student planning patterns", "Needed recurring events and custom category structure in one app"],
    whatBuilt: ["Desktop UI for creating, managing, and filtering events", "Persistence layer for saving and loading calendar state"],
    highlights: ["Implemented recurring event support and customization controls", "Built for both project requirements and real personal workflow use", "Structured code around object-oriented design principles"],
    stack: ["Java", "Swing", "Object-Oriented Design", "File I/O"],
    visuals: [{ src: "/projects/example.png", alt: "Student calendar interface screenshot" }],
  },
];
