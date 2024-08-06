import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Lenis } from "@/components/Lenis"


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <Lenis>
            <html lang="en">
                <body className={inter.className}>
                    <main>
                        <Header />
                        {children}
                        <Footer />
                        <SpeedInsights />
                    </main>
                </body>
            </html>
        </Lenis>
    )
}

export const metadata: Metadata = {
    title: "Coming soon",
    description: "Coming soon page for Menno Veerkamp's portfolio",
    openGraph: {
        siteName: "Menno Veerkamp",
        title: "Coming soon",
        description: "Coming soon page for Menno Veerkamp's portfolio",
        url: "https://mennoveerkamp.com",
        images: [""]
    },
}