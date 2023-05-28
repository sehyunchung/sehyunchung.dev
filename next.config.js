const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
    nextScriptWorkers: true,
  },
  images: {
    domains: ["user-images.githubusercontent.com", "github.com"],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = withContentlayer(nextConfig)
