/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: 'https',
        hostname: "chatty-wildebeest-671.convex.cloud",
        pathname: '/api/storage/**',
      }
    ],
    domains: ["i.pravatar.cc"],
  },
};

export default nextConfig;
