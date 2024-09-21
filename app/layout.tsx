import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"

import { Header } from "@/components/Header"


const manrope = Manrope({
    subsets: ["latin"],
    weight: "400",
})

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <main>
                    <Header />
                    {children}
                    <SpeedInsights />
                </main>
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    title: "Menno Veerkamp",
    description: "Menno Veerkamp portfolio page",
    openGraph: {
        siteName: "Menno Veerkamp",
        title: "Menno Veerkamp",
        description: "Menno Veerkamp portfolio page",
        url: "https://mennoveerkamp.com",
        images: [""]
    },
}