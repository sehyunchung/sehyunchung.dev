const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
    outputFileTracingIncludes: {
      shiki: "node_modules/.pnpm/**/shiki/**/*.json",
    },
  },
  images: {
    domains: ["user-images.githubusercontent.com", "github.com"],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = withContentlayer(nextConfig)
