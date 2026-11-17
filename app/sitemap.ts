
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sav7impex.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    { path: "/markets", priority: 0.8 },
    { path: "/contact", priority: 0.9 },

    // Gold & Precious Metals
    { path: "/gold-precious-metals", priority: 0.9 },
    { path: "/gold-import-export", priority: 0.9 },
    { path: "/silver-products", priority: 0.8 },
    { path: "/precious-metals", priority: 0.9 },

    // Pharmaceuticals & Healthcare
    { path: "/pharmaceuticals", priority: 0.9 },
    { path: "/generic-medicines", priority: 0.8 },
    { path: "/api-sourcing", priority: 0.8 },
    { path: "/healthcare-products", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
