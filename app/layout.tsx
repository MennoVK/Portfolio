import "./globals.css"

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { VercelToolbar } from "@vercel/toolbar/next";
import localFont from "next/font/local"

import { Header } from "@/components/Header"
import { SideBar } from "@/components/SideBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { _metadata } from "@/misc/metadata";


const manrope = localFont({ src: "../public/fonts/Manrope-Regular.woff2" })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const shouldInjectToolbar = process.env.NODE_ENV === "development";

    return (
        <html lang="en">
            <body className={manrope.className}>
                <main>
                    <SmoothScroll />
                    <Header />
                    <SideBar />
                    {children}
                    <SpeedInsights />
                    <Analytics />
                    {shouldInjectToolbar && <VercelToolbar />}
                </main>
            </body>
        </html>
    )
}

export const metadata = _metadata