export type ExperienceRole = {
  slug: string;
  role: string;
  organization: string;
  companyUrl: string;
  logoSrc: string;
  logoAlt: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: ExperienceRole[] = [
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
