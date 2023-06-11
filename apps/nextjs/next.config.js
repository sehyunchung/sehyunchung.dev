const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["user-images.githubusercontent.com", "github.com"],
		formats: ["image/avif", "image/webp"],
	},
	transpilePackages: ["ui"],
	eslint: {
		ignoreDuringBuilds: true,
	},
}

module.exports = withContentlayer(nextConfig)
