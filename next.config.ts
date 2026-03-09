import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
