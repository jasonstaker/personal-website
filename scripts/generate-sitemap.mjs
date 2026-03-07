import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const projectsFile = path.join(rootDir, "src", "content", "projects.ts");
const sitemapFile = path.join(rootDir, "public", "sitemap.xml");

const baseUrlRaw = process.env.SITE_URL || process.env.VITE_SITE_URL || "https://jasonstaker.vercel.app";
const baseUrl = baseUrlRaw.replace(/\/+$/, "");
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  { path: "/", lastmod: today },
  { path: "/projects", lastmod: today },
  { path: "/experience", lastmod: today },
  { path: "/resume", lastmod: today },
  { path: "/contact", lastmod: today },
  { path: "/about", lastmod: today },
];

const source = fs.readFileSync(projectsFile, "utf8");
const projectEntries = [];
const projectRegex = /{\s*slug:\s*"([^"]+)"[\s\S]*?lastUpdated:\s*"([^"]+)"/g;

for (const match of source.matchAll(projectRegex)) {
  const [, slug, lastUpdated] = match;
  projectEntries.push({ path: `/projects/${slug}`, lastmod: lastUpdated });
}

const urlEntries = [...staticRoutes, ...projectEntries];

const toUrl = (routePath) => (routePath === "/" ? baseUrl : `${baseUrl}${routePath}`);
const xmlEscape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const urlset = urlEntries
  .map(({ path: routePath, lastmod }) => {
    return [
      "  <url>",
      `    <loc>${xmlEscape(toUrl(routePath))}</loc>`,
      `    <lastmod>${xmlEscape(lastmod)}</lastmod>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlset,
  "</urlset>",
  "",
].join("\n");

fs.mkdirSync(path.dirname(sitemapFile), { recursive: true });
fs.writeFileSync(sitemapFile, xml, "utf8");

console.log(`[sitemap] Generated ${sitemapFile} with ${urlEntries.length} URLs.`);
