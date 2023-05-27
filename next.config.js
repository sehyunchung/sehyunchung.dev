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
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*"
            : "/api/",
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
