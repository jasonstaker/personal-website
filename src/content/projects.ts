export type Project = {
  slug: string;
  title: string;
  description: string; // 1 sentence
  tags: string[];
  category?: "Web" | "Systems" | "AI" | "Data" | "Robotics";
  repoUrl: string;
  demoUrl?: string;
  lastUpdated: string; // YYYY-MM-DD
  highlights: string[]; // 3–6 bullets
  whatBuilt: string[]; // 2–4 bullets
  problem: string[]; // 2–3 bullets
  stack: string[]; // tech stack list
  visuals?: { src: string; alt: string }[]; // put in /public
};

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    description: "One-sentence description of what it does and why it matters.",
    tags: ["React", "TypeScript", "Vite"],
    category: "Web",
    repoUrl: "https://github.com/yourname/example-project",
    demoUrl: "https://example.vercel.app",
    lastUpdated: "2026-03-05",
    problem: ["What problem it solves", "Who it’s for", "Constraint/goal"],
    whatBuilt: ["What you built #1", "What you built #2"],
    highlights: [
      "Engineering highlight #1",
      "Engineering highlight #2",
      "Engineering highlight #3",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    visuals: [
      { src: "/projects/example.png", alt: "Example project screenshot" },
    ],
  },
];
