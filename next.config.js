/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'i.imgflip.com',
    },
  ],
},
	env: {
		API_BASE_URL: "http://209.97.168.217:5000/",
	},
};


module.exports = nextConfig;
