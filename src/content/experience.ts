export type ExperienceRole = {
  slug: string;
  role: string;
  organization: string;
  companyUrl: string;
  logoSrc?: string;
  logoAlt: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: ExperienceRole[] = [
  {
    slug: "visier",
    role: "Software Developer, Co-op",
    organization: "Visier",
    companyUrl: "https://www.visier.com/",
    logoAlt: "Visier logo",
    location: "Vancouver, BC, Canada",
    period: "September 2026 - April 2027",
    summary:
      "Eight-month backend co-op on the Platform Framework team, the group that owns the cross-cutting services the rest of the product is built on.",
    highlights: [
      "Onboarding into a production JVM backend and the team's build, review, and release workflows.",
      "Team scope covers authentication and authorization pipelines, including public API authentication, OAuth, and single sign-on through OIDC.",
      "Team scope also covers framework and dependency upgrades across services, internal infrastructure automation, and platform-wide governance such as quotas and SCIM compliance.",
    ],
    tech: ["Java", "sbt", "OAuth", "SSO / OIDC", "SCIM", "REST APIs", "Git"],
  },
  {
    slug: "staker-legal-tech",
    role: "Founding Software Developer",
    organization: "Staker Legal Tech",
    companyUrl: "https://github.com/StakerLegalTech",
    logoAlt: "Staker Legal Tech logo",
    location: "Ventura, CA, USA (Remote)",
    period: "June 2026 - August 2026",
    summary:
      "Sole developer of a document automation engine for a California trust administration practice, built to replace a legacy 52-form merge macro whose conditional logic had silently gone dead.",
    highlights: [
      "Designed a hexagonal Python application whose pure domain core derives the legal consequences of a matter, which statutory notices are owed, to whom, and by when, then renders the documents those conclusions call for.",
      "Shipped 12,487 lines of production Python across 44 modules behind 527 passing tests, with mypy in strict mode and ruff clean.",
      "Enforced the architecture instead of documenting it, using a test that parses the syntax tree of every core module and fails the build if one imports an adapter or service.",
      "Built a routing spine over a 40-entry document catalog with per-document predicates and one-to-many fan-out across 9 axes, then fuzzed it to 0 exceptions over 7,389 randomly varied matters.",
      "Gathered requirements directly from the supervising attorney and kept every firm-specific value in configuration, so the same build can serve another practice.",
    ],
    tech: ["Python", "Pydantic v2", "docxtpl", "Jinja2", "pytest", "mypy", "ruff", "uv"],
  },
  {
    slug: "ubc-uas",
    role: "Developer, Software Team",
    organization: "UBC Uncrewed Aircraft Systems (UAS)",
    companyUrl: "https://ubcuas.com/",
    logoSrc: "/experience/ubc-uas-logo.png",
    logoAlt: "UBC UAS logo",
    location: "Vancouver, BC, Canada",
    period: "September 2025 - Present",
    summary:
      "Contributing to camera, telemetry, and navigation workflows with a focus on reliable deployment and offline validation.",
    highlights: [
      "Containerized the Camera-Feed codebase with a multi-stage Docker workflow and resolved build/runtime issues for reliable offline runs without hardware.",
      "Built and refined a ROS2 navigation node that converts relative pose commands into MAVROS local setpoints, applies GUIDED/armed safety checks, aligns yaw toward the goal, and runs step-and-dwell mission logic with standoff-distance stopping behavior.",
      "Contributed to a ROS2 imaging pipeline node that combined telemetry and camera data into one stream for downstream navigation and logging workflows.",
    ],
    tech: ["C++", "Python", "CMake", "Docker", "ROS2", "MAVROS", "Git", "Raspberry Pi"],
  },
  {
    slug: "hotb-rfp",
    role: "Software / Business Development Intern",
    organization: "HOTB Software Solutions",
    companyUrl: "https://hotbsoftware.com/",
    logoSrc: "/experience/hotb-logo.png",
    logoAlt: "HOTB Software Solutions logo",
    location: "Irvine, CA, USA",
    period: "May 2025 - September 2025",
    summary:
      "Built automation that turned repetitive multi-portal procurement search into a faster, more consistent workflow for business development.",
    highlights: [
      "Proposed and architected a Python scraper for U.S. state and county procurement sites using Requests, Selenium, and Pandas.",
      "Designed a cross-platform PyQt5 desktop interface with keyword input, multi-region selection, real-time log tailing, and Excel export.",
      "Added retry logic, caching, and rotating logs; reduced manual RFP retrieval time by approximately 80 percent.",
    ],
    tech: ["Python", "PyQt5", "Selenium", "Requests", "Pandas", "OpenPyXL"],
  },
  {
    slug: "hotb-qa",
    role: "Quality Assurance Intern",
    organization: "HOTB Software Solutions",
    companyUrl: "https://hotbsoftware.com/",
    logoSrc: "/experience/hotb-logo.png",
    logoAlt: "HOTB Software Solutions logo",
    location: "Irvine, CA, USA",
    period: "June 2023 - July 2023",
    summary:
      "Focused on API quality and release confidence through structured automation and validation across environments.",
    highlights: [
      "Automated 50+ Postman API scripts across QA, Stage, and Production, reducing manual checks by around 90 percent per sprint.",
      "Designed and executed test coverage for HTTP methods and status codes before deployment.",
    ],
    tech: ["Postman", "API Testing", "QA", "HTTP", "Test Automation"],
  },
];
