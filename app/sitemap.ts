import type { MetadataRoute } from "next"

import { projects } from "@/misc/content"
import { baseUrl } from "@/misc/metadata"


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        ...projects.map((project) => (
            {
                url: `${baseUrl}/projects/${project.title.replaceAll(" ", "-")}`,
                lastModified: new Date(),
                changeFrequency: "yearly" as const,
                priority: 1,
            }
        ))
    ]
}
