import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "www.avcodes.co.uk",
      },
      {
        hostname: "randomuser.me",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
