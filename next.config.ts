import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns must be an array of objects
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        // Use '/**' to allow the image path (and all files/folders beneath it)
        pathname: '/gh/VyxrLab/media-storage/**',
      },
    ],
  },
};

export default nextConfig;