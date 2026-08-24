/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: "C:/Users/Admin/Documents/GitHub/SGSS---Email-Marketing-10"
  },
  experimental: {
    turbopack: {
      root: "C:/Users/Admin/Documents/GitHub/SGSS---Email-Marketing-10"
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
      },
      {
        protocol: 'https',
        hostname: 'cms.secureguardservices.com',
      }
    ],
  },
};

export default nextConfig;
