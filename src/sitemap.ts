import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.feedbacki.click/",
      lastModified: new Date(),
    },
  ];
}
