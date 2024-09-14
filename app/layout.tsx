import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Header } from "@/components/Header"
import { SmoothScroll } from "@/components/SmoothScroll"


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    <Header />
                    {children}
                    <SpeedInsights />
                    {/* <SmoothScroll /> */}
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