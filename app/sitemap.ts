import { MetadataRoute } from "next"

import { getBaseUrl } from "@/lib/utils"

// TODO: generate automatically
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getBaseUrl().toString(),
      lastModified: new Date(),
    },
    {
      url: getBaseUrl().toString() + "/about",
      lastModified: new Date(),
    },
    {
      url: getBaseUrl().toString() + "/til",
      lastModified: new Date(),
    },
    {
      url: getBaseUrl().toString() + "/toys",
      lastModified: new Date(),
    },
    {
      url: getBaseUrl().toString() + "/posts",
      lastModified: new Date(),
    },
  ]
}
