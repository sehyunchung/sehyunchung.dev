const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
    swcPlugins: ["swc-plugin-tagged-md"],
  },
}

module.exports = withContentlayer(nextConfig)
