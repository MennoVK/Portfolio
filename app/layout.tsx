import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { VercelToolbar } from "@vercel/toolbar/next";
import localFont from "next/font/local"

import { Header } from "@/components/Header"
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
                    <Header />
                    {children}
                    <SpeedInsights />
                    {shouldInjectToolbar && <VercelToolbar />}
                </main>
            </body>
        </html>
    )
}

export const metadata = _metadata