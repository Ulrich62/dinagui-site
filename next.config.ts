import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dinagui-sarlu.bigdanhe.com",
      },
      {
        protocol: "https",
        hostname: "dinagui-sarlu.bigdanhe.com",
      },
    ],
  },
};

export default nextConfig;
