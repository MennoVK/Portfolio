import type { MetadataRoute } from "next"

import { baseUrl } from "@/misc/metadata"

 
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        host: baseUrl,
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}