import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  noIndex?: boolean;
};

function upsertMeta(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Seo({ title, description, canonicalPath, noIndex = false }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

    const path = canonicalPath ?? location.pathname;
    const canonicalUrl = `${window.location.origin}${path}`;
    upsertCanonical(canonicalUrl);
  }, [canonicalPath, description, location.pathname, noIndex, title]);

  return null;
}

