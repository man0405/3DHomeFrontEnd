/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				hostname: "**",
				protocol: "http",
			},
		],
	},
	compiler: {},
	reactStrictMode: false,
};

module.exports = nextConfig;
