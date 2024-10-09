import { Metadata } from "next";


const title = "Menno Veerkamp"
const description = "Menno Veerkamp portfolio page"
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
    // icons: {
    //     icon: ["/favicon.ico", "/favicon-16x16.png", "/favicon-32x32.png"],
    //     apple: "/apple-touch-icon.png",
    // },
    // manifest: "/site.webmanifest",
}