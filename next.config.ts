import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flagcdn.com", "cdn.jsdelivr.net"], // Allow external images
  },
};

export default nextConfig;
