export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { publishBlocked } from "@/lib/publishGate";
import { siteUrl } from "@/lib/siteUrl";


export default function robots(): MetadataRoute.Robots {
  if (publishBlocked) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
