const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})
const withVercelToolbar = require("@vercel/toolbar/plugins/next")()

/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = withVercelToolbar(withBundleAnalyzer(nextConfig))
