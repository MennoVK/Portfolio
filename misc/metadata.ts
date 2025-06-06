import type { Metadata } from "next"

import {age} from "./time"


const title = "Menno Veerkamp"
const description = `Menno Veerkamp is a ${age}-year-old frontend developer from The Netherlands, specializing in performant and accesible web-experiences.`

export const baseUrl = "https://mennoveerkamp.com"

export const _metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        template: `%s | ${title}`,
        default: `${title}`,
    },
    description,
    openGraph: {
        siteName: title,
        title: {
            template: `%s | ${title}`,
            default: `${title}`,
        },
        description,
        url: baseUrl,
        type: "website",
        images: ["./image.webp"]
    },
    twitter: {
        title: title,
        description,
        images: ["./image.webp"]
    },
}