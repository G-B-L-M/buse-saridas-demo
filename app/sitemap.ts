export const dynamic = "force-static";
import { journal } from "@/data/journal";
import type { MetadataRoute } from "next";
import { publishBlocked } from "@/lib/publishGate";
import { siteUrl } from "@/lib/siteUrl";

const paths = ["", "/kvkk", "/gizlilik", "/kullanim-sartlari", "/yazilar", ...journal.map(item => `/yazilar/${item.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  if (publishBlocked) return [];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.3,
  }));
}
