import { projects } from "./projects";

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3) {
  return projects.slice(0, limit);
}
