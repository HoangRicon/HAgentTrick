import { MetadataRoute } from "next";
import { getAllDocSlugs } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const slugs = getAllDocSlugs();

  const docRoutes = slugs.map((slug) => ({
    url: `${baseUrl}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...docRoutes,
  ];
}
