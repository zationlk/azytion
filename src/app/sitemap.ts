import type { MetadataRoute } from "next";
import { brand } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/products", "/portfolio", "/contact", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${brand.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : ["/privacy", "/terms"].includes(route) ? 0.3 : 0.8,
  }));
}
