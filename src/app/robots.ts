import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*?q=",
          "/*?tag=",
          "/tag/",
        ],
      },
      {
        userAgent: "AnthropicAI",
        disallow: "/",
      },
    ],
    sitemap: siteConfig.url("/sitemap.xml"),
  };
}
